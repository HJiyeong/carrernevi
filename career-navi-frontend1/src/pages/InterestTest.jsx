import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function InterestTest() {
    const [sessionId, setSessionId] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        axios.post('https://career-navi-backend.onrender.com/api/test/start', {
            userId: 'testuser123',
            testType: '흥미 검사'
        }).then(res => {
            const id = res.data.sessionId;
            setSessionId(id);
            return axios.get(`https://career-navi-backend.onrender.com/api/test/questions/${id}`);
        }).then(res => {
            console.log("❗ 질문 API 응답 확인:", res.data);
            setQuestions(res.data.RESULT);
        });
    }, []);

    const handleAnswer = (answerScore) => {
        const qNo = current + 1;

        setAnswers(prev => [...prev, { questionNo: qNo, answerValue: answerScore }]);

        axios.post('https://career-navi-backend.onrender.com/api/test/answer', {
            sessionId,
            questionNo: qNo,
            answerValue: answerScore
        }).then(() => {
            if (current < questions.length - 1) {
                setCurrent(current + 1);
            } else {
                alert('검사 완료! 결과 페이지로 이동합니다.');

                const finalAnswers = [...answers, { questionNo: qNo, answerValue: answerScore }];
                const answerString = finalAnswers
                    .map(ans => `${ans.questionNo}=${ans.answerValue}`)
                    .join(' ');

                axios.post('https://career-navi-backend.onrender.com/api/test/submit', {
                    sessionId,
                    userInfo: {
                        name: '황지영',
                        gender: '100324',
                        grade: '3',
                        school: 'DGIST',
                        email: '',
                        startDtm: Date.now(),
                        answers: answerString
                    }
                }).then(res => {
                    console.log('검사 결과:', res.data);
                    navigate('/test/result', { state: { result: res.data } });
                });
            }
        });
    };

    if (questions.length === 0) return <div className="p-10">⏳ 질문을 불러오는 중...</div>;

    const currentQuestion = questions[current];

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col items-center justify-center p-8">
            <div className="w-full max-w-2xl bg-white rounded-xl shadow p-8 text-center">
                <h2 className="text-xl font-semibold mb-6">
                    {`Q${current + 1}. ${currentQuestion.question}`}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    {Array.from({ length: 7 }).map((_, idx) => {
                        const answerText = currentQuestion[`answer0${idx + 1}`];
                        const answerScore = currentQuestion[`answerScore0${idx + 1}`];
                        return (
                            answerText && (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswer(answerScore)}
                                    className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl transition"
                                >
                                    {answerText}
                                </button>
                            )
                        );
                    })}
                </div>
                <p className="mt-6 text-sm text-gray-500">{`(${current + 1} / ${questions.length})`}</p>
            </div>
        </div>
    );
}

export default InterestTest;
