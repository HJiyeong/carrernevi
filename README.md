# 🧭 CareerNavi: AI 기반 진로 설계 및 추천 서비스

---

## 👨‍💻 팀 소개 – TEAM 잡스케치

**잡스케치(JobSketch)**는  
“데이터와 기술로 누구나 자신의 진로를 스스로 설계할 수 있는 세상을 만들자”는 비전 아래 결성된  
**AI·데이터·교육 공공데이터 전문가 팀**입니다.  
교육 격차와 정보 비대칭 문제를 **기술 기반 서비스로 해결하는 데 집중**하고 있습니다.

| 이름 | 역할 | 소개 |
|------|------|------|
| 황지영 | 총괄 / 백엔드 / AI 분석 | GIST 컴퓨터공학과, AI 진로 시스템 기획 및 GPT 기반 역량 분석 모델 개발 담당 |
| 안상준 | 프론트엔드 / 서비스 설계 | 웹 서비스 아키텍처 및 사용자 경험 설계 전문가, 교육 플랫폼 경험 보유 |
| 마서진 | 데이터 분석 / 기획 | 교육 데이터 분석 및 공공데이터 처리 담당, 시각화 및 정책 리포트 설계 |

**Why JobSketch?**  
진로 설계가 '운'이나 '환경'에 좌우되지 않고,  
누구나 데이터를 기반으로 자신의 꿈을 설계할 수 있어야 한다고 믿습니다.

---

## 📌 프로젝트 개요

커리어네비는 교육 공공데이터와 AI 기술을 융합해  
학생의 성향, 활동 이력, 자기소개서 등을 분석하고,  
진단 → 상담 → 로드맵 설계를 자동화한 **AI 기반 진로 설계 플랫폼**입니다.

- **GPT 기반 상담**, **공공 진로 데이터 통합**, **성취도 기반 로드맵 설계**
- 사교육 없이 누구나 자신의 진로를 탐색하고 설계할 수 있는 기회 제공
- 교육 정보 격차 해소 및 자기주도 역량 강화

---

## 🚩 문제 상황

- 학생들은 진로를 설계할 만큼 충분한 정보를 갖고 있지 않음
- 상담 비용, 지역 편차, 사교육 의존도가 높아 **공정한 진로 설계 기회 부족**
- 기존 시스템은 단순 추천 수준에 머무름 → **개인의 성장과정 반영한 로드맵 부재**

---

## 💡 솔루션: CareerNavi

- **입력**: 활동 이력, 자기소개서, 진로검사 결과 등
- **분석**: NLP 기반 키워드 추출 + GPT 임베딩 + 공공데이터 매핑
- **설계**: 진로 역량 점수화, 성향 기반 직업/전공 추천, 마일스톤 기반 로드맵 생성
- **시각화**: 성취도 변화, 포트폴리오 자동 구성, 진단 리포트 제공

---

## 🔍 핵심 기능

| 기능 | 설명 |
|------|------|
| 진로 역량 분석 | 활동 내용을 바탕으로 GPT로 점수화, 진단 결과 리포트화 |
| AI 진로 상담 | GPT 기반 시나리오로 진로 고민 대화 가능 |
| 자기소개서 분석 | 문장 분석 → 적합 분야/역량 도출 |
| 성취도 기반 로드맵 설계 | 포트폴리오 구성 + 마일스톤 자동 생성 |
| 공공데이터 기반 추천 | CareerNet API, 진로심리검사, 직업정보 통합 |
| 지역 편차 시각화 | 학원/학교 데이터로 진로 인프라 편차 분석 (Folium) |

---

## 🧠 활용 공공데이터 (출처 및 URL 포함)

