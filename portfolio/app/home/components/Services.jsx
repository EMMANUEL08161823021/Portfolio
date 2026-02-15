'use client';

import React from 'react';

const SERVICE_DATA = [
  {
    id: 'web-app',
    title: 'Web Application Development',
    description:
      'I design and build responsive web applications that are fast, accessible and scalable — from marketing sites to admin dashboards.',
    href: '#',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 3v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 3v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'auth',
    title: 'Authentication & Security',
    description:
      'Implement robust authentication (JWT, OAuth) and role-based access control to protect user data and secure your app.',
    href: '#',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2l6 4v4c0 5-3 9-6 11-3-2-6-6-6-11V6l6-4z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'payments',
    title: 'Payment Integration & E-commerce',
    description:
      'Integrate Stripe, Paystack or other gateways and build a smooth checkout experience that increases conversions.',
    href: '#',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <p className="text-sm font-medium text-indigo-600 tracking-wider">SERVICES</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Services that I can provide
          </h2>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
            I build user-focused web experiences — from secure auth to payment flows and full web apps.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_DATA.map((s) => (
            <article
              key={s.id}
              className="relative group bg-white rounded-xl shadow-sm hover:shadow-lg transition p-6 flex flex-col"
              aria-labelledby={`${s.id}-title`}
            >
              <div className="flex items-center gap-4">
                <div className="flex-none rounded-md bg-indigo-50 text-indigo-600 p-3">
                  {s.icon}
                </div>
                <div className="flex-1">
                  <h3 id={`${s.id}-title`} className="text-lg font-semibold text-slate-900">
                    {s.title}
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-600 flex-1">{s.description}</p>

              <div className="mt-6">
                <a
                  href={s.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
                  aria-label={`View details for ${s.title}`}
                >
                  <span>View</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* decorative stripe */}
              <div className="absolute -bottom-1 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-indigo-200 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
