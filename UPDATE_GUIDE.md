# Panduan Update Konten - Living Portfolio Muhammad Sobri Maulana

## 📋 Overview

Website "Living Portfolio" ini dirancang untuk mudah diupdate tanpa memerlukan backend custom. Semua konten dikelola melalui file JSON dan dapat diupdate langsung melalui GitHub atau locally.

## 🔄 Workflow Update

### Metode 1: Edit File JSON (Recommended)

**Langkah-langkah:**
1. Buka file `/src/data/portfolioData.json` di repository GitHub
2. Klik tombol "Edit" (pencil icon)
3. Lakukan perubahan sesuai kebutuhan
4. Scroll ke bawah, isi commit message
5. Klik "Commit changes"

**Tips:**
- Selalu backup konten existing sebelum edit
- Gunakan JSON validator untuk memastikan format benar
- Test locally jika melakukan perubahan besar

### Metode 2: Local Development

**Setup Environment:**
```bash
# Clone repository
git clone <repository-url>
cd living-portfolio-sobri

# Install dependencies
npm install

# Start development server
npm run dev
```

**Update Workflow:**
1. Edit file JSON di `/src/data/portfolioData.json`
2. Jalankan `npm run dev` untuk testing
3. Buka browser ke `http://localhost:3000`
4. Verify changes
5. Commit dan push changes

### Metode 3: GitHub Interface

**Untuk Non-Technical User:**
1. Login ke GitHub
2. Buka repository
3. Navigate ke `/src/data/portfolioData.json`
4. Click "Edit this file"
5. Make changes
6. Scroll down, isi commit message
7. Click "Commit changes"

## 📝 Format Data

### Struktur Item Portfolio

```json
{
  "id": "unique-identifier",
  "title": "Judul Item",
  "date": "2024-01-15",
  "category": "achievement|publication|project|service|media|certificate",
  "type": "award|research|med-tech|volunteer|presentation|certification",
  "role": "Your Role",
  "summary": "Brief description (1-2 sentences)",
  "description": "Detailed description",
  "impact": "Impact statement atau hasil yang dicapai",
  "evidenceLinks": [
    {
      "type": "certificate|link|photo|video",
      "url": "https://...",
      "label": "Display Label"
    }
  ],
  "tags": ["tag1", "tag2", "tag3"],
  "verifiedStatus": "verified|unverified|pending",
  "verifiedBy": "institution|self|third-party",
  "language": "id|en",
  "priority": "high|medium|low"
}
```

### Field Descriptions

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `id` | ✅ | Unique identifier | "achievement-2024-award" |
| `title` | ✅ | Judul item | "Best Paper Award 2024" |
| `date` | ✅ | Tanggal (YYYY-MM-DD) | "2024-11-15" |
| `category` | ✅ | Kategori utama | "achievement" |
| `type` | ✅ | Subtype | "award" |
| `role` | ✅ | Peran Anda | "Main Author" |
| `summary` | ✅ | Ringkasan singkat | "Received best paper award..." |
| `description` | ✅ | Deskripsi detail | "Penelitian tentang..." |
| `impact` | ❌ | Dampak/hasil | "Cited by 5 papers..." |
| `evidenceLinks` | ❌ | Array link bukti | Lihat contoh di atas |
| `tags` | ✅ | Array tags | ["medical", "research"] |
| `verifiedStatus` | ✅ | Status verifikasi | "verified" |
| `verifiedBy` | ✅ | Siapa yang verifikasi | "institution" |
| `language` | ✅ | Bahasa konten | "id" |
| `priority` | ✅ | Prioritas tampilan | "high" |

### Kategori & Types

**Categories:**
- `achievement` - Prestasi, penghargaan, kompetisi
- `publication` - Paper, artikel jurnal
- `project` - Proyek teknologi, med-tech
- `service` - Pengabdian, volunteer
- `media` - Presentasi, interview, liputan
- `certificate` - Sertifikasi profesional

**Types (berdasarkan category):**

**Achievement:**
- `award` - Penghargaan
- `competition` - Kompetisi
- `grant` - Hibah penelitian
- `recognition` - Pengakuan

**Publication:**
- `research` - Research paper
- `conference` - Conference paper
- `journal` - Journal article
- `book` - Book chapter

**Project:**
- `med-tech` - Medical technology
- `security` - Cybersecurity
- `research` - Research tool
- `web-app` - Web application
- `mobile-app` - Mobile application

**Service:**
- `volunteer` - Volunteer work
- `community` - Community service
- `education` - Education & training
- `social` - Social impact

**Media:**
- `presentation` - Presentasi
- `interview` - Interview
- `media-coverage` - Media coverage
- `workshop` - Workshop

