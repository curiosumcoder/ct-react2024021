import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product - Create",
  description: "Create a new product for the catalog.",
};

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1 className="text-primary">Product</h1>
      {children}
    </>
  );
}
