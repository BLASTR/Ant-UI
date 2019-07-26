import React from 'react';

import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Divider,
  DatePicker,
} from 'antd';

import CustomSelectWithPredefinedValues from './CustomSelectWithPredefinedValues';

const { RangePicker } = DatePicker;

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

class NewMessageForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  titles = ['All servers in this location', '2 minutes per server', '2 minutes per data center'];

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 6,
        },
        sm: {
          span: 24,
          offset: 6,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="Title">
          <Row gutter={8}>
            <Col span={7}>
              <Select defaultValue="ongoing" style={{ width: 150 }}>
                <Option value="ongoing">Ongoing</Option>
                <Option value="finished">Finished</Option>
                <Option value="resolved">Resolved</Option>
              </Select>
            </Col>
            <Col span={8}>
              <CustomSelectWithPredefinedValues
                titles={['maintenance', 'service outage']}
                placeholder="maintenance"
              />
            </Col>
            <Col span={1}>in</Col>
            <Col span={8}>
              <Input placeholder="Amsterdam / All" />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item label="Impact">
          <CustomSelectWithPredefinedValues
            titles={[
              'All servers in this location',
              '2 minutes per server',
              '10 minutes per data centre',
            ]}
            placeholder="Choose or custom"
          />
        </Form.Item>
        <Form.Item label="ID">
          <Input.Group compact>
            <Input style={{ width: '10%' }} defaultValue="74-" disabled />
            <Input style={{ width: '20%' }} placeholder="PRG-ALL" />
          </Input.Group>
        </Form.Item>
        <Form.Item label="Show">
          <RangePicker showTime style={{ width: '80%' }} />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>
              Send immediate <a href="">info</a>
            </Checkbox>,
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Add message
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'register' })(NewMessageForm);
