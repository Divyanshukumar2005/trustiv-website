# Trustiv Services — Website

Official marketing website for **Trustiv Services**, live at [trustivservices.com](https://trustivservices.com/).

A fully static, hand-built site — no build tools, no frameworks, no backend. Just clean HTML, CSS, and vanilla JavaScript.

## 🌐 Live Site

**[https://trustivservices.com/](https://trustivservices.com/)**

## 📁 Project Structure

```
.
├── index.html            # Home page
├── about.html             # About page
├── services.html          # Services page
├── testimonials.html      # Client testimonials
├── careers.html           # Careers / job openings
├── contact.html           # Contact page (with contact form)
├── sitemap.xml            # SEO sitemap
├── robots.txt             # Crawler rules
├── css/
│   └── styles.css         # All site styling (design tokens, layout, components)
├── js/
│   └── main.js            # Site interactivity (nav, modals, FAQ accordion, contact form)
└── images/
    ├── favicon-*.png       # Favicons (multiple sizes)
    ├── logo-icon.png
    ├── og-image.jpg        # Open Graph / social share image
    └── clients/            # Client/partner logos
```

## ✨ Features

- Fully responsive, mobile-first layout
- Custom design system defined via CSS variables (see top of `css/styles.css`)
- Mobile nav toggle
- Auto-looping logo/testimonial marquee
- Testimonials with a "Read more" modal for long quotes
- FAQ accordion
- Contact form powered by [Web3Forms](https://web3forms.com/) (no backend required — submissions are emailed directly)
- SEO basics: sitemap, robots.txt, Open Graph tags, JSON-LD structured data (see `<script type="application/ld+json">` blocks in each page)
## 🚀 Running Locally

No build step needed — it's plain HTML/CSS/JS. Just serve the folder:

```bash
# Option 1: Python
python3 -m http.server 8000

# Option 2: Node (via npx)
npx serve .
```

Then open `http://localhost:8000` in your browser.
## 🛠️ Deployment

Since this is a static site, it can be deployed as-is to any static host — Netlify, Vercel, GitHub Pages, Cloudflare Pages, or a plain VPS/Nginx setup.
## 📬 Contact Form

The contact form (`contact.html`) uses [Web3Forms](https://web3forms.com/), a free service that emails form submissions directly — no backend or database required.

> **Note:** The `access_key` in `contact.html` is a Web3Forms **site key**, meant to be used client-side (similar to how a public site ID works) — it is not a private secret. If you fork this project for your own site, replace it with your own key from [web3forms.com](https://web3forms.com/), and consider enabling domain restriction on your key from the Web3Forms dashboard to prevent misuse.
