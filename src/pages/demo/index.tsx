import { PageContainer, ProTable } from '@ant-design/pro-components';

import './index.less';
import s from './index.module.less';

function Demo() {
  return (
    <PageContainer>
      <div className="containerBox" style={{ height: 200 }} />
      <div className={s.containerBox} style={{ height: 200 }} />
      <ProTable
        columns={[
          {
            dataIndex: 'name',
            title: '名称',
          },
          {
            dataIndex: 'age',
            title: '年龄',
          },
        ]}
      />
    </PageContainer>
  );
}

export default Demo;
