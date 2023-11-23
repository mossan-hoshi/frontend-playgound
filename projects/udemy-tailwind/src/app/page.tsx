export default function Home() {
  return (
    <>
      {/* ナビゲーションバー */}
      <header className="py-6">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-8 md:px-14 w-full">
          <div className="text-3xl font-bold">サイト名</div>
          <div className="space-x-12">
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
            <a
              href="#contact"
              className="hover:text-selected-text transition-all duration-300"
            >
              <button>お問い合わせ</button>
            </a>
          </div>
        </div>
      </header>
      {/*  */}
    </>
  );
}
