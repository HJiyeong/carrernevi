import React from "react";
import { useNavigate } from "react-router-dom";

function Test() {
  const navigate = useNavigate();

  const tests = [
    { name: "성향 검사", minutes: 15, path: "/test/personality", disabled: false },
    { name: "흥미 검사", minutes: 15, path: "/test/interest", disabled: false },
    { name: "활동 내역 분석", minutes: 10, path: "/test/activity", disabled: false },
    { name: "자기소개서 분석", minutes: 10, path: "/test/resume", disabled: false },
    { name: "희망 직업군 선택", minutes: 5, path: "/test/preference", disabled: true },
  ];

  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100 p-8">
        <div className="w-full max-w-md space-y-4">
          {tests.map((test, idx) => (
              <div
                  key={idx}
                  className="flex items-center justify-between bg-white rounded-full px-6 py-4 shadow-md"
              >
                <div>
                  <div className="text-lg font-semibold">{test.name}</div>
                  <div className="text-sm text-gray-500">{test.minutes} minutes</div>
                </div>
                <button
                    disabled={test.disabled}
                    onClick={() => navigate(test.path)}
                    className={`px-4 py-2 rounded-full text-white text-sm font-semibold transition ${
                        test.disabled
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-blue-500 hover:bg-blue-600"
                    }`}
                >
                  ▶ Play
                </button>
              </div>
          ))}
        </div>

        <button
            onClick={() => navigate("/test/result")}
            className="mt-10 px-6 py-3 text-white rounded-2xl font-semibold bg-gradient-to-br from-pink-400 to-purple-400 shadow-md hover:opacity-90"
        >
          결과 확인
        </button>
      </div>
  );
}

export default Test;
