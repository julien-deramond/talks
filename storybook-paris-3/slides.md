---
theme: default
background: none
title: Hunt down deprecated classes from your browser
info: |
  ## Hunt down deprecated classes from your browser

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

# Upgrading frameworks and libraries is never as simple as it looks.

</div>

---
layout: center
transition: none
---

<div class="max-w-96">

<arcticons-number-master class="mb-5" />

# Semantic Versioning

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

# Framework Code

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

# User Code

```html
<button class="btn-primary">Primary button</button>
```

<img src="/images/btn-blue.png" class="w-50 mt-5 rounded-[5px]" />

</div>

---
layout: two-cols-header
---

# <span class="text-yellow" text-yellow2 italic v-mark.yellow.underline.delay500="0">New release</span>

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

## User Code

Basic user with the CDN version of Bootstrap.

```html
<button class="btn-primary">Primary button</button>
```

<img src="/images/btn-blue.png" class="w-50 mt-5 rounded-[5px]" />

</template>
<template #2>

## User Code

Basic Sass user customizing a color to red.

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

## User Code

Advanced Sass user customizing a color to red with custom properties.

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
  <span class="text-rose text-2xl"><arcticons:foss-warn class="me-2"/>Breaking</span>
</div>

</template>
</v-switch>

---
layout: center
---

<div class="max-w-96">

<arcticons-symbol-question-mark />

<div class="grid grid-cols-2 justify-between items-center my-5">
<strong class="text-lime">> 95% of users</strong> non-breaking<br>
<strong class="text-rose">< 5% of users</strong> breaking
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

## The maintainer's nightmare

Imagine maintaining a library with thousands or millions of users where every change is a potential landmine.

- Some users want rapid innovation.
- Others demand absolute stability.
- And everyone uses your library differently.

</div>

---
layout: center
---

<div class="max-w-96">

<arcticons-symbol-question-mark class="mb-5" />

## Do versions numbers really matter?

<v-clicks>

I've been asking myself this question a lot.

**Maybe version numbers aren't as important as we think.**<br>What truly matters is the migration process—how you move from one version to the next.

**If a tool migrates your code, version numbers might lose their significance.**<br>Unless you need to track when new features arrive, they might not be worth worrying about at all.

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

<v-clicks>

- Changelog.
- GitHub release.
- Migration guides in the documentation.<br><span class="text-gray text-sm">Nobody _Reads The Fabulous Manual_.</span>
- Create tools to spot breaking changes.<br><span class="text-gray text-sm">Scripts or IDE extensions.</span>
- Create tools to spot and fix your code.<br><span class="text-gray text-sm">Automated migrations by tools like Storybook</span>

</v-clicks>

</div>

---
layout: center
---

<div class="max-w-96">

<span text-pink italic v-mark.pink.underline.delay500="0">However</span>, automated migrations tools:
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
  Sometimes, as maintainers, we need to explore, experiment, and <span text-1.4em font-hand text-blue v-mark.highlight.delay400="{at:1,color:'#60a5fa20'}">have fun with new ideas.</span>
</p>

<v-click>

I stumbled upon a Bootstrap GitHub discussion mentioning an idea about a browser extension highlighting deprecated classes in websites.

And I gave it a try.

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
    <img src="https://avatars.githubusercontent.com/u/17381666?s=200" class="showcases-profile-picture" alt="" width="50" height="50" loading="lazy" decoding="async">
  </div>
</div>

</div>

---
layout: image
---

<img src="/images/bootstrap-deprecated-classes-extension-1.png" />

---
layout: image
---

<img src="/images/bootstrap-deprecated-classes-extension-2.png" />

---
layout: two-cols
transition: none
---

<arcticons-logitech-g class="mb-5" />

## Technical Breakdown

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

## Technical Breakdown

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

## Technical Breakdown

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

## Technical Breakdown

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

## Technical Breakdown

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

The tool is rather handy while you're migrating from one version to another.

<v-click>

## Beyond Just Migration

**Context** at Orange our web framework is a fork of Bootstrap. So removed and deprecated classes are almost the same.

</v-click>

<v-clicks>

<span text-yellow italic v-mark.yellow.underline.delay500="0">A usage I didn't expect</span>

This extension is a **design system audit tool**!

I can spy whether Orange websites have migrated to the latest version of Boosted just by visiting them.

And without any source code access.

</v-clicks>

</div>

---
layout: image
---

<img src="/images/orange.fr-screenshot.png" />

---
layout: center
---

<div class="max-w-96">

<arcticons-collage-maker1 class="mb-5" />

## Going further

You probably don't use Bootstrap, but reuse the idea, the code, adapt it, and make it your own. It's Open Source under the MIT license.

<v-clicks>

- Create an extension for your design system library of components
- Add some features<br><span class="text-sm leading-3">Automatic issue creation, screenshots + webhook, links to the documentation</span>
- Make it install by your developers
- Create a generic extension to upload a JSON file with classes
- Do the same thing in a Storybook addon

</v-clicks>

</div>

---
layout: center
---

<div class="max-w-96">

<arcticons-collabora-office class="mb-5" />

## Closing: An Invitation

Open Source is about sharing and collaboration.

Hope it inspires you to create your own tools with other ideas for your library, your design system, or your favorite framework.

Let's make the migration process easier for everyone. <arcticons-simplethankyou />

</div>

---
layout: center
class: text-center
---

<arcticons-simplethankyou class="mb-5" />

# Thank you!

Presentation under the [CC BY-SA 4.0 license](https://creativecommons.org/licenses/by-sa/4.0/)

<img src="/images/qrcode.png" alt="QR code to the slides" class="w-40 inline-block">
