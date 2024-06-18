import "./globals.css";
import Navbar from "./components/Navbar";

//Fonts:
import { Inter, Roboto } from "next/font/google";
import { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300"] });

export const metadata: Metadata = {
	title: "Next.js Project",
	description: "Includes TS and TailwindCSS",
	keywords: "Next.js, Typescript, TailwindCSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<Navbar></Navbar>
				<main className="max-w-3xl mx-auto py-10">{children}</main>
			</body>
		</html>
	);
}
