import Header from "./components/Header";
import Copy from "@/app/components/Copy";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <main className="lg:w-3/4 md:w-4/5 sm:w-4/5">{children}</main>
      </div>
      <Copy />
    </>
  );
};
export default Layout;
