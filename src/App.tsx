import React from 'react';
import QuizPage from 'pages/QuizPage/QuizPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import localStorageService from 'services/localStorage.service';

const App = () => {
  let isLoggedIn = false;
  if (localStorageService.getUserEmail()) {
    isLoggedIn = true;
  }

  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route
        path='quiz'
        element={isLoggedIn ? <QuizPage /> : <Navigate to='/' />}
      />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default App;
