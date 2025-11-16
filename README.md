# Zeal Electric - Website

A modern, responsive website for Zeal Electric, licensed electrical contractors serving Orange County, CA.

## Features

- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Smooth Animations**: Collapsible navbar with smooth transitions
- **Hero Sections**: Engaging hero sections with background images
- **Service Pages**: Detailed electrical services with accordion layout
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and structured data (JSON-LD)
- **Modern UI**: Dark theme with green accent colors
- **Fast Performance**: Optimized images and CSS transitions

## Technologies

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid, Transitions)
- JavaScript (Vanilla JS)
- Google Fonts (Times New Roman/Georgia)

## Project Structure

```
zeal-electric/
├── index.html          # Homepage
├── services.html       # Services page
├── contact.html        # Contact page
├── careers.html        # Career opportunities page
├── about.html          # About page
├── faq.html            # FAQ page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── images/             # Image assets
│   ├── zeal-electric-logo.png
│   ├── galler_image_main_rendered.png
│   └── galler_image1-8_rendered.png
├── CNAME               # Custom domain configuration
└── README.md           # This file
```

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd zeal-electric
```

2. Open `index.html` in a web browser, or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

## Deployment

### GitHub Pages

1. Push the repository to GitHub
2. Go to Settings > Pages
3. Select the main branch as the source
4. Your site will be available at `https://<username>.github.io/zeal-electric/`

### Custom Domain

1. Create a `CNAME` file (already included) with your domain: `zeal-electric.com`
2. Configure DNS records:
   - Type: `CNAME`
   - Name: `@` (or `www`)
   - Value: `<username>.github.io`
3. Update GitHub Pages settings to use the custom domain

## Features Explained

### Navigation
- Collapsible navbar that shrinks on scroll
- Centered logo with phone number underneath
- Smooth transitions without glitching

### Hero Sections
- Full-width hero sections with background images
- Overlay gradients for text readability
- Responsive and mobile-friendly

### Services Page
- Accordion-style service listings
- Glassmorphism design with background images
- Expandable/collapsible sections

### Contact Form
- Quote request form
- Emergency contact information
- Service area information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact Information

- **Phone**: (714) 981-7671
- **Email**: Admin@Zeal-Electric.com
- **Website**: https://zeal-electric.com

## License

Copyright © 2025 Zeal Electric - All Rights Reserved
