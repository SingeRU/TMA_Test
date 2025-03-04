"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const formSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	phone: z.string().min(10, "Please enter a valid phone number"),
	address: z.string().min(10, "Please enter your full address"),
	notes: z.string().optional(),
});

export default function Checkout() {
	const { toast } = useToast();
	const router = useRouter();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			phone: "",
			address: "",
			notes: "",
		},
	});

	function onSubmit(values?: z.infer<typeof formSchema>) {
		toast({
			title: "Order Placed!",
			description: "Your order has been successfully placed.",
		});
		router.push("/");
	}

	return (
		<div className="container max-w-md mx-auto p-4 space-y-6 mb-20">
			<div className="flex items-center gap-4">
				<Button variant="ghost" size="icon" onClick={() => router.back()}>
					<ArrowLeft className="h-5 w-5" />
				</Button>
				<h1 className="text-2xl font-bold">Checkout</h1>
			</div>

			<Card className="p-6">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input placeholder="Your name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone</FormLabel>
									<FormControl>
										<Input placeholder="Your phone number" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="address"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Delivery Address</FormLabel>
									<FormControl>
										<Textarea placeholder="Your delivery address" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="notes"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Special Instructions</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Any special instructions?"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type="submit" className="w-full">
							Place Order
						</Button>
					</form>
				</Form>
			</Card>
		</div>
	);
}
