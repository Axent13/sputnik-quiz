import React from 'react';
import QuizPage from 'pages/QuizPage/QuizPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from 'pages/AuthPage/AuthPage';

const App = () => {
  return (
    <Routes>
      <Route index element={<AuthPage />} />
      <Route path='quiz' element={<QuizPage />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default App;