| 제공기관 | 데이터명 | 활용 목적 | 링크 |
|----------|----------|-----------|------|
| 한국직업능력연구원 | 커리어넷 대학학과정보 | 적합 전공 추천 | [🔗](http://www.career.go.kr/cnet/front/openapi/openApiMajorCenter.do) |
| 〃 | 진로심리검사 | 성향 기반 진단 | [🔗](http://www.career.go.kr/cnet/front/openapi/openApiTestCenter.do) |
| 〃 | 커리어넷 직업정보 | 관심 직업 매칭 | [🔗](http://www.career.go.kr/cnet/front/openapi/openApiJobCenter.do) |
| 국립국어원 | 모두의 말뭉치 API | 텍스트 의미 분석 | [🔗](https://kli.korean.go.kr/corpus/openapi/openapiguide.do) |
| 한국고용정보원 | 워크넷 학과정보 | 학과–직업 연계 | [🔗](https://www.work24.go.kr/cm/e/a/0110/selectOpenApiSvcInfo.do) |
| 한국대학교육협의회 | 대학알리미 | 대학 정보 시각화 | [🔗](https://www.data.go.kr/data/15037507/openapi.do) |
| 한국교육개발원 | 대학 개황 | 지역 교육 격차 분석 | [🔗](https://www.data.go.kr/data/15053812/fileData.do) |
| 한국교육학술정보원 | 전국학원·교습소 데이터 | 지역별 진로 인프라 시각화 | [🔗](https://open.neis.go.kr/portal/data/service/selectServicePage.do?infId=OPEN19220231012134453534385) |

---

## 🧠 참고 논문 및 선행연구

| 논문명 | 요약 | 링크 |
|--------|------|------|
| Artificial Intelligence for Career Guidance | 진로 지도에 AI를 접목한 초기 모델 분석 | [🔗 PDF](https://files.eric.ed.gov/fulltext/EJ1318705.pdf) |
| AI-Driven Career Guidance System | 성적·희망 기반 전공 추천 예측 모델 | [🔗 논문](https://www.researchgate.net/publication/388026845_AI-Driven_Career_Guidance_System) |
| Artificial Intelligence in Career Counseling: ResumAI | 이력서 기반 진로 추천 서비스 사례 분석 | [🔗 논문](https://www.researchgate.net/publication/373451445_Artificial_Intelligence_in_Career_Counseling) |
| Customized AI Career Recommender (Rural Univ.) | 지역 소외계층 대상 맞춤형 진로 추천 시스템 | [🔗 논문](https://digitalcommons.kennesaw.edu/acist/2023/presentations/1/) |
| AI-Based Career Guidance System for Students | 학생 중심의 자동화된 진로 설계 시스템 제안 | [🔗 논문](https://www.jetir.org/view?paper=JETIR2504174) |
| CAREERWISE: AI Based Career Advisor | AI 진로 추천 챗봇 플랫폼 구현 사례 | [🔗 논문](https://www.ijprems.com/uploadedfiles/paper//issue_11_november_2024/37123/final/fin_ijprems1733111259.pdf) |
| Exploring the Role of AI in Career Access | AI 진로 접근성의 사회 정의적 역할 | [🔗 논문](https://njtcg.org/articles/10.16993/njtcg.77) |

---

## 🧱 시스템 구성 및 작동 원리

- **INPUT**: 자기소개서, 활동이력, 진로검사 결과
- **분석**: GPT 임베딩 + 공공데이터 매핑
- **저장**: 사용자별 진단 결과 DB 기록
- **출력**: 진단 점수, 추천 직업/전공, 시각화 리포트

```txt
사용자 입력
 → NLP + GPT 분석
 → CareerNet + 진로검사 데이터 통합
 → 성취도 점수 및 마일스톤 생성
 → 대시보드 시각화 및 리포트 출력
```

---

## 📊 플로우 차트 / 와이어프레임

> 추후 기획서 이미지 임베딩 예정

- 활동 분석 → 성취도 점수화  
- 진로 성향 검사 결과 + GPT 분석  
- 마일스톤 자동 추천  
- 포트폴리오 생성

---

## 💼 비즈니스 모델

| 항목 | 내용 |
|------|------|
| 대상 | 청소년, 학교, 교육청, 진로상담기관 |
| 수익모델 | B2B 기관 리포트 판매, 프리미엄 포트폴리오 생성 기능 |
| 경쟁력 | 공공데이터 활용 + AI 기반 진단 → 데이터 기반 신뢰도 |
| 확장성 | 교육청 진로교육 플랫폼 연동, 해외 공공교육 적용 가능성 |

---

## 🛠️ 기술 스택

- **Frontend**: React, Tailwind, Zustand, Vite
- **Backend**: Spring Boot, REST API, Gradle, MySQL
- **AI**: OpenAI GPT-3.5, HuggingFace Transformers, SentenceEmbedding
- **Visualization**: Streamlit, Folium, Matplotlib
- **Data**: Pandas, JSON, CareerNet API

---

## 🚀 실행 방법

```bash
# 프론트엔드
cd career-navi-frontend1
npm install && npm run dev

# 백엔드
./gradlew bootRun

# Streamlit 대시보드
cd streamlit-dashboard
streamlit run app.py
```

---

## 📈 로드맵 및 기대효과

### 단계별 로드맵

1. MVP 구축 및 사용자 피드백 확보 (완료)
2. 공공기관 시범 도입 (예: 교육청, 지역 진로체험센터)
3. 전국 단위 B2B 확장
4. 글로벌 진로 정보 서비스로 확장

### 기대효과

- 교육 소외계층 대상 **공정한 진로 정보 제공**
- 진단부터 설계까지 하나의 플랫폼에서 제공
- 자기주도 진로 설계 역량 강화 → 학습동기 상승

---

## 📜 라이선스

이 프로젝트는 공공데이터 기반 비영리 교육 솔루션입니다.  
MIT License © 2025 TEAM 잡스케치
```
