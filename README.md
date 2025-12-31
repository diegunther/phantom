# PHANTOM:// Dashboard

A cyberpunk-themed hacker dashboard with ASCII art, glitch effects, and a dark terminal aesthetic.

![PHANTOM Dashboard](preview.png)

## Features

- ASCII Skull - Animated skull with typing effect and pixelated floating animation
- Glitch Effects - Random character glitches, screen interference, chromatic aberration
- System Monitor - Simulated CPU, MEM, NET, DSK usage bars with scan effects
- Music Player - Track display, visualizer, progress bar, and controls
- Crypto Tracker - Live-updating simulated prices for BTC, ETH, XMR
- Weather Widget - Temperature, conditions, humidity, and wind
- Network Graph - Real-time animated network traffic visualization
- Activity Log - Scrolling log entries with typing cursor effect
- Quick Actions - Interactive buttons with hover and click effects

## Effects

- Scanline overlay
- CRT vignette
- Grid background with pulse animation
- Panel sweep animations
- Text flicker and glitch
- Chromatic aberration on logo
- Cursor blink on log entries
- Responsive design for all screen sizes

## Demo

Open `index.html` in any modern browser - no build process or dependencies required.

## Usage

```bash
# Clone the repository
git clone https://github.com/yourusername/phantom-dashboard.git

# Open in browser
open index.html
```

Or simply download and double-click `index.html`.

## Customization

### Colors
Edit the CSS variables in `:root` to change the color scheme:

```css
:root {
    --text-bright: #ffffff;
    --text-mid: #c8ccd0;
    --text-dim: #909498;
    --text-dark: #606468;
    --bg-dark: #0c0c0e;
    --bg-panel: rgba(18, 18, 22, 0.95);
    --border-color: rgba(255, 255, 255, 0.12);
}
```

### Messages
Modify the `msgs` array to customize the skull's speech bubble messages:

```javascript
const msgs = [
    "We are watching...",
    "System vulnerable.",
    "Access granted.",
    // Add your own messages
];
```

### Skull ASCII Art
Replace the `skullLines` array with your own ASCII art.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

MIT License - feel free to use, modify, and distribute.

## Credits

Inspired by the hacker aesthetics of Watch Dogs and cyberpunk culture.

---

>PHANTOM:// *We are watching...*
