import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Navbar />

      <div className="container mx-auto">{children}</div>

      <Footer />
    </>
  );
}
