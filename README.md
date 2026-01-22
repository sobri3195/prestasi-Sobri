# Living Portfolio - Muhammad Sobri Maulana

## Medical Doctor & Security Researcher Portfolio

Website portfolio dinamis untuk Muhammad Sobri Maulana yang menggabungkan expertise medis dengan teknologi dan keamanan siber.

### 🚀 Fitur Utama

- **Portfolio Dinamis**: Update konten mudah melalui file JSON
- **Responsive Design**: Optimal di semua device
- **SEO Optimized**: Meta tags, Open Graph, structured data
- **Fast Loading**: Vite + React untuk performa optimal
- **Accessible**: WCAG compliant, keyboard navigation
- **Filter & Search**: Cari konten berdasarkan kategori, tahun, tag

### 📁 Struktur Project

```
/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Basic UI elements (Badge, Tag, Card)
│   │   ├── cards/          # Portfolio cards
│   │   ├── filters/        # Search and filter components
│   │   └── layout/         # Layout components (Navbar, Footer)
│   ├── pages/              # Page components
│   ├── lib/                # Utilities and data loaders
│   ├── data/               # JSON data files
│   ├── types/              # TypeScript types
│   └── styles/             # CSS styles
├── public/
│   ├── files/              # Downloadable files (CV, certificates)
│   └── images/             # Static images
└── netlify.toml           # Netlify configuration
```

### 🎯 Kategori Konten

1. **🏆 Achievements** - Prestasi, penghargaan, kompetisi
2. **📚 Publications** - Paper penelitian, artikel jurnal
3. **💻 Projects** - Proyek teknologi, med-tech, security
4. **🤝 Service** - Pengabdian, volunteer work
5. **🎤 Media** - Presentasi, interview, liputan media
6. **📜 Certificates** - Sertifikasi profesional
7. **⏰ Timeline** - Kronologi pencapaian

### 🛠 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Netlify

### 📦 Installation

```bash
# Clone repository
git clone <repository-url>
cd living-portfolio-sobri

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 🔄 Update Workflow

#### Metode 1: Edit JSON File (Recommended)

1. Edit `/src/data/portfolioData.json`
2. Commit dan push changes
3. Netlify auto-deploy dalam 2-3 menit

#### Metode 2: GitHub Web Interface

1. Buka file di GitHub
2. Click "Edit" button
3. Make changes dan commit

#### Metode 3: Local Development

1. Clone repository
2. Edit JSON files
3. Test locally dengan `npm run dev`
4. Commit dan push

### 📝 Data Structure

Setiap item portfolio memiliki struktur:

```json
{
  "id": "unique-identifier",
  "title": "Item Title",
  "date": "2024-01-15",
  "category": "achievement|publication|project|service|media|certificate",
  "type": "award|research|med-tech|volunteer|presentation|certification",
  "role": "Your Role",
  "summary": "Brief description",
  "description": "Detailed description",
  "impact": "Impact statement",
  "evidenceLinks": [
    {
      "type": "certificate|link|photo|video",
      "url": "https://...",
      "label": "Display Label"
    }
  ],
  "tags": ["tag1", "tag2"],
  "verifiedStatus": "verified|unverified|pending",
  "verifiedBy": "institution|self|third-party",
  "language": "id|en",
  "priority": "high|medium|low"
}
```

### 🎨 Customization

#### Colors & Branding
Edit `/tailwind.config.js` untuk mengubah color scheme.

#### Content
Edit `/src/data/portfolioData.json` untuk update konten.

#### Images
Place images di `/public/images/` folder.

#### Fonts
Edit `/src/index.css` untuk mengubah font families.

### 🚀 Deployment

#### Netlify (Recommended)

1. Connect GitHub repository ke Netlify
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Auto-deploy on every git push

#### Manual Build

```bash
npm run build
# Upload dist/ folder to hosting provider
```

### 🔍 SEO Features

- **Meta Tags**: Title, description, keywords
- **Open Graph**: Social media sharing
- **Twitter Cards**: Twitter optimization
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Auto-generated for SEO
- **Canonical URLs**: Prevent duplicate content

### ♿ Accessibility

- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant
- **Focus Management**: Visible focus indicators
- **Alt Text**: Descriptive image alternatives

### 📱 Performance

- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Lazy loading dan compression
- **Bundle Analysis**: Optimized chunk sizes
- **Caching**: Aggressive caching headers
- **CDN**: Netlify global CDN

### 🔒 Security

- **Content Security Policy**: XSS protection
- **HTTPS Only**: Secure connections
- **Headers**: Security headers configured
- **No Backend**: Static site = no server vulnerabilities

### 📊 Analytics

Add tracking code ke `index.html` untuk analytics:

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

### 🐛 Troubleshooting

#### Build Issues
- Ensure Node.js 18+ is installed
- Clear node_modules: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run type-check`

#### Deployment Issues
- Verify build command: `npm run build`
- Check publish directory: `dist`
- Review Netlify build logs

#### Content Issues
- Validate JSON structure
- Check image paths
- Verify external links

### 📞 Support

For questions atau issues:
- Email: m.sobri@ui.ac.id
- GitHub Issues: Create issue di repository
- Portfolio Website: [Living Portfolio](https://living-portfolio-sobri.netlify.app)

### 📄 License

This project is open source dan available under MIT License.

---

**Last Updated**: December 2024
**Version**: 1.0.0
**Maintainer**: Muhammad Sobri Maulana