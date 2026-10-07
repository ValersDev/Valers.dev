import type { Metadata } from "next";
import { ibmPlexMono, ibmPlexSans, spaceGrotesk } from "@/app/fonts";
import { LanguageProvider } from "@/components/i18n/language-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "ValersDev",
  description:
    "Ingeniero de software enfocado en backend. Les Franqueses del Vallès.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
