import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ inuse: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "An unexpected error occurred" }, { status: 500 });
  }
}
