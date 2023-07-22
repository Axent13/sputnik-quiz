import { Suspense } from 'react';
import { QuizPage } from 'pages/QuizPage';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';

const App = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='quiz' element={<QuizPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
