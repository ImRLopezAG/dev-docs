# Dev Docs 📚

A comprehensive developer documentation site covering software architecture, design patterns, AWS services, and SQL fundamentals. Built with modern technologies for a fast, searchable, and beautiful documentation experience.

![TanStack Start](https://img.shields.io/badge/TanStack_Start-FF4154?style=flat&logo=react&logoColor=white)
![Fumadocs](https://img.shields.io/badge/Fumadocs-000000?style=flat&logo=mdx&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

## 📖 Documentation Topics

### 🏗️ Architecture
- **Clean Architecture** - Hexagonal, Layered, Microservices patterns
- **Design Principles** - SOLID (SRP, OCP, LSP, ISP, DIP), DRY, KISS, YAGNI, and more
- **Design Patterns** - Creational, Structural, and Behavioral patterns
- **Infrastructure as Code** - IaC best practices

### ☁️ AWS Services
- **Compute** - EC2, Lambda, ECS, ECR
- **Storage** - S3, EBS
- **Database** - RDS, DynamoDB
- **Networking** - VPC, API Gateway
- **Security** - IAM, Secrets Manager
- **Messaging** - SNS, SQS
- **DevOps** - CloudFormation, CodeBuild, CodePipeline, CloudWatch

### 🗄️ SQL
- **Fundamentals** - SELECT, JOINs, Aggregations, CTEs, Window Functions
- **Database Design** - Normalization, relationships, constraints
- **Indexing** - B-Tree, Hash, GiST/GIN indexes
- **Query Optimization** - EXPLAIN plans, anti-patterns
- **Databases** - PostgreSQL, MySQL, MSSQL specifics

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 20+
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd dev-docs

# Install dependencies
bun install
```

### Development

```bash
# Start the development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
bun run build

# Start the production server
bun run start
```

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [TanStack Start](https://tanstack.com/start) | Full-stack React framework with SSR |
| [Fumadocs](https://fumadocs.vercel.app/) | Documentation framework for MDX |
| [Vite](https://vitejs.dev/) | Build tool and dev server |
| [Nitro](https://nitro.unjs.io/) | Server engine |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS |
| [Mermaid](https://mermaid.js.org/) | Diagrams and flowcharts |
| [Biome](https://biomejs.dev/) | Linting and formatting |

## 📁 Project Structure

```
dev-docs/
├── src/
│   ├── app/              # Application routes and pages
│   ├── components/       # React components
│   │   ├── landing/      # Landing page sections
│   │   └── mdx/          # MDX custom components
│   ├── docs/             # MDX documentation content
│   │   ├── architecture/ # Architecture docs
│   │   ├── aws/          # AWS service docs
│   │   └── sql/          # SQL docs
│   ├── lib/              # Utilities and configuration
│   └── styles/           # Global styles
├── content/              # Additional content
├── source.config.ts      # Fumadocs MDX configuration
├── vite.config.ts        # Vite configuration
└── package.json
```

## 📝 Writing Documentation

Documentation is written in MDX format in the `src/docs/` directory.

### Frontmatter

```mdx
---
title: Page Title
description: Brief description of the page
icon: IconName
---
```

### Features

- **Mermaid Diagrams** - Use fenced code blocks with `mermaid` language
- **Interactive File Trees** - Use `<Files>` and `<Folder>` components
- **Code Highlighting** - Syntax highlighting for 100+ languages
- **Math Equations** - KaTeX support for mathematical notation

## 🧹 Scripts

| Script | Description |
|--------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Build for production |
| `bun run start` | Start production server |
| `bun run lint` | Lint and format code |
| `bun run types:check` | Type check TypeScript |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Documentation Guidelines

- Use clear, concise language
- Include practical code examples
- Add diagrams for complex concepts
- Follow existing formatting conventions

## 📄 License

This project is private and proprietary.

---

<p align="center">
  Built with ❤️ for developers
</p>
