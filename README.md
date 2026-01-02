# MCG-LINEA - Next.js E-commerce Platform

Modern B2B/B2C e-commerce platform for wholesale vehicle parts and accessories built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Copy environment variables (if needed):
```bash
cp .env.example .env.local
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── catalog/           # Catalog pages
│   ├── product/           # Product pages
│   ├── cart/              # Cart page
│   ├── checkout/          # Checkout pages
│   └── account/           # Account pages
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Layout components (Header, Footer)
│   ├── home/              # Home page sections
│   ├── catalog/           # Catalog components
│   └── cart/              # Cart components
├── lib/                   # Utility functions
├── types/                 # TypeScript types
└── styles/                # Global styles
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📦 Key Features

### MVP (Phase 1)
- ✅ Modern design system with Tailwind CSS
- ✅ Responsive layout (mobile-first)
- ✅ Home page with hero search
- ✅ Catalog structure
- ✅ Product pages
- ✅ Shopping cart
- ✅ Checkout flow
- ✅ User account
- ✅ Order management
- ✅ Invoice generation

### Phase 2 (Planned)
- B2B pricing tiers
- Advanced search (VIN lookup)
- Multi-language support (RO/RU/EN)
- Payment integrations
- Shipping integrations
- Email notifications

## 🔧 Development

### Build for production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 📝 License

© 2025 MCG-LINEA S.R.L. All rights reserved.

