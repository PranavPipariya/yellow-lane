"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { uploadVideo } from "../../lib/firebase";

export default function PublishPage() {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [status, setStatus] = useState("");
  const router = useRouter();

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setStatus("Uploading...");
    try {
      const url = await uploadVideo(file, (pct) => {
        setStatus(`Uploading ${Math.round(pct)}%`);
      });
      setStatus("Uploaded: " + url);
      const videos = JSON.parse(localStorage.getItem("videos") || "[]");
      videos.push({
        id: `v${videos.length + 3}`,
        title: file.name,
        playbackUrl: url,
        pricePerSecond: 1,
      });
      localStorage.setItem("videos", JSON.stringify(videos));
    } catch (err) {
      console.error(err);
      setStatus("Upload failed");
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-3">Publish</h2>
      <p className="text-sm text-gray-600 mb-4">
        Upload a demo video for the hackathon. Or skip to watch page.
      </p>

      <input
        ref={fileRef}
        type="file"
        accept="video/*"
        onChange={handleChange}
        className="mb-3"
      />
      <div className="text-sm text-gray-700 mb-3">{status}</div>

      <button
        onClick={() => router.push("/watch/v1")}
        className="mt-2 px-4 py-2 bg-gray-800 text-white rounded"
      >
        Skip to Watch
      </button>
    </div>
  );
}
