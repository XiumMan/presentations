# Hand Hygiene Presentations - IPC Week 2025

A professional, interactive web-based slideshow application for presenting hand hygiene audit results with animated charts and celebratory winner announcements.

## Features

- **Interactive Menu**: Select from multiple presentations
- **Smooth Animations**: Framer Motion powered transitions and animations
- **Interactive Charts**: Animated bar charts with color-coded compliance levels using Recharts
- **Winner Celebration**: Confetti animation and celebratory effects for the winner announcement
- **Keyboard Navigation**: Use arrow keys to navigate slides
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Professional Theme**: Light, clean design with medical/healthcare colors

## Presentations Included

### 1. Hand Hygiene Audit IPC Week 2025
- Title slide with competition branding
- Audit methodology and details
- Interactive compliance chart for all departments
- Winner announcement with celebration animations

### 2. Hand Hygiene & HAIs Baseline Audit 2025
- Coming soon (placeholder included)

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **Recharts** - Chart library
- **Canvas Confetti** - Confetti effects
- **CSS3** - Styling with gradients and animations

## Getting Started

### Prerequisites
- Node.js 20.19+ or 22.12+ (recommended for production)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd hand-hygiene-presentations
```

2. Install dependencies (already done):
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deploying to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI (if not already installed):
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and confirm deployment settings

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository or upload the project folder
4. Vercel will auto-detect Vite configuration
5. Click "Deploy"

### Option 3: Connect Git Repository

1. Push your code to GitHub, GitLab, or Bitbucket
2. Connect your repository to Vercel
3. Automatic deployments on every push!

## Project Structure

```
hand-hygiene-presentations/
├── src/
│   ├── components/
│   │   ├── Home.jsx              # Presentation selection page
│   │   ├── Slideshow.jsx         # Main slideshow component
│   │   └── slides/
│   │       ├── TitleSlide.jsx    # Title slide component
│   │       ├── ContentSlide.jsx  # Content slide with bullets
│   │       ├── ChartSlide.jsx    # Animated chart slide
│   │       └── WinnerSlide.jsx   # Winner announcement slide
│   ├── data/
│   │   └── presentation1Data.js  # Presentation 1 data
│   ├── App.jsx                   # Main app component
│   ├── App.css                   # App styles
│   ├── index.css                 # Global styles
│   └── main.jsx                  # Entry point
├── public/                       # Static assets
├── dist/                         # Production build (generated)
├── package.json                  # Dependencies
├── vite.config.js               # Vite configuration
└── vercel.json                  # Vercel configuration
```

## Usage

### Navigation
- **Mouse**: Click navigation buttons at the bottom
- **Keyboard**:
  - `→` or `Right Arrow`: Next slide
  - `←` or `Left Arrow`: Previous slide
  - `Esc`: Return to home
- **Home Button**: Click to return to presentation selection

### Chart Features
- Hover over bars to see detailed information
- Color-coded compliance levels:
  - Dark Green (≥70%): Excellent
  - Medium Green (50-69%): Good
  - Orange (40-49%): Needs Improvement
  - Red (<40%): Critical
- Animated data entry for visual impact

### Winner Slide
- Automatic confetti animation on load
- Pulsing trophy and winner name
- Animated emoji celebrations
- Smooth entry transitions

## Customization

### Adding New Slides
Edit `src/data/presentation1Data.js` and add new slide objects to the `slides` array.

### Modifying Colors
Update the color values in `src/App.css` and slide theme objects in the data files.

### Adding Second Presentation
1. Create `src/data/presentation2Data.js`
2. Update Home.jsx to enable the second presentation
3. Add conditional logic in Slideshow.jsx to load the correct data

## Performance

- Initial bundle size: ~658 KB (minified)
- Gzipped size: ~205 KB
- All animations use CSS/GPU acceleration
- Charts use canvas rendering for smooth performance

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is for internal use at your healthcare facility.

## Credits

Built for IPC Week 2025 - Hand Hygiene Competition
