import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="border border-blue-400 py-16 px-16 my-10">
        <h1 className="text-7xl font-bold sm:text-red-400 md:text-blue-400 lg:text-purple-400 xl:text-green-400">
          TailwindCSS入門
        </h1>
      </div>
      <div className="border border-blue-400 py-16 px-16 my-10">
        <h1 className="lg:text-7xl text-3xl font-bold">TailwindCSS入門</h1>
      </div>
    </>
  );
}
