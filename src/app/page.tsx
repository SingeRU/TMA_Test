import { Loyalty } from "@/components/loyalty/Loyalty";
import { Me } from "@/components/me";
import { CustomCarousel } from "@/components/home/customCarousel/customCarousel";
import { QrCode } from "@/components/home/qrCode/qrCode";
import Link from "next/link";
import { promos } from "@/mockData/mockData";

export default function Home() {
	return (
		<main className="flex w-full min-h-screen flex-col items-center justify-between">
			<section className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				<p className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
					<Me />
				</p>
			</section>

			<section className="relative flex flex-col place-items-center">
				<Loyalty />
				<QrCode />
				<CustomCarousel data={promos}></CustomCarousel>
			</section>

			<section className="flex items-center justify-between h-14 border-t w-full">
				<Link
					href={"/profile"}
					className="w-1/2 p-4 h-full text-black border-r text-center transition-colors duration-300 hover:bg-zinc-300"
				>
					Профиль
				</Link>
				<Link
					href={"/order"}
					className="w-1/2 p-4 h-full text-black text-center transition-colors duration-300 hover:bg-zinc-300"
				>
					Онлайн заказ
				</Link>
			</section>
		</main>
	);
}
