/* empty css                                     */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from "../chunks/astro/server_M4DBuI-I.mjs";
import "kleur/colors";
import { $ as $$Layout } from "../chunks/index_DK-oASv6.mjs";
import { $ as $$ClerkLogo, a as $$AstroLogo, L as Learn_more, D as DASHBOARD_CARDS, b as $$Footer } from "../chunks/cards_CzZU3gjC.mjs";
import { $ as $$InternalUIComponentRenderer } from "../chunks/InternalUIComponentRenderer_P33K6I1o.mjs";
import { r } from "../chunks/_@astro-renderers_CyPZBGZd.mjs";
const $$Astro$2 = createAstro();
const $$UserButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$UserButton;
  return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, { ...Astro2.props, "component": "user-button" })}`;
}, "/Users/wobsoriano/Documents/tmp/astro-clerk-template/node_modules/@clerk/astro/components/interactive/UserButton.astro", void 0);
const $$Astro$1 = createAstro();
const $$OrganizationSwitcher = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$OrganizationSwitcher;
  return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, { ...Astro2.props, "component": "organization-switcher" })}`;
}, "/Users/wobsoriano/Documents/tmp/astro-clerk-template/node_modules/@clerk/astro/components/interactive/OrganizationSwitcher.astro", void 0);
const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const user = await Astro2.locals.currentUser();
  if (!user) {
    return Astro2.locals.auth().redirectToSignIn();
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-[75rem] w-full mx-auto"> <div class="grid grid-cols-[1fr_20.5rem] gap-10 pb-10"> <div> <header class="flex items-center justify-between w-full h-16 gap-4"> <div class="flex gap-4"> ${renderComponent($$result2, "ClerkLogo", $$ClerkLogo, {})} <div aria-hidden class="w-px h-6 bg-[#C7C7C8]"></div> ${renderComponent($$result2, "AstroLogo", $$AstroLogo, {})} </div> <div class="flex items-center gap-2"> ${renderComponent($$result2, "OrganizationSwitcher", $$OrganizationSwitcher, { "appearance": {
    elements: {
      organizationPreviewAvatarBox: "size-6"
    }
  } })} ${renderComponent($$result2, "UserButton", $$UserButton, { "afterSignOutUrl": "/", "appearance": {
    elements: {
      userButtonAvatarBox: "size-6"
    }
  } })} </div> </header> ${renderComponent($$result2, "UserDetails", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/wobsoriano/Documents/tmp/astro-clerk-template/src/components/user-details", "client:component-export": "UserDetails" })} </div> <div class="pt-[3.5rem]"> ${renderComponent($$result2, "CodeSwitcher", null, { "client:only": "vue", "client:component-hydration": "only", "client:component-path": "/Users/wobsoriano/Documents/tmp/astro-clerk-template/src/components/code-switcher.vue", "client:component-export": "default" })} </div> </div> </main> ${renderComponent($$result2, "LearnMore", Learn_more, { "cards": DASHBOARD_CARDS })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/wobsoriano/Documents/tmp/astro-clerk-template/src/pages/dashboard.astro", void 0);
const $$file = "/Users/wobsoriano/Documents/tmp/astro-clerk-template/src/pages/dashboard.astro";
const $$url = "/dashboard";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  r as renderers
};
