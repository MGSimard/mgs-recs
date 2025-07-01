import { jsx, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { M as LogoUploadThing, S as Section } from './Icons-CuUqCmYQ.mjs';
import '@radix-ui/react-hover-card';
import './ssr.mjs';
import '@tanstack/react-router';
import 'next-themes';
import 'react';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import 'lucide-react';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-dialog';
import '@radix-ui/react-tooltip';
import '@radix-ui/react-collapsible';
import 'node:async_hooks';
import '@tanstack/react-router/ssr/server';

const SplitComponent = function PageFileStorage() {
  const $ = c(4);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(LogoUploadThing, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      label: "UploadThing",
      href: "https://uploadthing.com/"
    }];
    t2 = [{
      label: "UploadThing",
      href: "https://docs.uploadthing.com/"
    }];
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Section, { id: "uploadthing", className: "bg-[radial-gradient(circle_at_top,oklch(0.2672_0.0283_8.16),oklch(0.2103_0.0059_285.89))]", logo: t0, title: "UploadThing", links: t1, docsLinks: t2, subTitle: "Better file uploads for developers", description: "UploadThing is the easier, safer alternative to S3. Handle uploads from button to server with a simple, secure, and typesafe experience. Built for modern frameworks and developer happiness. A good option for larger files and/or if your hosting provider charges on egress, less so if you're looking for edge caching.", features: ["Good, straightforward DX", "End-to-end type safety", "Secure authentication on your server", "Works with Next.js, Astro, SvelteKit, Remix, TanStack, and more", "Intuitive dashboard for managing files", "Simple, transparent pricing", "Unlimited uploads and downloads", "Drop-in React components and adapters", "Public and private file support", "2GB free storage"], issues: [] }) });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  return t3;
};

export { SplitComponent as component };
//# sourceMappingURL=index-s3cIi6tS.mjs.map
