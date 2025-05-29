import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Select, Input, Button, Modal, Carousel } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';
import { useState } from 'react';

// Dữ liệu hãng mẫu
const brands = [
  {
    // name: 'Nippon Paint',
    logo: '/nippon.png',
    products: [
      { name: 'Nippon Nội thất A', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
      { name: 'Nippon Nội thất B', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
      { name: 'Nippon Nội thất B', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
      { name: 'Nippon Nội thất B', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
      { name: 'Nippon Nội thất B', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
    ],
  },
  {
    // name: 'Dulux',
    logo: '/logo_dulux.jpg',
    products: [
      { name: 'Dulux Nội thất A', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
      { name: 'Dulux Nội thất B', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
    ],
  },
  {
    // name: 'Jotun',
    logo: '/jotun.png',
    products: [
      { name: 'Jotun Nội thất A', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
      { name: 'Jotun Nội thất B', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
    ],
  },
];

const ProductCategoryPage = () => {
  const { category, subcategory } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [modalImageIdx, setModalImageIdx] = useState(0);
  // Lọc sản phẩm theo subcategory (ở đây là mẫu, thực tế bạn sẽ lọc theo dữ liệu thực)
  // Hiện tại hiển thị tất cả sản phẩm của từng hãng
  // Mẫu mã màu và mô tả sản phẩm giả lập
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
  return (
    <div className="max-w-7xl mx-auto py-8 px-2 mt-12">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2 px-4 mb-6 rounded flex items-center text-sm font-semibold text-gray-800">
        <Link to="/" className="hover:underline">Trang chủ</Link>
        <span className="mx-2">/</span>
        <Link to="/san-pham" className="hover:underline">Sản phẩm</Link>
        <span className="mx-2">/</span>
        <span className="text-blue-700 capitalize">{subcategory?.replace(/-/g, ' ')}</span>
      </div>
      <h1 className="text-3xl font-bold mb-6 capitalize text-center">{subcategory?.replace(/-/g, ' ')}</h1>
      {/* Thanh lọc sử dụng Ant Design */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center mb-8">
        <Select
          className="rounded-md"
          style={{ minWidth: 160 }}
          placeholder="Chọn hãng"
          allowClear
        >
          <Select.Option value="">Tất cả hãng</Select.Option>
          {brands.map((b, idx) => (
            <Select.Option key={idx} value={b.logo}>{b.logo.replace('/','').replace('.png','').replace('.jpg','').toUpperCase()}</Select.Option>
          ))}
        </Select>
        <Input
          className="rounded-md"
          style={{ minWidth: 180 }}
          placeholder="Tên sản phẩm"
          prefix={<SearchOutlined />}
        />
        <Input
          className="rounded-md"
          style={{ minWidth: 140 }}
          placeholder="Mã màu"
        />
        <Button type="primary" className="rounded-md flex items-center gap-1">
          <SearchOutlined /> Lọc
        </Button>
        <Button className="rounded-md flex items-center gap-1" icon={<ReloadOutlined />}>Làm mới</Button>
      </div>
      {brands.map((brand, idx) => (
        <div key={idx} className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <img src={brand.logo} alt={brand.name} className="h-10 w-auto" />
            <span className="text-xl font-semibold">{brand.name}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {brand.products.map((p, i) => (
              <div key={i} className="bg-[#fffbea] rounded-lg shadow p-1 flex flex-col w-full cursor-pointer" onClick={() => { setModalProduct({ ...p, brand: brand.logo }); setModalOpen(true); setModalImageIdx(0); }}>
                <img src={p.image} alt={p.name} className="w-33 h-48 object-cover rounded-md mb-1 border border-gray-200 mx-auto" />
                <div className="font-bold text-base text-[#d7261e] mb-1 w-full text-center">{p.name}</div>
                <div className="flex gap-2 w-full justify-center items-center">
                  <button className="bg-[#d7261e] hover:bg-[#b71c1c] text-white font-bold py-2 px-4 rounded text-sm flex items-center gap-2 transition-colors" onClick={e => { e.stopPropagation(); setModalProduct({ ...p, brand: brand.logo }); setModalOpen(true); setModalImageIdx(0); }}>
                    XEM THÊM
                    <span className="ml-1">→</span>
                  </button>
                  <a href="https://zalo.me/0867767125" target="_blank" rel="noopener noreferrer" className="flex items-center transition-colors" style={{height: '36px'}} onClick={e => e.stopPropagation()}>
                    <img src="/zalo.svg" alt="Zalo" className="h-9 w-9 object-contain" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* Modal chi tiết sản phẩm */}
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
                <img src={(modalProduct.images ? modalProduct.images[modalImageIdx] : modalProduct.image)} alt={modalProduct.name} className="h-[340px] w-auto max-w-full object-contain rounded-lg shadow" />
              </div>
              <div className="flex gap-3 items-center w-full justify-center">
                {Array(4).fill(0).map((_, idx) => (
                  <div
                    key={idx}
                    className={`border-2 ${modalImageIdx === idx ? 'border-red-500' : 'border-transparent'} rounded cursor-pointer p-1 bg-white transition-all`}
                    onClick={() => setModalImageIdx(idx)}
                  >
                    <img
                      src={modalProduct.images ? modalProduct.images[idx] : modalProduct.image}
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
  );
};

export default ProductCategoryPage; 