import { Me } from "@/components/me";
import { QrCode } from "@/components/shop/qrCode/qrCode";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				<p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
					<Me />
				</p>
			</div>

			<div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
				<QrCode />
			</div>

			<div className="flex items-center justify-between h-14 border-t w-full">
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
			</div>
		</main>
	);
}
