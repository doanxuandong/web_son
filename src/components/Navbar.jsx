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
      <Menu.Item><Link to="/san-pham/son-trang-tri/son-noi-that">Sơn nội thất</Link></Menu.Item>
      <Menu.Item><Link to="/san-pham/son-trang-tri/son-ngoai-that">Sơn ngoại thất</Link></Menu.Item>
      <Menu.Item><Link to="/san-pham/son-trang-tri/son-chong-tham">Sơn chống thấm</Link></Menu.Item>
      <Menu.Item><Link to="/san-pham/son-trang-tri/son-phu">Sơn phủ</Link></Menu.Item>
      <Menu.Item><Link to="/san-pham/son-trang-tri/son-hieu-ung-dac-biet">Sơn hiệu ứng đặc biệt</Link></Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu title="Sơn dân dụng">
      <Menu.Item><Link to="/san-pham/son-dan-dung/son-noi-that">Sơn nội thất</Link></Menu.Item>
      <Menu.Item><Link to="/san-pham/son-dan-dung/son-ngoai-that">Sơn ngoại thất</Link></Menu.Item>
      <Menu.Item><Link to="/san-pham/son-dan-dung/son-lot">Sơn lót</Link></Menu.Item>
      <Menu.Item><Link to="/san-pham/son-dan-dung/son-phu">Sơn phủ</Link></Menu.Item>
      <Menu.Item><Link to="/san-pham/son-dan-dung/son-chong-tham">Sơn chống thấm</Link></Menu.Item>
      <Menu.Item><Link to="/san-pham/son-dan-dung/son-chong-moc">Sơn chống mốc</Link></Menu.Item>
      <Menu.Item><Link to="/san-pham/son-dan-dung/son-trang-tri-hieu-ung">Sơn trang trí hiệu ứng</Link></Menu.Item>
      <Menu.Item><Link to="/san-pham/son-dan-dung/son-da-nang">Sơn đa năng</Link></Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu title="Sơn và chất phủ công nghiệp">
      <Menu.Item><Link to="/san-pham/cong-nghiep/son-chong-an-mon">Sơn chống ăn mòn</Link></Menu.Item>
      <Menu.Item><Link to="/san-pham/cong-nghiep/son-san-cong-nghiep">Sơn sàn công nghiệp</Link></Menu.Item>
      <Menu.Item><Link to="/san-pham/cong-nghiep/son-chiu-nhiet">Sơn chịu nhiệt</Link></Menu.Item>
      <Menu.Item><Link to="/san-pham/cong-nghiep/son-tau-bien">Sơn tàu biển</Link></Menu.Item>
      <Menu.Item><Link to="/san-pham/cong-nghiep/son-duong-giao-thong">Sơn đường, giao thông</Link></Menu.Item>
      <Menu.Item><Link to="/san-pham/cong-nghiep/son-cach-dien">Sơn cách điện</Link></Menu.Item>
      <Menu.Item><Link to="/san-pham/cong-nghiep/son-ket-cau-thep">Sơn kết cấu thép</Link></Menu.Item>
      <Menu.Item><Link to="/san-pham/cong-nghiep/son-container-bon-be-silo">Sơn container, bồn bể, silo</Link></Menu.Item>
      <Menu.Item><Link to="/san-pham/cong-nghiep/son-chong-chay">Sơn chống cháy</Link></Menu.Item>
      <Menu.Item><Link to="/san-pham/cong-nghiep/chat-phu-dac-biet">Chất phủ đặc biệt</Link></Menu.Item>
    </Menu.SubMenu>
  </Menu>
);

