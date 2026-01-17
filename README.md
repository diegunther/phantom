# PHANTOM:// Dashboard - Next.js Edition

A cyberpunk-themed terminal dashboard built with Next.js, TypeScript, Tailwind CSS, and Framer Motion for smooth animations.

## Features

- **Smooth Animations**: Powered by Framer Motion for buttery-smooth transitions and effects
- **Modular Components**: Clean, reusable React components
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Works beautifully on all screen sizes
- **Performance Optimized**: Next.js App Router with React Server Components where applicable

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **Fira Code Font** - Monospace font for that terminal aesthetic

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
phantom-dashboard/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout with font configuration
│   └── page.tsx             # Main dashboard page
├── components/
│   ├── Background.tsx       # Animated grid background and effects
│   ├── Header.tsx           # Top header with time display
│   ├── Footer.tsx           # Bottom footer with session info
│   ├── Panel.tsx            # Reusable panel wrapper component
│   ├── SystemStats.tsx      # CPU/Memory/Network/Disk stats
│   ├── SkullDisplay.tsx     # ASCII skull with glitch effects
│   ├── MusicPlayer.tsx      # Music player with visualizer
│   └── Widgets.tsx          # Weather, Network, Crypto, Log widgets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Key Improvements Over Original

1. **Component-Based Architecture**: Modular, maintainable code
2. **Smooth Animations**: Framer Motion replaces CSS animations for better performance
3. **Type Safety**: TypeScript prevents runtime errors
4. **Modern React**: Hooks, functional components, proper state management
5. **Responsive**: Mobile-first design with Tailwind breakpoints
6. **Performance**: Next.js optimization, code splitting, and efficient re-renders
7. **Developer Experience**: Hot reload, TypeScript IntelliSense, ESLint

## Customization

### Colors

Edit the Tailwind config in `tailwind.config.js`:

```js
colors: {
  'phantom-dark': '#0c0c0e',
  'phantom-panel': 'rgba(18, 18, 22, 0.95)',
  'phantom-bright': '#ffffff',
  // ... add your custom colors
}
```

### Animations

Modify animation timings in component files or add new keyframes in `tailwind.config.js`.

### Components

All components are in the `components/` directory and can be easily customized or extended.
