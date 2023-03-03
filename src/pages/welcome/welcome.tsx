import { PageContainer, ProCard } from '@ant-design/pro-components';

function Welcome() {
  return (
    <PageContainer>
      <ProCard title="标题1" headerBordered>
        welcome1
        <div onClick={() => console.log(null, 1,2,3)}></div>
      </ProCard>
      <ProCard title="标题2" headerBordered>
        welcome2
      </ProCard>
    </PageContainer>
  );
}

export default Welcome;
