import Nav from "../navbar";
import Footer from "../footer";

export default function Layout({ children }) {
  return (
    <div className="text-white">
      <Nav />
      <main className="xl:w-[1156px] xl:mx-auto lg:px-20 w-full px-4 pt-20 md:pt-28">
        {children}
      </main>
      <Footer />
    </div>
  );
}
