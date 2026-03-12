# Build Tool & Framework Comparison

For the "Setu" project, we need a tool that excels at **SEO**, handles **static content (Phase 1)** beautifully, and permits **backend integration (Phase 2)**.

| Tool | Pros | Cons | Verdict for Setu |
| :--- | :--- | :--- | :--- |
| **Next.js** | Industry standard; React-based; Built-in SEO; "Fullstack" (API routes); Massive ecosystem. | Can feel "heavy" for a simple 1-page site; Vercel-optimization (though usable elsewhere). | **Selected.** Safe bet for long-term growth. |
| **Vite** | Blazing fast development; Lightweight; Standard React setup. | SEO requires extra setup (SSR/SSG plugins). | **Alternative.** Less ideal for content-heavy sites. |
| **Astro** | **Ships Zero JS** by default; Excellent for blogs. | learning curve for "Island architecture". | **Strong Contender.** Perfect for content-first focus. |
| **Hugo** | Fastest build times; Extremely secure. | Uses Go-templating (not React/JS). | **Strictly Static.** Not recommended for modern CMS. |

### Why Next.js was selected:
1.  **Unified Backend:** Next.js has "API Routes". When we add a contact form or CMS integration in Phase 2, the frontend and backend live in **one folder**.
2.  **React Maturity:** High-quality animation libraries and component ecosystem.
3.  **Deployment:** Best-in-class support for Vercel's free tier.
