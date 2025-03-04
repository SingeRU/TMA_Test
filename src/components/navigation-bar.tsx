"use client";

import { User, Coffee } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Separator } from "./ui/separator";

export function NavigationBar() {
	const pathname = usePathname();

	return (
		<div className="fixed bottom-0 inset-x-0 bg-background border-t mt-16">
			<div className="container max-w-md mx-auto">
				<div className="grid grid-cols-2 h-16 relative">
					<Link
						href="/profile"
						className={`flex items-center justify-center gap-2 ${
							pathname === "/profile" ? "text-primary" : "text-muted-foreground"
						}`}
					>
						<User className="h-5 w-5" />
						<span className="font-medium">Profile</span>
					</Link>
					<Separator orientation="vertical" className="absolute left-2/4" />
					<Link
						href="/order"
						className={`flex items-center justify-center gap-2 ${
							pathname === "/order" ? "text-primary" : "text-muted-foreground"
						}`}
					>
						<Coffee className="h-5 w-5" />
						<span className="font-medium">Order</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
