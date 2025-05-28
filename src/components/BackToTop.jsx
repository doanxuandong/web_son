import { BackTop } from 'antd';
import { UpOutlined } from '@ant-design/icons';

const style = {
  height: 48,
  width: 48,
  lineHeight: '48px',
  borderRadius: 24,
  backgroundColor: '#224099',
  color: '#fff',
  textAlign: 'center',
  fontSize: 28,
  boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const BackToTop = () => (
  <BackTop>
    <div style={style}>
      <UpOutlined />
    </div>
  </BackTop>
);

export default BackToTop; 