import React from 'react';
import QuizPage from 'pages/QuizPage/QuizPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';

const App = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path='quiz' element={<QuizPage />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default App;
