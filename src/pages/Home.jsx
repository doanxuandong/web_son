import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedFeatureCards from '../components/AnimatedFeatureCards';
import BackToTop from '../components/BackToTop';
import { Carousel } from 'antd';
import Slider from 'react-slick';
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = [
    {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
      title: 'Welcome to Pain Market',
      description: 'Sự khác biệt tạo nên đẳng cấp'
    },
    {
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
      title: 'Bền bỉ & chất lượng',
      description: 'Chú trọng đến chất lượng sản phẩm để mang lại sự hài lòng cho khách hàng'
    },
    {
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174',
      title: 'Thi Công',
      description: 'Áp dụng những công nghệ mới nhất để tạo trải nghiệm tốt cho khách hàng'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [modalImageIdx, setModalImageIdx] = useState(0);
  const newProducts = [
    { name: 'Nippon Nội thất A', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
    { name: 'Nippon Nội thất B', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
    { name: 'Dulux Nội thất A', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
    { name: 'Dulux Nội thất B', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
    { name: 'Jotun Nội thất A', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
    { name: 'Jotun Nội thất B', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
  ];
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

  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-b from-blue-100 via-blue-50 to-white min-h-screen mt-20">
      {/* Banner Section */}
      <div className="relative h-[600px] overflow-hidden">
        {banners.map((banner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              x: currentSlide === index ? 0 : 100
            }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50">
                <div className="max-w-7xl mx-auto h-full flex items-center px-4">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-white"
                  >
                    <h1 className="text-5xl font-bold mb-4">{banner.title}</h1>
                    <p className="text-xl">{banner.description}</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* SẢN PHẨM MỚI */}
      <div className="max-w-7xl mx-auto mb-10 mt-10">
        <div className="text-4xl font-bold text-center mb-10 text-black tracking-wide">Sản phẩm mới</div>
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
      {/* Section SẢN PHẨM của chúng tôi kiểu Nippon Paint */}
      <div className="w-full py-16 px-4 mt-10 rounded-2xl shadow-lg flex flex-col items-center relative overflow-hidden mb-0">
        <h2 className="text-4xl font-bold text-center mb-10 text-black tracking-wide">Danh mục sản phẩm </h2>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 z-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center relative w-72 group cursor-pointer" onClick={() => navigate('/san-pham')}>
            <div className="w-72 h-48 rounded-lg overflow-hidden shadow bg-white relative">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Nhà ở" className="w-full h-full object-cover" />
              <img src="/anh_lon_son.png" alt="Sơn trang trí" className="absolute bottom-0 right-2 w-28 h-28 object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-125" />
            </div>
            <div className="font-semibold text-black text-lg mt-2">Sơn trang trí</div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center relative w-72 group cursor-pointer" onClick={() => navigate('/san-pham')}>
            <div className="w-72 h-48 rounded-lg overflow-hidden shadow bg-white relative">
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Nội thất" className="w-full h-full object-cover" />
              <img src="/anh_lon_son.png" alt="Sơn dân dụng" className="absolute bottom-0 right-2 w-28 h-28 object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-125" />
            </div>
            <div className="font-semibold text-black text-lg mt-2">Sơn dân dụng</div>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center relative w-72 group cursor-pointer" onClick={() => navigate('/san-pham')}>
            <div className="w-72 h-48 rounded-lg overflow-hidden shadow bg-white relative">
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Công nghiệp" className="w-full h-full object-cover" />
              <img src="/anh_lon_son.png" alt="Sơn và chất phủ công nghiệp" className="absolute bottom-0 right-2 w-28 h-28 object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-125" />
            </div>
            <div className="font-semibold text-black text-lg mt-2">Sơn và chất phủ công nghiệp</div>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col items-center relative w-72 group cursor-pointer" onClick={() => navigate('/vat-tu')}>
            <div className="w-72 h-48 rounded-lg overflow-hidden shadow bg-white relative">
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Công nghiệp" className="w-full h-full object-cover" />
              <img src="/anh_lon_son.png" alt="Sơn và chất phủ công nghiệp" className="absolute bottom-0 right-2 w-28 h-28 object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-125" />
            </div>
            <div className="font-semibold text-black text-lg mt-2">Vật tư</div>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="max-w-7xl mx-auto py-4 mt-2 px-4">
        <AnimatedFeatureCards />
      </div>
      {/* support section */}
      <div
        className="w-full my-6 shadow-lg overflow-hidden relative bgr-sp-section mb-10"
        style={{
          backgroundImage: 'url(/pp.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        {/* Form khuyến mãi ở giữa */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <form className="bg-white bg-opacity-80 rounded-xl shadow-lg px-8 py-8 flex flex-col items-center gap-4 max-w-md w-full mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#d7261e] mb-2">Hỗ trợ</h2>
            <input
              type="text"
              placeholder="Nhập tên của bạn"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d7261e] text-base"
              required
            />
            <input
              type="tel"
              placeholder="Số điện thoại"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d7261e] text-base"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#d7261e] hover:bg-[#b71c1c] text-white font-bold py-2 px-4 rounded text-lg transition-colors mt-2"
            >
              Gửi
            </button>
          </form>
        </div>
      </div>
      <BackToTop />
    </div>
  );
};

export default Home; 