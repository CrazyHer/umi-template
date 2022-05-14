import { FC, useEffect } from 'react';
import { observer } from 'mobx-react';
import mobxStore from '@/mobxStore';
import { useHistory, useLocation } from 'umi';
import { message } from 'antd';
const AccessAuth: FC<{}> = (props) => {
  const location = useLocation();
  const history = useHistory();

  // 控制登陆才可访问的页面
  const requiredLoginPages = ['/'];
  useEffect(() => {
    if (
      !mobxStore.user.token &&
      requiredLoginPages.some((page) => location.pathname === page)
    ) {
      message.warn('请登录!');
      history.push('/login');
    }
  }, [location.pathname]);

  return <>{props.children}</>;
};
export default observer(AccessAuth);
