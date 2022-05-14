import { observer } from 'mobx-react';
import { FC } from 'react';
import { getLocale, setLocale, useHistory, useIntl } from 'umi';
import styles from './index.less';
import { Button } from 'antd';
import mobxStore from '@/mobxStore';

const IndexPage: FC = () => {
  const { formatMessage } = useIntl();
  const f = (id: string) => formatMessage({ id });

  const history = useHistory();
  return (
    <div>
      <h1 className={styles.title}>{f('title')}</h1>
      <p>{f('helloWorld')}</p>
      <Button
        onClick={() => setLocale(getLocale() === 'zh-CN' ? 'en-US' : 'zh-CN')}
      >
        {f('switchLang')}
      </Button>
      <Button onClick={() => history.push('/login')}>{f('goLogin')}</Button>

      <div>
        counter: {mobxStore.counter.counterValue}
        <Button onClick={() => mobxStore.counter.add(1)}>Add</Button>
        <Button onClick={() => mobxStore.counter.minus()}>Minus</Button>
      </div>
    </div>
  );
};

export default observer(IndexPage);
