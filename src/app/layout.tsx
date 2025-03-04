import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TmaSDKProvider } from "@/components/tma";
import { NavigationBar } from "@/components/navigation-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "My Telegram Mini App",
	description: "A mini app for Telegram.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<TmaSDKProvider>
					{children}
					<NavigationBar />
				</TmaSDKProvider>
			</body>
		</html>
	);
}
