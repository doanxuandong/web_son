import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedFeatureCards from '../components/AnimatedFeatureCards';

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
    <div className="relative bg-gradient-to-b from-blue-100 via-blue-50 to-white min-h-screen">
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
      {/* Promotion Section */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-blue-400 py-12 px-4 mt-4 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
        <div className="flex-1 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Chương trình khuyến mãi đặc biệt!</h2>
          <p className="text-lg mb-2">Thay section này bằng một ảnh có kích thước lớn hơn</p>
        </div>
        <form className="flex-1 flex flex-col md:flex-row items-center gap-4 bg-white bg-opacity-90 p-6 rounded-xl shadow" onSubmit={e => {e.preventDefault(); alert('Cảm ơn bạn đã đăng ký nhận ưu đãi!');}}>
          <input
            type="text"
            placeholder="Nhập tên của bạn"
            className="px-4 py-2 rounded-md border w-full md:w-auto"
            required
          />
          <input
            type="tel"
            placeholder="Số điện thoại"
            className="px-4 py-2 rounded-md border w-full md:w-auto"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Nhận ưu đãi
          </button>
        </form>
      </div>

      {/* <div className="bg-gradient-to-b from-blue-500 via-blue-300 to-blue-100 rounded-xl shadow-lg">
        <div className="text-center text-5xl font-bold text-gray-800 mb-6 mt-16">Our Memories</div>
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery bend={3} textColor="#224099" borderRadius={0.05} />
        </div>
      </div> */}
    </div>
  );
};

export default Home; 