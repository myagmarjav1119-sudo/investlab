# InvestLab — Business Requirements Document

## 1. Project Overview

**Site name:** investlab  
**Template type:** business  
**Primary language:** Mongolian (mn)  
**Secondary language:** English (en)  
**Tone:** modern  
**Design strategy:** improve-site (reference: https://www.chagnuur.mn)  
**Deployment target:** Vercel (GitHub + Vercel)

InvestLab is a stock-market training (хөрөнгийн зах зээлийн сургалт) website. It should feel like a professional online learning platform: clean, modern, trustworthy, and easy to navigate. The visual reference is Chagnuur.mn, a Mongolian medical e-learning site, adapted for financial-education content.

## 2. Target Audience

- Beginners who want to learn stock-market basics
- Active traders looking for strategy and analysis courses
- Mongolian retail investors
- Young professionals interested in personal finance and investing

## 3. Site Sections

| Section | Purpose |
|---------|---------|
| Hero | Strong first impression, headline, CTA to browse courses |
| Services / Courses | Featured training programs, course categories, search/filter |
| Pricing | Subscription plans or course bundles (similar to Chagnuur.mn packages) |
| Blog | Articles, market analysis, trading tips, announcements |
| About | Why choose InvestLab, mission, instructors, value proposition |
| Contact | Contact form, location, email, phone, social links |

## 4. Functional Requirements

- Responsive layout (mobile-first)
- Multilingual support (Mongolian default, English secondary)
- Course listing with category filters (free / paid / bundle / beginner / advanced)
- Pricing cards with CTA
- Blog post listing with recent articles
- Contact form
- Navigation: home, courses, pricing, blog, about, contact
- CMS-managed content via erxes (pages, posts, navigation, courses)
- SEO-friendly meta tags per page

## 5. Content Requirements

- Hero headline and subheadline in Mongolian and English
- Course cards: title, category, duration, number of lessons, price, CTA
- Pricing plans: title, price, billing period, features list, CTA
- Blog cards: title, excerpt, publish date, featured image
- About section: value propositions with icons
- Contact: address, email, phone, social links

## 6. Design Direction

- Reference: https://www.chagnuur.mn
- Modern, clean, professional
- Primary color: financial blue or deep green (to be refined in design phase)
- Clear typography, generous whitespace
- Card-based layout for courses and pricing
- Trust signals: instructor credentials, student counts, testimonials

## 7. Technical Requirements

- Next.js 16 (from starter repo)
- React 19, TypeScript, Tailwind CSS 4
- Apollo Client for erxes GraphQL
- next-intl for internationalization
- Server Components by default; client components only for interactivity
- Data fetched from erxes CMS with revalidate: 60

## 8. Success Criteria

- Site builds without TypeScript/ESLint errors
- All sections render correctly in Mongolian and English
- Course and pricing content editable via erxes CMS
- Deploys successfully to Vercel
- Mobile and desktop layouts are responsive
