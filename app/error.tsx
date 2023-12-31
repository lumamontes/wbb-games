"use client";

import Footer from "@/components/Footer";
import Header from "@/components/header";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center p-16 dark:bg-slate-950 dark:text-white">
      <Header />
      <h2 className="text-center py-4">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the route
          () => reset()
        }
      >
        Try again
      </button>
      <Footer />
    </main>
  );
}
