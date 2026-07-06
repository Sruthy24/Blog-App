import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: {
    default: "Next Blog",
    template: "%s | Next Blog",
  },
  description: "Modern Blog built with Next.js 15",
  keywords: [
    "Next.js",
    "React",
    "Blog",
    "Tailwind CSS",
  ],
  authors: [
    {
      name: "Sruthy",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
