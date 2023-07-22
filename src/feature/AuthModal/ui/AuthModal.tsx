import { Button, Modal, Typography } from 'antd';
import cn from 'classnames';
import styles from './AuthModal.module.scss';

interface AuthModalProps {
  title: string;
  onOk(): void;
  onCancel(): void;
  okText: string;
  isOpened: boolean;
  children: React.ReactNode;
  switchFormText: string;
  onSwitchForm(): void;
}

export const AuthModal = ({
  title,
  onOk,
  onCancel,
  okText,
  isOpened,
  children,
  switchFormText,
  onSwitchForm,
}: AuthModalProps) => {
  return (
    <Modal
      open={isOpened}
      centered
      title={title}
      onOk={onOk}
      onCancel={onCancel}
      footer={[
        <Button key='submit' type='primary' onClick={onOk}>
          {okText}
        </Button>,
        <Typography.Paragraph
          key='switch'
          className={cn(styles['auth-modal__switch-text'])}
        >
          или{' '}
          <Button
            type='link'
            onClick={onSwitchForm}
            className={cn(styles['auth-modal__switch-button'])}
          >
            {switchFormText}
          </Button>
        </Typography.Paragraph>,
      ]}
    >
      {children}
    </Modal>
  );
};
