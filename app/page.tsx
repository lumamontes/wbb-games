import Footer from "@/components/Footer";
import mockdata from "../mockdata.json";
import GameCard from "@/components/GameCard";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 dark:bg-slate-950 dark:text-white">
      <header className="flex items-center justify-end w-full max-w-5xl">
        <ModeToggle />
      </header>
      <div className="max-w-5xl w-full items-center justify-center  text-sm lg:flex flex-col gap-2">
        <h1 className="text-xl">Today's Games 🏀⛹🏽‍♀️</h1>
        <p className="text-xs dark:text-gray-300">
          {new Date().toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <h3 className="text-lg pt-6 pb-2">NCAA Women's Basketball</h3>
      <div className="max-w-5xl w-full items-center justify-center text-sm lg:flex flex-col gap-3">
        {mockdata.games.map((game: any, index) => (
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
