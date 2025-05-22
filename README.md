# AI/OS Platform Website

> **AI automation management provided by Sadie the Tech Lady Services**

A modern, responsive website built with Next.js 14, TypeScript, and Tailwind CSS showcasing AI automation services and technology consulting expertise.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first design with beautiful animations
- **AI/OS Branding**: Professional branding for AI automation services
- **Performance Optimized**: Fast loading times and SEO-friendly
- **Clean Architecture**: Modular components and organized codebase

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Icon.tsx          # Centralized icon component
│   └── Tile.tsx          # Metro-style tile component
└── lib/                  # Utilities and data
    ├── data.ts           # Static data and content
    ├── types.ts          # TypeScript type definitions
    └── utils.ts          # Utility functions
```

## 🛠 Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: Ready for [Vercel](https://vercel.com/) deployment

## 🎨 Design System

### Color Palette
- **Primary**: Deep Sky Blue (`#00BFFF`)
- **Secondary**: Navy Blue (`#1E3A8A`) 
- **Accent**: Emerald Green (`#10B981`)
- **Highlight**: Orange Peel (`#FF9500`)

### Components
- **Metro Tiles**: Windows-inspired tile components with hover effects
- **Responsive Grid**: Flexible grid layouts for all screen sizes
- **Icon System**: Centralized icon management with Material Design icons

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ladyblueumd/aios.git
   cd aios
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🌐 Pages

### Homepage (`/`)
- Hero section with AI/OS branding
- Service category tiles
- Experience showcase
- Call-to-action sections

### About Page (`/about`)
- Professional background
- AI/OS philosophy and values
- Timeline of experience
- Certifications and education

### Contact Page (`/contact`)
- Contact information
- Project inquiry form
- FAQ section
- Emergency support info

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push to main branch

### Manual Deployment
```bash
npm run build
npm run start
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific variables:
```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Tailwind Configuration
Customize colors and styling in `tailwind.config.ts`:
```typescript
colors: {
  'sadie-primary': '#00BFFF',
  'sadie-secondary': '#1E3A8A',
  'emerald-green': '#10B981',
  'orange-peel': '#FF9500',
}
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **SEO Friendly**: Semantic HTML and meta tags

## 🤝 Contributing

This repository serves as a learning resource for AI/OS development and peer coding sessions. 

### Development Workflow
1. Create feature branch from `main`
2. Make changes with clear commit messages
3. Test thoroughly
4. Submit pull request

### Code Style
- Use TypeScript for type safety
- Follow ESLint configurations
- Use Prettier for formatting
- Write descriptive commit messages

## 📚 Learning Resources

This project demonstrates:
- Modern Next.js development patterns
- TypeScript best practices
- Responsive design principles
- Component architecture
- Git workflow and version control

## 🐛 Known Issues

- Client component event handler warnings in build (cosmetic only)
- Some pages redirect to contact during development phase

## 📞 Support

**Sadie Thornton**  
AI Automation Expert & Technical Consultant

- **Email**: ultramarinedreams@protonmail.com
- **Phone**: (865) 265-1162
- **Location**: Nashville, TN (Serving clients nationwide)

## 📄 License

This project is part of Sadie the Tech Lady Services portfolio.

---

**Built with ❤️ for AI automation and intelligent business solutions**