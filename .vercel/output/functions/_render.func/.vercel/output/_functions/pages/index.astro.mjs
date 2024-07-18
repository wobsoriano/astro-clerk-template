/* empty css                                     */
import { c as createComponent, r as renderTemplate, f as renderSlot, b as createAstro, d as defineScriptVars, a as renderComponent, m as maybeRenderHead } from "../chunks/astro/server_M4DBuI-I.mjs";
import "kleur/colors";
import { g as generateSafeId, $ as $$Layout } from "../chunks/index_DK-oASv6.mjs";
import { $ as $$Image } from "../chunks/_astro_assets_CEDmrkPN.mjs";
import { $ as $$ClerkLogo, a as $$AstroLogo, L as Learn_more, C as CARDS, b as $$Footer } from "../chunks/cards_CzZU3gjC.mjs";
/* empty css                                 */
import "clsx";
import { r } from "../chunks/_@astro-renderers_CyPZBGZd.mjs";
const $$Astro$3 = createAstro();
const $$SignedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SignedIn;
  const { userId } = Astro2.locals.auth();
  return renderTemplate`${userId ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : null}`;
}, "/Users/wobsoriano/Documents/tmp/astro-clerk-template/node_modules/@clerk/astro/components/control/SignedIn.astro", void 0);
const $$Astro$2 = createAstro();
const $$SignedOut = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SignedOut;
  const { userId } = Astro2.locals.auth();
  return renderTemplate`${!userId ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : null}`;
}, "/Users/wobsoriano/Documents/tmp/astro-clerk-template/node_modules/@clerk/astro/components/control/SignedOut.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$SignInButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SignInButton;
  const safeId = generateSafeId();
  const {
    as: Tag = "button",
    forceRedirectUrl,
    fallbackRedirectUrl,
    signUpFallbackRedirectUrl,
    signUpForceRedirectUrl,
    mode,
    ...elementProps
  } = Astro2.props;
  const signInOptions = {
    forceRedirectUrl,
    fallbackRedirectUrl,
    signUpFallbackRedirectUrl,
    signUpForceRedirectUrl
  };
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", '\n  const btn = document.querySelector(`[data-clerk-unstyled-id="${safeId}"]`);\n\n  btn.addEventListener("click", () => {\n    const clerk = window.Clerk\n\n    if (mode === \'modal\') {\n      return clerk.openSignIn(signInOptions);\n    }\n\n    return clerk.redirectToSignIn({\n      ...signInOptions,\n      signInFallbackRedirectUrl: signInOptions.fallbackRedirectUrl,\n      signInForceRedirectUrl: signInOptions.forceRedirectUrl,\n    });\n  });\n})();<\/script>'], ["", " <script>(function(){", '\n  const btn = document.querySelector(\\`[data-clerk-unstyled-id="\\${safeId}"]\\`);\n\n  btn.addEventListener("click", () => {\n    const clerk = window.Clerk\n\n    if (mode === \'modal\') {\n      return clerk.openSignIn(signInOptions);\n    }\n\n    return clerk.redirectToSignIn({\n      ...signInOptions,\n      signInFallbackRedirectUrl: signInOptions.fallbackRedirectUrl,\n      signInForceRedirectUrl: signInOptions.forceRedirectUrl,\n    });\n  });\n})();<\/script>'])), renderComponent($$result, "Tag", Tag, { ...elementProps, "data-clerk-unstyled-id": safeId }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"], renderTemplate`Sign in`)} ` }), defineScriptVars({ signInOptions, mode, safeId }));
}, "/Users/wobsoriano/Documents/tmp/astro-clerk-template/node_modules/@clerk/astro/components/unstyled/SignInButton.astro", void 0);
const screenshotDevices = new Proxy({ "src": "/_astro/user-button@2xrl.U9268CnE.webp", "width": 752, "height": 808, "format": "webp" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "/Users/wobsoriano/Documents/tmp/astro-clerk-template/src/images/user-button@2xrl.webp";
    }
    return target[name];
  }
});
const signIn = new Proxy({ "src": "/_astro/sign-in@2xrl.zKFQqSnO.webp", "width": 800, "height": 1020, "format": "webp" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "/Users/wobsoriano/Documents/tmp/astro-clerk-template/src/images/sign-in@2xrl.webp";
    }
    return target[name];
  }
});
const verify = new Proxy({ "src": "/_astro/verify@2xrl.WRJtwE_6.webp", "width": 800, "height": 800, "format": "webp" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "/Users/wobsoriano/Documents/tmp/astro-clerk-template/src/images/verify@2xrl.webp";
    }
    return target[name];
  }
});
const userButton2 = new Proxy({ "src": "/_astro/user-button-2@2xrl.D7DxaTxN.webp", "width": 752, "height": 432, "format": "webp" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "/Users/wobsoriano/Documents/tmp/astro-clerk-template/src/images/user-button-2@2xrl.webp";
    }
    return target[name];
  }
});
const signUp = new Proxy({ "src": "/_astro/sign-up@2xrl.Bxvui5qk.webp", "width": 800, "height": 1660, "format": "webp" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "/Users/wobsoriano/Documents/tmp/astro-clerk-template/src/images/sign-up@2xrl.webp";
    }
    return target[name];
  }
});
const logo = new Proxy({ "src": "/_astro/logo.DdzVUaow.png", "width": 1259, "height": 1432, "format": "png" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "/Users/wobsoriano/Documents/tmp/astro-clerk-template/src/images/logo.png";
    }
    return target[name];
  }
});
const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-[#FAFAFA] relative" data-astro-cid-j7pv25f6> <div class="w-full bg-white max-w-[75rem] mx-auto flex flex-col border-l border-r border-[#F2F2F2] row-span-3" data-astro-cid-j7pv25f6> <div class="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#F2F2F2]" data-astro-cid-j7pv25f6></div> ${renderComponent($$result2, "Image", $$Image, { "alt": "Device", "class": "size-64 bg-transparent absolute left-1/2 -translate-x-[23.75rem] -top-6 h-[51.375rem] object-contain w-[39.0625rem]", "src": logo, "data-astro-cid-j7pv25f6": true })} <div class="px-12 py-16 border-b border-[#F2F2F4]" data-astro-cid-j7pv25f6> <div class="bg-[#F4F4F5] px-4 py-3 rounded-full inline-flex gap-4" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ClerkLogo", $$ClerkLogo, { "data-astro-cid-j7pv25f6": true })} <div aria-hidden class="w-px h-6 bg-[#C7C7C8]" data-astro-cid-j7pv25f6></div> ${renderComponent($$result2, "AstroLogo", $$AstroLogo, { "data-astro-cid-j7pv25f6": true })} </div> </div> <div class="p-10 border-b border-[#F2F2F2]" data-astro-cid-j7pv25f6> <h1 class="text-5xl font-bold tracking-tight text-[#131316] relative" data-astro-cid-j7pv25f6>
Auth starts here
</h1> <p class="text-[#5E5F6E] pt-3 pb-6 max-w-[30rem] text-[1.0625rem] relative" data-astro-cid-j7pv25f6>
A simple and powerful Astro template featuring authentication and user
          management powered by Clerk.
</p> <div class="relative flex gap-3" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SignedIn", $$SignedIn, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <a href="/dashboard" class="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold" data-astro-cid-j7pv25f6>
Dashboard
</a> ` })} ${renderComponent($$result2, "SignedOut", $$SignedOut, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SignInButton", $$SignInButton, { "class": "px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`
Sign In
` })} ` })} <a href="/#features" class="px-4 py-2 rounded-full text-[#131316] text-sm font-semibold bg-[#F7F7F8]" data-astro-cid-j7pv25f6>
Learn more
</a> </div> </div> <div class="flex gap-8 w-full h-[41.25rem] scale-[1.03]" data-astro-cid-j7pv25f6> <div class="space-y-8 translate-y-12" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "alt": "Device", "src": signUp, "class": "flex-none rounded-xl bg-white shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5", "data-astro-cid-j7pv25f6": true })} </div> <div class="space-y-8 -translate-y-4" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "alt": "Device", "src": verify, "class": "flex-none rounded-xl bg-white shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Image", $$Image, { "alt": "Device", "src": userButton2, "class": "flex-none rounded-xl bg-white shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5", "data-astro-cid-j7pv25f6": true })} </div> <div class="space-y-8 -translate-y-[22.5rem]" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "alt": "Device", "src": signIn, "class": "flex-none rounded-xl bg-white shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Image", $$Image, { "alt": "Device", "src": screenshotDevices, "class": "flex-none rounded-xl bg-white shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5", "data-astro-cid-j7pv25f6": true })} </div> </div> </div> <div class="absolute left-0 right-0 bottom-0 h-[18.75rem] bg-gradient-to-t from-white" data-astro-cid-j7pv25f6></div> </main> ${renderComponent($$result2, "LearnMore", Learn_more, { "cards": CARDS, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "/Users/wobsoriano/Documents/tmp/astro-clerk-template/src/pages/index.astro", void 0);
const $$file = "/Users/wobsoriano/Documents/tmp/astro-clerk-template/src/pages/index.astro";
const $$url = "";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  r as renderers
};
