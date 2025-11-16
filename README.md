# Zeal Electric Website

Modern, fast, and responsive website for Zeal Electric - Expert electrical services for your home and business.

## 🚀 Features

- **Fast & Optimized**: Lightweight, performance-focused design
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Design**: Clean, professional interface that builds trust
- **Multiple Pages**: Home, Services, Career Opportunities, and Contact pages
- **GitHub Pages Ready**: Pre-configured for easy deployment

## 📁 Project Structure

```
zeal-electric/
├── index.html              # Home page
├── services.html           # Services page with detailed offerings
├── careers.html            # Career opportunities page
├── contact.html            # Contact page with quote form
├── styles.css              # Main stylesheet
├── script.js               # JavaScript for interactivity
├── CNAME                   # Custom domain configuration
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment workflow
└── README.md               # This file
```

## 🌐 Deployment to GitHub Pages

### Step 1: Push to GitHub

1. If you haven't already, create a new repository on GitHub
2. Push this code to your GitHub repository:
   ```bash
   git add .
   git commit -m "Initial commit - Zeal Electric website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/zeal-electric.git
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under **Source**, select:
   - **Branch**: `main` (or `master`)
   - **Folder**: `/ (root)`
4. Click **Save**

Your site will be available at: `https://YOUR_USERNAME.github.io/zeal-electric/`

### Step 3: Connect Custom Domain (zeal-electric.com)

#### Option A: Configure DNS at GoDaddy

1. **In GoDaddy DNS Settings:**
   - Go to your GoDaddy account
   - Navigate to your domain `zeal-electric.com`
   - Go to DNS Management
   - Add or edit these DNS records:
   
   **For apex domain (zeal-electric.com):**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   TTL: 600
   ```
   Add three more A records with these IPs:
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   TTL: 600
   ```

2. **In GitHub Repository:**
   - Go to Settings → Pages
   - Under "Custom domain", enter: `zeal-electric.com`
   - Check "Enforce HTTPS" (may take a few minutes to activate)

3. **Wait for DNS Propagation:**
   - DNS changes can take 24-48 hours to fully propagate
   - You can check status at: https://www.whatsmydns.net/

#### Option B: Move Domain to Another Registrar

If you want to move the domain entirely away from GoDaddy:

1. **Unlock Domain in GoDaddy:**
   - Go to Domain Settings
   - Unlock the domain
   - Request an authorization code (EPP code)

2. **Transfer to New Registrar:**
   - Popular options: Namecheap, Cloudflare, Google Domains
   - Start transfer process with new registrar
   - Enter authorization code when prompted
   - Follow new registrar's instructions

3. **Configure DNS at New Registrar:**
   - Follow the same DNS configuration steps as above
   - Some registrars (like Cloudflare) have better DNS management

### Alternative: Use Cloudflare Pages (Recommended)

Cloudflare Pages offers better performance and easier DNS management:

1. **Move Domain to Cloudflare:**
   - Create a Cloudflare account
   - Add your site
   - Update nameservers in GoDaddy to Cloudflare's nameservers

2. **Connect GitHub to Cloudflare Pages:**
   - In Cloudflare Dashboard → Pages
   - Connect your GitHub repository
   - Build settings: Framework preset = None
   - Build command: (leave empty)
   - Build output directory: `/`

3. **Configure Custom Domain:**
   - In Cloudflare Pages → Custom domains
   - Add `zeal-electric.com` and `www.zeal-electric.com`
   - DNS records are managed automatically

## 🛠️ Local Development

To view and test the website locally:

1. **Using a Local Server (Recommended):**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

2. **Open in Browser:**
   - Navigate to `http://localhost:8000`

## 📝 Customization

### Update Contact Information

Edit the following files to update contact details:
- `index.html` - Hero and contact sections
- `contact.html` - Contact information
- `services.html` - Footer contact info
- `careers.html` - Footer contact info

Search for:
- `(714) 981-7671` - Phone number
- `Admin@Zeal-Electric.com` - Email address

### Update Services

Edit `services.html` to add, remove, or modify services.

### Update Career Positions

Edit `careers.html` to add new job openings or update existing ones.

### Modify Colors & Styling

Edit `styles.css` and update the CSS variables in the `:root` selector:
```css
:root {
    --primary-color: #2563eb;
    --primary-dark: #1e40af;
    /* ... other variables ... */
}
```

## 🔒 Security & Privacy

- The contact form uses client-side email (mailto:) - consider adding a form handler service like Formspree or Netlify Forms for better functionality
- Add Google reCAPTCHA if you implement a server-side form handler
- HTTPS is enforced when using GitHub Pages with custom domain

## 📱 Performance Optimization

The website is optimized for speed:
- Minimal external dependencies (only Google Fonts)
- CSS and JavaScript are minified-ready
- No unnecessary libraries or frameworks
- Optimized images (if added in future)

## 🆘 Troubleshooting

### Domain Not Working

1. **Check DNS Records:**
   - Verify A records point to GitHub's IPs
   - Use https://dnschecker.org/ to verify propagation

2. **Check GitHub Pages Settings:**
   - Ensure custom domain is entered correctly
   - Wait 5-10 minutes after adding domain
   - Try unchecking and rechecking "Enforce HTTPS"

3. **Clear DNS Cache:**
   ```bash
   # Windows
   ipconfig /flushdns
   
   # macOS/Linux
   sudo dscacheutil -flushcache
   ```

### Site Not Updating

- Changes pushed to main/master branch should deploy automatically
- Check GitHub Actions tab for deployment status
- Allow 1-2 minutes for deployment to complete

## 📞 Support

For questions about this website setup, contact the repository owner.

---

**Built with ❤️ for Zeal Electric**

Copyright © 2025 Zeal Electric - All Rights Reserved.
