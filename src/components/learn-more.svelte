<script lang="ts">
interface Card {
  title: string;
  description: string;
  href: string;
  linkText: string;
}

const { cards }: { cards: Card[] } = $props()
</script>

<div class="relative bg-white" id="features">
  <div class="grid grid-cols-4 gap-8 max-w-[75rem] mx-auto w-full pt-16 pb-24">
    <div>
      <span class="text-[0.8125rem]/5 text-[#6C47FF] font-medium">
        What's next
      </span>
      <h2
        class="text-xl/[1.625rem] font-semibold text-[#131316] tracking-tight mt-2 mb-3"
      >
        Learn more from our&nbsp;resources
      </h2>
      <p class="text-[0.8125rem]/5 text-[#5E5F6E]">
        Prebuilt components to handle essential functionality like user sign-in,
        sign-up, and account management.
      </p>
    </div>
    {#each cards as card}
      <a
        href={card.href}
        target="_blank"
        class="border border-[#F2F2F4] rounded-lg overflow-hidden flex flex-col"
      >
        <div class="px-4 py-3 bg-[#FAFAFB] space-y-1 flex-1">
          <h3 class="text-sm font-medium text-[#131316] tracking-tight">
            {card.title}
          </h3>
          <p class="text-[0.8125rem]/5 text-[#5E5F6E]">{card.description}</p>
        </div>
        <div class="bg-[#F5F5F7] text-[#131316] px-4 py-2 text-[0.8125rem]/5 font-medium flex items-center gap-1.5 border-t border-[#EDEDF0]">
          {card.linkText}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2" y="2" width="12" height="12" rx="3" fill="#EEEEF0" />
            <path
              d="M5.75 10.25L10.25 5.75M10.25 5.75H6.75M10.25 5.75V9.25"
              stroke="#9394A1"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </a>
    {/each}
  </div>
</div>
