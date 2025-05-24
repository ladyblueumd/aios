#!/usr/bin/env node

/**
 * Test script for Vercel Deployment Protection Bypass
 * 
 * Usage:
 *   node test-bypass.js
 * 
 * Make sure to set VERCEL_AUTOMATION_BYPASS_SECRET in your .env.local file first
 */

require('dotenv').config({ path: '.env.local' });

const testBypassKey = async () => {
  const bypassSecret = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
  
  if (!bypassSecret || bypassSecret === 'your-bypass-secret-here') {
    console.error('❌ VERCEL_AUTOMATION_BYPASS_SECRET not set or still has placeholder value');
    console.log('   Please update your .env.local file with the actual secret from Vercel');
    console.log('   Get it from: Vercel Dashboard → Your Project → Settings → Deployment Protection');
    process.exit(1);
  }

  console.log('🔍 Testing Vercel deployment protection bypass...');
  console.log(`📝 Using secret: ${bypassSecret.substring(0, 8)}...`);
  
  // Test production URL
  const productionUrl = 'https://aios-4r9pwd5h5-ultramarine-dreams-llc.vercel.app/';
  
  try {
    console.log('🌐 Testing production deployment...');
    
    const response = await fetch(productionUrl, {
      headers: {
        'x-vercel-protection-bypass': bypassSecret,
        'x-vercel-set-bypass-cookie': 'true',
        'User-Agent': 'Vercel-Bypass-Test'
      },
      method: 'GET'
    });
    
    console.log(`📊 Response status: ${response.status} ${response.statusText}`);
    
    if (response.status === 200) {
      console.log('✅ SUCCESS! Bypass key is working correctly');
      console.log('🍪 Bypass cookie has been set for browser access');
      
      // Check if it's HTML content
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('text/html')) {
        const html = await response.text();
        const titleMatch = html.match(/<title>(.*?)<\/title>/i);
        if (titleMatch) {
          console.log(`📄 Page title: ${titleMatch[1]}`);
        }
      }
      
    } else if (response.status === 401) {
      console.log('❌ FAILED! Still getting 401 Unauthorized');
      console.log('   Possible issues:');
      console.log('   - Bypass secret is incorrect');
      console.log('   - Deployment protection is not properly configured');
      console.log('   - Secret needs to be regenerated in Vercel');
      
    } else {
      console.log(`⚠️  Unexpected response: ${response.status}`);
      const text = await response.text();
      console.log(`Response: ${text.substring(0, 200)}...`);
    }
    
  } catch (error) {
    console.error('❌ Error during test:', error.message);
  }
  
  console.log('\n📚 Next steps:');
  console.log('1. If successful, you can now access your protected site');
  console.log('2. For browser access, visit the URL with bypass parameter:');
  console.log(`   ${productionUrl}?x-vercel-protection-bypass=${bypassSecret}`);
  console.log('3. Or use the bypass header in your API calls');
};

// Run the test
testBypassKey().catch(console.error); 