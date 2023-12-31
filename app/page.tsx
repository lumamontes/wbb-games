import Footer from "@/components/Footer";
import GameCard from "@/components/game-card";
import Header from "@/components/header";

async function getData() {
  const res = await fetch(
    "https://bc8b-2804-8d4-3a1-5b90-a474-8df9-6a70-8c1e.ngrok-free.app/schedulsse"
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 dark:bg-slate-950 dark:text-white">
      <Header />
      <div className="max-w-5xl w-full items-center justify-center text-sm lg:flex flex-col gap-3">
        {data.games.map((game: any, index: any) => (
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
