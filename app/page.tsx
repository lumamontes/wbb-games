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
      <div className="max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex flex-col gap-6">
        <h1 className="text-xl">Today's Games 🏀⛹🏽‍♀️</h1>
        <p>
          {new Date().toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <div className="max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex flex-col gap-6">
        <h3 className="text-xl ">NCAA Women's Basketball</h3>
        {mockdata.games.map((game: any) => (
          <GameCard
            gametime={game.date}
            location={game.competitions[0].venue.fullName}
            competitors={game.competitions[0].competitors}
          />
        ))}
      </div>
      <Footer />
    </main>
  );
}
