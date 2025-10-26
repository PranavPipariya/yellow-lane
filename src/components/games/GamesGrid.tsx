"use client";
import { GameCard } from "./GameCard";

export function GamesGrid() {
  return (
    <section id="games" className="relative sm:p-24 px-8 py-16">
      <div className="relative mx-auto max-w-7xl lg:max-w-8xl">
        <p
          className="uppercase tracking-[2px] text-secondary-white"
          data-animate
        >
          | Make the most of entropy
        </p>
        <h2 className="mt-3 font-bold text-[30px] sm:text-[42px]" data-animate>
          Play now
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          <GameCard
            href="/games/poker"
            title="Poker"
            emoji="🃏"
            description="Heads-up & 6-max with verifiable shuffles via Pyth entropy."
            cta="Enter table"
            bgUrl="https://images.unsplash.com/photo-1542931287-023b922fa89b?q=80&w=1600&auto=format&fit=crop"
          />
          <GameCard
            href="/games/plinko"
            title="Plinko"
            emoji="🟣"
            description="Pick risk tier and drop. Transparent bins & on-chain proofs."
            cta="Drop a ball"
            bgUrl="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop"
          />
          <GameCard
            href="/games/mines"
            title="Mines"
            emoji="💣"
            description="Clear tiles, dodge mines. Boards backed by on-chain seeds."
            cta="Start clearing"
            bgUrl="https://images.unsplash.com/photo-1521931961826-fe48677230a8?q=80&w=1600&auto=format&fit=crop"
          />
          <GameCard
            href="/games/spinwheel"
            title="SpinWheel"
            emoji="🟣🟣"
            description="Pick target, roll higher. Odds proven with on-chain randomness."
            cta="Roll now"
            bgUrl="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1600&auto=format&fit=crop"
          />
        </div>

        {/* Upcoming */}
        <h3 className="mt-14 font-semibold text-xl" data-animate>
          Upcoming games
        </h3>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          <GameCard
            title="Roulette"
            description="European wheel with provable odds."
            cta="Coming soon"
            disabled
            bgUrl="https://images.unsplash.com/photo-1545771025-cd9a36f65bb6?q=80&w=1600&auto=format&fit=crop"
          />
          <GameCard
            title="Blackjack"
            description="Multi-deck with verifiable shuffles."
            cta="Coming soon"
            disabled
            bgUrl="https://images.unsplash.com/photo-1523224042829-4731dd15a3bb?q=80&w=1600&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
}
