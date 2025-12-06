#  WarungAI Frontend

Platform AI untuk membantu usaha warung dan UMKM Indonesia menjadi lebih cerdas dan efisien.

##  Tech Stack

- **Framework:** [Nuxt 3](https://nuxt.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** TypeScript / Vue 3

##  Struktur Folder

```
app/
├── assets/          # CSS & images yang diprocess
├── components/      # Komponen Vue (auto-import)
│   ├── common/      # Button, Card, Modal
│   ├── layout/      # Header, Footer, Sidebar
│   └── ui/          # Input, Select, Loading
├── composables/     # Reusable logic (useApi, useAuth)
├── layouts/         # Layout templates
├── middleware/      # Route middleware
├── pages/           # Halaman (auto-routing)
├── plugins/         # Vue plugins
└── utils/           # Helper functions
```

##  Quick Start

### Prerequisites

- Node.js >= 20.x
- npm atau pnpm

### Installation

```bash
# Clone repository
git clone <repo-url>
cd WarungAI-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

##  Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run generate` | Generate static site |

##  Docker

## Buat file compose.yml
```
nano compose.yml
```

## Quick run
```bash
services:
  warungai-frontend:
    image: ghcr.io/kanjutgusion/warungai-frontend:latest
    container_name: warungai-frontend
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NUXT_HOST=0.0.0.0
      - NUXT_PORT=3000
      - NUXT_PUBLIC_API_BASE={{API_BASE_URL}}
      - NUXT_PUBLIC_API_VERSION=v1
    restart: unless-stopped
```
Ubah NUXT_PUBLIC_API_BASE agar merujuk ke container backend yang sedang di running
Atau setting environment variable untuk API_BASE_URL
## Jalankan
```
docker compose up -d
```



### Production

```bash
# Build dan jalankan
docker-compose up --build

# Background mode
docker-compose up -d --build
```

### Development

```bash
docker-compose --profile dev up warungai-frontend-dev
```

## Environment Variables

Buat file `.env` berdasarkan `.env.example`:

```env
API_BASE_URL=http://localhost:3001/api
```

##  Halaman

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/auth/login` | Halaman login |
| `/dashboard` | Dashboard utama |

## Contributing

1. Fork repository
2. Buat branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## License

MIT License - Lihat [LICENSE](LICENSE) untuk detail.

---

**WarungAI** - Dibuat dengan kanjut gusion
