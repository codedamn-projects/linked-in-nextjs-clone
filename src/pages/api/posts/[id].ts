import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/database";

export default async function handler(req: NextRequest, res: NextResponse) {
	const { id } = req.query;

	const postData = await db.selectFrom('Post').selectAll().where('id', '=', id).execute()


	res.json({ name: "codedamn", postData });
}

