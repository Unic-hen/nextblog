import Link from "next/link";
import { Card } from "@/app/components/_components";
const baseUrl = "/erotica";
const eroticas = [
  {
    title: "Rote Cards",
    description: "A simple card component with a hover effect",
    url: "/rotecards",
    date: "2025-02-22",
    tags: ["css", "js"],
  },
  {
    title: "Code Editer",
    description: "A simple code editor component",
    url: "/codediter",
    date: "2025-02-22",
    tags: ["css", "js", "html"],
  },
];
export default function Erotica() {
  return (
    <div className="mt-24 container mx-auto ">
      <h1 className="text-5xl font-bold mb-4">Eroticas:</h1>
      <main className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
        {eroticas.map((erotica, index) => (
          <Link key={index} href={baseUrl + erotica.url}>
            <Card card={erotica} />
          </Link>
        ))}
      </main>
    </div>
  );
}
