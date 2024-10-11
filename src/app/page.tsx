import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to Combo Practice</h1>
      <p className="text-lg mb-8">
        Practice MK11 combos with real-time controller feedback.
      </p>
      <Link href="/practice">
          Start Practicing
      </Link>
    </main>
  );
}
