# SIR STUDIO - Academic & Career Services Website

A modern, responsive single-page website for educational services by Dr. Sanjay, featuring academic assistance, career counselling, and professional support services.

## 🌟 Features

- **Fully Responsive Design** - Mobile-first approach with seamless experience across all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **WhatsApp Integration** - Direct communication with pre-filled messages
- **Email Integration** - Contact forms and direct email links
- **No Backend Required** - Frontend-only solution using FormSubmit.co for form handling
- **Fast Loading** - Optimized performance with lazy loading and efficient code
- **SEO Optimized** - Proper meta tags and semantic HTML structure
- **Accessibility** - WCAG compliant with keyboard navigation support

## 🎨 Design

### Color Palette
- **Primary**: #1F3B73 (Deep Blue)
- **Secondary**: #F5F6FA (Soft Gray)  
- **Accent**: #F9B233 (Gold-Orange)

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 📱 Sections

1. **Hero Section** - Main headline with prominent CTAs
2. **Services** - 6 service cards with detailed descriptions
3. **About Us** - Mission, vision, and founder information
4. **Contact** - WhatsApp, email, and contact form

## 🛠️ Services Offered

- 📄 **Research Writing** - Thesis, papers, proposals
- 📊 **Statistical Analysis** - SPSS, R, Excel
- 📚 **Academic Help** - Assignments, notes, projects (PG, UG, School)
- 🎯 **Career Counselling** - Sessions, resume help
- 📝 **Exam & Admission Support** - Coaching, forms
- 🌱 **CSR Activities** - Education, training, awareness drives

## 🚀 Quick Start

### Local Development

1. **Clone or download** the project files
2. **Open** `index.html` in your browser
3. **That's it!** No build process required

### File Structure
```
sirstudio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
└── (optional images/)  # Add any images here
```

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)
1. Visit [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site is live instantly!
4. Custom domain support available

### Option 2: Vercel
1. Visit [vercel.com](https://vercel.com)
2. Import your project from GitHub
3. Automatic deployments on every push

### Option 3: GitHub Pages
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select source branch
4. Site available at `username.github.io/repository-name`

### Option 4: Traditional Web Hosting
1. Upload all files to your web hosting provider
2. Ensure `index.html` is in the root directory
3. Configure domain if needed

## ⚙️ Configuration

### WhatsApp Integration
Update the phone number in all WhatsApp links:
```html
<!-- Replace 919876543210 with actual number -->
<a href="https://wa.me/919876543210?text=Your%20message">
```

### Email Configuration
Update email addresses:
```html
<!-- Replace Admin@sirstudio.com with actual email -->
<a href="mailto:Admin@sirstudio.com">
```

### Form Handling
The contact form uses FormSubmit.co (no backend required):
```html
<form action="https://formsubmit.co/Admin@sirstudio.com" method="POST">
```

## 📊 Performance Features

- **Optimized Loading** - Critical CSS inlined, non-critical resources deferred
- **Image Optimization** - Lazy loading support for future images
- **Smooth Animations** - AOS library for scroll-triggered animations
- **Mobile Performance** - Lightweight code, minimal JavaScript
- **Caching Ready** - Proper headers for static asset caching

## 🔧 Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No framework dependencies
- **AOS Library** - Animate On Scroll
- **Font Awesome** - Icons
- **Google Fonts** - Typography

### Browser Support
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Metrics
- **First Contentful Paint** < 1.5s
- **Largest Contentful Paint** < 2.5s
- **Cumulative Layout Shift** < 0.1
- **Time to Interactive** < 3s

## 📱 Mobile Optimization

- **Responsive Breakpoints**:
  - Mobile: < 480px
  - Tablet: 481px - 768px
  - Desktop: 769px - 1024px
  - Large Desktop: > 1024px

- **Touch-Friendly** - All interactive elements sized appropriately
- **Fast Mobile Loading** - Optimized for 3G networks
- **Hamburger Menu** - Collapsible navigation for mobile

## 🎯 SEO Features

- **Meta Tags** - Title, description, keywords
- **Open Graph** - Social media sharing optimization
- **Structured Data** - JSON-LD for rich snippets
- **Semantic HTML** - Proper heading hierarchy
- **Alt Text** - All images have descriptive alt attributes

## 🔒 Security

- **No Server-Side Code** - Reduced attack surface
- **HTTPS Ready** - Works with SSL certificates
- **Form Protection** - FormSubmit.co includes spam protection
- **No Sensitive Data** - All data handled externally

## 🎨 Customization

### Colors
Update CSS variables in `styles.css`:
```css
:root {
    --primary-color: #1F3B73;
    --secondary-color: #F5F6FA;
    --accent-color: #F9B233;
}
```

### Content
- Update text content in `index.html`
- Replace placeholder phone numbers and emails
- Modify service descriptions as needed

### Styling
- All styles are in `styles.css`
- Organized by sections for easy maintenance
- CSS variables for consistent theming

## 📞 Contact Information

- **Email**: Admin@sirstudio.com
- **WhatsApp**: Update with actual number
- **Website**: SIR STUDIO by Dr. Sanjay

## 📄 License

This project is created for SIR STUDIO. All rights reserved.

## 🤝 Support

For technical support or customization requests, please contact the development team.

---

**Built with ❤️ for academic excellence**