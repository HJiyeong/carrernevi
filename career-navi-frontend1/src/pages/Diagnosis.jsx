import React, { useEffect, useState } from "react";
import axios from "axios";

function Diagnosis() {
    const [report, setReport] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const generateReport = async () => {
            try {
                console.log("🔍 리포트 생성 시작");

                const [res1, res2] = await Promise.all([
                    axios.get("/data/result.json"),         // ✅ 성향 결과
                    axios.get("/data/favorite_job.json"),   // ✅ 스크랩 직업
                ]);

                const personality = res1.data;
                const favorites = res2.data;


                console.log("✅ 데이터 로드 성공", res1.data, res2.data);

                const response = await axios.post(
                    "/api/report/generate",
                    {
                        typeName: personality.typeName,
                        keywords: personality.keywords,
                        description: personality.description,
                        favoriteJobs: favorites,
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        responseType: "text",
                    }
                );

                console.log("✅ GPT 응답 도착", response.data);

                setReport(response.data);
            } catch (err) {
                console.error("❌ GPT 호출 실패:", err);
                setReport("<p style='color:red;'>GPT 호출 중 오류가 발생했습니다.</p>");
            } finally {
                setLoading(false);
            }
        };

        generateReport();
    }, []);


    return (
        <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 px-4 py-10 font-sans">
            {/* 🧠 GPT 리포트 제목 */}
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 mb-2 text-center relative z-10">
                🧠 GPT 진로 적성 리포트
            </h1>

            <div className="relative max-w-3xl mx-auto mt-10">
                {/* 📌 핀 - 카드에 겹치도록 위에 배치 */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                    <img
                        src="/public/pin.png"
                        alt="Pin"
                        className="w-[40px] h-[40px] drop-shadow-lg"
                    />
                </div>

                {/* 📋 리포트 카드 */}
                <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-purple-200 pt-10 p-6 z-10">
                    <h2 className="text-2xl font-bold text-center mb-4">
                        진로심리검사 결과 분석 및 컨설팅 보고서
                    </h2>

                    {loading ? (
                        <div className="text-center text-gray-700 text-lg animate-pulse py-20">
                            ⏳ 진단 보고서를 생성 중입니다...
                        </div>
                    ) : (
                        <div
                            className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: report }}
                        />
                    )}
                </div>

            </div>

        </div>





    );
}

export default Diagnosis;
