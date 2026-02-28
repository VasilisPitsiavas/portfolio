# Personal Portfolio Website

A clean, professional portfolio website showcasing CV, professional experience, AI/ML projects, publications, and contact information.

## Features

- **Homepage**: Professional introduction with quick links
- **Projects**: Showcase of AI/ML projects including ForecastingApp and Currency Forecasting
- **Research**: Research interests and publications with ResearchGate integration
- **Experience**: Professional experience timeline
- **Contact**: Contact information and social links
- **Currency Forecasting App**: Interactive currency forecasting tool

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Vercel (hosting)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Navbar and Footer
│   ├── page.tsx             # Homepage
│   ├── projects/            # Projects page
│   ├── research/            # Research page
│   ├── experience/           # Experience page
│   ├── contact/              # Contact page
│   └── currency-forecast/   # Currency forecasting app
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Footer.tsx           # Footer component
│   ├── Section.tsx          # Reusable section wrapper
│   ├── ProjectCard.tsx     # Project card component
│   └── CurrencyForecastApp.tsx  # Currency forecasting component
└── public/
    └── cv.pdf              # CV file (to be added)
```

## Deployment

Deploy to Vercel:

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

## Design

The website features a modern black theme with:
- Black background (#000000)
- Accent color (#00ff88 - vibrant green)
- Inter font family for clean typography
- JetBrains Mono for code/technical content
- Smooth transitions and hover effects
- Responsive design for all devices

## Customization

All personal information has been integrated:
- Name: Vasileios Pitsiavas
- Contact information from CV
- ResearchGate profile linked
- ForecastlyApp integrated
- Currency Forecasting App included
- Professional experience from CV

## License

MIT
