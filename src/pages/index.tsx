import Image from "next/image";
import Head from "next/head";

export default function Home() {
	return (
		<div>
			<Head>
				<title>LinkedIn</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="m-5 flex flex-col gap-4 items-center justify-center">
				<Image
					width="267"
					height="65"
					src="/logo-with-text.svg"
					alt="linkedin logo"
				/>
				<h1>Go ahead and complete the project 🍻</h1>
			</main>
		</div>
	);
}
