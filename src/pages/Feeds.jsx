import { useState } from 'react';
import { motion } from 'framer-motion';

const Feeds = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Dong Doan',
      content: 'Great day at MC Group!',
      images: ['https://images.unsplash.com/photo-1497215728101-856f4ea42174'],
      likes: 15,
      comments: 5,
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      author: 'Xuan Dong',
      content: 'My Products!',
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2'
      ],
      likes: 23,
      comments: 8,
      timestamp: '5 hours ago'
    }
  ]);

  const [newPost, setNewPost] = useState({
    content: '',
    images: []
  });

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.content.trim() === '') return;

    const post = {
      id: posts.length + 1,
      author: 'Current User',
      content: newPost.content,
      images: newPost.images,
      likes: 0,
      comments: 0,
      timestamp: 'Just now'
    };

    setPosts([post, ...posts]);
    setNewPost({ content: '', images: [] });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setNewPost(prev => ({
      ...prev,
      images: [...prev.images, ...imageUrls]
    }));
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      {/* Create Post Form */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-lg shadow-md p-6 mb-8"
      >
        <form onSubmit={handlePostSubmit}>
          <textarea
            className="w-full p-4 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Bạn đang nghĩ gì?"
            value={newPost.content}
            onChange={(e) => setNewPost(prev => ({ ...prev, content: e.target.value }))}
            rows="3"
          />
          <div className="flex justify-between items-center">
            <div>
              <label className="cursor-pointer bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200">
                <span>Thêm ảnh</span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Đăng
            </button>
          </div>
        </form>
      </motion.div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h3 className="font-bold">{post.author}</h3>
                <p className="text-sm text-gray-500">{post.timestamp}</p>
              </div>
            </div>
            <p className="mb-4">{post.content}</p>
            {post.images.length > 0 && (
              <div className="grid grid-cols-2 gap-2 mb-4">
                {post.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Post image ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
            )}
            <div className="flex items-center space-x-4 text-gray-500">
              <button className="flex items-center space-x-1 hover:text-blue-600">
                <span>👍</span>
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-blue-600">
                <span>💬</span>
                <span>{post.comments}</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Feeds; 