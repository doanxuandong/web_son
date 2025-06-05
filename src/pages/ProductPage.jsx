import React, { useState } from 'react';
import Slider from 'react-slick';
import { Input, Select, Button, Tabs, Modal } from 'antd';
import { LeftOutlined, RightOutlined, ReloadOutlined, SearchOutlined } from '@ant-design/icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

const banners = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80',
];

const productCategories = [
  {
    key: 'son-trang-tri',
    label: 'Sơn trang trí',
    children: [
      'Sơn nội thất',
      'Sơn ngoại thất',
      'Sơn chống thấm',
      'Sơn phủ',
      'Sơn hiệu ứng đặc biệt',
    ],
  },
  {
    key: 'son-dan-dung',
    label: 'Sơn dân dụng',
    children: [
      'Sơn nội thất',
      'Sơn ngoại thất',
      'Sơn lót',
      'Sơn phủ',
      'Sơn chống thấm',
      'Sơn chống mốc',
      'Sơn trang trí hiệu ứng',
      'Sơn đa năng',
    ],
  },
  {
    key: 'cong-nghiep',
    label: 'Sơn công nghiệp',
    children: [
      'Sơn chống ăn mòn',
      'Sơn sàn công nghiệp',
      'Sơn chịu nhiệt',
      'Sơn tàu biển',
      'Sơn đường, giao thông',
      'Sơn cách điện',
      'Sơn kết cấu thép',
      'Sơn container, bồn bể, silo',
      'Sơn chống cháy',
      'Chất phủ đặc biệt',
    ],
  },
];

