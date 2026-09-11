# NYLE Prep Lab

Marketing website for NYLE Prep Lab — NYLE (New York Law Exam) practice
questions. This is a plain HTML/CSS/JS static site (no build step, no
framework) so it can be hosted anywhere for free.

```
index.html        the whole site (hero, NYLE Explained, pricing, contact)
css/style.css      styling
js/main.js         mobile nav + contact form handling
CNAME              custom domain for GitHub Pages
robots.txt         search engine crawl rules
sitemap.xml        search engine sitemap
"code - PR.html"   standalone embeddable quiz widget (not linked from the site yet)
```

## 1. Buy the domain — NYLEPrepLab.com

Buying a domain isn't something I can do for you (it needs your payment
info and identity), but here's exactly how:

1. Pick a registrar: **Namecheap**, **Squarespace Domains** (formerly Google
   Domains), or **Cloudflare Registrar** are all reputable and cheap
   (~$10–15/year for `.com`). Avoid GoDaddy's upsells if you'd rather keep
   it simple.
2. Search `nylepreplab.com` and buy it.
3. Decline the upsells you don't need (site builder, email, "premium DNS",
   etc.) — you don't need any of them for what's below.
4. Turn on **auto-renew** and **WHOIS/ID protection** (usually free) so the
   domain doesn't lapse and your personal info isn't public.

You now own the domain. It won't show a website yet — that happens in step 3.

## 2. Choose where to host the site (free either way)

| | GitHub Pages | Netlify / Vercel |
|---|---|---|
| Cost | Free | Free tier |
| Setup effort | Lowest — this repo already has a `CNAME` file for it | Slightly more (connect repo via their dashboard) |
| Contact form | Needs a 3rd-party service (Formspree — see below) | Netlify has a built-in form handler (no Formspree needed) |
| Best if | You want the simplest possible setup | You might want a working contact form without Formspree, or plan to add more dynamic features later |

**Recommendation:** GitHub Pages if you just want this live quickly with
minimal accounts involved. Netlify if you'd rather skip signing up for
Formspree separately.

### Option A — GitHub Pages

1. In this repo on GitHub: **Settings → Pages**.
2. Under "Build and deployment", set **Source** to "Deploy from a branch",
   branch = `main` (or whichever branch holds this site), folder = `/root`.
3. Under "Custom domain", enter `nylepreplab.com` and save (the `CNAME`
   file in this repo already matches, so GitHub should auto-detect it).
4. At your registrar's DNS settings for `nylepreplab.com`, add:
   - Four **A** records for `@` pointing to:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One **CNAME** record for `www` pointing to `<your-github-username>.github.io`
5. Back in GitHub Pages settings, check **Enforce HTTPS** once DNS has
   propagated (can take up to a few hours).

### Option B — Netlify or Vercel

1. Sign up at netlify.com or vercel.com with your GitHub account.
2. "Add new site / project" → import this repository. No build command
   needed (leave it blank / "static site"); publish directory = `/`.
3. Once deployed, go to the site's **Domain settings** and add
   `nylepreplab.com`.
4. They'll give you exact DNS records (usually an **A** or **ALIAS**
   record for `@`, and a **CNAME** for `www`) — add those at your
   registrar. Delete the `CNAME` file in this repo if you go this route
   (it's only meaningful for GitHub Pages and Netlify/Vercel ignore it,
   but no harm leaving it either).
5. HTTPS is issued automatically once DNS points to them.

DNS changes can take anywhere from a few minutes to ~24 hours to fully
propagate worldwide.

## 3. Connect the contact form

The form in `index.html` currently posts to a placeholder
(`https://formspree.io/f/YOUR_FORM_ID`) and will show a friendly "not
connected yet" message until you fix that.

- **If using Formspree** (works with any host, including GitHub Pages):
  1. Sign up free at [formspree.io](https://formspree.io).
  2. Create a new form, get your form ID (looks like `mzbqwxyz`).
  3. Tell me the ID (or edit it yourself) — I'll replace `YOUR_FORM_ID` in
     `index.html`.
- **If using Netlify:** add `netlify` and `data-netlify="true"` attributes
  to the `<form>` tag instead — tell me and I'll wire that up, no
  Formspree account needed.

Until then, the "You can also reach us directly at contact@nylepreplab.com"
line on the page is the fallback — update that address to whichever inbox
you want (your registrar can usually forward `contact@nylepreplab.com` to
your personal Gmail for free — look for "email forwarding" in your
registrar's dashboard).

## 4. Content notes

- The **NYLE Explained** section is drafted from general public knowledge
  of the exam, not pulled from your Payhip page (I couldn't access
  payhip.com from this environment to copy it directly). Please review it
  for accuracy, and paste your existing copy if you'd like me to swap it
  in verbatim.
- The pricing card and its button link straight to your existing Payhip
  checkout (`https://payhip.com/b/jAn7y`) — buyers land on the same
  purchase/registration flow you already have.
- Nothing here is final — since it's just code, you can ask for any wording,
  color, section, or link to be changed at any time and I'll update and
  push the change.

## Local preview

No build tools needed — just open `index.html` in a browser, or serve it
locally:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.