**Certificate:**
- `certification` - Professional certification
- `training` - Training completion
- `course` - Online course
- `workshop` - Workshop certificate

## 🎯 Contoh Update

### Menambah Achievement Baru

```json
{
  "id": "achievement-2024-new-award",
  "title": "Innovation Award - Health Tech Summit",
  "date": "2024-12-01",
  "category": "achievement",
  "type": "award",
  "role": "Winner",
  "summary": "Won Innovation Award untuk pengembangan AI diagnostic tool",
  "description": "Menerima Innovation Award dalam Health Tech Summit 2024 atas pengembangan alat diagnosis AI yang dapat membantu dokter dalam mengidentifikasi penyakit lebih akurat dan cepat.",
  "impact": "Tool ini telah diimplementasikan di 10 rumah sakit dan membantu mengurangi waktu diagnosis hingga 30%",
  "evidenceLinks": [
    {
      "type": "certificate",
      "url": "/files/certificates/2024-innovation-award.pdf",
      "label": "Sertifikat Innovation Award"
    },
    {
      "type": "link",
      "url": "https://healthtechsummit.com/awards/2024",
      "label": "Website Resmi Summit"
    }
  ],
  "tags": ["ai", "healthcare", "innovation", "award", "medical"],
  "verifiedStatus": "verified",
  "verifiedBy": "institution",
  "language": "id",
  "priority": "high"
}
```

### Menambah Publication Baru

```json
{
  "id": "publication-2024-ai-diagnosis",
  "title": "Machine Learning Applications in Medical Diagnosis: A Systematic Review",
  "date": "2024-11-20",
  "category": "publication",
  "type": "research",
  "role": "Co-Author",
  "summary": "Systematic review tentang aplikasi machine learning dalam diagnosis medis dengan focus pada akurasi dan implementability",
  "description": "Review komprehensif yang menganalisis 150+ paper terkait penggunaan machine learning dalam diagnosis medis, mengevaluasi akurasi, dan tantangan implementasi di sistem kesehatan.",
  "impact": "Published in Journal of Medical Informatics, cited by 25+ papers, used as reference by 5 hospitals for AI implementation",
  "evidenceLinks": [
    {
      "type": "link",
      "url": "https://doi.org/10.1016/j.jmi.2024.11.001",
      "label": "DOI Link"
    },
    {
      "type": "link",
      "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=example&citation_for_view=example:def456",
      "label": "Google Scholar"
    }
  ],
  "tags": ["machine-learning", "medical-diagnosis", "systematic-review", "ai", "healthcare"],
  "verifiedStatus": "verified",
  "verifiedBy": "institution",
  "language": "en",
  "priority": "high"
}
```

## 🚀 Auto-Deploy Process

Setiap kali ada changes yang di-commit ke branch main:

1. **Netlify Detect Changes** - Automatic trigger
2. **Build Process** - Run `npm run build`
3. **Deploy** - Update website dalam 2-3 menit
4. **Notification** - Email notification (optional)

**URL Website:** https://living-portfolio-sobri.netlify.app

## ⚠️ Best Practices

### 1. Verifikasi Data
- Pastikan semua informasi akurat
- Include evidence links yang valid
- Set `verifiedStatus` dengan benar

### 2. Konsistensi Format
- Gunakan format date: YYYY-MM-DD
- Consistent language (id/en)
- Proper category dan type

### 3. Quality Control
- Test locally sebelum commit (optional)
- Check JSON validity
- Verify external links

### 4. Backup
- Selalu backup data existing
- Use descriptive commit messages
- Consider staging changes

## 🔧 Troubleshooting

### Build Errors
**Problem:** Build fails after JSON changes
**Solution:** 
1. Validate JSON format
2. Check for missing commas/brackets
3. Ensure all required fields present

### Website Not Updated
**Problem:** Changes not visible after commit
**Solution:**
1. Wait 3-5 minutes for deploy
2. Clear browser cache
3. Check Netlify deploy logs

### Missing Images/Files
**Problem:** Links to files/images broken
**Solution:**
1. Ensure files exist in `/public/` folder
2. Use correct relative paths
3. Check file permissions

### Contact Form Issues
**Problem:** Contact form not working
**Solution:** 
1. Contact form is frontend-only (no backend)
2. Implement with Netlify Forms or external service
3. Currently shows success message but doesn't send emails

## 📞 Support

**Untuk bantuan teknis:**
- GitHub Issues: Create issue di repository
- Email: m.sobri@ui.ac.id

**Untuk update konten:**
- Edit langsung file JSON
- Ikuti panduan format di atas
- Test dengan development server

---

**Last Updated:** December 2024
**Version:** 1.0.0