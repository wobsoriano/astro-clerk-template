import { e as ensure_array_like, a as attr, b as escape_html } from "./_@astro-renderers_CyPZBGZd.mjs";
import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from "./astro/server_M4DBuI-I.mjs";
import "kleur/colors";
import "clsx";
function Learn_more($$payload, $$props) {
  const { cards } = $$props;
  const each_array = ensure_array_like(cards);
  $$payload.out += `<div class="relative bg-white" id="features"><div class="grid grid-cols-4 gap-8 max-w-[75rem] mx-auto w-full pt-16 pb-24"><div><span class="text-[0.8125rem]/5 text-[#6C47FF] font-medium">What's next</span> <h2 class="text-xl/[1.625rem] font-semibold text-[#131316] tracking-tight mt-2 mb-3">Learn more from our resources</h2> <p class="text-[0.8125rem]/5 text-[#5E5F6E]">Prebuilt components to handle essential functionality like user sign-in,
        sign-up, and account management.</p></div> <!--[-->`;
  for (let $$index = 0; $$index < each_array.length; $$index++) {
    const card = each_array[$$index];
    $$payload.out += `<a${attr("href", card.href)} target="_blank" class="border border-[#F2F2F4] rounded-lg overflow-hidden flex flex-col"><div class="px-4 py-3 bg-[#FAFAFB] space-y-1 flex-1"><h3 class="text-sm font-medium text-[#131316] tracking-tight">${escape_html(card.title)}</h3> <p class="text-[0.8125rem]/5 text-[#5E5F6E]">${escape_html(card.description)}</p></div> <div class="bg-[#F5F5F7] text-[#131316] px-4 py-2 text-[0.8125rem]/5 font-medium flex items-center gap-1.5 border-t border-[#EDEDF0]">${escape_html(card.linkText)} <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="12" height="12" rx="3" fill="#EEEEF0"></rect><path d="M5.75 10.25L10.25 5.75M10.25 5.75H6.75M10.25 5.75V9.25" stroke="#9394A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></a>`;
  }
  $$payload.out += `<!--]--></div></div>`;
}
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="max-w-[75rem] bg-white w-full mx-auto pt-6 border-t border-[#EEEEF0] flex justify-between pb-24"> <a href="https://clerk.dev" target="_blank" class="flex gap-2 font-medium text-[0.8125rem] items-center"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.00097 10.5C9.38167 10.5 10.501 9.38071 10.501 8C10.501 6.61929 9.38167 5.5 8.00097 5.5C6.62026 5.5 5.50098 6.61929 5.50098 8C5.50098 9.38071 6.62026 10.5 8.00097 10.5Z" fill="#131316"></path> <path d="M12.5061 13.9192C12.7188 14.1319 12.6975 14.484 12.4475 14.6515C11.1759 15.5032 9.64652 15.9999 8.0011 15.9999C6.35566 15.9999 4.82624 15.5032 3.55464 14.6515C3.30473 14.484 3.28337 14.1319 3.49608 13.9192L5.32304 12.0922C5.48816 11.9271 5.74432 11.901 5.95216 12.0075C6.5667 12.3223 7.26315 12.4999 8.0011 12.4999C8.73904 12.4999 9.4355 12.3223 10.0501 12.0075C10.2579 11.901 10.514 11.9271 10.6791 12.0922L12.5061 13.9192Z" fill="#131316"></path> <path d="M12.4464 1.3485C12.6964 1.5159 12.7177 1.86804 12.505 2.08075L10.678 3.90772C10.5129 4.07284 10.2567 4.09892 10.0489 3.99245C9.43431 3.67763 8.7379 3.5 7.99996 3.5C5.51469 3.5 3.49998 5.51472 3.49998 8C3.49998 8.73794 3.67761 9.4344 3.99244 10.049C4.09891 10.2568 4.07283 10.5129 3.90771 10.678L2.08074 12.5051C1.86804 12.7177 1.51589 12.6964 1.34849 12.4465C0.496762 11.1748 0 9.64542 0 8C0 3.58172 3.58171 0 7.99996 0C9.64542 0 11.1748 0.496764 12.4464 1.3485Z" fill="#131316" fill-opacity="0.5"></path> </svg>
Clerk
<span class="text-[#5E5F6E]">${(/* @__PURE__ */ new Date()).getFullYear()}</span> </a> <ul class="flex gap-2 ml-auto"> <li> <a href="https://clerk.com/docs?utm_source=vercel-template&utm_medium=template_repos&utm_campaign=nextjs_template" target="_blank" class="flex items-center gap-2 font-medium text-[0.8125rem] rounded-full px-3 py-2 hover:bg-gray-100">
Clerk Docs${" "} <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="2" y="2" width="12" height="12" rx="3" fill="#EEEEF0"></rect> <path d="M5.75 10.25L10.25 5.75M10.25 5.75H6.75M10.25 5.75V9.25" stroke="#9394A1" stroke-width="1.5" stroke-line-cap="round" stroke-line-join="round"></path> </svg> </a> </li> <li> <a href="https://github.com/wobsoriano/astro-clerk-template" target="_blank" class="flex items-center gap-2 font-medium text-[0.8125rem] rounded-full px-3 py-2 hover:bg-gray-100"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_29_46773)"> <path d="M8 0.197998C3.58 0.197998 0 3.78 0 8.198C0 11.7333 2.292 14.7313 5.47 15.788C5.87 15.8633 6.01667 15.616 6.01667 15.4033C6.01667 15.2133 6.01 14.71 6.00667 14.0433C3.78133 14.526 3.312 12.97 3.312 12.97C2.948 12.0467 2.422 11.8 2.422 11.8C1.69733 11.304 2.478 11.314 2.478 11.314C3.28133 11.37 3.70333 12.138 3.70333 12.138C4.41667 13.3613 5.576 13.008 6.03333 12.8033C6.10533 12.286 6.31133 11.9333 6.54 11.7333C4.76333 11.5333 2.896 10.8453 2.896 7.78C2.896 6.90666 3.206 6.19333 3.71933 5.63333C3.62933 5.43133 3.35933 4.618 3.78933 3.516C3.78933 3.516 4.45933 3.30133 5.98933 4.336C6.62933 4.158 7.30933 4.07 7.98933 4.066C8.66933 4.07 9.34933 4.158 9.98933 4.336C11.5093 3.30133 12.1793 3.516 12.1793 3.516C12.6093 4.618 12.3393 5.43133 12.2593 5.63333C12.7693 6.19333 13.0793 6.90666 13.0793 7.78C13.0793 10.8533 11.2093 11.53 9.42933 11.7267C9.70933 11.9667 9.96933 12.4573 9.96933 13.2067C9.96933 14.2773 9.95933 15.1373 9.95933 15.3973C9.95933 15.6073 10.0993 15.8573 10.5093 15.7773C13.71 14.728 16 11.728 16 8.198C16 3.78 12.418 0.197998 8 0.197998Z" fill="black"></path> </g> <defs> <clipPath id="clip0_29_46773"> <rect width="16" height="16" fill="white"></rect> </clipPath> </defs> </svg>
GitHub
</a> </li> <li> <a href="https://twitter.com/ClerkDev" target="_blank" class="flex items-center gap-2 font-medium text-[0.8125rem] rounded-full px-3 py-2 hover:bg-gray-100"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_29_46777)"> <path d="M12.6007 0.768677H15.054L9.694 6.89534L16 15.2307H11.0627L7.196 10.1747L2.77067 15.2307H0.316L6.04933 8.67734L0 0.769343H5.06267L8.558 5.39068L12.6007 0.768677ZM11.74 13.7627H13.0993L4.324 2.16001H2.86533L11.74 13.7627Z" fill="black"></path> </g> <defs> <clipPath id="clip0_29_46777"> <rect width="16" height="16" fill="white"></rect> </clipPath> </defs> </svg>
X (formally Twitter)
</a> </li> <li> <a href="https://discord.com/invite/b5rXHjAg7A" target="_blank" class="flex items-center gap-2 font-medium text-[0.8125rem] rounded-full px-3 py-2 hover:bg-gray-100"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_29_46781)"> <path d="M13.5447 2.91319C12.5073 2.43704 11.4126 2.09749 10.2879 1.90306C10.2777 1.90115 10.2672 1.90252 10.2578 1.90696C10.2484 1.9114 10.2406 1.91869 10.2356 1.92779C10.0949 2.17799 9.93913 2.50433 9.83007 2.76079C8.60027 2.57666 7.37673 2.57666 6.1722 2.76079C6.06313 2.49859 5.90167 2.17799 5.7604 1.92779C5.75517 1.9189 5.74738 1.91178 5.73804 1.90738C5.7287 1.90298 5.71826 1.9015 5.70807 1.90313C4.58326 2.0971 3.48846 2.43662 2.45127 2.91313C2.4424 2.91692 2.43492 2.92337 2.42987 2.93159C0.355603 6.03053 -0.212664 9.05326 0.066136 12.0385C0.0669243 12.0458 0.0691714 12.0529 0.0727443 12.0593C0.0763171 12.0658 0.081143 12.0714 0.086936 12.0759C1.45547 13.081 2.78114 13.6911 4.0822 14.0955C4.09232 14.0985 4.10312 14.0984 4.11315 14.0951C4.12318 14.0918 4.13197 14.0856 4.13833 14.0771C4.44607 13.6569 4.7204 13.2137 4.95567 12.7477C4.9589 12.7413 4.96075 12.7343 4.96108 12.7271C4.96142 12.72 4.96024 12.7129 4.95762 12.7062C4.955 12.6995 4.951 12.6935 4.94588 12.6885C4.94077 12.6835 4.93465 12.6797 4.92793 12.6772C4.49273 12.5121 4.0784 12.3109 3.6798 12.0823C3.67253 12.0781 3.66643 12.0721 3.66202 12.0649C3.65762 12.0577 3.65506 12.0495 3.65455 12.0411C3.65405 12.0327 3.65563 12.0243 3.65915 12.0166C3.66267 12.009 3.66802 12.0023 3.67474 11.9972C3.7586 11.9343 3.84254 11.869 3.9226 11.8029C3.92972 11.7971 3.93833 11.7933 3.94747 11.7921C3.95661 11.7908 3.96592 11.7922 3.97433 11.7959C6.59287 12.9915 9.42767 12.9915 12.0153 11.7959C12.0237 11.7919 12.0331 11.7904 12.0424 11.7915C12.0516 11.7926 12.0604 11.7964 12.0676 11.8023C12.1477 11.8683 12.2316 11.9343 12.3161 11.9972C12.3229 12.0022 12.3282 12.0089 12.3318 12.0165C12.3354 12.0241 12.337 12.0325 12.3366 12.0409C12.3361 12.0493 12.3337 12.0575 12.3293 12.0647C12.325 12.0719 12.3189 12.0779 12.3117 12.0823C11.913 12.3152 11.4953 12.514 11.0631 12.6765C11.0564 12.6791 11.0503 12.683 11.0452 12.6881C11.0401 12.6932 11.0362 12.6993 11.0336 12.706C11.031 12.7127 11.0299 12.7199 11.0303 12.7271C11.0307 12.7343 11.0326 12.7413 11.0359 12.7477C11.2762 13.213 11.5505 13.6562 11.8526 14.0765C11.8588 14.0851 11.8675 14.0916 11.8776 14.0951C11.8877 14.0985 11.8986 14.0986 11.9087 14.0955C13.2161 13.6911 14.5417 13.0809 15.9103 12.0759C15.9162 12.0716 15.9211 12.0661 15.9247 12.0598C15.9283 12.0534 15.9305 12.0464 15.9311 12.0391C16.2647 8.58779 15.3723 5.58986 13.5655 2.93219C13.561 2.92356 13.5537 2.91686 13.5447 2.91319ZM5.34667 10.2208C4.55834 10.2208 3.90874 9.49699 3.90874 8.60813C3.90874 7.71933 4.54573 6.99553 5.34673 6.99553C6.15393 6.99553 6.7972 7.72566 6.7846 8.60819C6.7846 9.49699 6.1476 10.2208 5.34667 10.2208ZM10.6632 10.2208C9.87487 10.2208 9.22527 9.49699 9.22527 8.60813C9.22527 7.71933 9.8622 6.99553 10.6632 6.99553C11.4704 6.99553 12.1137 7.72566 12.1011 8.60819C12.1011 9.49699 11.4704 10.2208 10.6632 10.2208Z" fill="black"></path> </g> <defs> <clipPath id="clip0_29_46781"> <rect width="16" height="16" fill="white"></rect> </clipPath> </defs> </svg>
Discord
</a> </li> </ul> </footer>`;
}, "/Users/wobsoriano/Documents/tmp/astro-clerk-template/src/components/footer.astro", void 0);
const $$ClerkLogo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="https://clerk.com/docs" target="_blank"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.001 15.75C14.072 15.75 15.7509 14.0711 15.7509 12C15.7509 9.92893 14.072 8.25 12.001 8.25C9.9299 8.25 8.25098 9.92893 8.25098 12C8.25098 14.0711 9.9299 15.75 12.001 15.75Z" fill="#131316"></path> <path d="M18.7586 20.8788C19.0777 21.1978 19.0457 21.726 18.6708 21.9772C16.7634 23.2548 14.4693 23.9998 12.0012 23.9998C9.533 23.9998 7.23887 23.2548 5.33148 21.9772C4.95661 21.726 4.92457 21.1978 5.24363 20.8788L7.98407 18.1382C8.23176 17.8906 8.61599 17.8514 8.92775 18.0112C9.84956 18.4834 10.8942 18.7498 12.0012 18.7498C13.1081 18.7498 14.1528 18.4834 15.0746 18.0112C15.3864 17.8514 15.7705 17.8906 16.0182 18.1382L18.7586 20.8788Z" fill="#131316"></path> <path d="M18.6696 2.02275C19.0445 2.27385 19.0765 2.80207 18.7575 3.12112L16.0171 5.86159C15.7693 6.10926 15.3851 6.14838 15.0733 5.98868C14.1515 5.51644 13.1069 5.25 11.9999 5.25C8.27204 5.25 5.24997 8.27208 5.24997 12C5.24997 13.1069 5.51641 14.1516 5.98865 15.0735C6.14836 15.3852 6.10924 15.7693 5.86156 16.0171L3.12111 18.7576C2.80205 19.0765 2.27384 19.0445 2.02273 18.6697C0.745143 16.7623 0 14.4681 0 12C0 5.37258 5.37256 0 11.9999 0C14.4681 0 16.7623 0.745147 18.6696 2.02275Z" fill="#131316" fill-opacity="0.5"></path> </svg> </a>`;
}, "/Users/wobsoriano/Documents/tmp/astro-clerk-template/src/components/clerk-logo.astro", void 0);
const $$AstroLogo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="https://astro.build/" target="_blank"> <svg width="24" height="24" viewBox="0 0 85 107" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M27.5893 91.1365C22.7555 86.7178 21.3443 77.4335 23.3583 70.7072C26.8503 74.948 31.6888 76.2914 36.7005 77.0497C44.4374 78.2199 52.0358 77.7822 59.2231 74.2459C60.0453 73.841 60.8052 73.3027 61.7036 72.7574C62.378 74.714 62.5535 76.6892 62.3179 78.6996C61.7452 83.5957 59.3086 87.3778 55.4332 90.2448C53.8835 91.3916 52.2437 92.4167 50.6432 93.4979C45.7262 96.8213 44.3959 100.718 46.2435 106.386C46.2874 106.525 46.3267 106.663 46.426 107C43.9155 105.876 42.0817 104.24 40.6844 102.089C39.2086 99.8193 38.5065 97.3081 38.4696 94.5909C38.4511 93.2686 38.4511 91.9345 38.2733 90.6309C37.8391 87.4527 36.3471 86.0297 33.5364 85.9478C30.6518 85.8636 28.37 87.6469 27.7649 90.4554C27.7187 90.6707 27.6517 90.8837 27.5847 91.1341L27.5893 91.1365Z" fill="#17191E"></path> <path d="M0 69.5866C0 69.5866 14.3139 62.6137 28.6678 62.6137L39.4901 29.1204C39.8953 27.5007 41.0783 26.3999 42.4139 26.3999C43.7495 26.3999 44.9325 27.5007 45.3377 29.1204L56.1601 62.6137C73.1601 62.6137 84.8278 69.5866 84.8278 69.5866C84.8278 69.5866 60.5145 3.35233 60.467 3.21944C59.7692 1.2612 58.5911 0 57.0029 0H27.8274C26.2392 0 25.1087 1.2612 24.3634 3.21944C24.3108 3.34983 0 69.5866 0 69.5866Z" fill="#17191E"></path> </svg> </a>`;
}, "/Users/wobsoriano/Documents/tmp/astro-clerk-template/src/components/astro-logo.astro", void 0);
const CARDS = [
  {
    title: "Customizable Components",
    description: "Prebuilt components to handle essential functionality like user sign-in, sign-up, and account management.",
    href: "https://clerk.com/docs/components/overview?utm_source=vercel-template&utm_medium=partner&utm_term=component_reference",
    linkText: "Component Reference"
  },
  {
    title: "React Hooks",
    description: `Build custom functionality by accessing auth state, user and session data, and more with Clerk's React Hooks.`,
    href: "https://clerk.com/docs/references/react/use-user?utm_source=vercel-template&utm_medium=partner&utm_term=react_hooks",
    linkText: "React Hooks"
  },
  {
    title: "Organizations",
    description: "Built for B2B SaaS: create and switch between orgs, manage and invite members, and assign custom roles.",
    href: "https://clerk.com/docs/organizations/overview?utm_source=vercel-template&utm_medium=partner&utm_term=component_reference",
    linkText: "Organizations"
  }
];
const DASHBOARD_CARDS = [
  {
    title: "Authenticate requests with JWT's",
    description: "Clerk empowers you to authenticate same and cross origin requests using a Clerk generated JWT",
    href: "https://clerk.com/docs/backend-requests/overview?utm_source=vercel-template&utm_medium=partner&utm_term=JWT",
    linkText: "Request authentication"
  },
  {
    title: "Build an onboarding flow",
    description: `Leverage customizable session tokens, public metadata, and Middleware to create a custom onboarding experience.`,
    href: "https://clerk.com/docs/guides/add-onboarding-flow?utm_source=vercel-template&utm_medium=partner&utm_term=onboarding",
    linkText: "Onboarding flow"
  },
  {
    title: "Deploy to Production",
    description: "Production instances are meant to support high volumes of traffic and by default, have a more strict security posture.",
    href: "https://clerk.com/docs/deployments/overview?utm_source=vercel-template&utm_medium=partner&utm_term=deploy-to-prod",
    linkText: "Production"
  }
];
export {
  $$ClerkLogo as $,
  CARDS as C,
  DASHBOARD_CARDS as D,
  Learn_more as L,
  $$AstroLogo as a,
  $$Footer as b
};
