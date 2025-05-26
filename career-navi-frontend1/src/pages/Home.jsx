import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();

    if (term.includes("백과") || term.includes("진로")) {
      navigate("/dictionary");
    } else if (term.includes("전공")) {
      navigate("/search");
    } else if (term.includes("캘린더") || term.includes("일정")) {
      navigate("/calendar");
    } else if (term.includes("마이페이지")) {
      navigate("/mypage-detail");
    } else if (term.includes("검사") || term.includes("테스트")) {
      navigate("/test");
    } else {
      navigate("/search");
    }
  };

  return (
      <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 font-sans">
        {/* 사이드바 */}
        <aside className="w-64 bg-gradient-to-b from-[#1f0c3b] via-[#3f1e6d] to-[#7e4ccf] text-white flex flex-col justify-between p-6">

        <div>
            {/* 로고 삽입 */}
            <div className="bg-white p-3 rounded-xl shadow-md mb-10 flex items-center justify-center">
              <img
                  src="/logo.png" // public 폴더에 이 로고 PNG 넣기!
                  alt="CareerNavi Logo"
                  className="h-12 object-contain"
              />
            </div>

            {/* 네비게이션 메뉴 */}
            <nav className="flex flex-col gap-3">
              {[
                { to: "/", label: "메인" },
                { to: "/search", label: "전공 검색" },
                { to: "/dictionary", label: "진로 백과사전" },
                { to: "/calendar", label: "진로 캘린더" },
                { to: "/settings", label: "설정" },
                { to: "/logout", label: "로그아웃" },
              ].map(({ to, label }) => (
                  <Link
                      key={to}
                      to={to}
                      className="rounded-xl px-4 py-2 text-left hover:bg-white/10 transition cursor-pointer flex items-center gap-3 font-medium text-white"
                  >
                    {label}
                  </Link>
              ))}
            </nav>
          </div>

          {/* 사이드 하단 CTA */}
          <div className="mt-10 bg-purple-700 p-4 rounded-2xl text-center shadow-md">
            <p className="text-sm mb-2">진로 탐색 프로그램</p>
            <button className="bg-white text-purple-700 px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-100 transition">
              TRY NOW
            </button>
          </div>
        </aside>

        {/* 메인 컨텐츠 */}
        <main className="flex-1 p-10">
          {/* 검색창 + AI 튜터 안내 */}
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center bg-white rounded-full shadow-md px-4 w-1/2">
              <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSearch();
                  }}
                  className="flex-1 py-2 outline-none text-gray-700"
              />
              <button
                  onClick={handleSearch}
                  className="text-gray-400 hover:text-gray-600"
              >
                🔍
              </button>
            </div>
            <div className="flex items-center">
              <Link
                  to="/chat"
                  className="flex items-center gap-4 bg-white px-4 py-3 rounded-2xl shadow hover:scale-105 hover:bg-purple-50 transition cursor-pointer w-[260px]"
              >
                {/* 상담사 아이콘 */}
                <img
                    src="public/img_3.png" // public 폴더에 이 파일 저장하세요!
                    alt="AI 진로 상담 아이콘"
                    className="w-14 h-14 rounded-xl"
                />

                {/* 텍스트 부분 */}
                <div className="flex flex-col">
                  <span className="text-base font-bold text-gray-900">AI 진로 상담</span>
                  <span className="text-sm text-gray-500">24시간 상담 가능</span>
                </div>
              </Link>
            </div>

          </div>

          {/* 메인 카드 섹션 */}
          <section className="grid grid-cols-3 gap-6 mb-12">
            <Link to="/dictionary">
              <div className="bg-gradient-to-br from-pink-300 to-purple-400 p-5 rounded-2xl shadow-md hover:scale-105 transition cursor-pointer relative flex flex-col justify-between items-start h-40">
                <img
                    src="/public/book.png" // public/images 폴더에 이미지 넣기
                    alt="백과사전 아이콘"
                    className="w-16 h-16 mb-2"
                />
                <p className="text-white font-bold text-lg">커리어 백과사전</p>
                <div className="absolute top-3 right-3 text-white text-xl">🤍</div>
              </div>
            </Link>

            <Link to="/test">
              <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-6 rounded-2xl shadow-md hover:scale-105 transition cursor-pointer relative h-40 flex flex-col justify-between">
                {/* 상단: 이미지 */}
                <img
                    src="/public/test.png"
                    alt="적성검사 아이콘"
                    className="w-16 h-16"
                />

                {/* 하단: 텍스트 */}
                <p className="text-white font-bold text-lg">AI 기반 진로 적성 검사</p>

                {/* 우상단: 하트 아이콘 */}
                <div className="absolute top-3 right-3 text-white text-xl">🤍</div>
              </div>
            </Link>

            <Link to="/milestone">
              <div className="bg-gradient-to-r from-cyan-400 to-purple-300 p-6 rounded-2xl shadow-md hover:scale-105 transition cursor-pointer relative h-40 flex flex-col justify-between">
                <img
                    src="/public/stop.png"
                    alt="마일스톤 아이콘"
                    className="w-16 h-16"
                />
                <p className="text-white font-bold text-lg">커리어 마일스톤</p>
                <div className="absolute top-3 right-3 text-white text-xl">🤍</div>
              </div>
            </Link>

          </section>

          {/* 마이페이지 */}
          <section className="mb-12">
            <Link to="/mypage-detail">
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg hover:scale-105 transition transform cursor-pointer flex items-center gap-8">

                {/* 왼쪽: 그래프 */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">마이페이지</h2>
                  <img
                      src="/graph-design.png"
                      alt="진로 활동 그래프"
                      className="w-full h-auto object-contain rounded-lg shadow"
                  />
                </div>

                {/* 오른쪽: 프로필 박스 */}
                <div className="w-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 text-center shadow-inner">
                  {/* 이미지 + 배경 */}
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-200 via-blue-200 to-purple-200 shadow" />
                    <img
                        src="/public/img_1.png"
                        alt="프로필"
                        className="relative z-10 w-24 h-24 rounded-full object-contain"
                    />
                  </div>

                  {/* 이름/이메일 */}
                  <p className="font-bold text-lg text-gray-800 mb-1">김교육</p>
                  <p className="text-sm text-gray-500 mb-4">k-education@mail.com</p>

                  {/* 지표 */}
                  <div className="flex justify-around text-center border-t pt-4 text-sm text-gray-600">
                    <div>
                      <p className="font-semibold text-xl text-purple-700">24</p>
                      <p className="mt-1">관심 진로</p>
                    </div>
                    <div>
                      <p className="font-semibold text-xl text-purple-700">1</p>
                      <p className="mt-1">진로 활동</p>
                    </div>
                  </div>
                </div>


              </div>
            </Link>
          </section>

          {/* 연결된 직무 / 진단서 / 활동 */}
          <section className="grid grid-cols-3 gap-6 mb-12">
            <Link to="/job-links">
              <div className="bg-blue-100 rounded-xl shadow-md p-6 hover:bg-blue-200 hover:shadow-lg hover:scale-105 transition transform cursor-pointer text-center">
                <h3 className="text-lg font-bold mb-2 text-blue-900">연결된 직무</h3>
                <p className="text-2xl font-bold text-purple-700">24</p>
              </div>
            </Link>
            <Link to="/diagnosis">
              <div className="bg-blue-100 rounded-xl shadow-md p-6 hover:bg-blue-200 hover:shadow-lg hover:scale-105 transition transform cursor-pointer text-center">
                <h3 className="text-lg font-bold mb-2 text-blue-900">직무진단서</h3>
                <p className="text-2xl font-bold text-purple-700">15</p>
              </div>
            </Link>
            <Link to="/activities">
              <div className="bg-blue-100 rounded-xl shadow-md p-6 hover:bg-blue-200 hover:shadow-lg hover:scale-105 transition transform cursor-pointer text-center">
                <h3 className="text-lg font-bold mb-2 text-blue-900">진로 활동</h3>
                <p className="text-2xl font-bold text-purple-700">17</p>
              </div>
            </Link>
          </section>
        </main>
      </div>
  );
}

export default Home;
