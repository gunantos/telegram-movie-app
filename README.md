# 🎬 Telegram Movie App

Mini aplikasi Telegram untuk streaming movie yang dibuat dengan React.js. Aplikasi ini menyediakan interface yang responsif dan user-friendly untuk menonton film, series, shorts, dan kartun.

## 🎆 Features

- **Tab Navigation**: Shorts | Film | Series | Cartoon
- **Search & Filter**: Pencarian real-time dengan filter berdasarkan views dan tanggal upload
- **Responsive Cards**: Layout kartu yang responsif dengan gambar, judul, tanggal, dan total views
- **Telegram Integration**: Terintegrasi penuh dengan Telegram Mini Apps API
- **Mobile Optimized**: Dioptimalkan untuk layar mobile (350px x 670px)
- **PWA Ready**: Dapat diinstall sebagai Progressive Web App

## 🛠️ Tech Stack

- **React.js 18+** dengan Hooks
- **Vite** sebagai build tool
- **@telegram-apps/sdk-react** untuk integrasi Telegram
- **CSS Grid & Flexbox** untuk layout responsif
- **Lucide React** untuk icons
- **PWA** capabilities

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm atau yarn
- Telegram Bot (untuk testing)

### Installation

1. **Clone repository**
```bash
git clone https://github.com/gunantos/telegram-movie-app.git
cd telegram-movie-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.example .env
# Edit .env file dengan konfigurasi Anda
```

4. **Run development server**
```bash
npm run dev
# Atau untuk HTTPS (recommended untuk Telegram testing)
npm run dev:https
```

5. **Build for production**
```bash
npm run build
```

## 📱 Telegram Mini App Setup

1. **Buat Bot di BotFather**
   - Buka [@BotFather](https://t.me/botfather) di Telegram
   - Ketik `/newbot` dan ikuti instruksi
   - Simpan bot token yang diberikan

2. **Setup Mini App**
   - Ketik `/newapp` di BotFather
   - Pilih bot yang sudah dibuat
   - Berikan URL aplikasi (gunakan ngrok untuk development)
   - Upload foto dan deskripsi aplikasi

3. **Testing**
   - Buka bot Anda di Telegram
   - Ketik `/start` untuk membuka Mini App

## 📁 Project Structure

```
src/
├── components/
│   ├── common/           # Komponen reusable
│   │   ├── Header.jsx
│   │   ├── TabNavigation.jsx
│   │   ├── SearchBar.jsx
│   │   ├── FilterControls.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieGrid.jsx
│   │   └── LoadingSpinner.jsx
│   └── pages/            # Halaman aplikasi
│       ├── Home.jsx
│       ├── MovieDetails.jsx
│       └── Player.jsx
├── hooks/               # Custom hooks
├── utils/               # Utility functions
├── styles/              # CSS files
├── data/                # Mock data
└── main.jsx             # Entry point
```

## 🎨 Design System

### Colors
- **Primary**: #6366f1 (Indigo)
- **Background**: var(--tg-theme-bg-color)
- **Text**: var(--tg-theme-text-color)
- **Card**: rgba(255, 255, 255, 0.1)

### Breakpoints
- **Mobile**: 320px - 480px
- **Telegram**: 350px (recommended width)
- **Tablet**: 481px - 768px

### Grid Layout
```css
.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
}
```

## 📊 Performance

- **Lazy Loading**: Gambar dan komponen di-lazy load
- **Code Splitting**: Bundle splitting untuk optimasi loading
- **PWA Caching**: Service worker untuk caching offline
- **Image Optimization**: WebP format dengan fallback

## 📦 Deployment

### GitHub Pages
```bash
npm run deploy
```

### Vercel
1. Connect repository ke Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`

### Netlify
1. Connect repository ke Netlify
2. Build command: `npm run build` 
3. Publish directory: `dist`

## 🤝 Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 License

Project ini menggunakan MIT License. Lihat file `LICENSE` untuk detail.

## 📞 Contact

- **Developer**: Gunanto Simamora
- **Email**: gunanto.simamora@gmail.com
- **Company**: APP KITA
- **Website**: [app-kita.com](https://app-kita.com)

## 🚀 Demo

[Live Demo](https://gunantos.github.io/telegram-movie-app/)

---

Dibuat dengan ❤️ untuk komunitas Telegram Indonesia
