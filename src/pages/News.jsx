import { useState } from 'react';
import { motion } from 'framer-motion';

const News = () => {
  const [news] = useState([
    {
      id: 1,
      title: 'MC Group Expands to New Markets',
      date: 'March 15, 2024',
      category: 'Company News',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
      summary: 'MC Group announces expansion into new international markets, strengthening our global presence.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 2,
      title: 'New Product Launch: Innovation Series',
      date: 'March 10, 2024',
      category: 'Product Updates',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
      summary: 'Introducing our latest product line featuring cutting-edge technology and innovative solutions.',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 3,
      title: 'Employee of the Year Awards',
      date: 'March 5, 2024',
      category: 'Company Culture',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174',
      summary: 'Celebrating outstanding achievements and contributions of our team members.',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    }
  ]);

  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Khuyến mãi</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            onClick={() => setSelectedNews(item)}
          >
            <div className="relative h-48">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {item.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.summary}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* News Modal */}
      {selectedNews && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedNews(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-full object-cover"
              />
              <button
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
                onClick={() => setSelectedNews(null)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {selectedNews.category}
                </span>
                <span className="text-gray-500">{selectedNews.date}</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">{selectedNews.title}</h2>
              <p className="text-gray-600 mb-4">{selectedNews.summary}</p>
              <p className="text-gray-700">{selectedNews.content}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default News; 