import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Input, Select, Button, Tabs, Modal } from 'antd';
import { LeftOutlined, RightOutlined, ReloadOutlined, SearchOutlined } from '@ant-design/icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useParams, useNavigate } from 'react-router-dom';

const banners = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80',
];

const materialCategories = [
  {
    key: 'dung-cu-thi-cong',
    label: 'Dụng cụ thi công',
    children: [
      'Rulo',
      'Cọ sơn',
      'Khay sơn',
      'Gậy nối dài cho rulo',
      'Máy phun sơn',
      'Máy khuấy sơn',
    ],
  },
  {
    key: 'xu-ly-be-mat',
    label: 'Xử lý bề mặt',
    children: [
      'Bột bả',
      'Giấy nhám, đá mài',
      'Dao trét bả',
      'Bàn chải sắt',
      'Dung môi tẩy rửa',
    ],
  },
  {
    key: 'bao-ho-an-toan',
    label: 'Bảo hộ an toàn',
    children: [
      'Bạt che sơn',
      'Băng keo giấy',
      'Găng tay, kính, khẩu trang bảo hộ',
      'Thang, dàn giáo, dây an toàn',
    ],
  },
  {
    key: 'phu-gia-dung-moi',
    label: 'Phụ gia và dung môi',
    children: [
      'Dung môi pha sơn',
      'Phụ gia chống nấm mốc',
      'Chất tăng bám dính',
    ],
  },
  {
    key: 'vat-tu-dac-biet',
    label: 'Vật tư đặc biệt',
    children: [
      'Keo trám khe',
      'Vật liệu chống thấm',
      'Vải thủy tinh',
      'Cát khô',
    ],
  },
];

const allMaterials = [
  { name: 'Rulo', category: 'Dụng cụ thi công', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', isNew: true },
  { name: 'Cọ sơn', category: 'Dụng cụ thi công', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', isNew: true },
  { name: 'Bột bả', category: 'Xử lý bề mặt', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', isNew: true },
  { name: 'Bạt che sơn', category: 'Bảo hộ an toàn', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', isNew: true },
  { name: 'Dung môi pha sơn', category: 'Phụ gia và dung môi', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', isNew: true },
  { name: 'Keo trám khe', category: 'Vật tư đặc biệt', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', isNew: true },
  // ...
];

const sampleDesc = 'Vật tư chất lượng cao, hỗ trợ thi công và bảo vệ công trình hiệu quả.';

const VatTuPage = () => {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [tab, setTab] = useState(category || 'dung-cu-thi-cong');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMaterial, setModalMaterial] = useState(null);

  // Nếu category trên URL thay đổi thì setTab tương ứng
  useEffect(() => {
    if (category) setTab(category);
  }, [category]);

  // Lọc vật tư mới
  const newMaterials = allMaterials.filter(m => m.isNew);

  // Lọc vật tư theo tab
  const tabMaterials = (catKey) => {
    const cat = materialCategories.find(c => c.key === catKey);
    if (!cat) return [];
    const images = [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    ];
    return cat.children.map((child, idx) => ({
      name: child,
      image: images[idx % images.length],
    }));
  };

  // Lọc vật tư theo thanh lọc
  const filteredMaterials = allMaterials.filter(m => {
    const matchName = search ? m.name.toLowerCase().includes(search.toLowerCase()) : true;
    const matchCat = filter ? m.category === filter : true;
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

  // Carousel vật tư mới
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
          placeholder="Tìm tên vật tư..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          prefix={<SearchOutlined />}
          className="w-full md:w-64"
        />
        <Select
          placeholder="Phân loại vật tư"
          value={filter}
          onChange={setFilter}
          allowClear
          className="w-full md:w-64"
        >
          {materialCategories.map(cat => (
            <Select.Option key={cat.key} value={cat.label}>{cat.label}</Select.Option>
          ))}
        </Select>
        <Button type="primary" onClick={() => {}} icon={<SearchOutlined />}>Lọc</Button>
        <Button onClick={() => { setSearch(''); setFilter(''); }} icon={<ReloadOutlined />}>Làm mới</Button>
      </div>
      {/* Vật tư mới */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Vật tư mới</h2>
        <Slider {...carouselSettings}>
          {newMaterials.map((m, idx) => (
            <div key={idx} className="px-2">
              <div
                className="bg-[#fffbea] rounded-lg shadow p-1 flex flex-col w-full items-center border border-gray-200 cursor-pointer"
                onClick={() => { setModalMaterial(m); setModalOpen(true); }}
              >
                <img src={m.image} alt={m.name} className="w-33 h-48 object-cover rounded-md mb-1 mx-auto" />
                <div className="font-bold text-base text-[#d7261e] mb-1 w-full text-center">{m.name}</div>
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
          width={800}
          bodyStyle={{ padding: 0, borderRadius: 12, overflow: 'hidden' }}
          style={{ top: 30 }}
        >
          {modalMaterial && (
            <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
              <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-8 min-h-[320px] max-w-[320px]">
                <div className="w-full flex items-center justify-center mb-4">
                  <img src={modalMaterial.image} alt={modalMaterial.name} className="h-[220px] w-auto max-w-full object-contain rounded-lg shadow" />
                </div>
              </div>
              <div className="flex-[1.5] p-8 flex flex-col gap-4 justify-center">
                <div className="text-2xl font-bold mb-2">{modalMaterial.name}</div>
                <div className="text-xl text-[#e53935] font-semibold mb-2">Liên hệ: 0867767125</div>
                <div className="text-base text-gray-700 mb-2">{sampleDesc}</div>
              </div>
            </div>
          )}
        </Modal>
      </div>
      {/* Tabs danh mục vật tư */}
      <div>
        <Tabs
          activeKey={tab}
          onChange={setTab}
          items={materialCategories.map(cat => ({
            key: cat.key,
            label: cat.label,
            children: (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                {tabMaterials(cat.key).map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg shadow-sm p-2 flex flex-col items-center cursor-pointer hover:shadow-md transition min-h-[150px]"
                    onClick={() => navigate(`/vat-tu/${cat.key}/${item.name.toLowerCase().replace(/ /g, '-').normalize('NFD').replace(/\p{Diacritic}/gu, '')}`)}
                  >
                    <img src={item.image} alt={item.name} className="w-20 h-20 md:w-28 md:h-28 object-cover mb-1 rounded-md" />
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

export default VatTuPage; 