import React, { useEffect, useState } from 'react';
import { Button, Layout, Pagination, Typography } from 'antd';
import Question from 'components/Question/Question';
import { questions } from 'questions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { finishQuiz, getCorrectAnswers } from 'store/actions/answers';
import styles from './QuizPage.module.scss';
import ResultCard from 'components/ResultCard/ResultCard';
import { paginate } from '../../utils/paginate';
import cn from 'classnames';
import localStorageService from 'services/localStorage.service';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const state = useTypedSelector((state) => state.answers);
  const userEmail = localStorageService.getUserEmail();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const correctAnswers = questions.map((question) => question.correctAnswer);
    dispatch(getCorrectAnswers({ correctAnswers }));
  }, []);

  const onFinish = () => {
    dispatch(finishQuiz());
  };

  const [currentPage, setCurrentPage] = useState(1);
  const questionsOnPageCount = 5;
  const totalPages = Math.ceil(questions.length / questionsOnPageCount);

  const cropedQuestions = paginate(
    questions,
    currentPage,
    questionsOnPageCount
  );

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const onLogoutClick = () => {
    localStorageService.removeAuthData();
    navigate('/');
  };

  return (
    <Layout>
      <Layout.Header className={cn(styles['quiz-page__header'])}>
        {userEmail ?? 'Гость'}
        <Button type='primary' onClick={onLogoutClick}>
          Выйти
        </Button>
      </Layout.Header>
      <Layout.Content className={cn(styles['quiz-page__content'])}>
        <Typography.Title className={cn(styles['quiz-page__title'])}>
          Тест на знание Git
        </Typography.Title>
        {cropedQuestions.map((question, index) => (
          <Question
            key={question.text}
            text={question.text}
            answers={question.answers}
            questionNumber={
              index + questionsOnPageCount * (currentPage - 1) + 1
            }
          />
        ))}
        <Pagination
          current={currentPage}
          onChange={onPageChange}
          total={totalPages * 10}
        />
        <div className={cn(styles['quiz-page__button'])}>
          <Button
            type='primary'
            htmlType='button'
            onClick={() => onFinish()}
            disabled={state.isFinished}
          >
            Проверить
          </Button>
        </div>
        <div className={cn(styles['quiz-page__result-card'])}>
          {state.isFinished && (
            <ResultCard passed={state.passed} failed={state.failed} />
          )}
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default QuizPage;
