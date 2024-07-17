<script setup lang="ts">
import { $sessionStore } from "@clerk/astro/client";
import { useStore } from "@nanostores/vue";

const session = useStore($sessionStore);
</script>

<template>
  <div v-if="session" class="pb-6 max-h-96">
    <dl>
      <div class="px-8 py-2">
        <dt class="text-sm font-semibold">Session ID</dt>
        <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2 flex gap-2">
          {{ session.id }}
          <!-- <CopyButton :text="session.id" /> -->
        </dd>
      </div>
      <div class="px-8 py-2">
        <dt class="text-sm font-semibold mb-1">Status</dt>
        <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
          <span
            v-if="session.status === 'active'"
            class="text-xs bg-success-50 text-success-700 flex w-min gap-1 px-2 py-[1px] rounded-2xl font-medium"
          >
            <div class="m-auto">
              <!-- <Icon name="Dot" /> -->
            </div>
            Active
          </span>
        </dd>
      </div>
      <div class="px-8 py-2">
        <dt class="text-sm font-semibold mb-1">Last Active</dt>
        <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
          {{ session.lastActiveAt.toLocaleString() }}
        </dd>
      </div>
      <div class="px-8 py-2">
        <dt class="text-sm font-semibold mb-1">Expiry</dt>
        <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
          {{ session.expireAt.toLocaleString() }}
        </dd>
      </div>
    </dl>
  </div>
  <div
    v-else
    class="text-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
  >
    Loading user data...
  </div>
</template>
