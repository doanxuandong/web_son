import { Link } from 'react-router-dom';
import { Input, Dropdown, Menu } from 'antd';
import { SearchOutlined, MenuOutlined, DownOutlined } from '@ant-design/icons';
import { Drawer, Button } from 'antd';
import { useState } from 'react';

const productMenu = (
  <Menu>
    <Menu.SubMenu title="Thương hiệu 1">
      <Menu.Item>Sản phẩm 1</Menu.Item>
      <Menu.Item>Sản phẩm 2</Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu title="Thương hiệu 2">
      <Menu.Item>Sản phẩm 1</Menu.Item>
      <Menu.Item>Sản phẩm 2</Menu.Item>
    </Menu.SubMenu>
    <Menu.Item>Sản phẩm 1</Menu.Item>
  </Menu>
);

const materialMenu = (
  <Menu>
    <Menu.SubMenu title="Thương hiệu 1">
      <Menu.Item>Sản phẩm 1</Menu.Item>
      <Menu.Item>Sản phẩm 2</Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu title="Thương hiệu 2">
      <Menu.Item>Sản phẩm 1 </Menu.Item>
      <Menu.Item>Sản phẩm 2</Menu.Item>
    </Menu.SubMenu>
  </Menu>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);
  const [openMaterial, setOpenMaterial] = useState(false);
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
              <Dropdown overlay={productMenu} trigger={['hover']} placement="bottomLeft">
                <span className="inline-flex items-center cursor-pointer px-1 pt-1 text-gray-900 hover:text-blue-600">
                  Sản phẩm
                  <DownOutlined className="ml-1 relative top-[2px]" style={{ fontSize: 12 }} />
                </span>
              </Dropdown>
              <Dropdown overlay={materialMenu} trigger={['hover']} placement="bottomLeft">
                <span className="inline-flex items-center cursor-pointer px-1 pt-1 text-gray-900 hover:text-blue-600">
                  Vật tư
                  <DownOutlined className="ml-1 relative top-[2px]" style={{ fontSize: 12 }} />
                </span>
              </Dropdown>
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
        <div className="flex flex-col space-y-2">
          <Link to="/" onClick={() => setOpen(false)} className="py-2 font-semibold">Trang chủ</Link>
          <div>
            <div className="py-2 font-semibold">Sản phẩm</div>
            <div className="pl-4 flex flex-col space-y-1">
              <Link to="/san-pham/dien-thoai" onClick={() => setOpen(false)}>Điện thoại</Link>
              <Link to="/san-pham/laptop" onClick={() => setOpen(false)}>Laptop</Link>
              <Link to="/san-pham/phu-kien" onClick={() => setOpen(false)}>Phụ kiện</Link>
            </div>
          </div>
          <div>
            <div className="py-2 font-semibold">Vật tư</div>
            <div className="pl-4 flex flex-col space-y-1">
              <Link to="/vat-tu/dien" onClick={() => setOpen(false)}>Vật tư điện</Link>
              <Link to="/vat-tu/nuoc" onClick={() => setOpen(false)}>Vật tư nước</Link>
            </div>
          </div>
          <Link to="/inside" onClick={() => setOpen(false)} className="py-2 font-semibold">Liên hệ</Link>
          <Link to="/news" onClick={() => setOpen(false)} className="py-2 font-semibold">Khuyến mãi</Link>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar; 