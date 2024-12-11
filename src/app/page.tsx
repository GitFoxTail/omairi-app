import { Noto_Sans_JP } from 'next/font/google';
import { GiFox } from "react-icons/gi";

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'], // 必要な太さを選択
  display: 'swap',
});

export default function Home() {
  return (
    <div className={notoSansJP.className}>
      <header className="bg-orange-600 whitespace-pre flex h-20 items-end">
        <GiFox className="h-16 w-16"/>
        <div className="text-3xl text-amber-900 font-bold mx-5 mb-2">OMAIRI Memory</div>
        <div className="mb-2">～お参りを記録しよう～</div>
      </header>
      <main>
        <div className="m-5 p-5 border border-black h-40 rounded-3xl">
          <div>🦊お参りを登録</div>
          <div className="flex justify-center"><div className="text-4xl">+</div></div>
        </div>
        <div className="m-5 p-5 border border-black h-40 rounded-3xl">
          <div>📜おみくじを登録</div>
          <div className="flex justify-center"><div className="text-4xl">+</div></div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
