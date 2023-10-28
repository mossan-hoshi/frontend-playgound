"use client";
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
      <button className="easy-button" onClick={() => console.warn("hello")}>
        ボタン(素css)
      </button>
      <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl ml-10">
        ボタン(tw)
      </button>
    </>
  );
}
