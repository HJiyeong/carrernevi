// Home.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RecommendedSlide from "../components/RecommendedSlide";

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

  const handleChatClick = () => {
    navigate("/chat");
  };

  return (
      <div className="flex min-h-screen bg-[#f9fafb] font-sans relative">
        {/* Sidebar */}
        <aside className="w-64 bg-gradient-to-b from-[#1f0c3b] via-[#3f1e6d] to-[#7e4ccf] text-white flex flex-col justify-between p-6">
          <div>
            <div className="bg-white p-3 rounded-xl shadow-md mb-10 flex items-center justify-center">
              <img src="/logo.png" alt="CareerNavi Logo" className="h-12 object-contain" />
            </div>
            {/* 슬로건 / 철학 문구 */}
            <div className="text-[11.5px] text-white text-left leading-snug px-3 py-1 mb-6 space-y-2">
              <div>
                <p className="font-semibold text-white mb-1"> 단순한 AI 추천 도구가 아닙니다.</p>
                <p className="text-white/80">
                  <span className="text-white">당신의 데이터와 선택</span>을 바탕으로,<br />
                  함께 진로를 설계하는 <span className="text-purple-200 font-semibold">맞춤형 내비게이터</span>입니다.
                </p>
              </div>
              <div className="pt-2 border-t border-white/20">
                <p className="text-white font-semibold mt-2">
                  방향만 알려주는 ‘내비’가 아닙니다.<br />
                  <span className="text-purple-200">함께 걸어가는 ‘네비’</span>입니다.
                </p>
              </div>
            </div>


            <nav className="flex flex-col gap-3">
              {["메인", "전공 검색", "진로 백과사전", "진로 캘린더", "설정", "로그아웃"].map((label, idx) => (
                  <Link
                      key={idx}
                      to={['/', '/search', '/dictionary', '/calendar', '/settings', '/logout'][idx]}
                      className="rounded-xl px-4 py-2 text-left hover:bg-white/10 transition cursor-pointer flex items-center gap-3 font-medium text-white"
                  >
                    {label}
                  </Link>
              ))}
            </nav>
          </div>

          <div className="mt-10 bg-white/10 backdrop-blur-sm p-5 rounded-2xl shadow-lg text-white space-y-3 border border-white/20">

            <h3 className="text-sm font-semibold flex items-center gap-2">
              👨‍💻 <span className="text-base font-bold">TEAM 잡스케치 (JobSketch)</span>
            </h3>

            <p className="text-xs leading-relaxed text-white/90">
              잡스케치(JobSketch)는 진로를 설계하고 싶은 학생들을 위해,
              <span className="block mt-1">AI와 공공데이터를 활용한 <strong className="text-purple-200 font-medium">진짜 ‘진로 설계 도구’</strong>를 만들기 위해 시작된 팀입니다.</span>
            </p>

            <div className="border-t border-white/20 pt-3 text-xs leading-relaxed text-white/80">
              ‘Job을 스케치한다’, 동시에 ‘잡(Job)을 캐치(Catch)한다’는 이중적인 의미를 담은 이름처럼,
              <span className="block mt-1">우리는 학생들이 자신의 미래를 <strong className="text-purple-200 font-medium">직접 그리고, 정확히 잡을 수 있도록</strong> 돕고자 합니다.</span>
            </div>
          </div>


        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10">
          {/* Search Input */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center bg-white rounded-full shadow-md px-4 w-2/3">
              <input
                  type="text"
                  placeholder="검색어를 입력하세요..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="flex-1 py-2 outline-none text-gray-700 bg-transparent"
              />
              <button onClick={handleSearch} className="text-gray-400 hover:text-gray-600 text-xl">🔍</button>
            </div>
          </div>

          {/* Hero Section - 개선된 AI 상담 박스 */}
          <section className="relative mb-16 rounded-3xl bg-gradient-to-br from-purple-50 to-blue-50 p-10 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

              {/* 왼쪽 텍스트 영역 */}
              <div className="text-left">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4 leading-snug">
                  AI가 진로를 설계해주는<br />
                  <span className="text-purple-700">맞춤형 커리어 내비게이션</span>
                </h1>

                <p className="text-lg text-gray-600 mb-6">
                  나의 흥미, 성향, 활동을 분석해 <span className="text-purple-600 font-semibold">AI 커비</span>가 맞춤형 진로를 제안합니다
                </p>

                <div
                    onClick={handleChatClick}
                    className="bg-white px-6 py-4 rounded-2xl flex items-center gap-4 shadow-lg hover:shadow-xl hover:scale-105 transition cursor-pointer border border-purple-200 mb-4"
                >
                  <img src="/img_3.png" alt="AI 커비" className="w-16 h-16 rounded-xl border shadow-sm" />
                  <div className="text-left">
                    <p className="text-sm text-gray-500">AI 진로 도우미 커비(Curby)</p>
                    <p className="text-lg font-bold text-purple-700">
            <span className="inline-block bg-purple-100 px-3 py-1 rounded-full shadow-sm hover:shadow-md transition">
              💬 지금 바로 상담해보세요
            </span>
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed">
                  직무 추천부터 활동 이력 분석까지,<br className="hidden sm:inline" />
                  언제든 여러분의 진로 길잡이가 되어드립니다.
                </p>

                <p className="mt-4 text-sm italic text-purple-600">
                  커비(Curby) = Career + Buddy.
                </p>
              </div>

              {/* 오른쪽 슬라이드 영역 */}
              <div className="flex justify-end">
                <RecommendedSlide />
              </div>
            </div>
          </section>





          {/* 기능 카드 - 진단 / 탐색 / 실천 */}
          <section className="grid grid-cols-3 gap-6 mb-16">
            {[
              { badge: '🧭 1.진단', label: 'AI 기반 진로 적성 검사', to: '/test', color: 'from-violet-400 to-purple-500', img: '/test.png' },
              { badge: '🔍 2.탐색', label: '커리어 백과사전', to: '/dictionary', color: 'from-pink-400 to-purple-400', img: '/book.png' },
              { badge: '🚀 3.실천', label: '커리어 마일스톤', to: '/milestone', color: 'from-cyan-400 to-blue-400', img: '/stop.png' }
            ].map(({ badge, label, to, color, img }) => (
                <Link to={to} key={to}>
                  <div className={`relative bg-gradient-to-r ${color} p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl hover:brightness-105 transition`}>
                    <div className="absolute top-3 left-3 bg-white text-purple-600 text-xs font-semibold px-3 py-1 rounded-full shadow-md border border-purple-200">
                      {badge}
                    </div>
                    <img src={img} alt={label} className="w-20 h-20 mb-4 mx-auto" />
                    <p className="text-white text-xl font-bold text-center">{label}</p>
                  </div>
                </Link>
            ))}
          </section>

          {/* 마이페이지 */}
          <section className="mb-16">
            <Link to="/mypage-detail">
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg hover:scale-105 transition transform cursor-pointer flex items-center gap-8">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">나의 커리어 여정</h2>
                  <img src="/graph-design.png" alt="진로 활동 그래프" className="w-full h-auto object-contain rounded-lg shadow" />
                </div>
                <div className="w-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 text-center shadow-inner">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-200 via-blue-200 to-purple-200 shadow" />
                    <img src="/img_1.png" alt="프로필" className="relative z-10 w-24 h-24 rounded-full object-contain" />
                  </div>
                  <p className="font-bold text-lg text-gray-800 mb-1">김교육</p>
                  <p className="text-sm text-gray-500 mb-4">k-education@mail.com</p>
                  <div className="flex justify-around border-t pt-4 text-sm text-gray-600">
                    <div><p className="font-semibold text-xl text-purple-700">탐색형</p><p className="mt-1">진로 유형</p></div>
                    <div><p className="font-semibold text-xl text-purple-700">콘텐츠 플래너</p><p className="mt-1">추천 직무</p></div>
                  </div>
                </div>
              </div>
            </Link>
          </section>

          {/* 통계 카드 */}
          <section className="grid grid-cols-3 gap-6 mb-12">
            {[['연결된 직무', '24', '/job-links'], ['직무진단서', '15', '/diagnosis'], ['진로 활동', '17', '/activities']].map(([label, count, to]) => (
                <Link to={to} key={label}>
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all duration-200 text-center border border-blue-200">
                    <h3 className="text-base font-semibold text-gray-700 mb-2">{label}</h3>
                    <p className="text-3xl font-extrabold text-purple-700">{count}</p>
                  </div>
                </Link>
            ))}
          </section>

        </main>
      </div>
  );
}

export default Home;
