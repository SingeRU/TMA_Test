"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { User, Phone, Mail, MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Profile() {
	const [profile, setProfile] = useState({
		name: "John Doe",
		phone: "+1234567890",
		email: "john@example.com",
		address: "123 Coffee Street",
		points: 150,
		visits: 12,
		favoriteOrder: "Caramel Macchiato",
	});
	return (
		<main className="mx-4 mt-2 mb-20">
			<section className="mx-auto">
				<div className="flex gap-2 items-center md:gap-4">
					<Button variant="ghost" size="icon" asChild>
						<Link href="/">
							<ArrowLeft />
						</Link>
					</Button>
					<h1 className="font-bold text-2xl">Profile</h1>
				</div>
			</section>
			<Card className="p-6 space-y-6">
				<div className="flex justify-center">
					<div className="h-24 w-24 rounded-full bg-primary flex items-center justify-center">
						<User className="h-12 w-12 text-primary-foreground" />
					</div>
				</div>

				<div className="space-y-4">
					<div className="space-y-2">
						<Label>Name</Label>
						<div className="flex items-center space-x-2">
							<User className="h-4 w-4 text-muted-foreground" />
							<Input value={profile.name} readOnly />
						</div>
					</div>

					<div className="space-y-2">
						<Label>Phone</Label>
						<div className="flex items-center space-x-2">
							<Phone className="h-4 w-4 text-muted-foreground" />
							<Input value={profile.phone} readOnly />
						</div>
					</div>

					<div className="space-y-2">
						<Label>Email</Label>
						<div className="flex items-center space-x-2">
							<Mail className="h-4 w-4 text-muted-foreground" />
							<Input value={profile.email} readOnly />
						</div>
					</div>

					<div className="space-y-2">
						<Label>Address</Label>
						<div className="flex items-center space-x-2">
							<MapPin className="h-4 w-4 text-muted-foreground" />
							<Input value={profile.address} readOnly />
						</div>
					</div>
				</div>

				<div>
					<Card className="p-4 text-center">
						<p className="text-muted-foreground">Total Points</p>
						<p className="text-2xl font-bold">{profile.points}</p>
					</Card>
				</div>
			</Card>
		</main>
	);
}
