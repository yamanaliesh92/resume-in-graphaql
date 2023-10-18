import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

const API_KEY: string = process.env.DATA_API_KEY as string;

export async function GET(request: Request) {
  const data = await fetch(DATA_SOURCE_URL);
  const todo: Todo[] = await data.json();

  return NextResponse.json(todo);
}

export async function DELETE(request: Request) {
  const { id }: Partial<Todo> = await request.json();
  if (!id) return NextResponse.json("id is required");

  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "API-KEY": API_KEY,
    },
  });
  return NextResponse.json({ Meassage: `delete ${id} is done` });
}
