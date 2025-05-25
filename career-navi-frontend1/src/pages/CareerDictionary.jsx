import React, { useState, useEffect } from "react";
import axios from "axios";

function CareerDictionary() {
    const [careers, setCareers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [selectedJob, setSelectedJob] = useState(null);
    const [showDetail, setShowDetail] = useState(false);

    useEffect(() => {
        loadCareers(page);
    }, [page]);

    const loadCareers = async (pageIndex) => {
        const res = await axios.get(`/api/career/jobs?pageIndex=${pageIndex}`);
        const newCareers = res.data.jobs || [];
        if (newCareers.length === 0) {
            setHasMore(false);
        } else {
            setCareers((prev) => [...prev, ...newCareers]);
        }
    };

    const handleSearch = async () => {
        if (searchTerm.trim() === "") return;
        const res = await axios.get(`/api/career/search?keyword=${searchTerm}`);
        setCareers(res.data.jobs);
        setHasMore(false);
    };

    const handleCardClick = async (jobCd) => {
        const res = await axios.get(`/api/career/detail?seq=${jobCd}`);
        setSelectedJob(res.data);
        setShowDetail(true);
    };

    const handleScrap = (jobCd) => {
        const stored = JSON.parse(localStorage.getItem("scrapJobs") || "[]");
        if (!stored.includes(jobCd)) {
            stored.push(jobCd);
            localStorage.setItem("scrapJobs", JSON.stringify(stored));
            alert("⭐ 관심 직업으로 등록되었습니다!");
        } else {
            alert("이미 등록된 직업입니다.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-pink-50 to-purple-100 flex flex-col items-center py-10 px-4 font-sans">
            <h1 className="text-3xl font-bold text-purple-700 mb-8">커리어 백과사전 📚</h1>

            {/* 검색창 */}
            <div className="w-full max-w-2xl mb-8 flex gap-2">
                <input
                    type="text"
                    placeholder="직업명을 입력하세요 (예: 개발자)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 p-4 rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <button
                    onClick={handleSearch}
                    className="bg-purple-500 text-white px-4 py-2 rounded-xl hover:bg-purple-600"
                >
                    검색
                </button>
            </div>

            {/* 결과 리스트 */}
            <div className="w-full max-w-2xl space-y-6">
                {careers.length > 0 ? (
                    careers.map((item, idx) => (
                        <div
                            key={idx}
                            onClick={() => handleCardClick(item.job_cd)}
                            className="cursor-pointer bg-white shadow-md rounded-xl p-6 hover:scale-[1.02] transition"
                        >
                            <h2 className="text-lg font-bold text-gray-800">{item.job_nm}</h2>
                            <p className="text-sm text-gray-600 mt-2">직업군: {item.aptit_name}</p>
                            <p className="text-sm text-gray-500 mt-1">관련직업: {item.rel_job_nm}</p>
                        </div>
                    ))
                ) : (
                    <div className="text-gray-500 text-center">검색 결과가 없습니다.</div>
                )}
            </div>

            {/* 더 불러오기 버튼 */}
            {hasMore && (
                <button
                    onClick={() => setPage((prev) => prev + 1)}
                    className="mt-10 bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700"
                >
                    더 불러오기
                </button>
            )}

            {/* 상세 팝업 */}
            {showDetail && selectedJob && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white w-full max-w-2xl p-6 rounded-2xl shadow-2xl relative animate-popupModal">
                        <button
                            onClick={() => setShowDetail(false)}
                            className="absolute top-3 right-3 text-gray-400 hover:text-black text-xl"
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-bold text-purple-700">
                            {selectedJob.baseInfo?.job_nm}
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            직업군: {selectedJob.baseInfo?.aptit_name}
                        </p>
                        <p className="mt-2 text-sm">
                            하는 일: {selectedJob.workList?.map((w) => w.work).join(" ")}
                        </p>
                        <p className="mt-2 text-sm">연봉수준: {selectedJob.baseInfo?.wage} 만원</p>
                        <p className="mt-2 text-sm text-gray-500">
                            직업 만족도: {selectedJob.baseInfo?.satisfication} %
                        </p>
                        <button
                            onClick={() => handleScrap(selectedJob.baseInfo?.job_cd)}
                            className="mt-6 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition"
                        >
                            ⭐ 관심 직업으로 등록하기
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CareerDictionary;
