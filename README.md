# Setting Hooks - Landing Page

Professional landing page for the Setting Hooks fishing community app.

## 🚀 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **App Theme Integration** - Uses exact same colors and styling as the mobile app
- **Interactive Elements** - Smooth animations, hover effects, and user interactions
- **SEO Optimized** - Meta tags, structured data, and search engine friendly
- **Performance Optimized** - Fast loading with optimized assets
- **Accessibility** - WCAG compliant with proper semantic HTML

## 📁 File Structure

```
website/
├── index.html          # Main landing page
├── privacy.html        # Privacy Policy page
├── terms.html          # Terms of Service page
├── styles.css          # Main stylesheet with app theme
├── script.js           # Interactive functionality
├── README.md           # This file
└── assets/             # Images and media files (to be added)
    ├── logo.png
    ├── favicon.ico
    ├── app-screenshot-main.png
    ├── screenshot-1.png
    ├── screenshot-2.png
    ├── screenshot-3.png
    ├── screenshot-4.png
    ├── google-play-badge.png
    └── app-store-badge.png
```

## 🎨 Design System

### Colors (Matching App Theme)
- **Primary Dark**: #0B1426
- **Primary 900**: #0F1B2E
- **Primary 800**: #1A2332
- **Accent 500**: #00D4AA
- **Text Primary**: #FFFFFF
- **Text Secondary**: #B0BEC5

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: 700-800 weight
- **Body**: 400-500 weight

### Components
- Responsive navigation with mobile menu
- Hero section with app mockup
- Feature cards with icons
- Pricing tables
- Screenshot carousel
- Email signup form
- Footer with links

## 🛠️ Setup Instructions

### 1. Domain Setup
1. Purchase domain: `www.settinghooksapp.com`
2. Set up DNS records to point to your hosting provider

### 2. Hosting Options

#### Option A: Netlify (Recommended)
1. Create Netlify account
2. Connect to GitHub repository or drag & drop files
3. Custom domain: settinghooksapp.com
4. SSL certificate automatically provided

#### Option B: GitHub Pages
1. Create repository: `settinghooksapp.github.io`
2. Upload files to repository
3. Enable GitHub Pages in settings
4. Add custom domain in settings

#### Option C: Traditional Web Hosting
1. Upload files via FTP to web hosting provider
2. Configure domain to point to hosting

### 3. Required Assets

You'll need to add these image files to the `assets/` folder:

- **logo.png** - App logo (40x40px for nav, 32x32px for footer)
- **favicon.ico** - Website favicon
- **app-screenshot-main.png** - Main hero screenshot (300x600px)
- **screenshot-1.png** to **screenshot-4.png** - Feature screenshots (200x400px each)
- **google-play-badge.png** - Google Play Store badge
- **app-store-badge.png** - Apple App Store badge

### 4. Customization

#### Update Contact Information
Replace placeholder email addresses in:
- `privacy.html` - Update contact emails
- `terms.html` - Update legal contact info and business address
- `index.html` - Update support email links

#### Add Analytics (Optional)
Add Google Analytics or other tracking code before closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 📈 SEO Features

- Semantic HTML structure
- Meta descriptions and keywords
- Open Graph tags for social sharing
- Structured data markup
- Fast loading performance
- Mobile-friendly design

## 🚀 Performance

- Optimized CSS with minimal dependencies
- Compressed images (when added)
- Efficient JavaScript with no heavy frameworks
- Google Fonts with display=swap
- Minimal HTTP requests

## 📞 Support

For technical issues with the website:
- Email: support@settinghooksapp.com
- Create issue in repository

## 📄 License

© 2024 Setting Hooks App. All rights reserved.

---

**Ready for Stripe Integration**: This landing page is designed to work seamlessly with your Stripe payment system and can be used immediately for your business website requirement.
