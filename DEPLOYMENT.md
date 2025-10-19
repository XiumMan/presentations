# Deployment Instructions for Vercel

## Quick Deploy

The easiest way to deploy this React application to Vercel:

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not installed):
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy** (from the project directory):
```bash
cd hand-hygiene-presentations
vercel
```

4. **Follow the prompts**:
   - Set up and deploy? **Y**
   - Which scope? (Select your account)
   - Link to existing project? **N**
   - What's your project's name? `hand-hygiene-presentations` (or your choice)
   - In which directory is your code located? `./`
   - Want to override the settings? **N**

5. **Production Deploy**:
```bash
vercel --prod
```

Your app will be live at the provided URL (e.g., `https://hand-hygiene-presentations.vercel.app`)

### Method 2: Vercel Dashboard (Upload)

1. **Build the project locally**:
```bash
cd hand-hygiene-presentations
npm run build
```

2. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign in or create an account
   - Click "Add New..." → "Project"

3. **Deploy**:
   - Drag and drop the entire `hand-hygiene-presentations` folder
   - Or click "Browse" and select the folder
   - Vercel will auto-detect the Vite configuration
   - Click "Deploy"

### Method 3: Git Integration (Best for Teams)

1. **Initialize Git** (if not already):
```bash
cd hand-hygiene-presentations
git init
git add .
git commit -m "Initial commit - Hand Hygiene Presentations"
```

2. **Push to GitHub/GitLab/Bitbucket**:
```bash
# Create a repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/hand-hygiene-presentations.git
git branch -M main
git push -u origin main
```

3. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Click "Import Git Repository"
   - Select your repository
   - Configure project:
     - Framework Preset: **Vite** (auto-detected)
     - Root Directory: `./`
     - Build Command: `npm run build` (auto-filled)
     - Output Directory: `dist` (auto-filled)
   - Click "Deploy"

4. **Automatic Deployments**:
   - Every push to `main` branch will auto-deploy
   - Pull requests will get preview deployments

## Environment Configuration

The `vercel.json` file is already configured with:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite"
}
```

## Post-Deployment

### Custom Domain (Optional)

1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Monitoring

- **Analytics**: Enable in Vercel dashboard
- **Logs**: View real-time logs in Vercel dashboard
- **Performance**: Vercel provides automatic performance monitoring

## Troubleshooting

### Build Fails

If the build fails, check:
1. Node version (requires 20.19+ or 22.12+)
2. Run `npm install` to ensure all dependencies are installed
3. Check build logs in Vercel dashboard

### App Not Loading

1. Check browser console for errors
2. Verify all assets are loading (check Network tab)
3. Clear browser cache and hard refresh

### Updates Not Showing

1. Ensure latest code is pushed to Git
2. Check Vercel deployment status
3. Wait 30-60 seconds for CDN propagation
4. Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)

## Testing Locally Before Deploy

Always test the production build locally:

```bash
# Build
npm run build

# Preview
npm run preview
```

Visit `http://localhost:4173` to test the production build.

## Performance Tips

- Build is already optimized
- All images should be in `public` folder
- Vercel automatically handles:
  - Compression (Gzip/Brotli)
  - CDN distribution
  - SSL certificates
  - Edge caching

## Support

For Vercel-specific issues:
- Documentation: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions

---

**Your presentation is now ready to deploy! 🚀**
