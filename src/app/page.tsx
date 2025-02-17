import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center gap-3 py-10">
        <Link href={"/question-1/dashboard"} className="bg-black text-white py-3 rounded-lg px-6 hover:bg-gray-200 hover:text-black transition-all duration-300 border border-black font-bold">Question-1</Link>
        <Link href={"/question-2/dashboard"} className="bg-black text-white py-3 rounded-lg px-6 hover:bg-gray-200 hover:text-black transition-all duration-300 border border-black font-bold">Question-2</Link>
      </div>
    </>
  );
}
