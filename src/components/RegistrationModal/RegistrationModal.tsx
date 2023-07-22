import { Form, Input } from 'antd';
import AuthModal from 'components/AuthModal/AuthModal';

interface RegistrationModalProps {
  onRegistration(values: unknown): typeof values;
  onCancel(): void;
  isModalOpened: boolean;
  switchFormText: string;
  onSwitchForm(): void;
}

const RegistrationModal = ({
  onRegistration,
  onCancel,
  isModalOpened,
  switchFormText,
  onSwitchForm,
}: RegistrationModalProps) => {
  const [form] = Form.useForm();

  return (
    <AuthModal
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onRegistration(values);
          })
          .catch((error) => {
            form.scrollToField(error?.errorFields[0]);
          });
      }}
      onCancel={onCancel}
      okText='Зарегистрироваться'
      title='Регистрация'
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
          rules={[{ required: true, message: 'Придумайте пароль!' }]}
        >
          <Input type='password' />
        </Form.Item>
      </Form>
    </AuthModal>
  );
};

export default RegistrationModal;
