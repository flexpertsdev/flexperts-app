# Flexperts App

AI-powered development platform with build modes: You Build, We Build, Together

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/flexpertsdev/flexperts-app.git
   cd flexperts-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Supabase credentials:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anon/public key
   
   Get these from: https://supabase.com/dashboard/project/_/settings/api

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🛠 Tech Stack

- **Frontend**: Vue 3 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Backend**: Supabase (Auth, Database, Real-time)
- **State Management**: Pinia
- **Router**: Vue Router 4
- **PWA**: vite-plugin-pwa

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── composables/    # Vue composables (hooks)
├── layouts/        # Layout components
├── lib/           # External service clients
├── router/        # Vue Router configuration
├── stores/        # Pinia stores
├── types/         # TypeScript type definitions
├── views/         # Page components
│   ├── app/      # Authenticated app pages
│   └── auth/     # Authentication pages
└── style.css      # Global styles
```

## 🎨 Features

- 🎯 Three build modes: You Build, We Build, Together
- 🤖 AI-powered development assistant
- 📱 Mobile-first responsive design
- 🌙 Dark/light theme support
- 🔐 Authentication with Supabase
- 📦 Installable as PWA
- 🎨 iOS-style interface

## 🚦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🌐 Environment Variables

Required environment variables:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## 📝 Development Notes

- The app uses Tailwind CSS v4 with CSS-first configuration
- Authentication is handled by Supabase
- The app will work without Supabase configured but auth features will be disabled
- PWA support is included for installability

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request