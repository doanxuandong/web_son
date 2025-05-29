import React, { useState } from 'react';
import Slider from 'react-slick';
import { Input, Select, Button, Tabs } from 'antd';
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

const ProductPage = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [tab, setTab] = useState('son-trang-tri');
  const navigate = useNavigate();

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
              <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                <img src={p.image} alt={p.name} className="w-32 h-32 object-cover mb-2 rounded" />
                <div className="font-semibold text-center">{p.name}</div>
              </div>
            </div>
          ))}
        </Slider>
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
                    className="bg-white rounded-xl shadow p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition"
                    onClick={() => navigate(`/san-pham/${cat.key}/${item.name.toLowerCase().replace(/ /g, '-')}`)}
                  >
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover mb-2 rounded" />
                    <div className="font-semibold text-center">{item.name}</div>
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