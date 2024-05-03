import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
  language: string;
}

export default function Layout({
  language,
  children,
}: LayoutProps): JSX.Element {
  return (
    <>
      <Navbar language={language} />

      <div className="container mx-auto">{children}</div>

      <Footer language={language} />
    </>
  );
}
