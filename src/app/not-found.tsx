import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center py-8">
      <h1 className="text-9xl font-extrabold text-black tracking-widest">
        404
      </h1>
      <div className="bg-gray-600 px-2 text-sm rounded rotate-12 absolute text-white">
        Page Not Found
      </div>
      <Link href="/">
        <button className="mt-5">
          <div className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-gray-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-gray-600 border border-current">
              Go Home
            </span>
          </div>
        </button>
      </Link>
    </main>
  );
}
