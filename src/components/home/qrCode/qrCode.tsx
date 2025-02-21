import Image from "next/image";

export const QrCode = () => {
	return (
		<div>
			<Image src={"/qrCode.svg"} alt="QrCode" width={200} height={200} />
		</div>
	);
};
