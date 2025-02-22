import { BASE_URL } from "@/constants/constants";

export async function getData(url: string) {
	const username = process.env.BASIC_AUTH_USER;
	const password = process.env.BASIC_AUTH_PASS;

	const encodedCredentials = Buffer.from(`${username}:${password}`).toString(
		"base64",
	);

	const response = await fetch(`${BASE_URL}${url}`, {
		method: "GET",
		headers: {
			Authorization: `Basic ${encodedCredentials}`,
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		throw new Error("Failed to fetch data");
	}

	return response.json();
}
