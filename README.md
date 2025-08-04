# SIR STUDIO - Academic & Career Services Website

A modern, responsive single-page website for SIR STUDIO by Dr. Sanjay, offering professional academic and career services.

## 🌟 Features

### ✅ Complete Website Sections
- **Hero Section** - Eye-catching headline with WhatsApp and Email CTAs
- **Services Section** - 6 comprehensive service cards with individual WhatsApp inquiry links
- **About Section** - Company information and founder details
- **Contact Section** - Contact form and information with FormSubmit.co integration

### 🎨 Modern Design
- **Responsive Design** - Mobile-first approach, works on all devices
- **Modern UI/UX** - Clean, professional academic design
- **Smooth Animations** - AOS (Animate On Scroll) library integration
- **Professional Color Scheme**:
  - Primary: #1F3B73 (Deep Blue)
  - Secondary: #F5F6FA (Soft Gray)
  - Accent: #F9B233 (Gold-Orange)

### 📱 Mobile-First Features
- Sticky navigation with smooth scrolling
- Mobile-responsive service cards
- Touch-friendly buttons and forms
- Optimized for all screen sizes

### 🔗 Communication Integration
- **WhatsApp Integration** - Direct links with pre-filled messages for each service
- **Email Integration** - Direct mailto links and contact form
- **FormSubmit.co** - No-backend form handling

## 🛠️ Customization Guide

### 1. Update Contact Information
Replace the placeholder WhatsApp number in the JavaScript section:
```javascript
const whatsappNumber = '919876543210'; // Replace with actual number
```

### 2. Update Email Address
The email `Admin@sirstudio.com` is already set up. Update it in:
- Hero section email button
- Contact section
- Form action URL

### 3. Customize Services
Each service card can be modified in the HTML. Current services:
- Research Writing
- Statistical Analysis
- Academic Help
- Career Counselling
- Exam & Admission Support
- CSR Activities

### 4. Update About Section
Modify the founder information and company description in the About section.

### 5. Customize Colors
Update CSS variables in the `:root` section:
```css
:root {
    --primary: #1F3B73;
    --secondary: #F5F6FA;
    --accent: #F9B233;
    /* ... other variables */
}
```

## 🚀 Deployment

### Option 1: Netlify (Recommended)
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy automatically

### Option 2: GitHub Pages
1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Select source branch

### Option 3: Vercel
1. Connect your GitHub repository to Vercel
2. Deploy with one click

## 📋 Pre-deployment Checklist

- [ ] Update WhatsApp number to actual number
- [ ] Verify email address is correct
- [ ] Test all WhatsApp links
- [ ] Test contact form submission
- [ ] Check mobile responsiveness
- [ ] Verify all animations work
- [ ] Test on different browsers

## 🎯 Key Features Implemented

### ✅ Hero Section
- Big headline: "Expert Academic & Career Services – Anytime, Anywhere"
- Subtext: "Research | Analysis | Assignments | Counselling | Support"
- Two CTA buttons: WhatsApp and Email

### ✅ Services Section
- 6 service cards with icons and descriptions
- Individual WhatsApp inquiry links for each service
- Hover effects and animations

### ✅ About Section
- Mission and vision
- Why choose us section
- Founder information (Dr. Sanjay)

### ✅ Contact Section
- WhatsApp button with pre-filled message
- Email integration
- Contact form using FormSubmit.co
- Contact information display

### ✅ Technical Features
- No backend required
- No login/signup
- All communication via WhatsApp and Email
- Fully responsive design
- Modern animations
- SEO optimized

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript** - Interactive features and animations
- **AOS Library** - Scroll animations
- **Font Awesome** - Icons
- **Google Fonts** - Inter font family
- **FormSubmit.co** - Form handling

## 📞 Contact Integration

### WhatsApp Links
All WhatsApp links use the format:
```
https://wa.me/919876543210?text=Hi,%20I%20want%20to%20enquire%20about%20[Service]%20services
```

### Email Integration
- Direct mailto links: `mailto:Admin@sirstudio.com`
- Contact form: Integrated with FormSubmit.co

## 🎨 Design Philosophy

The website follows modern design principles:
- **Clean and Minimal** - Focus on content and services
- **Professional** - Academic and trustworthy appearance
- **Accessible** - Easy navigation and clear CTAs
- **Mobile-First** - Optimized for mobile devices
- **Fast Loading** - Optimized assets and minimal dependencies

## 🔄 Future Enhancements

Potential additions for future updates:
- Testimonials section
- Portfolio/Work examples
- Blog section
- Service pricing
- Online booking system
- Social media integration

---

**Ready to deploy!** The website is fully functional and ready for production use. Just update the contact information and deploy to your preferred platform.