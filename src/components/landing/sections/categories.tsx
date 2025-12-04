import {
  ArrowRight,
  Cloud,
  Container,
  Database,
  GitBranch,
} from "lucide-react";
import Link from "next/link";
import { LandingSection } from "./section";
export function CategoriesSection() {
  return (
    <LandingSection className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-semibold text-3xl tracking-tight">
            Documentation
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Choose a topic to get started
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Docker Card */}
          <CategoryCard
            icon={
              <Container className="h-6 w-6 text-blue-500 dark:text-blue-400" />
            }
            title="Docker"
            description="Containerization, Docker Compose, multi-stage builds, and orchestration."
            articleCount={24}
            colorClass="blue-500"
            href="#"
          />

          {/* SQL Card */}
          <CategoryCard
            icon={
              <Database className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />
            }
            title="SQL"
            description="Query optimization, indexing strategies, PostgreSQL, MySQL fundamentals."
            articleCount={32}
            colorClass="emerald-500"
            href="#"
          />

          {/* AWS Card */}
          <CategoryCard
            icon={
              <Cloud className="h-6 w-6 text-orange-500 dark:text-orange-400" />
            }
            title="AWS"
            description="EC2, Lambda, S3, RDS, IAM, CloudFormation, and serverless patterns."
            articleCount={48}
            colorClass="orange-500"
            href="#"
          />

          {/* Architecture Card */}
          <CategoryCard
            icon={
              <GitBranch className="h-6 w-6 text-purple-500 dark:text-purple-400" />
            }
            title="Architecture"
            description="Design patterns, microservices, clean architecture, and best practices."
            articleCount={28}
            colorClass="purple-500"
            href="#"
          />
        </div>
      </div>
    </LandingSection>
  );
}

function CategoryCard(props: {
  icon: React.ReactNode;
  title: string;
  description: string;
  articleCount: number;
  colorClass: string;
  href: string;
}) {
  const { icon, title, description, articleCount, colorClass, href } = props;
  return (
    <Link
      href={href}
      className={`group rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900/50 hover:border-${colorClass}/50 shadow-sm transition-all hover:bg-neutral-50 dark:shadow-none dark:hover:bg-neutral-900`}
    >
      <div
        className={`h-12 w-12 bg-${colorClass}/10 mb-4 flex items-center justify-center rounded-xl group-hover:bg-${colorClass}/20 transition-colors`}
      >
        {icon}
      </div>
      <h3 className="mb-2 font-medium text-lg">{title}</h3>
      <p className="mb-4 text-neutral-600 text-sm dark:text-neutral-400">
        {description}
      </p>
      <div
        className={`flex items-center gap-2 text-sm text-${colorClass} dark:text-${colorClass}`}
      >
        <span>{articleCount} articles</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
