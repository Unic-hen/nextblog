import { NextRequest, NextResponse } from "next/server";
const blogs = [
  {
    title: "First Blog",
    description: `Lorem ipsum, dolor sit `,
    date: "2025-01-11",
    tags: ["react", "nextjs", "tailwindcss"],
    url: "/blog/1",
  },
  {
    title: "Second Blog",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          veritatis quasi unde et natus aliquid ipsa aliquam rerum, facilis minus
          consequatur dolorum dolorem soluta, quisquam consequuntur in
          reprehenderit corrupti tempore. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatum laborum, fuga reprehenderit blanditiis vel
          aliquam. Repellendus, doloribus? Saepe fugiat ex dolorum ipsum, porro
          earum asperiores modi maxime hic quo repellendus mollitia repellat quis
          sunt aut`,
    date: "2025-01-11",
    tags: ["react", "nextjs", "tailwindcss"],
    url: "/blog/3",
  },
  {
    title: "Third Blog",
    description: `Lorem ipsum, repellendus mollitia repellat quis`,
    date: "2025-01-11",
    tags: ["react", "nextjs", "java"],
    url: "/blog/3",
  },
];

export async function GET(request: NextRequest) {
  return NextResponse.json(blogs);
}
