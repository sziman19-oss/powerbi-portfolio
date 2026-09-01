# Power BI Portfolio — GitHub Pages

A lightweight personal portfolio site built with plain HTML, CSS, and JavaScript. There is no framework, package manager, or build step.

## Files

```text
/
├── index.html
├── styles.css
├── script.js
├── README.md
└── resume.pdf          # add your real resume here
```

## 1. Replace the placeholder content

Open `index.html` in a text editor and search for the placeholder content.

### Name and tagline
Update:
- `Alex Morgan` with your name
- The hero heading/tagline
- The one-line introduction
- The `CURRENT FOCUS` text if desired

### About / bio
Find the `<section id="about">` section and replace the two paragraphs with your real background, skills, education, experience, and analytics interests.

### Projects
Each project is an `<article class="project-card">`.

For each project, replace:
- Project number/category
- Project title
- The 2–3 sentence business-problem description
- Tool tags
- The placeholder project link

Example:

```html
<a class="project-link"
   href="https://app.powerbi.com/view?r=YOUR_REPORT_ID"
   target="_blank"
   rel="noopener">
  View dashboard <span>↗</span>
</a>
```

You can also link to an image:

```html
<a class="project-link"
   href="images/restaurant-dashboard.png"
   target="_blank"
   rel="noopener">
  View dashboard <span>↗</span>
</a>
```

### Contact information
Replace the placeholder email and LinkedIn URL in the footer.

## 2. Add Power BI screenshots or an embedded report

### Option A — Use a screenshot

Create an `images` folder:

```text
images/
└── restaurant-dashboard.png
```

Then replace the project's mock SVG with an image:

```html
<div class="project-visual">
  <img
    src="images/restaurant-dashboard.png"
    alt="Restaurant Performance Power BI dashboard"
  />
</div>
```

Add this to `styles.css`:

```css
.project-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
```

### Option B — Embed a published Power BI report

If you have a Power BI report that is publicly embeddable, replace the project visual with an iframe:

```html
<div class="project-visual powerbi-embed">
  <iframe
    title="Restaurant Performance Dashboard"
    src="YOUR_PUBLISHED_POWER_BI_URL"
    frameborder="0"
    allowFullScreen="true">
  </iframe>
</div>
```

Then add:

```css
.powerbi-embed {
  height: 420px;
  padding: 0;
}

.powerbi-embed iframe {
  width: 100%;
  height: 100%;
  border: 0;
}
```

**Important:** A normal private Power BI report URL will not necessarily work in a public GitHub Pages iframe. Use a Power BI sharing/embed method that is appropriate for the audience and your organization's data-security requirements. Do not publish confidential, student, customer, financial, or other restricted data to the public web.

## 3. Add `resume.pdf`

Put your resume PDF in the root of the repository:

```text
resume.pdf
```

The existing Resume buttons already point to:

```text
resume.pdf
```

If you use a different filename or folder, update those links in `index.html`.

## 4. Deploy with GitHub Pages

### Create the repository

1. Sign in to GitHub.
2. Create a new repository, for example `powerbi-portfolio`.
3. You can make it public if you want the portfolio to be publicly accessible.
4. Add `index.html`, `styles.css`, `script.js`, `README.md`, and `resume.pdf`.
5. Commit and push the files to the `main` branch.

### Enable GitHub Pages

In your repository:

1. Open **Settings**.
2. Select **Pages** in the left sidebar.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch.
5. Select `/ (root)` as the folder.
6. Click **Save**.

GitHub will provide the published Pages URL. It will typically look like:

```text
https://YOUR-USERNAME.github.io/powerbi-portfolio/
```

Give GitHub a short amount of time to publish the site after the first deployment.

## Local preview

Because this is a static site, you can simply double-click `index.html` to preview it in a browser.

For the closest match to GitHub Pages, you can also use a simple local web server, but no build step is required.

## Customization notes

- The primary accent is controlled by `--accent` near the top of `styles.css`.
- The site uses a restrained blue/teal accent intended for a corporate analytics aesthetic.
- The four SVG visuals are deliberately lightweight mockups. Replace them with actual Power BI screenshots or embeds as your projects are finalized.
- The navigation collapses into a mobile menu below 800px.
- No external JavaScript libraries or CSS frameworks are required.
