import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen bg-neutral-900 flex-col text-white items-center gap-y-4 p-24">
			<h1 className="font-semibold text-4xl">Modal demo</h1>
			<Link href="/modal">Trigger modal</Link>
		</main>
	);
}
