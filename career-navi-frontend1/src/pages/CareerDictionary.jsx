import React, { useState, useEffect } from "react";
import axios from "axios";

function CareerDictionary() {
    const [careers, setCareers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [selectedJob, setSelectedJob] = useState(null);
    const [showDetail, setShowDetail] = useState(false);
    const [showScrapPopup, setShowScrapPopup] = useState(false);
    const [scrapList, setScrapList] = useState([]);

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

    const handleScrap = async (jobCd, jobNm, jobWork) => {
        try {
            await axios.post("/api/favorite-jobs", { jobCd, jobNm, jobWork });
            alert("⭐ 관심 직업으로 등록되었습니다!");
        } catch (err) {
            alert("서버 오류가 발생했습니다.");
            console.error(err);
        }
    };

    const loadScrapList = async () => {
        try {
            const res = await axios.get("/data/favorite_job.json");
            setScrapList(res.data);
        } catch (err) {
            console.error("스크랩 목록 불러오기 실패", err);
        }
    };

    const deleteScrap = (jobCd) => {
        const updated = scrapList.filter((job) => job.jobCd !== jobCd);
        setScrapList(updated);
        // 파일에 저장하려면 서버 API 필요 (프론트에서 json 직접 수정 불가)
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
                <button
                    onClick={() => {
                        loadScrapList();
                        setShowScrapPopup(true);
                    }}
                    className="mb-6 px-4 py-2 bg-yellow-300 text-black font-semibold rounded-full hover:bg-yellow-400 transition"
                >
                    ⭐ 나의 관심 직업 보기
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
                            onClick={() =>
                                handleScrap(
                                    selectedJob.baseInfo?.job_cd,
                                    selectedJob.baseInfo?.job_nm,
                                    selectedJob.workList?.map((w) => w.work).join(" ")
                                )
                            }
                            className="mt-6 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition"
                        >
                            ⭐ 관심 직업으로 등록하기
                        </button>


                    </div>
                </div>
            )}
            {showScrapPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                    <div className="bg-white w-full max-w-2xl p-6 rounded-2xl shadow-xl relative animate-popupModal max-h-[80vh] overflow-y-auto">
                        <button
                            onClick={() => setShowScrapPopup(false)}
                            className="absolute top-3 right-4 text-gray-400 hover:text-black text-xl"
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-bold text-purple-700 mb-4">⭐ 나의 관심 직업 목록</h2>

                        {scrapList.length > 0 ? (
                            <ul className="space-y-4">
                                {scrapList.map((job) => (
                                    <li
                                        key={job.jobCd}
                                        className="bg-purple-50 rounded-xl p-4 shadow flex justify-between items-start"
                                    >
                                        <div>
                                            <h3 className="font-bold text-lg text-purple-800">{job.jobNm}</h3>
                                            <p className="text-sm text-gray-700 mt-1">{job.jobWork}</p>
                                        </div>
                                        <button
                                            onClick={() => deleteScrap(job.jobCd)}
                                            className="text-sm text-red-500 hover:text-red-700 font-semibold"
                                        >
                                            삭제
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-center text-gray-500">스크랩된 직업이 없습니다.</p>
                        )}
                    </div>
                </div>
            )}

        </div>
    );
}

export default CareerDictionary;
