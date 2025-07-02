import { NextRequest, NextResponse } from "next/server";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "qgwhyrdi",
  dataset: "production",
  apiVersion: "2025-07-01",
  useCdn: true,
});

export async function POST(req: NextRequest) {
  const { query, params } = await req.json();

  if (!query || typeof query !== "string") {
    return NextResponse.json(
      { error: "Missing or invalid query" },
      { status: 400 }
    );
  }

  try {
    const data = await client.fetch(query, params || {});
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Sanity query failed" }, { status: 500 });
  }
}
