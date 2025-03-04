"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Minus, Plus, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import Link from "next/link";

const products = [
	{
		id: 1,
		name: "Espresso",
		description: "Rich and bold single shot",
		price: 3.5,
		image:
			"https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop",
	},
	{
		id: 2,
		name: "Cappuccino",
		description: "Espresso with steamed milk foam",
		price: 4.5,
		image:
			"https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=300&fit=crop",
	},
	{
		id: 3,
		name: "Latte",
		description: "Espresso with steamed milk",
		price: 4.0,
		image:
			"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop",
	},
];

export default function Order() {
	const router = useRouter();
	const [cart, setCart] = useState<{ [key: number]: number }>({});

	const addToCart = (productId: number) => {
		setCart((prev) => ({
			...prev,
			[productId]: (prev[productId] || 0) + 1,
		}));
	};

	const removeFromCart = (productId: number) => {
		setCart((prev) => {
			const newCart = { ...prev };
			if (newCart[productId] > 1) {
				newCart[productId]--;
			} else {
				delete newCart[productId];
			}
			return newCart;
		});
	};

	const totalItems = Object.values(cart).reduce((sum, count) => sum + count, 0);
	const totalPrice = Object.entries(cart).reduce((sum, [productId, count]) => {
		const product = products.find((p) => p.id === Number(productId));
		return sum + (product?.price || 0) * count;
	}, 0);

	return (
		<main className="mt-2">
			<section className="sticky top-0 bg-background z-10 border-b">
				<div className="mx-auto">
					<div className="flex gap-2 ml-4 items-center md:gap-4">
						<Button variant="ghost" size="icon" asChild>
							<Link href="/">
								<ArrowLeft />
							</Link>
						</Button>
						<h1 className="font-bold text-2xl">Order</h1>
					</div>
				</div>
			</section>

			<ScrollArea className="h-[calc(100vh-8rem)]">
				<div className="container max-w-md mx-auto p-4 space-y-4">
					{products.map((product) => (
						<Card key={product.id} className="flex overflow-hidden">
							<div className="relative w-1/3 min-h-full">
								<Image
									src={product.image}
									alt={product.name}
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-4 flex-1 flex flex-col justify-between">
								<div>
									<h3 className="font-semibold">{product.name}</h3>
									<p className="text-sm text-muted-foreground">
										{product.description}
									</p>
									<p className="font-medium">${product.price.toFixed(2)}</p>
								</div>
								<div className="flex items-center justify-end space-x-2">
									{cart[product.id] ? (
										<>
											<Button
												size="icon"
												variant="outline"
												onClick={() => removeFromCart(product.id)}
											>
												<Minus className="h-4 w-4" />
											</Button>
											<span className="w-8 text-center">
												{cart[product.id]}
											</span>
										</>
									) : null}
									<Button size="icon" onClick={() => addToCart(product.id)}>
										<Plus className="h-4 w-4" />
									</Button>
								</div>
							</div>
						</Card>
					))}
				</div>
			</ScrollArea>

			{totalItems > 0 && (
				<div className="fixed bottom-16 inset-x-0 p-4 bg-background border-t">
					<div className="container max-w-md mx-auto">
						<Button
							className="w-full"
							size="lg"
							onClick={() => router.push("/order/checkout")}
						>
							<ShoppingCart className="mr-2 h-5 w-5" />
							Checkout ({totalItems} items) - ${totalPrice.toFixed(2)}
						</Button>
					</div>
				</div>
			)}
		</main>
	);
}
