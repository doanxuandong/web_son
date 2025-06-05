import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Select, Input, Button, Modal } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';

// Dữ liệu mẫu các hãng vật tư
const brands = [
  {
    name: 'Stanley',
    logo: '/stanley.png',
    materials: [
      { name: 'Rulo Stanley A', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
      { name: 'Rulo Stanley B', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
    ],
  },
  {
    name: 'Bosch',
    logo: '/bosch.png',
    materials: [
      { name: 'Rulo Bosch Pro', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
    ],
  },
  {
    name: 'Makita',
    logo: '/makita.png',
    materials: [
      { name: 'Rulo Makita X', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
    ],
  },
];

// Mapping subcategory slug sang tên có dấu
const subcategoryTitles = {
  'rulo': 'Rulo',
  'co-son': 'Cọ sơn',
  'khay-son': 'Khay sơn',
  'gay-noi-dai-cho-rulo': 'Gậy nối dài cho rulo',
  'may-phun-son': 'Máy phun sơn',
  'may-khuay-son': 'Máy khuấy sơn',
  'bot-ba': 'Bột bả',
  'giay-nham-da-mai': 'Giấy nhám, đá mài',
  'dao-tret-ba': 'Dao trét bả',
  'ban-chai-sat': 'Bàn chải sắt',
  'dung-moi-tay-rua': 'Dung môi tẩy rửa',
  'bat-che-son': 'Bạt che sơn',
  'bang-keo-giay': 'Băng keo giấy',
  'gang-tay-kinh-khau-trang': 'Găng tay, kính, khẩu trang',
  'thang-dan-giao-day-an-toan': 'Thang, dàn giáo, dây an toàn',
  'dung-moi-pha-son': 'Dung môi pha sơn',
  'phu-gia-chong-nam-moc': 'Phụ gia chống nấm mốc',
  'chat-tang-bam-dinh': 'Chất tăng bám dính',
  'keo-tram-khe': 'Keo trám khe',
  'vat-lieu-chong-tham': 'Vật liệu chống thấm',
  'vai-thuy-tinh': 'Vải thủy tinh',
  'cat-kho': 'Cát khô',
};

const sampleDesc = 'Vật tư chất lượng cao, hỗ trợ thi công và bảo vệ công trình hiệu quả.';

const VatTuCategoryPage = () => {
  const { category, subcategory } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMaterial, setModalMaterial] = useState(null);

  // Lọc vật tư theo subcategory (giả lập)
  const filteredBrands = brands.map(brand => ({
    ...brand,
    materials: brand.materials.filter(m => m.name.toLowerCase().includes((subcategory || '').replace(/-/g, ' ')))
  })).filter(brand => brand.materials.length > 0);

  return (
    <div className="max-w-7xl mx-auto py-8 px-2 mt-12">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2 px-4 mb-6 rounded flex items-center text-sm font-semibold text-gray-800">
        <Link to="/" className="hover:underline">Trang chủ</Link>
        <span className="mx-2">/</span>
        <Link to="/vat-tu" className="hover:underline">Vật tư</Link>
        <span className="mx-2">/</span>
        <span className="text-blue-700 capitalize">{subcategoryTitles[subcategory] || subcategory?.replace(/-/g, ' ')}</span>
      </div>
      <h1 className="text-3xl font-bold mb-6 capitalize text-center">{subcategoryTitles[subcategory] || subcategory?.replace(/-/g, ' ')}</h1>
      {/* Thanh lọc */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center mb-8">
        <Select className="rounded-md" style={{ minWidth: 160 }} placeholder="Chọn hãng" allowClear>
          <Select.Option value="">Tất cả hãng</Select.Option>
          {brands.map((b, idx) => (
            <Select.Option key={idx} value={b.name}>{b.name}</Select.Option>
          ))}
        </Select>
        <Input className="rounded-md" style={{ width: 240 }} placeholder="Tên vật tư" prefix={<SearchOutlined />} />
        <Button type="primary" className="rounded-md flex items-center gap-1"><SearchOutlined /> Lọc</Button>
        <Button className="rounded-md flex items-center gap-1" icon={<ReloadOutlined />}>Làm mới</Button>
      </div>
      {/* Grid vật tư theo hãng */}
      {filteredBrands.map((brand, idx) => (
        <div key={idx} className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <img src={brand.logo} alt={brand.name} className="h-8 w-8 object-contain" />
            <span className="font-bold text-lg">{brand.name}</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brand.materials.map((m, i) => (
              <div
                key={i}
                className="bg-[#fffbea] rounded-lg shadow p-2 flex flex-col items-center border border-gray-200 cursor-pointer hover:shadow-md transition"
                onClick={() => { setModalMaterial(m); setModalOpen(true); }}
              >
                <img src={m.image} alt={m.name} className="w-28 h-28 object-cover rounded mb-2" />
                <div className="font-bold text-base text-[#d7261e] mb-1 w-full text-center">{m.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* Modal chi tiết vật tư */}
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
  );
};

export default VatTuCategoryPage; 