const allProducts = [
  { name: 'Sơn nội thất cao cấp', category: 'Sơn trang trí', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', isNew: true },
  { name: 'Sơn ngoại thất siêu bền', category: 'Sơn trang trí', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', isNew: true },
  { name: 'Sơn chống thấm', category: 'Sơn trang trí', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', isNew: true },
  { name: 'Sơn lót đa năng', category: 'Sơn dân dụng', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', isNew: true },
  { name: 'Sơn phủ bóng', category: 'Sơn dân dụng', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', isNew: false },
  { name: 'Sơn chống cháy', category: 'Sơn công nghiệp', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', isNew: true },
  { name: 'Sơn container', category: 'Sơn công nghiệp', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', isNew: false },
  // ...
];

const sampleColors = [
  { code: 'A001', color: '#e53935' },
  { code: 'A002', color: '#fbc02d' },
  { code: 'A003', color: '#43a047' },
  { code: 'A004', color: '#1e88e5' },
  { code: 'A005', color: '#8e24aa' },
  { code: 'A006', color: '#ffb300' },
  { code: 'A007', color: '#6d4c41' },
  { code: 'A008', color: '#00bcd4' },
  { code: 'A009', color: '#c62828' },
  { code: 'A010', color: '#388e3c' },
];
const sampleDesc = 'Sản phẩm sơn chất lượng cao, bền màu, phù hợp cho nhiều bề mặt nội thất và ngoại thất.';

const ProductPage = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [tab, setTab] = useState('son-trang-tri');
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [modalImageIdx, setModalImageIdx] = useState(0);

  // Lọc sản phẩm mới
  const newProducts = allProducts.filter(p => p.isNew);

  // Lọc sản phẩm theo tab
  const tabProducts = (catKey) => {
    const cat = productCategories.find(c => c.key === catKey);
    if (!cat) return [];
    // Gán ảnh minh họa khác nhau cho từng mục con
    const images = [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    ];
    return cat.children.map((child, idx) => ({
      name: child,
      image: images[idx % images.length],
    }));
  };

  // Lọc sản phẩm theo thanh lọc
  const filteredProducts = allProducts.filter(p => {
    const matchName = search ? p.name.toLowerCase().includes(search.toLowerCase()) : true;
    const matchCat = filter ? p.category === filter : true;
    return matchName && matchCat;
  });

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <Button shape="circle" style={{ background: '#222', color: '#fff', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} icon={<LeftOutlined />} />,
    nextArrow: <Button shape="circle" style={{ background: '#222', color: '#fff', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} icon={<RightOutlined />} />,
  };

  // Carousel sản phẩm mới
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-2 mt-12">
      {/* Slider banner */}
      <div className="mb-8">
        <Slider {...sliderSettings}>
          {banners.map((img, idx) => (
            <div key={idx}>
              <img src={img} alt="banner" className="w-full h-64 object-cover rounded-xl" />
            </div>
          ))}
        </Slider>
      </div>
      {/* Thanh lọc */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-8 bg-white p-4 rounded-xl shadow">
        <Input
          placeholder="Tìm tên sản phẩm..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          prefix={<SearchOutlined />}
          className="w-full md:w-64"
        />
        <Select
          placeholder="Phân loại sản phẩm"
          value={filter}
          onChange={setFilter}
          allowClear
          className="w-full md:w-64"
        >
          {productCategories.map(cat => (
            <Select.Option key={cat.key} value={cat.label}>{cat.label}</Select.Option>
          ))}
        </Select>
        <Button type="primary" onClick={() => {}} icon={<SearchOutlined />}>Lọc</Button>
        <Button onClick={() => { setSearch(''); setFilter(''); }} icon={<ReloadOutlined />}>Làm mới</Button>
      </div>
      {/* Sản phẩm mới */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Sản phẩm mới</h2>
        <Slider {...carouselSettings}>
          {newProducts.map((p, idx) => (
            <div key={idx} className="px-2">
              <div
                className="bg-[#fffbea] rounded-lg shadow p-1 flex flex-col w-full items-center border border-gray-200 cursor-pointer"
                onClick={() => { setModalProduct(p); setModalOpen(true); setModalImageIdx(0); }}
              >
                <img src={p.image} alt={p.name} className="w-33 h-48 object-cover rounded-md mb-1 mx-auto" />
                <div className="font-bold text-base text-[#d7261e] mb-1 w-full text-center">{p.name}</div>
                <div className="flex gap-2 w-full justify-center items-center mb-2">
                  <button className="bg-[#d7261e] hover:bg-[#b71c1c] text-white font-bold py-2 px-4 rounded text-sm flex items-center gap-2 transition-colors">
                    XEM THÊM
                    <span className="ml-1">→</span>
                  </button>
                  <a href="https://zalo.me/0867767125" target="_blank" rel="noopener noreferrer" className="flex items-center transition-colors" style={{height: '36px'}} onClick={e => e.stopPropagation()}>
                    <img src="/zalo.svg" alt="Zalo" className="h-9 w-9 object-contain" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <Modal
          open={modalOpen}
          onCancel={() => setModalOpen(false)}
          footer={null}
          width={1100}
          bodyStyle={{ padding: 0, borderRadius: 12, overflow: 'hidden' }}
          style={{ top: 30 }}
        >
          {modalProduct && (
            <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
              {/* Cột trái: Ảnh lớn + thumbnail ngang */}
              <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-8 min-h-[480px] max-w-[480px]">
                <div className="w-full flex items-center justify-center mb-4">
                  <img src={modalProduct.image} alt={modalProduct.name} className="h-[340px] w-auto max-w-full object-contain rounded-lg shadow" />
                </div>
                <div className="flex gap-3 items-center w-full justify-center">
                  {Array(4).fill(0).map((_, idx) => (
                    <div
                      key={idx}
                      className={`border-2 ${modalImageIdx === idx ? 'border-red-500' : 'border-transparent'} rounded cursor-pointer p-1 bg-white transition-all`}
                      onClick={() => setModalImageIdx(idx)}
                    >
                      <img
                        src={modalProduct.image}
                        alt={modalProduct.name}
                        className="w-20 h-20 object-contain rounded"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Cột phải: Thông tin sản phẩm */}
              <div className="flex-[1.5] p-8 flex flex-col gap-4 justify-center">
                <div className="text-2xl font-bold mb-2">{modalProduct.name}</div>
                <div className="text-xl text-[#e53935] font-semibold mb-2">Liên hệ: 0867767125</div>
                <div className="text-base text-gray-700 mb-2">{sampleDesc}</div>
                <div>
                  <div className="font-semibold mb-1">Mã màu:</div>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {sampleColors.map(c => (
                      <div key={c.code} className="flex flex-col items-center min-w-[60px]">
                        <div className="w-8 h-8 rounded-full border-2 border-gray-300 mb-1" style={{ background: c.color }}></div>
                        <div className="text-xs text-gray-600">{c.code}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
      {/* Tabs danh mục sản phẩm */}
      <div>
        <Tabs
          activeKey={tab}
          onChange={setTab}
          items={productCategories.map(cat => ({
            key: cat.key,
            label: cat.label,
            children: (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {tabProducts(cat.key).map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg shadow-sm p-2 flex flex-col items-center cursor-pointer hover:shadow-md transition min-h-[180px]"
                    onClick={() => navigate(`/san-pham/${cat.key}/${item.name.toLowerCase().replace(/ /g, '-').normalize('NFD').replace(/\p{Diacritic}/gu, '')}`)}
                  >
                    <img src={item.image} alt={item.name} className="w-24 h-24 md:w-32 md:h-32 object-cover mb-1 rounded-md" />
                    <div className="font-bold text-center text-base mt-1">{item.name}</div>
                  </div>
                ))}
              </div>
            )
          }))}
        />
      </div>
    </div>
  );
};

export default ProductPage; 