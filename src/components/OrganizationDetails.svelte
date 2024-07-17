<script lang="ts">
import { $organizationStore as organizationStore } from '@clerk/astro/client';
</script>

{#if $organizationStore === undefined}
<div class="text-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    Loading organization data...
</div>
{:else if $organizationStore === null}
<div class="text-gray-700 px-8 pb-5 text-sm">
  You are currently logged in to your personal workspace.
  <br>
  Create or switch to an organization to see its details.
</div>
{:else}
<div class="pb-6 max-h-96">
  <dl>
    <div class="px-8 py-2">
      <dt class="text-sm font-semibold">
        Organization ID
      </dt>
      <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2 flex gap-2">
        { $organizationStore.id }
      </dd>
    </div>
    <div class="px-8 py-2">
      <dt class="text-sm font-semibold mb-1">
        Name
      </dt>
      <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
        { $organizationStore.name }
      </dd>
    </div>
    <div class="px-8 py-2">
      <dt class="text-sm font-semibold mb-1">
        Members
      </dt>
      <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
        { $organizationStore.membersCount }
      </dd>
    </div>
    <div class="px-8 py-2">
      <dt class="text-sm font-semibold mb-1">
        Pending invitations
      </dt>
      <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
        { $organizationStore.pendingInvitationsCount }
      </dd>
    </div>
    <div class="px-8 py-2">
      <dt class="text-sm font-semibold mb-1">
        Image
      </dt>
      <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
        <img
          class="rounded"
          src={$organizationStore.imageUrl}
          alt={`Logo for ${$organizationStore.name}`}
          width="48"
          height="48"
        />
      </dd>
    </div>
  </dl>
</div>
{/if}
