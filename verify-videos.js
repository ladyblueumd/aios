#!/usr/bin/env node

/**
 * Video Verification Script for AI/OS Website
 * 
 * Checks if video files are properly accessible and not corrupted
 * Can be run locally or against deployed instance
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Load environment variables if available
require('dotenv').config({ path: '.env.local' });

const videos = [
  '/videos/7020018_Particle_Dot_1080p_optimized.mp4',
  '/videos/7020018_Particle_Dot_3840x2160.mp4',
  '/videos/6994947_Cyber_Ai_1080p_optimized.mp4',
  '/videos/6994947_Cyber_Ai_3840x2160.mp4'
];

const localBase = 'http://localhost:3001';
const deployedBase = 'https://aios-4r9pwd5h5-ultramarine-dreams-llc.vercel.app';

async function checkVideoLocal(videoPath) {
  const localPath = path.join(__dirname, 'public', videoPath);
  
  try {
    const stats = fs.statSync(localPath);
    console.log(`✅ Local: ${videoPath} - ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
    return { exists: true, size: stats.size };
  } catch (error) {
    console.log(`❌ Local: ${videoPath} - Not found`);
    return { exists: false, size: 0 };
  }
}

async function checkVideoRemote(baseUrl, videoPath, useBypass = false) {
  return new Promise((resolve) => {
    const url = baseUrl + videoPath;
    const client = url.startsWith('https') ? https : http;
    
    const headers = {};
    if (useBypass && process.env.VERCEL_AUTOMATION_BYPASS_SECRET) {
      headers['x-vercel-protection-bypass'] = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
    }
    
    const req = client.request(url, { method: 'HEAD', headers }, (res) => {
      const contentLength = parseInt(res.headers['content-length'] || '0');
      const status = res.statusCode;
      
      if (status === 200) {
        if (contentLength > 1000) {
          console.log(`✅ Remote: ${videoPath} - ${(contentLength / 1024 / 1024).toFixed(2)} MB`);
          resolve({ exists: true, size: contentLength, status });
        } else {
          console.log(`⚠️  Remote: ${videoPath} - ${contentLength} bytes (corrupted/truncated)`);
          resolve({ exists: false, size: contentLength, status, corrupted: true });
        }
      } else {
        console.log(`❌ Remote: ${videoPath} - HTTP ${status}`);
        resolve({ exists: false, size: 0, status });
      }
    });
    
    req.on('error', (error) => {
      console.log(`❌ Remote: ${videoPath} - Error: ${error.message}`);
      resolve({ exists: false, size: 0, error: error.message });
    });
    
    req.setTimeout(10000, () => {
      console.log(`⏱️  Remote: ${videoPath} - Timeout`);
      req.abort();
      resolve({ exists: false, size: 0, timeout: true });
    });
    
    req.end();
  });
}

async function main() {
  console.log('🎬 AI/OS Video File Verification\n');
  
  // Check local files
  console.log('📁 Checking Local Files:');
  const localResults = {};
  for (const video of videos) {
    localResults[video] = await checkVideoLocal(video);
  }
  
  console.log('\n🌐 Checking Remote Files (localhost):');
  const localRemoteResults = {};
  for (const video of videos) {
    localRemoteResults[video] = await checkVideoRemote(localBase, video);
  }
  
  console.log('\n☁️  Checking Deployed Files:');
  const deployedResults = {};
  for (const video of videos) {
    deployedResults[video] = await checkVideoRemote(deployedBase, video, true);
  }
  
  // Summary
  console.log('\n📊 Summary:');
  console.log('----------------------------------------');
  
  let localOk = 0, remoteOk = 0, deployedOk = 0;
  
  for (const video of videos) {
    const local = localResults[video];
    const remote = localRemoteResults[video];
    const deployed = deployedResults[video];
    
    if (local.exists) localOk++;
    if (remote.exists) remoteOk++;
    if (deployed.exists) deployedOk++;
    
    console.log(`${video}:`);
    console.log(`  Local: ${local.exists ? '✅' : '❌'} ${local.exists ? `(${(local.size/1024/1024).toFixed(2)} MB)` : ''}`);
    console.log(`  Remote: ${remote.exists ? '✅' : '❌'} ${remote.exists ? `(${(remote.size/1024/1024).toFixed(2)} MB)` : ''}`);
    console.log(`  Deployed: ${deployed.exists ? '✅' : '❌'} ${deployed.exists ? `(${(deployed.size/1024/1024).toFixed(2)} MB)` : deployed.corrupted ? '(corrupted)' : ''}`);
  }
  
  console.log('\n🎯 Results:');
  console.log(`Local files: ${localOk}/${videos.length} working`);
  console.log(`Remote files: ${remoteOk}/${videos.length} working`);
  console.log(`Deployed files: ${deployedOk}/${videos.length} working`);
  
  if (deployedOk === 0) {
    console.log('\n🚨 Video deployment issue detected!');
    console.log('Possible solutions:');
    console.log('1. Re-deploy the application to upload videos properly');
    console.log('2. Use a CDN or external video hosting service');
    console.log('3. Convert to smaller video formats or use fallback images');
  }
  
  if (deployedOk > 0 && deployedOk < videos.length) {
    console.log('\n⚠️  Partial video deployment detected!');
    console.log('Some videos are working. The updated VideoBackground component');
    console.log('will automatically fallback to working sources.');
  }
  
  if (deployedOk === videos.length) {
    console.log('\n🎉 All videos deployed successfully!');
  }
}

main().catch(console.error); 