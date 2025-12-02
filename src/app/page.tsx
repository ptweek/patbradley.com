import { auth } from "patbradley/server/auth";
import { api, HydrateClient } from "patbradley/trpc/server";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center gap-12">
        <Link href="https://soundcloud.com/patrick-bradley-517513482">
          <button className="rounded-xl border border-white/20 px-16 py-8 text-4xl font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:backdrop-blur-lg active:scale-95">
            View My Work
          </button>
        </Link>
      </main>
    </HydrateClient>
  );
}
