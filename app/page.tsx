import Footer from "@/components/Footer";
import GameCard from "@/components/game-card";
import Header from "@/components/header";
import { Game, Games } from "./types";
import { getData } from "./api";

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center pt-6 pb-16 px-4 bg-slate-100 dark:bg-slate-950 dark:text-white">
      <Header />
      <h3 className="text-lg pt-6 pb-2">NCAA Women's Basketball</h3>
      <div className="gap-3 max-w-5xl w-full items-center justify-center text-sm flex flex-col ">
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
            gametime={game.date}
            venue={game.competitions[0].venue.fullName}
            location={`${game.competitions[0].venue.address.city}, ${game.competitions[0].venue.address.state}`}
            competitors={game.competitions[0].competitors}
          />
        ))}
      </div>
      <Footer />
    </main>
  );
}
