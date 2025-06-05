import React from 'react';
import { HomeOutlined, PhoneOutlined, MailOutlined, ClockCircleOutlined, FacebookFilled, InstagramFilled, YoutubeFilled, LinkedinFilled } from '@ant-design/icons';

// Sử dụng icon antd cho social, thêm icon Zalo SVG cuối cùng
const socialIcons = [
  { href: '#', label: 'Facebook', icon: <FacebookFilled style={{ fontSize: 28 }} /> },
  { href: '#', label: 'Instagram', icon: <InstagramFilled style={{ fontSize: 28 }} /> },
  { href: '#', label: 'YouTube', icon: <YoutubeFilled style={{ fontSize: 28 }} /> },
  { href: '#', label: 'LinkedIn', icon: <LinkedinFilled style={{ fontSize: 28 }} /> },

];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#224099] to-[#0a2540] py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left: Logo + Info */}
        <div className="flex-1 flex flex-col items-start">
          <img src="/back_to_top.JPG" alt="Logo" className="h-20 mb-4" />
          <div className="text-white text-base text-left w-full">
            <div className="font-bold mb-2">doandoancodeweb</div>
            <div className="flex items-start gap-2 mb-1">
              <HomeOutlined className="text-lg mt-[2px]" />
              <span>675 - 677 Điện Biên Phủ, Phường 22, Quận Bình Thạnh</span>
            </div>
            <div className="flex items-center gap-2 mb-1"><PhoneOutlined className="text-lg" /><span>Hotline : 0867767125</span></div>
            <div className="flex items-center gap-2 mb-1"><MailOutlined className="text-lg" /><span>Email : info@dongdoan.com.vn</span></div>
            <div className="flex items-center gap-2 mb-1"><ClockCircleOutlined className="text-lg" /><span>Thời gian làm việc:</span></div>
            <div className="ml-6">Thứ 2-Thứ 6 : 8h30 - 17h30</div>
            <div className="ml-6">Thứ 7 : 8h30 - 12h</div>
          </div>
        </div>
        {/* Right: Fanpage + Social */}
        <div className="flex-1 flex flex-col items-center md:items-end w-full">
          <div className="w-full max-w-[380px]">
            <div className="text-white text-xl font-semibold mb-4 text-left">Fanpage</div>
            <div className="mb-4 w-full">
              {/* Facebook Fanpage Plugin hoặc ảnh đại diện */}
              <iframe
                title="Facebook Fanpage"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnanocogroup&tabs&width=360&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="360"
                height="130"
                style={{ border: 'none', overflow: 'hidden', borderRadius: '12px', width: '100%' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="flex justify-center gap-6 mt-2 w-full">
              {socialIcons.map((icon, idx) => (
                <a
                  key={idx}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={icon.label}
                  className="rounded-full border border-white p-2 flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition"
                  style={{ width: 48, height: 48 }}
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
