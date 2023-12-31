import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <>
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
    </>
  );
}
