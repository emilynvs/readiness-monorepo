import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="grid grid-cols-2 p-4  shadow-sm border-b">
        <span className="font-bold text-xl">READINESS</span>
        <nav className="flex grid grid-cols-3 justify-items-end">
          <Link href="/">Home</Link>
          <Link href="/cronometro">Cronometro</Link>
          <Link href="/concluidas">Conluídas</Link>
        </nav>
      </header>
    </>
  );
}
