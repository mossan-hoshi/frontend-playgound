// 何かにサインアップするためのサインアップページ、モーダル、フォーム、またはアプリ画面。
// ボランティアイベント、コンテスト登録、プレゼント企画、あなたが想像できる何でもあります。
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center">
          Sign up for our newsletter
        </h1>
        <p className="text-xl text-center m-4">
          Get the latest news on our products, upcoming events, and more.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <input
            className="w-96 h-16 px-4 text-lg rounded-full"
            placeholder="Enter your email"
          />
          <button className="w-96 h-16 mt-4 text-lg font-bold text-white bg-black rounded-full">
            Sign up
          </button>
        </div>
        <div className="flex items-center justify-center mt-8">
          <p className="text-lg">Already have an account?</p>
          <a className="text-lg text-blue-500 underline" href="#">
            Log in
          </a>
        </div>
      </div>
    </main>
  )
}
