---
title: 'Next.js!'
date: '2021-03-20'
---
This site was built using Next.js! A beautifully easy (but opinionated) React framework. The process of building was straightforward, and the development tutorial is what let me build this site in just a couple of hours. I spent longer picking the colors for the site than actually building it out.

You should absolutely check out [the Next.js site](https://nextjs.org/)

## Pre-rendering in Next.js
Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Generation** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a 'hybrid' Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by the CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog poasts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of the user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render your page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.
