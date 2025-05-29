import { Link } from 'react-router-dom';
import { Input, Dropdown, Menu } from 'antd';
import { SearchOutlined, MenuOutlined, DownOutlined } from '@ant-design/icons';
import { Drawer, Button } from 'antd';
import { useState } from 'react';

const productMenu = (
  <Menu>
    <Menu.Item>
      <Link to="/san-pham">Tất cả sản phẩm</Link>
    </Menu.Item>
    <Menu.SubMenu title="Sơn trang trí">
      <Menu.Item>Sơn nội thất</Menu.Item>
      <Menu.Item>Sơn ngoại thất</Menu.Item>
      <Menu.Item>Sơn chống thấm</Menu.Item>
      <Menu.Item>Sơn phủ</Menu.Item>
      <Menu.Item>Sơn hiệu ứng đặc biệt</Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu title="Sơn dân dụng">
      <Menu.Item>Sơn nội thất</Menu.Item>
      <Menu.Item>Sơn ngoại thất</Menu.Item>
      <Menu.Item>Sơn lót</Menu.Item>
      <Menu.Item>Sơn phủ</Menu.Item>
      <Menu.Item>Sơn chống thấm</Menu.Item>
      <Menu.Item>Sơn chống mốc</Menu.Item>
      <Menu.Item>Sơn trang trí hiệu ứng</Menu.Item>
      <Menu.Item>Sơn đa năng</Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu title="Sơn và chất phủ công nghiệp">
      <Menu.Item>Sơn chống ăn mòn</Menu.Item>
      <Menu.Item>Sơn sàn công nghiệp</Menu.Item>
      <Menu.Item>Sơn chịu nhiệt</Menu.Item>
      <Menu.Item>Sơn tàu biển</Menu.Item>
      <Menu.Item>Sơn đường, giao thông</Menu.Item>
      <Menu.Item>Sơn cách điện</Menu.Item>
      <Menu.Item>Sơn kết cấu thép</Menu.Item>
      <Menu.Item>Sơn container, bồn bể, silo</Menu.Item>
      <Menu.Item>Sơn chống cháy</Menu.Item>
      <Menu.Item>Chất phủ đặc biệt</Menu.Item>
    </Menu.SubMenu>
  </Menu>
);

