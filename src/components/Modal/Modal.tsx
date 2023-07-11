import React from 'react';
import { Modal } from 'antd';

interface IAuthModal {
  title: string;
  onOk(): void;
  onCancel(): void;
  isOpened: boolean;
  children: React.ReactNode;
}

const AuthModal = ({
  title,
  onOk,
  onCancel,
  isOpened,
  children,
}: IAuthModal) => {
  return (
    <Modal open={isOpened} title={title} onOk={onOk} onCancel={onCancel}>
      {children}
    </Modal>
  );
};

export default AuthModal;
