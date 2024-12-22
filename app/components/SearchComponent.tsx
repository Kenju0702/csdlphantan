import { Input } from 'antd';

const onSearch = (event) => {
  console.log(event.target.value);
};

const SearchComponent = (width) => (
  <Input
    placeholder="Enter search text"
    allowClear
    style={{ width: '100%' }}
    size="large"
    onPressEnter={onSearch} // Gửi kết quả khi nhấn Enter
    onChange={onSearch}    // Gửi kết quả khi nội dung thay đổi
  />
);

export default SearchComponent;
