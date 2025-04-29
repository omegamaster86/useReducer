import Link from 'next/link'

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link href="./components/useState">useState</Link>
      <Link href="./components/useReducer">useReducer</Link>
    </div>
  );
}
