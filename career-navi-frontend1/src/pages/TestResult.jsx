import React from 'react';
import { useLocation } from 'react-router-dom';

function TestResult() {
    const location = useLocation();
    const result = location.state?.result;

    if (!result) {
        return <div className="p-10 text-center text-red-500">결과를 불러올 수 없습니다.</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 flex flex-col items-center justify-center p-8">
            <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-2xl text-center">
                <h1 className="text-2xl font-bold mb-4">검사 결과</h1>
                <p className="mb-6">아래 버튼을 눌러 커리어넷 결과 페이지로 이동하세요.</p>

                <a
                    href={result.reportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl transition"
                >
                    결과 보기
                </a>
            </div>
        </div>
    );
}

export default TestResult;
