import { Form, Input } from 'antd';
import AuthModal from 'components/AuthModal/AuthModal';
import React from 'react';

interface ILoginModal {
  onLogin(values: unknown): typeof values;
  onCancel(): void;
  isModalOpened: boolean;
  onFinish(): void;
  onFinishFailed(): void;
  switchFormText: string;
  onSwitchForm(): void;
}

const LoginModal = ({
  onLogin,
  onCancel,
  isModalOpened,
  onFinish,
  onFinishFailed,
  switchFormText,
  onSwitchForm,
}: ILoginModal) => {
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
            console.log('Validate failed:', error);
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
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
