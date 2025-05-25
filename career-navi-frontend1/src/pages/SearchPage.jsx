import React, { useState, useEffect } from "react";

function SearchPage() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [regionFilter, setRegionFilter] = useState("전체");
    const [categoryFilter, setCategoryFilter] = useState("전체");
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;

    const [regionOptions, setRegionOptions] = useState([]);
    const [categoryOptions, setCategoryOptions] = useState([]);

    useEffect(() => {
        fetch("/major_info.json")
            .then((res) => res.json())
            .then((jsonData) => {
                const mapped = jsonData.map((row) => ({
                    region: row["지역"],
                    university: row["학교명"],
                    department: row["단과대학명"],
                    major: row["학부_과(전공)명"],
                    categoryLarge: row["표준분류대계열"],
                    categoryMid: row["표준분류중계열"],
                    categorySmall: row["표준분류소계열"],
                    customCategory: row["대학자체대계열"],
                }));
                setData(mapped);

                const uniqueRegions = Array.from(new Set(mapped.map((d) => d.region))).sort();
                const uniqueCategories = Array.from(new Set(mapped.map((d) => d.categoryLarge))).sort();

                setRegionOptions(["전체", ...uniqueRegions]);
                setCategoryOptions(["전체", ...uniqueCategories]);
            });
    }, []);

    const filteredData = data
        .filter(
            (item) =>
                item.major?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.university?.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((item) => regionFilter === "전체" || item.region === regionFilter)
        .filter((item) => categoryFilter === "전체" || item.categoryLarge === categoryFilter);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, regionFilter, categoryFilter]);

    const goToPrevious = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const goToNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 px-6 py-10 font-sans">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-purple-700 mb-4">🎓 대학 전공 정보 검색</h1>
                <p className="text-gray-600 mb-6">전공명이나 대학명을 검색하고, 지역이나 계열로 필터링해보세요.</p>

                {/* 검색 + 필터 */}
                <div className="flex flex-wrap gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="예: 기계공학과, 서울대"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1 p-3 rounded-xl shadow border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <select
                        value={regionFilter}
                        onChange={(e) => setRegionFilter(e.target.value)}
                        className="p-3 rounded-xl shadow border border-gray-200"
                    >
                        {regionOptions.map((region, idx) => (
                            <option key={idx} value={region}>
                                {region}
                            </option>
                        ))}
                    </select>
                    <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        className="p-3 rounded-xl shadow border border-gray-200"
                    >
                        {categoryOptions.map((cat, idx) => (
                            <option key={idx} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                {/* 검색 결과 */}
                <div className="bg-white shadow-md rounded-xl p-6 space-y-6">
                    {paginatedData.length > 0 ? (
                        paginatedData.map((item, idx) => (
                            <div key={idx} className="border-b pb-4 last:border-b-0">
                                <h2 className="text-xl font-bold text-purple-700">{item.major}</h2>
                                <p className="text-sm text-gray-700 mt-1">
                                    학교명: {item.university} / {item.department || "단과대 없음"}
                                </p>
                                <p className="text-sm text-gray-700">지역: {item.region}</p>
                                <p className="text-sm text-gray-700">
                                    분류: {item.categoryLarge} &gt; {item.categoryMid} &gt; {item.categorySmall}
                                </p>
                                <p className="text-sm text-gray-700">학교 자체 분류: {item.customCategory}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center">검색 결과가 없습니다.</p>
                    )}
                </div>

                {/* 이전 / 다음 페이지네이션 */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-6 space-x-4">
                        <button
                            onClick={goToPrevious}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded-full ${
                                currentPage === 1 ? "bg-gray-300 text-gray-500" : "bg-purple-500 text-white hover:bg-purple-600"
                            }`}
                        >
                            « 이전
                        </button>
                        <span className="px-4 py-2 text-sm text-gray-700">
              페이지 {currentPage} / {totalPages}
            </span>
                        <button
                            onClick={goToNext}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 rounded-full ${
                                currentPage === totalPages
                                    ? "bg-gray-300 text-gray-500"
                                    : "bg-purple-500 text-white hover:bg-purple-600"
                            }`}
                        >
                            다음 »
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchPage;
