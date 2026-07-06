export default function Footer() {
  return (
    <footer className="border-t bg-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-8 text-center">

        <h2 className="font-semibold">
          Next Blog
        </h2>

        <p className="text-gray-500 mt-2">
          Built with Next.js, React and Tailwind CSS.
        </p>

        <p className="text-sm text-gray-400 mt-4">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}
