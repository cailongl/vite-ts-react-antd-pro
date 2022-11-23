import { PageContainer, ProTable } from '@ant-design/pro-components';

function Demo() {
  return (
    <PageContainer>
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
