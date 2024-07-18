/* empty css                                     */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from "../chunks/astro/server_M4DBuI-I.mjs";
import "kleur/colors";
import { $ as $$Layout } from "../chunks/index_DK-oASv6.mjs";
import { $ as $$InternalUIComponentRenderer } from "../chunks/InternalUIComponentRenderer_P33K6I1o.mjs";
import { r } from "../chunks/_@astro-renderers_CyPZBGZd.mjs";
const $$Astro$1 = createAstro();
const $$SignUp$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SignUp$1;
  return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, { ...Astro2.props, "component": "sign-up" })}`;
}, "/Users/wobsoriano/Documents/tmp/astro-clerk-template/node_modules/@clerk/astro/components/interactive/SignUp.astro", void 0);
const $$Astro = createAstro();
const $$SignUp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SignUp;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center py-24"> ${renderComponent($$result2, "SignUpAstro", $$SignUp$1, {})} </div> ` })}`;
}, "/Users/wobsoriano/Documents/tmp/astro-clerk-template/src/pages/sign-up.astro", void 0);
const $$file = "/Users/wobsoriano/Documents/tmp/astro-clerk-template/src/pages/sign-up.astro";
const $$url = "/sign-up";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$SignUp,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  r as renderers
};
