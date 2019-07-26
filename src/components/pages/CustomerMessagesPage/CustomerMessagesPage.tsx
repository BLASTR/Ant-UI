import React from 'react';
import { Button, Icon } from 'antd';
import { Link } from 'umi';

import styles from './CustomerMessagesPage.less'
import MessageHeader from '@/components/MessageHeader/MessageHeader';

import { events } from './CustomerMessagesData';

const CustomerMessages: React.FC = () => (
  <>
    <h1>Customer messages</h1>
    <p className={styles.right}>
      <Link to="/customer-message/new">
        <Button type="primary">
          <Icon type="left" />
          New incident/maintenance
        </Button>
      </Link>
    </p>
    {
      events.map(event => (
        <MessageHeader
          key={event.id}
          id={event.id}
          date={event.date}
          start={event.date}
          end={event.end}
          type={event.type}
          impact={event.impact}
          sent={event.sent}
          announced={event.announced}
          description={event.description}
          location={event.location}
        />
      ))
    }
  </>
);

export default CustomerMessages;
