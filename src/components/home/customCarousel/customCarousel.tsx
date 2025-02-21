"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { PromoType } from "@/types/types";

export function CustomCarousel({ data }: { data: PromoType[] }) {
	return (
		<Carousel className="w-full max-w-xs">
			<CarouselContent>
				{data.map((item) => (
					<CarouselItem key={item.id}>
						<div className="p-1">
							<Card>
								<CardContent className="flex aspect-square items-center justify-center p-6">
									{item.promoTitle}
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
