import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined, MenuOutlined } from '@ant-design/icons';
import { Drawer, Button } from 'antd';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/logo.png" alt="MC Group Logo" className="h-16 w-16 object-contain" />
                {/* <span className="text-2xl font-bold text-blue-600">Dong Doan</span> */}
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600">
                Trang chủ
              </Link>
              <Link to="/feeds" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600">
                Sản phẩm
              </Link>
              <Link to="/ranking" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600">
                Vật tư
              </Link>
              <Link to="/inside" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600">
                Liên hệ
              </Link>
              <Link to="/news" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600">
                Khuyến mãi
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-2 ml-4">
            <Input
              placeholder="Tìm kiếm..."
              className="h-8 text-sm"
              style={{ width: 140, height: 32 }}
            />
            <button
              className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded-md text-blue-600 hover:bg-blue-50 transition p-0"
              type="button"
            >
              <SearchOutlined style={{ fontSize: 16 }} />
            </button>
            {/* Icon bar chỉ hiện trên mobile */}
            <button
              className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded-md text-blue-600 hover:bg-blue-50 transition p-0 block md:hidden"
              type="button"
              onClick={() => setOpen(true)}
            >
              <MenuOutlined style={{ fontSize: 16 }} />
            </button>
          </div>
        </div>
      </div>
      {/* Drawer cho mobile menu */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
        className="md:hidden"
      >
        <div className="flex flex-col space-y-4">
          <Link to="/" onClick={() => setOpen(false)}>Trang chủ</Link>
          <Link to="/feeds" onClick={() => setOpen(false)}>Sản phẩm</Link>
          <Link to="/ranking" onClick={() => setOpen(false)}>Vật tư</Link>
          <Link to="/inside" onClick={() => setOpen(false)}>Liên hệ</Link>
          <Link to="/news" onClick={() => setOpen(false)}>Khuyến mãi</Link>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar; 