const materialMenu = (
  <Menu>
    <Menu.Item>
      <Link to="/vat-tu">Tất cả vật tư</Link>
    </Menu.Item>
    <Menu.SubMenu title="Dụng cụ thi công">
      <Menu.Item><Link to="/vat-tu/dung-cu-thi-cong/rulo">Rulo</Link></Menu.Item>
      <Menu.Item><Link to="/vat-tu/dung-cu-thi-cong/co-son">Cọ sơn</Link></Menu.Item>
      <Menu.Item><Link to="/vat-tu/dung-cu-thi-cong/khay-son">Khay sơn</Link></Menu.Item>
      <Menu.Item><Link to="/vat-tu/dung-cu-thi-cong/gay-noi-dai-cho-rulo">Gậy nối dài cho rulo</Link></Menu.Item>
      <Menu.Item><Link to="/vat-tu/dung-cu-thi-cong/may-phun-son">Máy phun sơn</Link></Menu.Item>
      <Menu.Item><Link to="/vat-tu/dung-cu-thi-cong/may-khuay-son">Máy khuấy sơn</Link></Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu title="Xử lý bề mặt">
      <Menu.Item><Link to="/vat-tu/xu-ly-be-mat/bot-ba">Bột bả</Link></Menu.Item>
      <Menu.Item><Link to="/vat-tu/xu-ly-be-mat/giay-nham-da-mai">Giấy nhám, đá mài</Link></Menu.Item>
      <Menu.Item><Link to="/vat-tu/xu-ly-be-mat/dao-tret-ba">Dao trét bả</Link></Menu.Item>
      <Menu.Item><Link to="/vat-tu/xu-ly-be-mat/ban-chai-sat">Bàn chải sắt</Link></Menu.Item>
      <Menu.Item><Link to="/vat-tu/xu-ly-be-mat/dung-moi-tay-rua">Dung môi tẩy rửa</Link></Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu title="Bảo hộ an toàn">
      <Menu.Item><Link to="/vat-tu/bao-ho-an-toan/bat-che-son">Bạt che sơn</Link></Menu.Item>
      <Menu.Item><Link to="/vat-tu/bao-ho-an-toan/bang-keo-giay">Băng keo giấy</Link></Menu.Item>
      <Menu.Item><Link to="/vat-tu/bao-ho-an-toan/gang-tay-kinh-khau-trang">Găng tay, kính, khẩu trang bảo hộ</Link></Menu.Item>
      <Menu.Item><Link to="/vat-tu/bao-ho-an-toan/thang-dan-giao-day-an-toan">Thang, dàn giáo, dây an toàn</Link></Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu title="Phụ gia và dung môi">
      <Menu.Item><Link to="/vat-tu/phu-gia-dung-moi/dung-moi-pha-son">Dung môi pha sơn</Link></Menu.Item>
      <Menu.Item><Link to="/vat-tu/phu-gia-dung-moi/phu-gia-chong-nam-moc">Phụ gia chống nấm mốc</Link></Menu.Item>
      <Menu.Item><Link to="/vat-tu/phu-gia-dung-moi/chat-tang-bam-dinh">Chất tăng bám dính</Link></Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu title="Vật tư đặc biệt cho các bề mặt riêng">
      <Menu.Item><Link to="/vat-tu/vat-tu-dac-biet/keo-tram-khe">Keo trám khe</Link></Menu.Item>
      <Menu.Item><Link to="/vat-tu/vat-tu-dac-biet/vat-lieu-chong-tham">Vật liệu chống thấm</Link></Menu.Item>
      <Menu.Item><Link to="/vat-tu/vat-tu-dac-biet/vai-thuy-tinh">Vải thủy tinh</Link></Menu.Item>
      <Menu.Item><Link to="/vat-tu/vat-tu-dac-biet/cat-kho">Cát khô</Link></Menu.Item>
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
              <Link to="/san-pham/son-trang-tri/son-noi-that" onClick={() => setOpen(false)} className="pl-4">Sơn nội thất</Link>
              <Link to="/san-pham/son-trang-tri/son-ngoai-that" onClick={() => setOpen(false)} className="pl-4">Sơn ngoại thất</Link>
              <Link to="/san-pham/son-trang-tri/son-chong-tham" onClick={() => setOpen(false)} className="pl-4">Sơn chống thấm</Link>
              <Link to="/san-pham/son-trang-tri/son-phu" onClick={() => setOpen(false)} className="pl-4">Sơn phủ</Link>
              <Link to="/san-pham/son-trang-tri/son-hieu-ung-dac-biet" onClick={() => setOpen(false)} className="pl-4">Sơn hiệu ứng đặc biệt</Link>
              <div className="font-medium mt-2">Sơn dân dụng</div>
              <Link to="/san-pham/son-dan-dung/son-noi-that" onClick={() => setOpen(false)} className="pl-4">Sơn nội thất</Link>
              <Link to="/san-pham/son-dan-dung/son-ngoai-that" onClick={() => setOpen(false)} className="pl-4">Sơn ngoại thất</Link>
              <Link to="/san-pham/son-dan-dung/son-lot" onClick={() => setOpen(false)} className="pl-4">Sơn lót</Link>
              <Link to="/san-pham/son-dan-dung/son-phu" onClick={() => setOpen(false)} className="pl-4">Sơn phủ</Link>
              <Link to="/san-pham/son-dan-dung/son-chong-tham" onClick={() => setOpen(false)} className="pl-4">Sơn chống thấm</Link>
              <Link to="/san-pham/son-dan-dung/son-chong-moc" onClick={() => setOpen(false)} className="pl-4">Sơn chống mốc</Link>
              <Link to="/san-pham/son-dan-dung/son-trang-tri-hieu-ung" onClick={() => setOpen(false)} className="pl-4">Sơn trang trí hiệu ứng</Link>
              <Link to="/san-pham/son-dan-dung/son-da-nang" onClick={() => setOpen(false)} className="pl-4">Sơn đa năng</Link>
              <div className="font-medium mt-2">Sơn và chất phủ công nghiệp</div>
              <Link to="/san-pham/cong-nghiep/son-chong-an-mon" onClick={() => setOpen(false)} className="pl-4">Sơn chống ăn mòn</Link>
              <Link to="/san-pham/cong-nghiep/son-san-cong-nghiep" onClick={() => setOpen(false)} className="pl-4">Sơn sàn công nghiệp</Link>
              <Link to="/san-pham/cong-nghiep/son-chiu-nhiet" onClick={() => setOpen(false)} className="pl-4">Sơn chịu nhiệt</Link>
              <Link to="/san-pham/cong-nghiep/son-tau-bien" onClick={() => setOpen(false)} className="pl-4">Sơn tàu biển</Link>
              <Link to="/san-pham/cong-nghiep/son-duong-giao-thong" onClick={() => setOpen(false)} className="pl-4">Sơn đường, giao thông</Link>
              <Link to="/san-pham/cong-nghiep/son-cach-dien" onClick={() => setOpen(false)} className="pl-4">Sơn cách điện</Link>
              <Link to="/san-pham/cong-nghiep/son-ket-cau-thep" onClick={() => setOpen(false)} className="pl-4">Sơn kết cấu thép</Link>
              <Link to="/san-pham/cong-nghiep/son-container-bon-be-silo" onClick={() => setOpen(false)} className="pl-4">Sơn container, bồn bể, silo</Link>
              <Link to="/san-pham/cong-nghiep/son-chong-chay" onClick={() => setOpen(false)} className="pl-4">Sơn chống cháy</Link>
              <Link to="/san-pham/cong-nghiep/chat-phu-dac-biet" onClick={() => setOpen(false)} className="pl-4">Chất phủ đặc biệt</Link>
            </div>
          </div>
          <div>
            <div className="py-2 font-semibold">Vật tư</div>
            <div className="pl-4 flex flex-col space-y-1">
              <Link to="/vat-tu" onClick={() => setOpen(false)} className="pl-4 font-semibold text-blue-700">Tất cả vật tư</Link>
              <div className="font-medium">Dụng cụ thi công</div>
              <Link to="/vat-tu/dung-cu-thi-cong/rulo" onClick={() => setOpen(false)} className="pl-4">Rulo</Link>
              <Link to="/vat-tu/dung-cu-thi-cong/co-son" onClick={() => setOpen(false)} className="pl-4">Cọ sơn</Link>
              <Link to="/vat-tu/dung-cu-thi-cong/khay-son" onClick={() => setOpen(false)} className="pl-4">Khay sơn</Link>
              <Link to="/vat-tu/dung-cu-thi-cong/gay-noi-dai-cho-rulo" onClick={() => setOpen(false)} className="pl-4">Gậy nối dài cho rulo</Link>
              <Link to="/vat-tu/dung-cu-thi-cong/may-phun-son" onClick={() => setOpen(false)} className="pl-4">Máy phun sơn</Link>
              <Link to="/vat-tu/dung-cu-thi-cong/may-khuay-son" onClick={() => setOpen(false)} className="pl-4">Máy khuấy sơn</Link>
              <div className="font-medium mt-2">Xử lý bề mặt</div>
              <Link to="/vat-tu/xu-ly-be-mat/bot-ba" onClick={() => setOpen(false)} className="pl-4">Bột bả</Link>
              <Link to="/vat-tu/xu-ly-be-mat/giay-nham-da-mai" onClick={() => setOpen(false)} className="pl-4">Giấy nhám, đá mài</Link>
              <Link to="/vat-tu/xu-ly-be-mat/dao-tret-ba" onClick={() => setOpen(false)} className="pl-4">Dao trét bả</Link>
              <Link to="/vat-tu/xu-ly-be-mat/ban-chai-sat" onClick={() => setOpen(false)} className="pl-4">Bàn chải sắt</Link>
              <Link to="/vat-tu/xu-ly-be-mat/dung-moi-tay-rua" onClick={() => setOpen(false)} className="pl-4">Dung môi tẩy rửa</Link>
              <div className="font-medium mt-2">Bảo hộ an toàn</div>
              <Link to="/vat-tu/bao-ho-an-toan/bat-che-son" onClick={() => setOpen(false)} className="pl-4">Bạt che sơn</Link>
              <Link to="/vat-tu/bao-ho-an-toan/bang-keo-giay" onClick={() => setOpen(false)} className="pl-4">Băng keo giấy</Link>
              <Link to="/vat-tu/bao-ho-an-toan/gang-tay-kinh-khau-trang" onClick={() => setOpen(false)} className="pl-4">Găng tay, kính, khẩu trang bảo hộ</Link>
              <Link to="/vat-tu/bao-ho-an-toan/thang-dan-giao-day-an-toan" onClick={() => setOpen(false)} className="pl-4">Thang, dàn giáo, dây an toàn</Link>
              <div className="font-medium mt-2">Phụ gia và dung môi</div>
              <Link to="/vat-tu/phu-gia-dung-moi/dung-moi-pha-son" onClick={() => setOpen(false)} className="pl-4">Dung môi pha sơn</Link>
              <Link to="/vat-tu/phu-gia-dung-moi/phu-gia-chong-nam-moc" onClick={() => setOpen(false)} className="pl-4">Phụ gia chống nấm mốc</Link>
              <Link to="/vat-tu/phu-gia-dung-moi/chat-tang-bam-dinh" onClick={() => setOpen(false)} className="pl-4">Chất tăng bám dính</Link>
              <div className="font-medium mt-2">Vật tư đặc biệt cho các bề mặt riêng</div>
              <Link to="/vat-tu/vat-tu-dac-biet/keo-tram-khe" onClick={() => setOpen(false)} className="pl-4">Keo trám khe</Link>
              <Link to="/vat-tu/vat-tu-dac-biet/vat-lieu-chong-tham" onClick={() => setOpen(false)} className="pl-4">Vật liệu chống thấm</Link>
              <Link to="/vat-tu/vat-tu-dac-biet/vai-thuy-tinh" onClick={() => setOpen(false)} className="pl-4">Vải thủy tinh</Link>
              <Link to="/vat-tu/vat-tu-dac-biet/cat-kho" onClick={() => setOpen(false)} className="pl-4">Cát khô</Link>
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