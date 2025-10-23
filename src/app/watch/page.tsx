import Link from "next/link";
import videos from "../../../public/videos.json";

export default function WatchIndex() {
  return (
    <main className="min-h-[80vh] p-8">
      <h1 className="text-3xl font-bold mb-6">Available Streams</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(videos as any[]).map((v) => (
          <Link
            key={v.id}
            href={`/watch/${v.id}`}
            className="block border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition"
          >
            <video
              src={v.playbackUrl}
              className="w-full h-48 object-cover bg-black"
              muted
              autoPlay
              loop
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{v.title}</h2>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {v.description}
              </p>
              <p className="mt-2 text-sm text-yellow-600 font-medium">
                {v.pricePerSecond} units / second
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
