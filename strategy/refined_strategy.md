# Setu Strategy: FOSS & Branding

Based on your feedback, we are moving forward with a **Hybrid Custom Next.js Build** (Mantine + Tailwind CSS) that prioritizes Open Source (FOSS) tools to keep costs low and maximize flexibility.

## 🎨 Branding: Color Brainstorming
"Setu" (Bridge) implies connection, transition, and stability. Since we are targeting the Indian Diaspora for mental wellness, we want colors that feel "home-like" yet professional.

### Palette 1: "The Gentle Saffron & Earth" (Warm & Grounded)
*   **Primary:** Deep Terracotta or Muted Saffron (#D97706) - *Represents heritage and warmth.*
*   **Secondary:** Sand/Cream (#FDF2F2) - *For a clean, clinical yet soft background.*
*   **Accent:** Forest Green (#14532D) - *Stability, growth, and nature.*

### Palette 2: "The Tranquil Confluence" (Calm & Trust)
*   **Primary:** Indigo or Midnight Blue (#1E3A8A) - *Reliability and depth.*
*   **Secondary:** Soft Teal or Seafoam (#99F6E4) - *Clarity and emotional healing.*
*   **Accent:** Marigold Copper (#B45309) - *A pop of traditional Indian energy.*

---

## 🛠️ FOSS Alternatives (Low Spend / Private)

### 1. Content Management (The Blog)
*   **Payload CMS (MIT License):** Extremely powerful, developer-first, and completely free to self-host or use locally. It is the best "Option 1" FOSS choice.
*   **Ghost (GPL License):** Specifically designed for blogs. Can be self-hosted for free.
*   **Direct Markdown/MDX:** For Phase 1, we can simply write blog posts as `.md` files in the code. **Cost: $0. Complexity: Low.** This is highly recommended for a "low spend" start.

### 2. Data Handling & Forms
*   **Formbricks (AGPL):** Open-source survey/form engine. Can be self-hosted.
*   **Direct Database (PostgreSQL):** We can build a simple custom form that saves directly to a database with encryption at rest. Using **Supabase** (Open Source backend as a service) has a very generous free tier and handles this safely.

---

## 🔒 Privacy: GDPR vs. HIPAA
GDPR is considered the most comprehensive framework for individual data rights.

*   **GDPR:** Best for *Privacy* (Rights to be forgotten, access to data, portability).
*   **HIPAA (US):** Highly specific about *Security* (Audit trails, encryption standards, and BAAs).
*   **Our Approach:** We will build with **GDPR-first principles** (Consent, Minimal data collection, Encryption). This covers the vast majority of global requirements.
