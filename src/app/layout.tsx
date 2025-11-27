import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Engenharia de Energia | Site Interativo",
  description: "Explore o mundo da engenharia de energia: fontes renováveis, eficiência energética e tecnologias sustentáveis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
