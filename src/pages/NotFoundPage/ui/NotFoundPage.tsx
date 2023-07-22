import { Card, Layout, Typography } from 'antd';
import styles from './NotFoundPage.module.scss';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Layout className={cn(styles['not-found-page'])}>
      <Layout.Content className={cn(styles['not-found-page__content'])}>
        <Card className={cn(styles['not-found-page__card'])}>
          <Typography.Paragraph className={cn(styles['not-found-page__404'])}>
            404
          </Typography.Paragraph>
          <Typography.Title>Старница не найдена... :-(</Typography.Title>
          <Typography.Paragraph
            className={cn(styles['not-found-page__advise'])}
          >
            Попробуйте
            <NavLink className={cn(styles['not-found-page__link'])} to={'/'}>
              перейти на главную
            </NavLink>
          </Typography.Paragraph>
        </Card>
      </Layout.Content>
    </Layout>
  );
};

export default NotFoundPage;
