import React from 'react';
import classNames from 'classnames/bind';
import { Row, Col, Button, Icon, Typography } from 'antd';

import { IEvent } from '../pages/CustomerMessagesPage/CustomerMessagesData';
import styles from './MessageHeader.less';

const { Paragraph } = Typography;

const cx = classNames.bind(styles);

const MessageHeader: React.FC<IEvent> = ({
  date,
  type,
  location,
  id,
  description,
  impact,
  start,
  end,
  sent,
  announced,

}) => (
  <header className={styles.wrap}>
    <Row gutter={16}>
      <Col span={20}>
        <Row>
          <Col span={18}>
            <Paragraph>
              {date}
              <strong> {type} </strong>
              service outage in
              <strong> {location}</strong>
            </Paragraph>
          </Col>
          <Col span={6}>
            {id}
          </Col>
        </Row>
        <Paragraph ellipsis={{ rows: 2 }}>
          {description}
        </Paragraph>
        <Row>
          <Col span={6}>
            <strong className={cx('label', 'block')}>Impact</strong>
            {impact}
          </Col>
          <Col span={6}>
            <strong className={cx('label', 'block')}>Start</strong>
            {start}
          </Col>
          <Col span={6}>
            <strong className={cx('label', 'block')}>End</strong>
            {end}
          </Col>
          <Col span={6}>
            <p>
              <strong className={styles.label}>Sent by email</strong> {sent ? 'Yes' : 'no'}
            </p>
            <p>
              <strong className={styles.label}>Announced start</strong> {announced ? 'Yes' : 'no'}
            </p>
            <p>
              <strong className={styles.label}>Announced end</strong> {announced ? 'Yes' : 'no'}
            </p>
          </Col>
        </Row>
      </Col>
      <Col span={4}>
        <Button>
          Edit
          <Icon type="down" />
        </Button>
      </Col>
    </Row>
  </header>
);

export default MessageHeader;
