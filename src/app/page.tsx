import { auth } from "patbradley/server/auth";
import { api, HydrateClient } from "patbradley/trpc/server";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center gap-12">
        <h1 className="text-7xl font-bold text-white drop-shadow-2xl backdrop-blur-sm">
          Welcome to my portfolio
        </h1>
        <button className="rounded-xl border border-white/20 px-16 py-8 text-4xl font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:backdrop-blur-lg active:scale-95">
          View My Work
        </button>
      </main>
    </HydrateClient>
  );
}
