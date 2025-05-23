# Vercel Dual Branch Setup Guide - Production & Staging

## 🚀 Repository Overview

**GitHub Repository**: `https://github.com/ladyblueumd/aios.git`

### 📊 Branch Comparison
| Branch | Status | Features | Purpose |
|--------|--------|----------|---------|
| **main** | Stable baseline | Basic AI/OS site with Metro tiles | **Production** |
| **subpages-development** | Feature-complete | Full navigation + AI automation portal | **Staging/Preview** |

### 🎯 What's Different
**subpages-development** has **15+ additional commits** including:
- ✅ Complete AI automation portal (4 subpages)
- ✅ Home page navigation system  
- ✅ Service tiles linking system
- ✅ AI Automation Spotlight section
- ✅ ServiceBottomNavigation component
- ✅ Professional pricing structures
- ✅ Enhanced work orders portfolio
- ✅ Individual work order pages
- ✅ Search/filtering functionality

---

## 🔧 Vercel Setup Options

### **Option 1: Single Import with Branch Deployments (Recommended)**

#### Step 1: Import Repository
1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Import GitHub repository: `ladyblueumd/aios`
4. **Select branch**: `subpages-development` (feature-complete)

#### Step 2: Configure Branch Deployments
After import, Vercel will automatically:
- **Production**: Deploy from `main` branch
- **Preview**: Deploy from `subpages-development` branch
- **Feature Branches**: Deploy any new branches

#### Step 3: Deployment URLs
- **Production**: `https://your-project.vercel.app` (main branch)
- **Staging**: `https://your-project-git-subpages-development.vercel.app`
- **Latest Preview**: Always shows subpages-development features

---

### **Option 2: Two Separate Projects (Alternative)**

#### Project 1: Production (Main)
```
Repository: ladyblueumd/aios
Branch: main
Project Name: aios-production
Domain: your-domain.com
```

#### Project 2: Staging (Development)
```
Repository: ladyblueumd/aios  
Branch: subpages-development
Project Name: aios-staging
Domain: staging.your-domain.com
```

---

## 🛠️ Recommended Setup (Option 1)

### 1. Initial Import Configuration
```
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Development Command: npm run dev
Node.js Version: 18.x or 20.x
```

### 2. Git Integration Settings
```
Production Branch: main
Automatic Deployments: Enabled
Preview Deployments: All branches
Build on Push: Enabled
```

### 3. Domain Configuration
```
Production: your-domain.com → main branch
Staging: staging.your-domain.com → subpages-development
```

---

## 📋 Deployment Strategy

### **Phase 1: Import with Staging Features**
- Import repository selecting `subpages-development`
- Deploy full-featured version immediately
- Test all navigation and AI automation features

### **Phase 2: Production Promotion**  
When ready to make features live:
```bash
# Merge development into main
git checkout main
git merge subpages-development
git push origin main
```

### **Phase 3: Ongoing Development**
- Continue feature work on `subpages-development`
- Preview deployments for testing
- Merge to `main` when ready for production

---

## 🌐 Expected Deployment URLs

### Production (main branch)
- **URL**: `https://your-project.vercel.app`
- **Features**: Basic AI/OS site with Metro tiles
- **Pages**: ~6 pages (basic structure)

### Staging (subpages-development)
- **URL**: `https://your-project-git-subpages-development.vercel.app`
- **Features**: Complete AI automation portal
- **Pages**: 18 pages (full functionality)

#### Staging-Only URLs (Available in subpages-development)
```
/services/ai-automation/chatbot-development
/services/ai-automation/process-automation  
/services/ai-automation/data-analysis
/services/ai-automation/system-integration
/experience/full-work-log (946 work orders)
/experience/full-work-log/[id] (individual projects)
```

---

## 🔄 Branch Management

### Current Status
```bash
main: f789822 (Basic AI/OS site)
subpages-development: ad6a896 (Full featured + Vercel guide)
```

### Recommended Workflow
1. **Development**: Work on `subpages-development`
2. **Testing**: Use Vercel preview deployments
3. **Production**: Merge to `main` when ready
4. **Hotfixes**: Apply to both branches if needed

---

## 🚀 Quick Start Instructions

### For Full Featured Deployment (Recommended)
1. Import `ladyblueumd/aios` to Vercel
2. Select `subpages-development` branch
3. Use default Next.js settings
4. Deploy → Get full AI automation portal immediately

### For Conservative Approach  
1. Import `ladyblueumd/aios` to Vercel
2. Select `main` branch for production
3. Access `subpages-development` via preview URL
4. Merge when ready for production features

---

## 📊 Feature Comparison

| Feature | Main Branch | Subpages-Development |
|---------|-------------|---------------------|
| **Home Page** | Basic tiles | Navigation + AI Spotlight |
| **AI Automation** | Contact redirect | 4 dedicated subpages |
| **Work Orders** | Basic display | Full portfolio (946 orders) |
| **Navigation** | Limited | Complete bottom nav |
| **Pricing** | None | Professional structures |
| **Search** | None | Advanced filtering |
| **Individual Pages** | None | Detailed work order pages |

---

## 🎯 Recommendation

**Start with Option 1**: Import `subpages-development` for immediate access to all features, then use Vercel's branch deployment system for production/staging workflow.

This gives you:
- ✅ Immediate full-featured deployment
- ✅ Automatic staging/production separation  
- ✅ Preview deployments for testing
- ✅ Easy promotion path to production 