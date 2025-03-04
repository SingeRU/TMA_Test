"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Coffee, User } from "lucide-react";
import QRCode from "react-qr-code";
export default function Home() {
	const [user, setUser] = useState({
		name: "John Doe",
		points: 150,
		qrCode: "user123",
	});

	return (
		<div className="container max-w-md mx-auto p-4 space-y-6">
			<Card className="p-6 space-y-4">
				<div className="flex items-center space-x-4">
					<div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
						<User className="h-8 w-8 text-primary-foreground" />
					</div>
					<div>
						<h2 className="text-2xl font-bold">{user.name}</h2>
						<p className="text-muted-foreground">Loyalty Member</p>
					</div>
				</div>

				<div className="text-center p-4 bg-secondary rounded-lg">
					<p className="text-lg text-muted-foreground">Loyalty Points</p>
					<h3 className="text-3xl font-bold flex items-center justify-center gap-2">
						<Coffee className="h-6 w-6" />
						{user.points}
					</h3>
				</div>

				<div className="flex justify-center p-4 bg-white rounded-lg">
					<QRCode value={user.qrCode} size={200} />
				</div>
			</Card>
		</div>
	);
}
