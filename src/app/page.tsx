import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center gap-3 py-10">
        <Link href={"/question-1/dashboard"} className="">Question-1</Link>
        <Link href={"/question-2/dashboard"} className="">Question-2</Link>
      </div>
    </>
  );
}