const materialMenu = (
  <Menu>
    <Menu.SubMenu title="Dụng cụ thi công">
      <Menu.Item>Rulo</Menu.Item>
      <Menu.Item>Cọ sơn</Menu.Item>
      <Menu.Item>Khay sơn</Menu.Item>
      <Menu.Item>Gậy nối dài cho rulo</Menu.Item>
      <Menu.Item>Máy phun sơn</Menu.Item>
      <Menu.Item>Máy khuấy sơn</Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu title="Xử lý bề mặt">
      <Menu.Item>Bột bả</Menu.Item>
      <Menu.Item>Giấy nhám, đá mài</Menu.Item>
      <Menu.Item>Dao trét bả</Menu.Item>
      <Menu.Item>Bàn chải sắt</Menu.Item>
      <Menu.Item>Dung môi tẩy rửa</Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu title="Bảo hộ an toàn">
      <Menu.Item>Bạt che sơn</Menu.Item>
      <Menu.Item>Băng keo giấy</Menu.Item>
      <Menu.Item>Găng tay, kính, khẩu trang bảo hộ</Menu.Item>
      <Menu.Item>Thang, dàn giáo, dây an toàn</Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu title="Phụ gia và dung môi">
      <Menu.Item>Dung môi pha sơn</Menu.Item>
      <Menu.Item>Phụ gia chống nấm mốc</Menu.Item>
      <Menu.Item>Chất tăng bám dính</Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu title="Vật tư đặc biệt cho các bề mặt riêng">
      <Menu.Item>Keo trám khe</Menu.Item>
      <Menu.Item>Vật liệu chống thấm</Menu.Item>
      <Menu.Item>Vải thủy tinh</Menu.Item>
      <Menu.Item>Cát khô</Menu.Item>
    </Menu.SubMenu>
  </Menu>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);
  const [openMaterial, setOpenMaterial] = useState(false);
  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/back_to_top.JPG" alt="MC Group Logo" className="h-16 w-16 object-contain" />
                {/* <span className="text-2xl font-bold text-blue-600">Dong Doan</span> */}
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600">
                Trang chủ
              </Link>
              <Dropdown overlay={productMenu} trigger={['hover']} placement="bottomLeft">
                <Link
                  to="/san-pham"
                  className="inline-flex items-center cursor-pointer px-1 pt-1 text-gray-900 hover:text-blue-600"
                  onClick={e => e.stopPropagation()}
                >
                  Sản phẩm
                  <DownOutlined className="ml-1 relative top-[2px]" style={{ fontSize: 12 }} />
                </Link>
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
              <a
                href="https://drive.google.com/file/d/1kyxB_qIB7oW0s39kZvc3FnuCPjVSQu6n/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
              >
                Bảng giá
              </a>
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
              <Link to="/san-pham" onClick={() => setOpen(false)} className="pl-4 font-semibold text-blue-700">Tất cả sản phẩm</Link>
              <div className="font-medium">Sơn trang trí</div>
              <Link to="/san-pham/son-trang-tri/noi-that" onClick={() => setOpen(false)} className="pl-4">Sơn nội thất</Link>
              <Link to="/san-pham/son-trang-tri/ngoai-that" onClick={() => setOpen(false)} className="pl-4">Sơn ngoại thất</Link>
              <Link to="/san-pham/son-trang-tri/chong-tham" onClick={() => setOpen(false)} className="pl-4">Sơn chống thấm</Link>
              <Link to="/san-pham/son-trang-tri/phu" onClick={() => setOpen(false)} className="pl-4">Sơn phủ</Link>
              <Link to="/san-pham/son-trang-tri/hieu-ung" onClick={() => setOpen(false)} className="pl-4">Sơn hiệu ứng đặc biệt</Link>
              <div className="font-medium mt-2">Sơn dân dụng</div>
              <Link to="/san-pham/son-dan-dung/noi-that" onClick={() => setOpen(false)} className="pl-4">Sơn nội thất</Link>
              <Link to="/san-pham/son-dan-dung/ngoai-that" onClick={() => setOpen(false)} className="pl-4">Sơn ngoại thất</Link>
              <Link to="/san-pham/son-dan-dung/lot" onClick={() => setOpen(false)} className="pl-4">Sơn lót</Link>
              <Link to="/san-pham/son-dan-dung/phu" onClick={() => setOpen(false)} className="pl-4">Sơn phủ</Link>
              <Link to="/san-pham/son-dan-dung/chong-tham" onClick={() => setOpen(false)} className="pl-4">Sơn chống thấm</Link>
              <Link to="/san-pham/son-dan-dung/chong-moc" onClick={() => setOpen(false)} className="pl-4">Sơn chống mốc</Link>
              <Link to="/san-pham/son-dan-dung/hieu-ung" onClick={() => setOpen(false)} className="pl-4">Sơn trang trí hiệu ứng</Link>
              <Link to="/san-pham/son-dan-dung/da-nang" onClick={() => setOpen(false)} className="pl-4">Sơn đa năng</Link>
              <div className="font-medium mt-2">Sơn và chất phủ công nghiệp</div>
              <Link to="/san-pham/cong-nghiep/chong-an-mon" onClick={() => setOpen(false)} className="pl-4">Sơn chống ăn mòn</Link>
              <Link to="/san-pham/cong-nghiep/san" onClick={() => setOpen(false)} className="pl-4">Sơn sàn công nghiệp</Link>
              <Link to="/san-pham/cong-nghiep/chiu-nhiet" onClick={() => setOpen(false)} className="pl-4">Sơn chịu nhiệt</Link>
              <Link to="/san-pham/cong-nghiep/tau-bien" onClick={() => setOpen(false)} className="pl-4">Sơn tàu biển</Link>
              <Link to="/san-pham/cong-nghiep/giao-thong" onClick={() => setOpen(false)} className="pl-4">Sơn đường, giao thông</Link>
              <Link to="/san-pham/cong-nghiep/cach-dien" onClick={() => setOpen(false)} className="pl-4">Sơn cách điện</Link>
              <Link to="/san-pham/cong-nghiep/ket-cau-thep" onClick={() => setOpen(false)} className="pl-4">Sơn kết cấu thép</Link>
              <Link to="/san-pham/cong-nghiep/container" onClick={() => setOpen(false)} className="pl-4">Sơn container, bồn bể, silo</Link>
              <Link to="/san-pham/cong-nghiep/chong-chay" onClick={() => setOpen(false)} className="pl-4">Sơn chống cháy</Link>
              <Link to="/san-pham/cong-nghiep/phu-dac-biet" onClick={() => setOpen(false)} className="pl-4">Chất phủ đặc biệt</Link>
            </div>
          </div>
          <div>
            <div className="py-2 font-semibold">Vật tư</div>
            <div className="pl-4 flex flex-col space-y-1">
              <div className="font-medium">Dụng cụ thi công</div>
              <Link to="/vat-tu/dung-cu/rulo" onClick={() => setOpen(false)} className="pl-4">Rulo</Link>
              <Link to="/vat-tu/dung-cu/co-son" onClick={() => setOpen(false)} className="pl-4">Cọ sơn</Link>
              <Link to="/vat-tu/dung-cu/khay-son" onClick={() => setOpen(false)} className="pl-4">Khay sơn</Link>
              <Link to="/vat-tu/dung-cu/gay-noi-dai" onClick={() => setOpen(false)} className="pl-4">Gậy nối dài cho rulo</Link>
              <Link to="/vat-tu/dung-cu/may-phun-son" onClick={() => setOpen(false)} className="pl-4">Máy phun sơn</Link>
              <Link to="/vat-tu/dung-cu/may-khuay-son" onClick={() => setOpen(false)} className="pl-4">Máy khuấy sơn</Link>
              <div className="font-medium mt-2">Xử lý bề mặt</div>
              <Link to="/vat-tu/xu-ly/bot-ba" onClick={() => setOpen(false)} className="pl-4">Bột bả</Link>
              <Link to="/vat-tu/xu-ly/giay-nham" onClick={() => setOpen(false)} className="pl-4">Giấy nhám, đá mài</Link>
              <Link to="/vat-tu/xu-ly/dao-tret" onClick={() => setOpen(false)} className="pl-4">Dao trét bả</Link>
              <Link to="/vat-tu/xu-ly/ban-chai" onClick={() => setOpen(false)} className="pl-4">Bàn chải sắt</Link>
              <Link to="/vat-tu/xu-ly/dung-moi" onClick={() => setOpen(false)} className="pl-4">Dung môi tẩy rửa</Link>
              <div className="font-medium mt-2">Bảo hộ an toàn</div>
              <Link to="/vat-tu/bao-ho/bat-che" onClick={() => setOpen(false)} className="pl-4">Bạt che sơn</Link>
              <Link to="/vat-tu/bao-ho/bang-keo" onClick={() => setOpen(false)} className="pl-4">Băng keo giấy</Link>
              <Link to="/vat-tu/bao-ho/gang-tay" onClick={() => setOpen(false)} className="pl-4">Găng tay, kính, khẩu trang bảo hộ</Link>
              <Link to="/vat-tu/bao-ho/thang" onClick={() => setOpen(false)} className="pl-4">Thang, dàn giáo, dây an toàn</Link>
              <div className="font-medium mt-2">Phụ gia và dung môi</div>
              <Link to="/vat-tu/phu-gia/dung-moi-pha" onClick={() => setOpen(false)} className="pl-4">Dung môi pha sơn</Link>
              <Link to="/vat-tu/phu-gia/chong-nam" onClick={() => setOpen(false)} className="pl-4">Phụ gia chống nấm mốc</Link>
              <Link to="/vat-tu/phu-gia/tang-bam-dinh" onClick={() => setOpen(false)} className="pl-4">Chất tăng bám dính</Link>
              <div className="font-medium mt-2">Vật tư đặc biệt cho các bề mặt riêng</div>
              <Link to="/vat-tu/dac-biet/keo-tram-khe" onClick={() => setOpen(false)} className="pl-4">Keo trám khe</Link>
              <Link to="/vat-tu/dac-biet/chong-tham" onClick={() => setOpen(false)} className="pl-4">Vật liệu chống thấm</Link>
              <Link to="/vat-tu/dac-biet/vai-thuy-tinh" onClick={() => setOpen(false)} className="pl-4">Vải thủy tinh</Link>
              <Link to="/vat-tu/dac-biet/cat-kho" onClick={() => setOpen(false)} className="pl-4">Cát khô</Link>
            </div>
          </div>
          <Link to="/inside" onClick={() => setOpen(false)} className="py-2 font-semibold">Liên hệ</Link>
          <Link to="/news" onClick={() => setOpen(false)} className="py-2 font-semibold">Khuyến mãi</Link>
          <a
            href="https://drive.google.com/file/d/1kyxB_qIB7oW0s39kZvc3FnuCPjVSQu6n/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 font-semibold"
            onClick={() => setOpen(false)}
          >
            Bảng giá
          </a>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar; 