"use client";

import { useEffect, useState } from "react";
import WalletConnectButton from "./WalletConnectButton";
import videosJson from "../../public/videos.json";
import {
  initNitroliteSession,
  sendTick,
  getLedgerBalances,
} from "../lib/nitrolite";

export default function ClientPlayer({ videoId }: { videoId?: string }) {
  const videos = (videosJson as any[]) || [];
  const video = videos.find((v) => v.id === videoId) || videos[0];

  const [sessionId, setSessionId] = useState<string | null>(null);
  const [balance, setBalance] = useState<number>(100);
  const [elapsed, setElapsed] = useState<number>(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let tid: any;
    if (playing) {
      tid = setInterval(async () => {
        setElapsed((e) => e + 1);
        await sendTick(sessionId || "demo-session", video.pricePerSecond);
        const b = await getLedgerBalances(sessionId || "demo-session");
        setBalance(b);
      }, 1000);
    }
    return () => clearInterval(tid);
  }, [playing, sessionId, video.pricePerSecond]);

  async function startSession() {
    const id = await initNitroliteSession();
    setSessionId(id);
    setPlaying(true);
  }

  async function stopSession() {
    setPlaying(false);
    const b = await getLedgerBalances(sessionId || "demo-session");
    alert("Session closed. Final offchain balance: " + b + " (demo)");
  }

  return (
    <div className="flex gap-8">
      <div>
        <video width={640} controls src={video.playbackUrl} />
      </div>
      <div className="w-72">
        <div className="font-semibold mb-2">{video.title}</div>
        <div className="text-sm text-gray-600 mb-2">
          Price per second: {video.pricePerSecond} units
        </div>
        <div className="mb-2">Session balance: {balance}</div>
        <div className="mb-2">Elapsed: {elapsed}s</div>

        <WalletConnectButton />

        {!sessionId && (
          <button
            onClick={startSession}
            className="mt-3 px-4 py-2 bg-yellow-400 rounded"
          >
            Start Viewing
          </button>
        )}
        {sessionId && (
          <button
            onClick={stopSession}
            className="mt-3 px-4 py-2 bg-red-400 rounded"
          >
            Stop Viewing
          </button>
        )}
      </div>
    </div>
  );
}
