import React, { useState, useRef, useEffect } from 'react';
import { Button, Input, Row, Col, Tabs, Space, Typography, Form, FormInstance } from 'antd';
import Checkbox from 'components/Checkbox';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { handleValidatePassword, handleValidateName } from 'utils/auth/authValidation';
import logo from 'images/logo.svg';
import equal from 'fast-deep-equal';
import doLogin from 'utils/auth/authFuncs';
import showPasswordIcon from 'utils/pages/auth/authHelpers';
import s from './Auth.module.less';

const Auth = () => {
  const [form] = Form.useForm<FormInstance>(undefined);
  const { TabPane } = Tabs;
  const { Title } = Typography;
  const dispatch = useAppDispatch();
  const isFetching = useAppSelector((store) => store.auth.isFetching);
  const [activeKey, setActiveKey] = useState<string>('1');
  const emailRef = useRef<Input>(null);

  useEffect(() => {
    if (!emailRef.current) throw Error('emailRef is not assigned');
    emailRef.current.focus();
  }, []);

  return (
    <Row>
      <Col xs={24} md={12}>
        <div className={s.loginSection}>
          <Tabs
            activeKey={activeKey}
            onChange={(tabNum) => setActiveKey(tabNum)}
            tabPosition="bottom"
            centered
            style={{ overflow: 'visible' }}
          >
            <TabPane tab="Login" key="1">
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={(values) => doLogin(values, dispatch)}
                style={{ width: 300, maxWidth: '100%' }}
              >
                <Form.Item
                  name="email"
                  rules={[{ required: true, message: ' ', type: 'email' }]}
                  initialValue="mac.white@revelsystems.com"
                >
                  <Input placeholder="Email" ref={emailRef} />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: ' ' }]}
                  initialValue="password"
                >
                  <Input.Password placeholder="Password" iconRender={showPasswordIcon} />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox type="rounded">Remember me</Checkbox>
                  </Form.Item>

                  <Link to="/forgot" style={{ float: 'right' }}>
                    Forgot password
                  </Link>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" block htmlType="submit" loading={isFetching}>
                    Log In
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
            <TabPane tab="Register" key="2">
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={() => {
                  setActiveKey('1');
                  form.resetFields();
                }}
                style={{ width: 300, maxWidth: '100%' }}
                form={form}
              >
                <Form.Item
                  name="fullname"
                  rules={[
                    {
                      required: true,
                      message: ' ',
                      validator: handleValidateName
                    }
                  ]}
                >
                  <Input placeholder="Full Name" />
                </Form.Item>
                <Form.Item name="email" rules={[{ required: true, message: ' ', type: 'email' }]}>
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: ' ' }]}>
                  <Input.Password placeholder="Password" iconRender={showPasswordIcon} />
                </Form.Item>
                <Form.Item
                  name="repeatPassword"
                  rules={[
                    {
                      required: true,
                      message: ' ',
                      validator: handleValidatePassword
                    }
                  ]}
                >
                  <Input.Password placeholder="Repeat Password" iconRender={showPasswordIcon} />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" block htmlType="submit">
                    Register
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
          </Tabs>
        </div>
      </Col>
      <Col xs={24} md={12}>
        <div className={s.infoSection}>
          <Space direction="vertical" align="center" size="large">
            <img src={logo} alt="revel" width="300px" />
            <Title level={2} className={s.title}>
              iPad POS System
            </Title>
          </Space>
        </div>
      </Col>
    </Row>
  );
};

export default React.memo(Auth, (prevProps, nextProps) => equal(prevProps, nextProps));
