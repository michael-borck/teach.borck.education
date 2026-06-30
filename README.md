# teach.borck.education

An interactive platform for creating and managing educational content with real-time collaboration features. Built with TypeScript and Astro, this web application provides educators and learners with powerful tools for content creation, sharing, and collaborative learning experiences.

## Overview

teach.borck.education is a modern educational content management system designed to facilitate interactive learning through real-time collaboration. Whether you're an educator creating course materials or a learner engaging with interactive content, this platform offers an intuitive interface and robust features for educational excellence.

## Features

- Interactive content creation and management
- Real-time collaboration capabilities
- Responsive web design
- TypeScript-powered type safety
- Fast static site generation with Astro
- Content organization and management
- User-friendly interface

## Installation

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn package manager

### Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/michael-borck/teach.borck.education.git
cd teach.borck.education
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This generates optimized static files in the `dist` directory.

## Usage

### Creating Educational Content

1. Navigate to the content creation section
2. Use the interactive editor to compose your educational material
3. Organize content with structured layouts
4. Save and publish your content

### Collaboration

- Invite collaborators to work on content together
- Real-time updates ensure all participants see changes instantly
- Track revisions and manage versions of your content

### Content Organization

Educational content is stored in the `src/data/` directory. The main teaching data structure is defined in `src/data/teaching.ts`.

Example content structure:
```typescript
// src/data/teaching.ts
export const teachingContent = {
  // Your educational content here
};
```

## Project Structure

```
teach.borck.education/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD workflows
├── public/                 # Static assets
│   ├── favicon.svg
│   └── CNAME              # Custom domain configuration
├── src/
│   ├── data/              # Educational content data
│   │   └── teaching.ts
│   ├── layouts/           # Astro layout components
│   │   └── Base.astro
│   ├── pages/             # Page routes
│   ├── styles/            # CSS stylesheets
├── astro.config.mjs       # Astro configuration
├── package.json           # Project dependencies
└── README.md              # This file
```

## Technology Stack

- **TypeScript**: Type-safe JavaScript for robust development
- **Astro**: Modern static site builder with dynamic capabilities
- **CSS**: Styling and responsive design
- **JavaScript**: Interactive functionality and client-side logic

## Configuration

### Astro Configuration

The project is configured through `astro.config.mjs`. Key configurations include:

- Static site generation settings
- Asset handling and optimization
- Custom domain settings (via `public/CNAME`)

### Environment Setup

Create a `.env` file in the root directory for any environment-specific variables (if needed for future real-time collaboration features).

## Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
```

### Code Style

This project uses TypeScript for type safety. Ensure all code follows the established patterns in the codebase.

## Deployment

The project includes automated deployment configuration via GitHub Actions. The deployment workflow is defined in `.github/workflows/deploy.yml`.

To deploy:

1. Push changes to the main branch
2. GitHub Actions automatically builds and deploys the site
3. Your updates will be live at https://teach.borck.education/

### Custom Domain

The custom domain is configured via the `public/CNAME` file. Ensure DNS records point to your hosting provider.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

For issues, questions, or suggestions, please open an issue on GitHub or visit the project homepage at https://teach.borck.education/

## Acknowledgments

Built with passion for education and collaboration using modern web technologies.