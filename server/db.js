import { connect } from "mongoose";

import { config } from "dotenv";

config();

export async function dbConnect() {
	try {
		const db = await connect(process.env.MONGODB_URI);
		console.log(db.connection.db.databaseName);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
}
