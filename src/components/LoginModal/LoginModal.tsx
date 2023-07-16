import { Form, Input } from 'antd';
import AuthModal from 'components/AuthModal/AuthModal';
import React from 'react';

interface LoginModalProps {
  onLogin(values: unknown): typeof values;
  onCancel(): void;
  isModalOpened: boolean;
  switchFormText: string;
  onSwitchForm(): void;
}

const LoginModal = ({
  onLogin,
  onCancel,
  isModalOpened,
  switchFormText,
  onSwitchForm,
}: LoginModalProps) => {
  const [form] = Form.useForm();

  return (
    <AuthModal
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onLogin(values);
          })
          .catch((error) => {
            form.scrollToField(error?.errorFields[0]);
          });
      }}
      onCancel={onCancel}
      okText='Войти'
      title='Вход'
      isOpened={isModalOpened}
      switchFormText={switchFormText}
      onSwitchForm={onSwitchForm}
    >
      <Form
        form={form}
        name='login-form'
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
      >
        <Form.Item
          label='Email'
          name='email'
          rules={[
            { required: true, message: 'Введите ваш Email!' },
            { type: 'email', message: 'Email неккоректен!' },
          ]}
        >
          <Input type='email' />
        </Form.Item>
        <Form.Item
          label='Пароль'
          name='password'
          rules={[{ required: true, message: 'Введите пароль!' }]}
        >
          <Input type='password' />
        </Form.Item>
      </Form>
    </AuthModal>
  );
};

export default LoginModal;
