import { useState } from 'react';
import { motion } from 'framer-motion';

const Inside = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    category: '',
    message: '',
    priority: 'medium'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [categoryDetail, setCategoryDetail] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: '',
      email: '',
      department: '',
      category: '',
      message: '',
      priority: 'medium'
    });

    // Reset success message after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        <h1 className="text-3xl font-bold text-center mb-8">Liên hệ </h1>
        
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
          >
            Cảm ơn bạn đã để lại thông tin. chúng tôi sẽ liên hệ lại bạn sớm nhất có thể!!!
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Họ và Tên
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Điền tên của bạn..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="email_của_bạn@gmail.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Số điện thoại
              </label>
              <input
                type="sdt"
                name="sdt"
                value={formData.sdt}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập số điện thoại của bạn!( bắt buộc )"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bạn muốn phản hồi điều gì?
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Chọn ý kiến của bạn</option>
                <option value="suggestion">Nhận thông tin khuyến mãi</option>
                <option value="complaint">Nhận báo giá</option>
                <option value="praise">Nhận tư vấn về sản phẩm</option>
                <option value="question">Phản ánh vấn đề</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Priority
              </label>
              <div className="flex space-x-4">
                {['low', 'medium', 'high'].map((priority) => (
                  <label key={priority} className="flex items-center">
                    <input
                      type="radio"
                      name="priority"
                      value={priority}
                      checked={formData.priority === priority}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="capitalize">{priority}</span>
                  </label>
                ))}
              </div>
            </div> */}
            {/* <div>
              {formData.category && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Detail for Category
                  </label>
                  <input
                    type="text"
                    value={categoryDetail}
                    onChange={e => setCategoryDetail(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`Please specify details for your selected category...`}
                  />
                </div>
              )}
            </div> */}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nội dung lời nhắn
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập lời nhắn của bạn..."
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Đang gửi...' : 'Gửi thông tin'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Inside; 