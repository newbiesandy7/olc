import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AboutPage from './AboutPage';
import CatalogPage from './CatalogPage';
import DE2CourseDetailPage from './DE2CourseDetailPage';
import FaqPage from './FaqPage';
import HomePage from './HomePage';
import InterviewPrepPage from './InterviewPrepPage';
import JobBoardPage from './JobBoardPage';
import StudentDashboardPage from './StudentDashboardPage';
import SparkKafkaDetailPage from './SparkKafkaDetailPage';
import SparkKafkaWorkspacePage from './SparkKafkaWorkspacePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CatalogPage />} />
        <Route path="/de2" element={<DE2CourseDetailPage />} />
        <Route path="/spark-kafka" element={<SparkKafkaDetailPage />} />
        <Route path="/spark-kafka/workspace" element={<SparkKafkaWorkspacePage />} />
        <Route path="/jobs" element={<JobBoardPage />} />
        <Route path="/interview-prep" element={<InterviewPrepPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/dashboard" element={<StudentDashboardPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
