import { getData } from "@/lib/fetchData";

const customerUrl = "customer/58e3e92d-b145-4974-ae27-89bf0560fb56";

export default async function Profile() {
	const user = await getData(customerUrl);

	console.log(user);
	return (
		<section>
			<h1>{user.firstName}</h1>
		</section>
	);
}
