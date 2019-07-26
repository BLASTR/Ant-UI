import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import NewMessageForm from '../components/Messages/NewMessageForm';

const NewMessage: React.FC = () => (
  <PageHeaderWrapper>
    <NewMessageForm />
  </PageHeaderWrapper>
);

export default NewMessage;
