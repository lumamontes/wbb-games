import Footer from "@/components/footer";
import GameCard from "@/components/game-card";
import Header from "@/components/header";
import { Game } from "./types";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/schedule`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center pt-6 pb-16 px-4 bg-slate-100 dark:bg-slate-950 dark:text-white">
      <Header />
      <h3 className="text-lg pt-6 pb-2">NCAA Women&apos;s Basketball</h3>
      <div className="gap-3 max-w-5xl w-full items-center justify-center text-sm flex flex-col">
        {data.games.length === 0 && (
          <p className="text-center text-lg py-6">
            No games today!{" "}
            <span role="img" aria-label="sad face">
              🙁
            </span>
          </p>
        )}
        {data.games.map((game: Game, index: number) => (
          <GameCard
            key={index}
            index={index}
            gametime={game.date}
            venue={game.competitions[0].venue.fullName}
            location={`${game.competitions[0].venue.address.city}, ${game.competitions[0].venue.address.state}`}
            competitors={game.competitions[0].competitors}
            locale={"en-US"}
          />
        ))}
      </div>
      <Footer />
    </main>
  );
}
