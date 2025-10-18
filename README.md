# Go社区 - Next Generation Web Platform

A stunning, modern website built with Next.js 14, TypeScript, Tailwind CSS, and 21st.dev components. Features beautiful glass morphism effects, smooth animations, and a responsive design inspired by Apple, ChatGPT, and other leading websites.

## 🚀 Features

- ⚡ **Next.js 14 App Router** - Latest React framework with server components
- 🎨 **Tailwind CSS** - Utility-first styling with custom design system
- 🌟 **21st.dev Components** - Premium, animated UI components
- 💎 **Glass Morphism** - Beautiful frosted glass effects throughout
- ✨ **Framer Motion** - Smooth, professional animations
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎯 **TypeScript** - Type-safe development
- 🔧 **shadcn/ui** - High-quality component library

## 🎯 Key Components

### Core UI Components
- **TubelightNavbar** - Animated navigation with glow effects
- **LiquidGlassButton** - Interactive glass-morphic buttons
- **AnimatedGlowCard** - Cards with gradient glow effects
- **GlowingEffect** - Text and element glow effects
- **EtheralShadow** - Animated shadow overlays

### Feature Components
- **AnimatedTestimonials** - Carousel for customer reviews
- **Pricing** - Beautiful pricing cards with glass effect
- **FAQ** - Collapsible FAQ accordion
- **FeatureWithImageComparison** - Before/after slider
- **VideoThumbnailPlayer** - Video preview with play button
- **AnimatedCardsStack** - Stacked cards with 3D effect
- **ContainerScrollAnimation** - Scroll-triggered animations
- **FloatingActionMenu** - Expandable action menu

## 📦 Installation

```bash
# Clone the repository
git clone [your-repo-url]

# Navigate to project directory
cd modern-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🏗️ Project Structure

```
modern-website/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Home page
│   │   ├── pricing/          # Pricing page
│   │   ├── faq/              # FAQ page
│   │   ├── globals.css       # Global styles
│   │   └── layout.tsx        # Root layout
│   ├── components/
│   │   └── ui/               # All UI components
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/                   # Static assets
└── package.json
```

## 🎨 Customization

### Colors
Modify the color scheme in `src/app/globals.css`:

```css
:root {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* Add your custom colors */
}
```

### Components
All components are in `src/components/ui/`. Each component is fully typed and customizable through props.

### Animations
Global animations are defined in `src/app/globals.css`. Customize durations, easing, and effects as needed.

## 🚀 Deployment on Vercel

The easiest way to deploy this website is using [Vercel](https://vercel.com):

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure settings
4. Deploy! 🎉

### Build Command
```bash
npm run build
```

### Environment Variables
If needed, add environment variables in your Vercel dashboard.

## 🌐 Pages

- **/** - Home page with hero, features, testimonials
- **/pricing** - Pricing plans with comparison
- **/faq** - Frequently asked questions

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance

- Server-side rendering for fast initial load
- Optimized images with Next.js Image
- Code splitting for minimal bundle size
- Lazy loading for better performance
- CSS minification in production

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui + custom 21st.dev components
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💫 Credits

Built with inspiration from:
- Apple.com
- ChatGPT
- 即梦 (Jimeng)
- 21st.dev component library

---

Made with ❤️ using Next.js and modern web technologies
