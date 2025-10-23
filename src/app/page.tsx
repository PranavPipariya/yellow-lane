import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-2">Yellow Lane</h1>
        <p className="text-xl text-gray-600 mb-8">attention is currency</p>

        <div className="flex items-center justify-center gap-6">
          <Link href="/watch" className="inline-block">
            <button className="px-8 py-3 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black font-semibold shadow">
              Start Watching
            </button>
          </Link>

          <Link href="/publish" className="inline-block">
            <button className="px-8 py-3 rounded-lg bg-orange-400 hover:bg-orange-300 text-white font-semibold shadow">
              Publish
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
