import React from 'react';
import {PageContainer, ProCard} from '@ant-design/pro-components'
import { useLocation } from 'react-router';

function Welcome() {
  const location = useLocation()
  console.log('location.........', location)
  return (
    <PageContainer>
      <ProCard title="标题1" headerBordered>
        welcome1
      </ProCard>
      <ProCard title="标题2" headerBordered>
        welcome2
      </ProCard>
    </PageContainer>
  );
}

export default Welcome;
