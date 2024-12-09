---
theme: default
background: none
title: Hunt down deprecated classes from your browser
info: |
  Framework upgrades happen, but not everyone can upgrade at the same time. As Bootstrap maintainers, we recognize our role goes beyond just shipping new versions—we need to help teams navigate these transitions smoothly. Enter our browser extension: a simple tool that spots outdated Bootstrap classes right in your production environment. No source code access needed, no complex setup required. Beyond just finding deprecated classes, we'll explore how this approach opens doors for broader applications, from validating design systems to helping other framework communities. Join us to see how the humble browser extension can become a powerful ally in keeping web applications current.

  [Julien Déramond](https://github.com/julien-deramond) at [Storybook Paris #3 - What's your status](https://www.eventbrite.fr/e/billets-storybook-paris-3-whats-your-status-1077460516409)

  - [Source code](https://github.com/julien-deramond/talks/tree/main/storybook-paris-3)
highlighter: shiki
drawings:
  persist: false
transition: fade-out
mdc: true
download: true
---

# Hunt down deprecated classes from your browser

by Julien Déramond

<div class="abs-bl mx-14 my-12 flex">
  <img src="/images/storybook.svg" class="h-11">
  <div class="ml-3 flex flex-col text-left">
    <div>Storybook Paris #3 - What's your status</div>
    <div class="text-sm opacity-50">December 12th, 2024</div>
  </div>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/julien-deramond/talks/tree/main/ow2con24" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---
layout: intro
---

## Julien Déramond

<p></p>

<img src="/images/Orange_logo.png" class="w-10 inline-block me-3" /> [Orange Design System](https://system.design.orange.com/) tech lead

<img src="/images/bootstrap-logo.svg" alt="Bootstrap logo" class="w-10 inline-block me-3" /> [Bootstrap](https://getbootstrap.com/) core team member

<img src="/images/OpenReSource_Logo.png" class="w-10 inline-block me-3" /> [Open \{re\}Source](https://openresource.dev) and [Advent of Open Source](https://adventofopensource.com) creator

<a href="https://github.com/julien-deramond" alt="GitHub" title="Open in GitHub" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-github />
</a> · <a href="https://www.linkedin.com/in/julienderamond" alt="LinkedIn" title="Open in LinkedIn" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-linkedin />
</a> · <a href="https://x.com/JulienDeramond" alt="X" title="Open in X" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-x />
</a> · <a href="https://bsky.app/profile/julien-deramond.bsky.social" alt="Bluesky" title="Open in Bluesky" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
  <arcticons-bluesky />
</a>

---
layout: quote
---

<div class="max-w-[600px]">

# Who had to deal with complex migrations of major versions?

Upgrading frameworks and libraries is never as simple as it looks.

</div>

---
layout: center
transition: none
---

<div class="max-w-96">

<arcticons-number-master class="mb-5" />

# Semantic versioning

<div class="grid grid-cols-5 text-center text-6xl font-bold gap-8 mb-10">
  <div v-mark="{ at: 1, color: 'pink', type: 'circle' }" v-if="$slidev.nav.clicks === 1">1</div>
  <div v-if="$slidev.nav.clicks !== 1">1</div>
  <div>.</div>
  <div v-mark="{ at: 2, color: 'lightblue', type: 'circle' }" v-if="$slidev.nav.clicks === 2">2</div>
  <div v-if="$slidev.nav.clicks !== 2">2</div>
  <div>.</div>
  <div v-mark="{ at: 3, color: 'lime', type: 'circle' }" v-if="$slidev.nav.clicks === 3">3</div>
  <div v-if="$slidev.nav.clicks !== 3">3</div>
</div>

<div v-click>
  <p>
    <strong v-mark="{ at: 1, color: 'pink', type: 'underline' }" class="me-10">Major version</strong>
    <span class="text-sm">Breaking changes</span>
  </p>
</div>

<div v-click>
  <p>
    <strong v-mark="{ at: 2, color: 'lightblue', type: 'underline'}" class="me-10">Minor version</strong>
    <span class="text-sm">New features (non-breaking)</span>
  </p>
</div>

<div v-click>
  <p>
    <strong v-mark="{ at: 3, color: 'lime', type: 'underline'}" class="me-10">Minor version</strong>
    <span class="text-sm">Fixes, docs typos (non-breaking)</span>
  </p>
</div>

</div>

---
layout: quote
---

<div class="max-w-[600px]">

# It's not always that simple.

Let's dive into one Bootstrap example.

</div>

---
layout: two-cols
---

# Framework code

Simplified version of Bootstrap's code:

```scss
// Semantic token
$primary: blue;

// Component token
$btn-bg-primary: $primary;

// Component style
.btn-primary {
  background-color: $btn-bg-primary;
}
```

::right::

<div v-click>

# User code

```html
<button class="btn-primary">Primary button</button>
```

<img src="/images/btn-blue.png" class="w-50 mt-5 rounded-[5px]" />

</div>

---
layout: two-cols-header
---

# <span class="text-yellow font-hand text-5xl">New release</span>

::left::

## Framework Code

**Not a real change** but let's say we need to add and use a `change-opacity` function for whatever reason.

```diff
+ @function change-opacity($color, $opacity: 1) {
+  @return rgba($color, $opacity);
+ }

$primary: blue;
- $btn-bg-primary: $primary;
+ $btn-bg-primary: change-opacity($primary);

.btn-primary {
  background-color: $btn-bg-primary;
}
```

::right::

<v-switch>
<template #1>

## User code

Basic usage.

```html
<button class="btn-primary">Primary button</button>
```

<img src="/images/btn-blue.png" class="w-50 mt-5 rounded-[5px]" />

</template>
<template #2>

## User code

Customizing primary color.

```scss
// Overriding the semantic token
$primary: red;
```

```html
<button class="btn-primary">Primary button</button>
```

<img src="/images/btn-red.png" class="w-50 mt-5 rounded-[5px]" />

</template>
<template #3>

## User code

Customizing primary color **with custom property**.

```scss
// Defining a custom property for the primary color
:root {
  --ds-primary: red;
}

// Overriding the semantic token
$primary: var(--ds-primary);
```

```html
<button class="btn-primary">Primary button</button>
```

<div class="grid grid-cols-2 justify-between items-center mt-5">
  <img src="/images/btn-default.png" class="w-50 rounded-[5px]" />
  <span class="text-rose text-4xl font-bold font-hand">Breaking!</span>
</div>

</template>
</v-switch>

---
layout: center
---

<div class="max-w-96">

<arcticons-symbol-question-mark />

<div class="grid grid-cols-2 justify-between items-center my-5">
<strong class="text-lime text-2xl">> 95% of users</strong> non-breaking<br>
<strong class="text-rose text-2xl">< 5% of users</strong> breaking
</div>

<v-click>

## What do you do?

</v-click>

<v-clicks>

- Is it a major, minor, or patch version?
- What if all your modifications are like that?
- Do we stay with a minor version 0 forever?
  <img src="/images/hugo-v0.139.3.png" class="w-50" />

</v-clicks>

</div>

---
layout: center
---

<div class="max-w-96">

<arcticons-soulknight class="mb-5" />

<span class="text-2xl text-yellow font-hand me-1">Imagine</span> maintaining a library with thousands or millions of users where every change is a potential landmine.

- Some users want rapid innovation.
- Others demand absolute stability.
- And everyone uses your library differently.

</div>

---
layout: center
---

<div class="max-w-96">

<arcticons-symbol-question-mark class="mb-5" />

## Do version numbers really matter?

<v-clicks>

I've been asking myself this question a lot.

**Are version numbers really that important?**

What truly matters is the _migration process_—how you move from one version to the next.

**If a tool automatically migrates your code, do version numbers still matter?**

</v-clicks>

</div>

---
layout: center
---

<div class="max-w-96">

<arcticons-onlyoffice-documents class="mb-5" />

## Our role as maintainers

Balancing innovation and stability.

Beyond that, how can we make sure migrations are smooth for everyone?

<v-clicks class="text-sm">

- Changelog.
- GitHub release.
- Migration guides in the documentation.
- Create tools to spot breaking changes.<br><span class="text-gray text-sm">Scripts or IDE extensions.</span>
- Create tools to spot **and fix** breaking changes.<br><span class="text-gray text-sm">Automated migrations (e.g., Storybook or Angular)</span>

</v-clicks>

</div>

---
layout: center
---

<div class="max-w-96">

<span class="text-pink font-hand text-3xl">However,</span> automated migrations tools:
- are not always perfect,
- can be costly to create, and maintain,
- and are hard to craft.

Especially when your core team is small and working on the project in their spare time.

</div>

---
layout: center
---

<div class="max-w-96">

<arcticons-cinexplore class="mb-5" />

## Experimentation

<p v-after="1">
  Sometimes, as maintainers, we need to explore, experiment, and <span class="text-2xl font-hand text-blue">have fun with new ideas.</span>
</p>

<v-click>

I stumbled upon a Bootstrap GitHub discussion mentioning an idea about a browser extension highlighting deprecated classes in websites.

**And I gave it a try.**

</v-click>

<div v-click class="flex mt-5 max-w-120">
  <div class="showcases-profile-card">
    <span class="flex showcases-profile-content">
      <a href="https://github.com/slidevjs/slidev">
        <span class="showcases-profile-name">
          <span style="font-weight: 400">julien-deramond/</span>
          <br>
          <b>bootstrap-deprecated-classes-extension</b>
        </span>
      </a>
      <span class="showcases-profile-description">Browser extension highlighting Bootstrap deprecated classes in websites</span>
    </span>
    <img src="/images/17381666.jpg" class="showcases-profile-picture" alt="" width="50" height="50" loading="lazy" decoding="async">
  </div>
</div>

</div>

---
layout: image
---

<img class="rounded-md" src="/images/bootstrap-deprecated-classes-extension-1.png" />

---
layout: image
---

<img class="rounded-md" src="/images/bootstrap-deprecated-classes-extension-2.png" />

---
layout: two-cols
transition: none
---

<arcticons-logitech-g class="mb-5" />

## Technical breakdown

Here's how the extension works.

1. Fetch the latest Bootstrap CDN versions of Bootstrap 4 and 5 CSS files.

::right::

Bootstrap 4

```css
/*!
 * Bootstrap v4.6.2 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors
 * Copyright 2011-2022 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
:root {
  --blue: #007bff;
  --indigo: #6610f2;
```

Bootstrap 5

```css
@charset "UTF-8";
/*!
 * Bootstrap  v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
:root,
[data-bs-theme=light] {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
```

---
layout: two-cols
transition: none
---

<arcticons-logitech-g class="mb-5" />

## Technical breakdown

Here's how the extension works.

1. <span class="text-gray-500">Fetch the latest Bootstrap CDN versions of Bootstrap 4 and 5 CSS files.</span>
2. Parse, find, and order classes alphabetically in a JSON file.

::right::

Bootstrap 4

```json
{
  "classes": [
    ".accordion",
    ".active",
    ".alert",
    ".alert-danger",
    ".alert-dark",
    ".alert-dismissible",
    ".alert-heading",
```

Bootstrap 5

```json
{
  "classes": [
    ".accordion",
    ".accordion-body",
    ".accordion-button",
    ".accordion-collapse",
    ".accordion-flush",
    ".accordion-header",
    ".accordion-item",
```

---
layout: two-cols
transition: none
---

<arcticons-logitech-g class="mb-5" />

## Technical breakdown

Here's how the extension works.

1. <span class="text-gray-500">Fetch the latest Bootstrap CDN versions of Bootstrap 4 and 5 CSS files.</span>
2. <span class="text-gray-500">Parse, find, and order classes alphabetically in a JSON file.</span>
3. Remove common classes. Generate a JSON file listing removed classes for Bootstrap 4.

::right::

```json
{
  "removed": [
    ".arrow",
    ".badge-danger",
    ".badge-dark",
    ".badge-info",
    ".badge-light",
    ".badge-pill",
    ".badge-primary",
    ".badge-secondary",
    // ...
  ],
  "added": [
    ".accordion-body",
    ".accordion-button",
    ".accordion-collapse",
    ".accordion-flush",
    ".accordion-header",
    ".accordion-item",
    ".align-content-xxl-around",
    ".align-content-xxl-between",
    // ...
  ]
}
```

---
layout: two-cols
transition: none
---

<arcticons-logitech-g class="mb-5" />

## Technical breakdown

Here's how the extension works.

1. <span class="text-gray-500">Fetch the latest Bootstrap CDN versions of Bootstrap 4 and 5 CSS files.</span>
2. <span class="text-gray-500">Parse, find, and order classes alphabetically in a JSON file.</span>
3. <span class="text-gray-500">Remove common classes. Generate a JSON file listing removed classes for Bootstrap 4.</span>
4. Loop over the arrays of classes, and create a stylesheet to highlight removed classes in red.

::right::

```css {1-14}
.bootstrap-browser-extension-bs-4 {
  .arrow {
    border: 5px solid red;
    border-radius: 0;

    &::before {
      color: #000;
      background-color: rgb(189, 127, 127);
      padding: 2px;
      border: 2px solid black;
      z-index: 10000;
      content: '.arrow'
    }
  }
  
  .badge-danger {
    border: 5px solid red;
    border-radius: 0;

    &::before {
      color: #000;
      background-color: rgb(189, 127, 127);
      padding: 2px;
      border: 2px solid black;
      z-index: 10000;
      content: '.badge-danger'
```

---
layout: two-cols
---

<arcticons-logitech-g class="mb-5" />

## Technical breakdown

Here's how the extension works.

1. <span class="text-gray-500">Fetch the latest Bootstrap CDN versions of Bootstrap 4 and 5 CSS files.</span>
2. <span class="text-gray-500">Parse, find, and order classes alphabetically in a JSON file.</span>
3. <span class="text-gray-500">Remove common classes. Generate a JSON file listing removed classes for Bootstrap 4.</span>
4. <span class="text-gray-500">Loop over the arrays of classes, and create a stylesheet to highlight removed classes in red.</span>
5. Each time we click on a checkbox, we inject the `.bootstrap-browser-extension-bs-{number}` class in page's `<body>`.

::right::

```html {4-6}
<!DOCTYPE html>
<html lang="en">
  <head></head>
  <body
    class="bg-body bootstrap-browser-extension-bs-4"
  >
  </body>
</html>
```

---
layout: center
---

<div class="max-w-96">

<arcticons-1more-music class="mb-5" />

The extension is quite useful while you're migrating your project from Bootstrap 4 to 5.

<v-click>

<div class="grid grid-cols-3 text-sm" style="grid-template-columns: 30px 1fr 30px;">
  <span class="text-6xl text-orange text-left">(</span>
  <span><strong>Context at Orange:</strong> Our web framework is a fork of Bootstrap → most deprecated classes are  the same.</span>
  <span class="text-6xl text-orange text-right">)</span>
</div>

</v-click>

<v-clicks>

<span class="text-2xl text-orange italic font-hand">A usage I didn't expect</span>

This extension is a **design system audit tool**!

I can spy on Orange websites to see if they’ve migrated to the latest version of our framework—just by visiting them.

**No source code access needed.**

</v-clicks>

</div>

---
layout: image
---

<img class="rounded-md" src="/images/orange.fr-screenshot.png" />

---
layout: center
---

<div class="max-w-96">

<arcticons-collage-maker1 class="mb-5" />

## Going further

<span class="text-xs">You probably don't use Bootstrap 🫥but</span> **it's Open Source.**

**Reuse** the idea, the code, adapt it, and make it your own. 

<v-clicks class="text-sm">

- **Create an extension** for your design system library of components
- **Add some features** like automatic issue creation, screenshots + webhook, links to the documentation
- **Add an extension to your recommendations** and make it installed by your developers
- **Create a generic extension** to upload a JSON file of deprecated content, whatever the framework
- Do the same thing in a **Storybook addon**

</v-clicks>

</div>

---
layout: center
---

<div class="max-w-96">

<arcticons-collabora-office />

Open Source is `code`, but is also <span class="text-lime font-hand text-2xl">ideas, sharing and collaboration</span>.

Hope it'll inspire you to **create your own tools** with other ideas for your library, your design system, or your favorite framework.

**Together**, let's make the migration process easier for everyone. <arcticons-simplethankyou />

</div>

---
layout: center
class: text-center
---

<arcticons-simplethankyou class="mb-5" />

# <span class="font-hand">Thank you!</span>

<span class="text-xs">Presentation under the [CC BY-SA 4.0 license](https://creativecommons.org/licenses/by-sa/4.0/).<br>Powered by [Slidev](https://sli.dev/).</span>

<img src="/images/qrcode.png" alt="QR code to the slides" class="w-40 inline-block">
