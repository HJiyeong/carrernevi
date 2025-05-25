import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Milestone from "./pages/Milestone";
import Test from "./pages/Test";
import PersonalityTest from "./pages/PersonalityTest";
import InterestTest from "./pages/InterestTest";
import Analytics from "./pages/Analytics";
import Chat from "./pages/Chat";
import MyPageDetail from "./pages/MyPageDetail";
import JobLinks from "./pages/JobLinks";
import Diagnosis from "./pages/Diagnosis";
import Activities from "./pages/Activities";
import CareerDictionary from "./pages/CareerDictionary";
import SearchPage from "./pages/SearchPage";
import CalendarPage from "./pages/CalendarPage"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/milestone" element={<Milestone />} />
      <Route path="/test" element={<Test />} />
        <Route path="/test/personality" element={<PersonalityTest />} />
        <Route path="/test/interest" element={<InterestTest />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/mypage-detail" element={<MyPageDetail />} />
      <Route path="/job-links" element={<JobLinks />} />
      <Route path="/diagnosis" element={<Diagnosis />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/dictionary" element={<CareerDictionary />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/calendar" element={<CalendarPage />} /> 
    </Routes>
  );
}

export default App;
