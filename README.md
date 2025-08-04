# Vibe

**Vibe** is a full-stack music streaming app where users can upload, play, and manage songs. Built with **Next.js**, **Supabase**, **Stripe**, and **Tailwind CSS**, it features secure authentication, responsive design, and premium subscriptions.

---

## Features

- Sign up and log in with Supabase Auth
- Upload and play audio files
- Modern audio player with dynamic UI
- Premium subscriptions via Stripe
- Fully responsive layout using Tailwind CSS

---

## Tech Stack

- **Frontend:** React, Next.js 13.4, Tailwind CSS
- **Backend:** Supabase (PostgreSQL, Auth, Storage)
- **Payments:** Stripe
- **Deployment:** Vercel

---

## 🧑‍💻 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/vibe.git
cd vibe
```

### 2. '''Install dependencies
```bash
npm install
```

### 3. Create .env.local
Add your environment variables:
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=


### 4. Run the app
```bash
npm run dev
```
