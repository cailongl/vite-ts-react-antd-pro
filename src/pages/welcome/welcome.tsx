import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Button } from 'antd';
import { history } from '@utils/umi';
function Welcome() {
  return (
    <PageContainer>
      <ProCard title="标题1" headerBordered>
        welcome1
        <div onClick={() => console.log(null, 1, 2, 3)}></div>
      </ProCard>
      <ProCard title="标题2" headerBordered>
        welcome2
      </ProCard>
      <Button
        onClick={() => {
          history.push('/list/sub-page3/sub-page33333');
        }}
      >
        跳转
      </Button>
    </PageContainer>
  );
}

export default Welcome;
