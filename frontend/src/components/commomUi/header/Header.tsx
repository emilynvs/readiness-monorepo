import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="grid grid-cols-3 items-center p-4  shadow-sm">
        <span className="font-bold text-xl">READINESS</span>
        <nav className="flex justify-between items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/cronometro">Cronometro</Link>
        </nav>
        <button
          className="text-right cursor-pointer
"
        >
          Login
        </button>
      </header>
    </>
  );
}
