import { Layout, Row, Typography } from 'antd';
import React from 'react';
import styles from './NotFoundPage.module.scss';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Layout>
      <Layout.Content>
        <Row
          align={'middle'}
          justify={'center'}
          className={cn(styles['not-found-page'])}
        >
          <Typography.Paragraph>404</Typography.Paragraph>
          <Typography.Title>Страница не найдена</Typography.Title>
          <Typography.Paragraph>
            К сожалению, такой страницу не существует. Попробуйте перейти на{' '}
            <NavLink to={'/'}>Главную</NavLink>
          </Typography.Paragraph>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default NotFoundPage;
