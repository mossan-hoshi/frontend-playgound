import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRocket } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      {/* ナビゲーションバー */}
      <header className="py-6">
        <div className="flex flex-wrap justify-between">
          <div className="container mx-auto flex flex-wrap justify-between items-center px-8 md:px-14 w-full">
            <div className="text-3xl font-bold">サイト名</div>
            <div className="space-x-12 hidden md:flex items-center">
              <a
                href="#home"
                className="hover:text-selected-text transition-all duration-300"
              >
                ホーム
              </a>
              <a
                href="#portfolio"
                className="hover:text-selected-text transition-all duration-300"
              >
                ポートフォリオ
              </a>
              <a
                href="#customer"
                className="hover:text-selected-text transition-all duration-300"
              >
                お客様
              </a>
              <a href="#contact">
                <button className="px-6 py-2 bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300">
                  お問い合わせ
                </button>
              </a>
            </div>
          </div>
          <div className="md:hidden px-6">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </header>
      {/* ヒーローセクション */}
      <section>
        <div
          id="home"
          className="container mt-16 flex flex-wrap justify-between px-8 md:px-14 lg:px-24 w-full"
        >
          <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold min-w-[500px] lg:min-w-[600px]  text-center md:text-left">
                TailWindCSSで
                <br />
                美しいサイトを
                <br />
                作ります
              </h1>
              <button className="bg-theme font-bold text-xl hover:bg-purple-600 px-8 py-2 rounded-xl my-4">
                <FontAwesomeIcon icon={faRocket} className="pr-2" />
                もっと見る
              </button>
            </div>
            <div className=" w-[600px] h-[500px] relative">
              <Image
                src="/hero.jpg" // 画像のパス
                layout="fill"
                objectFit="cover"
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
