import * as dotenv from "dotenv";

dotenv.config();

const TELE_BOT_TOKEN = "YOUR_BOT_TOKEN";
const TELE_BOT_WEB_LINK = "YOUR_APP_LINK";

export const Config = {
	NODE_ENV: process.env.NODE_ENV || "development",
	TELE_BOT_TOKEN: TELE_BOT_TOKEN || "",
	TELE_BOT_WEB_LINK: TELE_BOT_WEB_LINK || "",
};
