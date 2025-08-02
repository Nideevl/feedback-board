//api/submit-feedback/route.ts

import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req: Request) {

    const { name, email, message } = await req.json();

    try {
        const result = await pool.query(
            `INSERT INTO feedback (name, email, message)
            VALUES ($1, $2, $3)
            RETURNING *`,
            [name, email, message]
        );

        return NextResponse.json({ success: true, feedback: result.rows[0] });
    } catch (err) {
        console.error("Database error : ", err);
        return NextResponse.json(
            { error: "Faild to save the feedback" },
            { status: 500 },
        )
    }

}