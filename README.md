# SIR STUDIO - Academic & Career Services Website

A modern, responsive single-page website for SIR STUDIO by Dr. Sanjay, offering professional academic and career services.

## 🌟 Features

### ✅ Complete Single-Page Design
- **Hero Section** with compelling headline and dual CTA buttons
- **Services Section** with 6 comprehensive service cards
- **About Section** featuring Dr. Sanjay and company mission
- **Contact Section** with form and contact information
- **Responsive Navigation** with smooth scrolling

### 📱 Mobile-First Responsive Design
- Fully responsive across all devices
- Mobile-optimized navigation
- Touch-friendly buttons and interactions
- Optimized typography and spacing

### 🎨 Modern Design Elements
- **Color Scheme**: Deep Blue (#1F3B73), Soft Gray (#F5F6FA), Gold-Orange (#F9B233)
- **Typography**: Inter font family for clean, professional look
- **Animations**: AOS (Animate On Scroll) library for smooth animations
- **Icons**: Font Awesome icons throughout the site
- **Gradients**: Beautiful gradient backgrounds and buttons

### 💬 Communication Integration
- **WhatsApp Integration**: Pre-filled messages for each service
- **Email Integration**: Direct mailto links and contact form
- **FormSubmit.co**: Backend-free form handling
- **No Backend Required**: Pure frontend solution

## 🛠️ Services Offered

1. **Research Writing** - Thesis, papers, proposals
2. **Statistical Analysis** - SPSS, R, Excel
3. **Academic Help** - Assignments, notes, projects (PG, UG, School)
4. **Career Counselling** - Sessions, resume help
5. **Exam & Admission Support** - Coaching, forms
6. **CSR Activities** - Education, training, awareness drives

## 📋 Customization Guide

### 🔧 Essential Updates Required

#### 1. WhatsApp Number
Replace the placeholder number in all WhatsApp links:
```html
<!-- Current: -->
https://wa.me/919876543210?text=...

<!-- Replace with your actual number: -->
https://wa.me/91YOUR_NUMBER?text=...
```

#### 2. Email Address
Update the email address in the contact form:
```html
<!-- Current: -->
<form action="https://formsubmit.co/Admin@sirstudio.com" method="POST">

<!-- Replace with your actual email: -->
<form action="https://formsubmit.co/YOUR_EMAIL@domain.com" method="POST">
```

#### 3. Contact Information
Update the contact details in the contact section:
- WhatsApp number
- Email address
- Response time
- Service area

### 🎨 Design Customization

#### Colors
Modify the CSS variables in the `:root` selector:
```css
:root {
    --primary-color: #1F3B73;    /* Deep Blue */
    --secondary-color: #F5F6FA;  /* Soft Gray */
    --accent-color: #F9B233;     /* Gold-Orange */
    /* ... other colors */
}
```

#### Fonts
Change the Google Fonts import link to use different fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

#### Images
Replace the placeholder founder image with an actual photo:
```html
<!-- Current placeholder: -->
<div class="founder-image">
    <i class="fas fa-user-tie"></i>
</div>

<!-- Replace with actual image: -->
<div class="founder-image">
    <img src="path/to/dr-sanjay-photo.jpg" alt="Dr. Sanjay">
</div>
```

## 🚀 Deployment Options

### 1. Netlify (Recommended)
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy automatically on every push

### 2. Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

### 3. GitHub Pages
1. Enable GitHub Pages in your repository settings
2. Select the branch to deploy
3. Your site will be available at `https://username.github.io/repository-name`

### 4. Any Web Hosting
- Upload the `index.html` file to your web hosting provider
- No build process required - it's a static site

## 📱 Mobile Optimization

The website is fully optimized for mobile devices with:
- Responsive grid layouts
- Mobile-friendly navigation
- Touch-optimized buttons
- Readable typography on small screens
- Fast loading times

## 🔧 Technical Features

- **No Backend Required**: Pure HTML, CSS, and JavaScript
- **SEO Optimized**: Meta tags, semantic HTML, proper headings
- **Fast Loading**: Optimized images, minimal dependencies
- **Cross-Browser Compatible**: Works on all modern browsers
- **Accessibility**: Proper ARIA labels and semantic markup

## 📞 Contact Integration

### WhatsApp Links
All WhatsApp links are pre-configured with service-specific messages:
- General inquiry: "Hi, I want to enquire about your academic services"
- Service-specific: "Hi, I want to enquire about [Service Name] services"

### Email Form
The contact form uses FormSubmit.co for backend-free form handling:
- Automatically sends emails to your specified address
- No server setup required
- Spam protection included

## 🎯 Performance Features

- **Lazy Loading**: Images and animations load as needed
- **Minimal Dependencies**: Only essential external libraries
- **Optimized CSS**: Efficient styling with CSS Grid and Flexbox
- **Smooth Animations**: Hardware-accelerated CSS transitions

## 🔒 Security & Privacy

- **No Data Storage**: No user data is stored on the server
- **Secure Forms**: FormSubmit.co handles form security
- **HTTPS Ready**: Works perfectly with SSL certificates
- **Privacy Compliant**: No tracking or analytics by default

## 📈 Analytics (Optional)

To add Google Analytics, insert this code before the closing `</head>` tag:
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

## 🆘 Support

For customization help or technical support:
- Email: Admin@sirstudio.com
- WhatsApp: +91 98765 43210 (update with actual number)

## 📄 License

This website template is created for SIR STUDIO by Dr. Sanjay. All rights reserved.

---

**Ready to launch your professional academic services website!** 🚀