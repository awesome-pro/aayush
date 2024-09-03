import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main className="min-h-screen w-screen">
        <Navbar />
        {children}
        <Footer />
      </main>
  );
}
