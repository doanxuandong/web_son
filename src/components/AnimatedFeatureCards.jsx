import React from 'react';
import './AnimatedFeatureCards.css';

const cards = [
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    title: 'Sơn nội thất',
    description: 'Sơn nội thất cao cấp với màu sắc tinh tế, độ phủ mịn và khả năng chống bám bẩn, mang đến không gian sống hoàn hảo và bền đẹp theo thời gian.',
  },
  {
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    title: 'Sơn chống thấm',
    description: 'Sơn chống thấm siêu bền, ngăn nước tối ưu, bảo vệ tường nhà khỏi ẩm mốc và xuống cấp trong mọi điều kiện thời tiết.',
  },
  {
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    title: 'Vật tư sơn',
    description: 'Vật tư sơn chất lượng cao, đầy đủ từ cọ, lăn, băng keo đến giấy nhám – hỗ trợ thi công nhanh, đều màu và chuyên nghiệp.',
  },
];

const AnimatedFeatureCards = () => {
  return (
    <div className="afc-container">
      {cards.map((card, idx) => (
        <div className="afc-card" key={idx} style={{ backgroundImage: `url(${card.image})` }}>
          <div className="afc-overlay">
            <div className="afc-title-group">
              <div className="afc-title">{card.title}</div>
              <div className="afc-desc">{card.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedFeatureCards; 