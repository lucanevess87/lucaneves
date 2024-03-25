import Link from 'next/link';
import React from 'react';

import { AboutBackground } from './AboutBackground';

export const AboutSection = () => (
  <section id="about" className="w-full py-12 md:py-24 lg:py-32">
    <div className="relative flex justify-between w-full items-center">
      <div className="absolute grid px-20 top-28 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Faster iteration. More innovation.
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The platform for rapid progress. Let your team focus on shipping features instead of
              managing infrastructure with automated CI/CD, built-in testing, and integrated
              collaboration.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-300"
              href="#"
            >
              Contact Sales
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-300"
              href="#"
            >
              Tour the Platform
            </Link>
          </div>
        </div>
      </div>
      <AboutBackground />
    </div>
  </section>
);
