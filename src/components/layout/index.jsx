import Nav from "../navbar";
import Footer from "../footer";

export default function Layout({ children }) {
  return (
    <div className="text-white">
      <Nav />
      <main className="px-5 md:px-0 xl:w-[1156px] xl:mx-auto lg:px-28 xl:px-0 w-full pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
}
