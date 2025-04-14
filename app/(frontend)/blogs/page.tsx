import Link from "next/link";
import Card from "@/app/components/Card";
interface Blog {
  title: string;
  description: string;
  date: string;
  tags: string[];
  url: string;
  images?: [];
}
const blogs: Blog[] = [];
export default function Blogs() {
  return (
    <div className="mt-20">
      <main className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <Link key={index} href={blog.url}>
              <Card card={blog} />
            </Link>
          ))
        ) : (
          <div className="flex items-center justify-center">
            <h1>暂无博客</h1>
          </div>
        )}
      </main>
    </div>
  );
}
