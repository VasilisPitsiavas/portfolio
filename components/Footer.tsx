export default function Footer() {
  return (
    <footer className="bg-[#0A1316] border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Vasileios Pitsiavas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
