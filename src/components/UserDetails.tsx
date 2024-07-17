import { $sessionStore } from "@clerk/astro/client";
import { useStore } from "@nanostores/react";

export default function SessionDetails() {
  const session = useStore($sessionStore);

  return (
    <div>
      <div className="pb-6 max-h-96">
        <dl>
          <div className="px-8 py-2">
            <dt className="text-sm font-semibold">Session ID</dt>
            <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2 flex gap-2">
              {session?.id}
              {/* <CopyButton text={session.id} /> */}
            </dd>
          </div>
          <div className="px-8 py-2">
            <dt className="text-sm font-semibold mb-1">Status</dt>
            <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
              {session?.status === `active` && (
                <span className="text-xs bg-success-50 text-success-700 flex w-min gap-1 px-2 py-[1px] rounded-2xl font-medium">
                  <div className="m-auto">{/* <Dot /> */}</div>
                  Active
                </span>
              )}
            </dd>
          </div>
          <div className="px-8 py-2">
            <dt className="text-sm font-semibold mb-1">Last Active</dt>
            <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
              {session?.lastActiveAt.toLocaleString()}
            </dd>
          </div>
          <div className="px-8 py-2">
            <dt className="text-sm font-semibold mb-1">Expiry</dt>
            <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
              {session?.expireAt.toLocaleString()}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
