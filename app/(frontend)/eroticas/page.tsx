import Link from "next/link";

interface Erotica {
  label: string;
  url: string;
  image: string;
  description: string;
}
const eroticas: Erotica[] = [];

const Page = () => {
  return (
    <div className="mt-20">
      <main className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
        {eroticas.length > 0 ? (
          eroticas.map((item, index) => (
            <Link key={index} href={item.url}></Link>
          ))
        ) : (
          <div className="flex items-center justify-center">
            <h1>暂无作品</h1>
          </div>
        )}
      </main>
    </div>
  );
};
export default Page;
