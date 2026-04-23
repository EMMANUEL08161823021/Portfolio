# Emmanuel Oguntolu — Portfolio

> A Software Engineer help founders and teams ship faster, look better, and grow further — with software solutions.

🌐 **Live Site:** [oguntolu-emmanuel.com](https://oguntolu-emmanuel.com)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Font | DM Sans |
| Forms | Formspree |
| Analytics | Vercel Analytics |
| Deployment | Vercel |

---

## Features

- ⚡ **Blazing fast** — optimised with Next.js App Router, static generation, and Vercel edge network
- 🌗 **Dark / Light mode** — system preference aware with manual toggle
- 📱 **Fully responsive** — mobile-first design with a dedicated mobile carousel for projects
- 🎯 **Scroll indicator** — circular progress ring tracking page scroll position
- 📬 **Contact form** — Formspree-powered with service selection and auto-dismiss success state
- 🎨 **Animated tech stack** — dual marquee rows with brand colour hover effects
- 🔢 **Scroll-driven works section** — sticky scroll with per-project transitions on desktop, swipeable carousel on mobile

---

## Sections

- **Hero** — animated role cycler, live terminal block, stats
- **About** — bio, fact strip, animated tech stack marquee
- **Services** — six service cards with accent colours
- **Experience** — card-based timeline with expandable achievements
- **Works** — scroll-driven split panel (desktop) + swipeable carousel (mobile)
- **Contact** — multi-select service picker, glassy input fields, Formspree integration

---

## Projects Showcased

| Project | Category | Stack |
|---------|----------|-------|
| SPACES | Film & Web | Next.js, Tailwind, Framer Motion |
| SaaSto | Productivity | Next.js, Tailwind, Framer Motion |
| NeuroWallet | Accessibility · FinTech | Next.js, Tailwind, Express.js |
| LYNKK | Crypto · Media | Next.js, Tailwind, MongoDB |
| ENERGYM | Health & Fitness | React, Tailwind |
| Vault | Web3 · Protocol | React, Framer Motion |

---


## Project Structure

```
portfolio/
├── app/
│   ├── fonts/              # DM Sans font files
│   ├── constants/          # Navbar, Footer
│   ├── components/         # ScrollIndicator, etc.
│   ├── context/            # ScrollContext
│   ├── home/               # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Experience.jsx
│   │   ├── Works.jsx
│   │   └── Contact.jsx
│   ├── globals.css
│   ├── layout.jsx
│   └── page.jsx
├── public/
│   └── images/             # Project screenshots
├── tailwind.config.js
└── package.json
```

---

## Environment Variables

No environment variables required. Formspree endpoint is set directly in the contact form.

---

## Deployment

Deployed on **Vercel** with automatic deployments on push to `main`.

```bash
# Deploy manually via Vercel CLI
vercel --prod
```

---

## Contact

**Emmanuel Oguntolu**
- 🌐 [oguntolu-emmanuel.com](https://oguntolu-emmanuel.com)
- 💼 [LinkedIn](https://linkedin.com/in/emmanuel-oguntolu)
- 🐙 [GitHub](https://github.com/EMMANUEL08161823021)
- 🐦 [Twitter](https://x.com/heuro_dev)

---

## License

This project is open source and available under the [MIT License](LICENSE).