export default function Home() {
  return (
    <>
      {/* ナビゲーションバー */}
      <header className="py-6">
        <div className="container mx-auto">
          <div>サイト名</div>
          <div>
            <a href="#home">ホーム</a>
            <a href="#portfolio ">ポートフォリオ</a>
            <a href="#customer">お客様</a>
            <a href="#contact">
              <button>お問い合わせ</button>
            </a>
          </div>
        </div>
      </header>
      {/*  */}
    </>
  );
}
