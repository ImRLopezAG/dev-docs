import { Github, MessageCircle, Twitter } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";

export function FooterSection() {
  return (
    <footer className="border-neutral-200 border-t px-6 py-12 dark:border-neutral-800/50">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 md:grid-cols-4">
          <div>
            <Link href="." className="mb-4 flex items-baseline">
              <Logo className="mr-2 h-8 w-8" />
              <span className="font-semibold text-lg">devdocs</span>
            </Link>
            <p className="mt-3 text-neutral-500 text-sm">
              Comprehensive developer documentation for modern applications.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-medium text-sm">Documentation</h4>
            <ul className="space-y-2 text-neutral-500 text-sm dark:text-neutral-400">
              <li>
                <Link
                  href="."
                  className="transition-colors hover:text-neutral-900 dark:hover:text-white"
                >
                  Docker
                </Link>
              </li>
              <li>
                <Link
                  href="."
                  className="transition-colors hover:text-neutral-900 dark:hover:text-white"
                >
                  SQL
                </Link>
              </li>
              <li>
                <Link
                  href="."
                  className="transition-colors hover:text-neutral-900 dark:hover:text-white"
                >
                  AWS
                </Link>
              </li>
              <li>
                <Link
                  href="."
                  className="transition-colors hover:text-neutral-900 dark:hover:text-white"
                >
                  Architecture
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-medium text-sm">Resources</h4>
            <ul className="space-y-2 text-neutral-500 text-sm dark:text-neutral-400">
              <li>
                <Link
                  href="."
                  className="transition-colors hover:text-neutral-900 dark:hover:text-white"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="."
                  className="transition-colors hover:text-neutral-900 dark:hover:text-white"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="."
                  className="transition-colors hover:text-neutral-900 dark:hover:text-white"
                >
                  Examples
                </Link>
              </li>
              <li>
                <Link
                  href="."
                  className="transition-colors hover:text-neutral-900 dark:hover:text-white"
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-medium text-sm">Community</h4>
            <ul className="space-y-2 text-neutral-500 text-sm dark:text-neutral-400">
              <li>
                <Link
                  href="."
                  className="transition-colors hover:text-neutral-900 dark:hover:text-white"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="."
                  className="transition-colors hover:text-neutral-900 dark:hover:text-white"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="."
                  className="transition-colors hover:text-neutral-900 dark:hover:text-white"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="."
                  className="transition-colors hover:text-neutral-900 dark:hover:text-white"
                >
                  Contributing
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between border-neutral-200 border-t pt-8 md:flex-row dark:border-neutral-800/50">
          <p className="text-neutral-500 text-sm">
            © 2025 devdocs. All rights reserved.
          </p>
          <div className="mt-4 flex items-center gap-6 md:mt-0">
            <Link
              href="."
              className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="."
              className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="."
              className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              <MessageCircle className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
