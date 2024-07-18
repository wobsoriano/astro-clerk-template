import { c as createComponent, r as renderTemplate, f as renderSlot, g as renderHead, e as addAttribute, b as createAstro } from "./astro/server_M4DBuI-I.mjs";
import "kleur/colors";
import "clsx";
/* empty css                             */
import { customAlphabet, urlAlphabet } from "nanoid";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="A simple and powerful Astro template featuring authentication and user management powered by Clerk."><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>Clerk Astro Template</title>", '</head> <body class="min-h-screen flex flex-col antialiased"> ', ' <script src="https://cdn.jsdelivr.net/npm/prismjs@1/prism.min.js"><\/script> </body> </html> '])), addAttribute(Astro2.generator, "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/wobsoriano/Documents/tmp/astro-clerk-template/src/layouts/Layout.astro", void 0);
var generateSafeId = (defaultSize = 10) => customAlphabet(urlAlphabet, defaultSize)();
export {
  $$Layout as $,
  generateSafeId as g
};
