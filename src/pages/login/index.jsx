import './index.less';
import { Button, Form, Input } from 'antd';
import { useDispatch, getDvaApp, useSelector, useStore, history } from 'umi';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import { RSAEncrypt } from '../../utils/index';
import { useState } from 'react';

const Login = () => {
  const [loadings, setLoadings] = useState(false);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    setLoadings(true);
    history.push('/homes');
    const fromData = {
      loginName: '13408638437',
      loginPassword: '111111',
      // ...values,
      redisKey: '1',
      verCode: '11',
    };
    dispatch({
      type: 'login/login',
      payload: fromData,
      callback: (res) => {
        if (res == 200) {
          setLoadings(false);
          history.push('/homes');
        }
      },
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="login">
      <header className="logoTop">
        <div className="title">
          <img src={require('../../assets/logo/logo.png')} alt="" />
          <h1>成都市退役军人智慧服务大厅</h1>
        </div>
      </header>
      <Form
        className="loginForm"
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item name="loginName">
          <Input size="large" placeholder="账号" prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item name="loginPassword">
          <Input.Password placeholder="密码" prefix={<UnlockOutlined />} />
        </Form.Item>

        <Form.Item>
          <Button
            className="loginButton"
            type="primary"
            htmlType="submit"
            loading={loadings}
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
