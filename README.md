# Portfolio Next.js

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This portfolio showcases my projects, skills, and provides contact information in a beautiful, animated interface.

## 🚀 Features

- **Modern Design**: Clean, responsive design with smooth animations using Framer Motion
- **Project Showcase**: Detailed project portfolio with live demos and GitHub links
- **Skills Section**: Interactive skills display with icons and descriptions
- **Blog Section**: Space for sharing thoughts and experiences
- **Contact Form**: Easy way for visitors to get in touch
- **SEO Optimized**: Built with Next.js for optimal performance and SEO
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid development

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **React Icons** - Additional icon library

### UI Components
- **Radix UI** - Accessible component primitives
- **Class Variance Authority** - Type-safe component variants
- **clsx & tailwind-merge** - Conditional styling utilities

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler for development

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-nextjs.git
   cd portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🚀 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
portfolio-nextjs/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── project/           # Project pages
│   │   │   └── [slug]/        # Dynamic project routes
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── shared/            # Shared components
│   │   │   ├── Bannar/        # Hero banner component
│   │   │   ├── Blog/          # Blog section
│   │   │   ├── Contact/       # Contact form
│   │   │   ├── Container/     # Layout container
│   │   │   ├── Footer/        # Footer component
│   │   │   ├── Navbar/        # Navigation bar
│   │   │   └── Skills/        # Skills section
│   │   └── ui/                # Reusable UI components
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── separator.tsx
│   │       └── textarea.tsx
│   └── lib/
│       ├── projectData.ts     # Project data
│       └── utils.ts           # Utility functions
├── public/                    # Static assets
├── components.json           # UI components configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── next.config.ts            # Next.js configuration
└── package.json              # Dependencies and scripts
```

## 🎯 Key Projects Showcased

### 1. E-Commerce Bike Store
- **Description**: Advanced e-commerce platform with cart management and Stripe payments
- **Tech Stack**: React.js, TypeScript, Stripe, MongoDB
- **Live Demo**: [Bike Store](https://bike-store-client-nine.vercel.app/)
- **GitHub**: [Frontend](https://github.com/mdriaz60000/bike-store-client) | [Backend](https://github.com/mdriaz60000/bike-store)

### 2. Rental Home Management
- **Description**: Rental platform for tenants and landlords with admin dashboard
- **Tech Stack**: Next.js, TypeScript, Stripe, MongoDB
- **Live Demo**: [Rental Home Management](https://rental-home-management.vercel.app)
- **GitHub**: [Frontend](https://github.com/mdriaz60000/Rental-Home-Management) | [Backend](https://github.com/mdriaz60000/rental-home-management-server)

### 3. E-Commerce Sunglass Store
- **Description**: Online sunglass shop with Firebase authentication and cart system
- **Tech Stack**: React.js, Firebase, MongoDB, Stripe
- **Live Demo**: [Z-Glass](https://z-glass.web.app)
- **GitHub**: [Frontend](https://github.com/mdriaz60000/z-glass) | [Backend](https://github.com/mdriaz60000/z-glass-sarver)

## 🎨 Customization

### Adding New Projects
1. Edit `src/lib/projectData.ts`
2. Add your project details following the existing structure
3. Include project images, descriptions, and links

### Styling
- Modify `src/app/globals.css` for global styles
- Use Tailwind CSS classes for component styling
- Customize the design system in `components.json`

### Content
- Update project information in `src/lib/projectData.ts`
- Modify component content in `src/components/shared/`
- Add your personal information and links

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Use `npm run build` and deploy the `out` directory
- **Railway**: Connect your GitHub repository
- **AWS/GCP**: Use Docker or direct deployment

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint configuration
- `components.json` - UI components configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]
- **Portfolio**: [Your Portfolio URL]

---

⭐ If you found this portfolio helpful, please give it a star on GitHub!
