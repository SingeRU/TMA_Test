const url =
	"https://eats-api.yumapos.ru/open-api/v1/customer/58e3e92d-b145-4974-ae27-89bf0560fb56";

async function getCustomer() {
	const username = process.env.BASIC_AUTH_USER;
	const password = process.env.BASIC_AUTH_PASS;
	const encodedCredentials = Buffer.from(`${username}:${password}`).toString(
		"base64",
	);

	const response = await fetch(url, {
		method: "GET",
		headers: {
			Authorization: `Basic ${encodedCredentials}`,
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		throw new Error("No customer found");
	}

	return response.json();
}
export default async function Profile() {
	const user = await getCustomer();

	console.log(user);
	return (
		<section>
			<h1>{user.firstName}</h1>
		</section>
	);
}
