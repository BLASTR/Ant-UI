import React from 'react';
import { Select } from 'antd';

interface ICustomSelectWithPredefinedValuesProps {
  titles: string[];
  placeholder?: string;
}

const CustomSelectWithPredefinedValues: React.FunctionComponent<
  ICustomSelectWithPredefinedValuesProps
> = props => {
  const [title, setTitle] = React.useState<string | null>(null);
  const [customTitle, setCustomTitle] = React.useState<string | null>(null);
  const [titles, setTitles] = React.useState<string[] | null>(props.titles || []);
  const handleSearch = (value: string) => {
    setCustomTitle(value);
  };
  const handleSelect = (value: string) => {
    setTitle(value);
    setCustomTitle(value);
  };
  const handleBlur = (value: string) => {
    setTitle(customTitle);
  };

  // const handleFocus = () => {
  //   setTitle(titles[1]);
  // };
  return (
    <Select
      showSearch
      value={title || undefined}
      filterOption
      onSearch={handleSearch}
      onSelect={handleSelect}
      onBlur={handleBlur}
      // onFocus={handleFocus}
      style={{ width: '100%' }}
      notFoundContent={`Custom text: ${customTitle}`}
      placeholder={props.placeholder}
    >
      {titles.map(title => (
        <Select.Option key={title}>{title}</Select.Option>
      ))}
    </Select>
  );
};

export default CustomSelectWithPredefinedValues;
