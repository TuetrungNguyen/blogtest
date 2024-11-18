export default function Home() {
  return (
    <main className="h-screen bg-cyellow flex items-center justify-center">
      <div className="relative">
        <div className="card max-w-[24rem] max-h-[32.625rem] w-screen h-screen bg-black rounded-xl" />
        <div className="card max-w-[24rem] max-h-[32.625rem] w-screen h-screen bg-white border border-black rounded-xl
         absolute -top-2 -left-2 p-4 pl-5 items-center">
          <div className="flex flex-col items-start w-full">
            <img src="/images/illustration-article.svg" alt="Illustration" className="w-auto h-auto rounded-2xl p-1 mb-5" />
            <div className="pl-1">
              <h1 className="bg-cyellow text-black font-figtree font-bold py-2 px-4 rounded-md mb-4 inline-block">Learning</h1>
            </div>
            <h2 className="font-figtree text-gray800 text-sm text-left pl-1 pb-2">Published 21 Dec 2023</h2>
            <h1 className="font-figtree font-extrabold text-2xl mt-1 text-left pl-1">HTML & CSS Foundations</h1>
            <p className="font-figtree text-gray500 text-base mt-2 mb-2 text-left pl-1">These websites are the backbone of every website,
               defining structure, content, and presentation.</p>
          </div>
          <div className="flex items-center justify-start w-full mt-auto pt-4">
            <img src="/images/image-avatar.webp" alt="Avatar" className="w-9 h-9 rounded-full mr-2" />
            <p className="font-figtree font-bold text-left text-sm">Greg Hooper</p>
          </div>
        </div>
      </div>
    </main>
  );
}
