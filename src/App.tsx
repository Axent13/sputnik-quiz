import React from 'react';
import QuizPage from 'pages/QuizPage/QuizPage';
import { Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path='quiz' element={<QuizPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
