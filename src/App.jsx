import React from "react";

function App() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 font-sans">

      {/* 사이드바 */}
      <aside className="w-64 bg-gradient-to-b from-purple-800 to-purple-600 text-white flex flex-col justify-between p-6">
        <div>
          <h1 className="text-2xl font-bold mb-12">커리어네비</h1>
          <nav className="flex flex-col gap-4">
            <a href="#" className="hover:text-purple-300">메인</a>
            <a href="#" className="hover:text-purple-300">진로 검색</a>
            <a href="#" className="hover:text-purple-300">진로 백과사전</a>
            <a href="#" className="hover:text-purple-300">진로 캘린더</a>
            <a href="#" className="hover:text-purple-300">설정</a>
            <a href="#" className="hover:text-purple-300">로그아웃</a>
          </nav>
        </div>
        <div className="mt-10 bg-purple-700 p-4 rounded-lg text-center">
          <p className="text-sm mb-2">진로 탐색 프로그램</p>
          <button className="bg-white text-purple-700 px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-100">
            TRY NOW
          </button>
        </div>
      </aside>

      {/* 메인 컨텐츠 */}
      <main className="flex-1 p-10">
        {/* 검색창 + 유저정보 */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center bg-white rounded-full shadow-md px-4 w-1/2">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 py-2 outline-none text-gray-700"
            />
            <button className="text-gray-400 hover:text-gray-600">🔍</button>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="/user-icon.png"
              alt="User"
              className="w-12 h-12 rounded-full"
            />
            <div className="text-right">
              <div className="font-bold text-gray-800">김교육</div>
              <div className="text-sm text-gray-500">k-education@mail.com</div>
            </div>
          </div>
        </div>

        {/* 메인 카드 섹션 */}
        <section className="grid grid-cols-3 gap-6 mb-12">
          {/* 카드 */}
          <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-6 rounded-xl shadow-md flex flex-col justify-between text-white font-bold text-xl">
            커리어 백과사전
            <div className="text-right text-2xl">🤍</div>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-6 rounded-xl shadow-md flex flex-col justify-between text-white font-bold text-xl">
            AI 기반 진로 적성 검사
            <div className="text-right text-2xl">🤍</div>
          </div>
          <div className="bg-gradient-to-r from-cyan-400 to-purple-300 p-6 rounded-xl shadow-md flex flex-col justify-between text-white font-bold text-xl">
            커리어 마일스톤
            <div className="text-right text-2xl">🤍</div>
          </div>
        </section>

        {/* 활동 분석 */}
        <section className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">마이페이지</h2>
          <div className="h-40 bg-gradient-to-r from-purple-300 to-blue-300 rounded-lg flex items-center justify-center font-bold text-white mb-8">
            그래프 자리
          </div>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="bg-blue-100 p-6 rounded-lg font-semibold text-gray-700">
              연결된 직무<br />
              <span className="text-2xl font-bold">24</span>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg font-semibold text-gray-700">
              직무진단서<br />
              <span className="text-2xl font-bold">15</span>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg font-semibold text-gray-700">
              진로 활동<br />
              <span className="text-2xl font-bold">17</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
