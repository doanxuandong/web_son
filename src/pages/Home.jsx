import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedFeatureCards from '../components/AnimatedFeatureCards';
import BackToTop from '../components/BackToTop';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = [
    {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
      title: 'Welcome to MC Group',
      description: 'Sự khác biệt tạo nên đẳng cấp'
    },
    {
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
      title: 'Đổi mới & sáng tạo',
      description: 'Không ngừng đổi mới và sáng tạo nên những cái mới'
    },
    {
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174',
      title: 'Công nghệ',
      description: 'Áp dụng những công nghệ mới nhất để tạo trải nghiệm tốt cho khách hàng'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
      {/* Features Section */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <AnimatedFeatureCards />
      </div>
      {/* Section SẢN PHẨM của chúng tôi kiểu Nippon Paint */}
      <div className="w-full bg-[#f5d6b2] py-16 px-4 mt-8 rounded-2xl shadow-lg flex flex-col items-center relative overflow-hidden mb-12">
        {/* Hiệu ứng brush phía trên, dùng ảnh mẫu nếu chưa có */}
        {/* <img src="https://i.imgur.com/6IUbEME.png" alt="brush" className="absolute top-0 left-0 w-full h-12 object-cover pointer-events-none" /> */}
        <h2 className="text-4xl font-bold text-center mb-2 text-black tracking-wide">SẢN PHẨM</h2>
        <div className="text-lg text-black mb-10 text-center">của chúng tôi</div>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 z-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center relative w-72 group">
            <div className="w-72 h-48 rounded-lg overflow-hidden shadow bg-white relative">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Nhà ở" className="w-full h-full object-cover" />
              <img src="/anh_lon_son.jpg" alt="Sơn trang trí" className="absolute bottom-0 right-2 w-28 h-28 object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-125" />
            </div>
            <div className="font-semibold text-black text-lg mt-2">Sơn trang trí</div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center relative w-72 group">
            <div className="w-72 h-48 rounded-lg overflow-hidden shadow bg-white relative">
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Nội thất" className="w-full h-full object-cover" />
              <img src="/anh_lon_son.jpg" alt="Sơn dân dụng" className="absolute bottom-0 right-2 w-28 h-28 object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-125" />
            </div>
            <div className="font-semibold text-black text-lg mt-2">Sơn dân dụng</div>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center relative w-72 group">
            <div className="w-72 h-48 rounded-lg overflow-hidden shadow bg-white relative">
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Công nghiệp" className="w-full h-full object-cover" />
              <img src="/anh_lon_son.jpg" alt="Sơn và chất phủ công nghiệp" className="absolute bottom-0 right-2 w-28 h-28 object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-125" />
            </div>
            <div className="font-semibold text-black text-lg mt-2">Sơn và chất phủ công nghiệp</div>
          </div>
        </div>
      </div>

      {/* <div className="bg-gradient-to-b from-blue-500 via-blue-300 to-blue-100 rounded-xl shadow-lg">
        <div className="text-center text-5xl font-bold text-gray-800 mb-6 mt-16">Our Memories</div>
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery bend={3} textColor="#224099" borderRadius={0.05} />
        </div>
      </div> */}
      <BackToTop />
    </div>
  );
};

export default Home; 