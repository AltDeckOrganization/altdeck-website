import Nav from "../navbar";
import Footer from "../footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
