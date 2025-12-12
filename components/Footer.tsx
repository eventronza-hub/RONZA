
import React from 'react';
import { ADDRESS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="font-display text-3xl font-bold text-[#D4AF37] mb-6">رونزا إيفنت</h2>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              نؤمن بأن كل عروس تستحق ليلة تشبه أحلامها. نحن هنا لنحول تلك الأحلام إلى واقع ملموس بكل فخامة واتقان.
            </p>
            <div className="text-gray-500 text-sm">
              <p>{ADDRESS}</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">روابط سريعة</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-[#D4AF37] transition-colors">الرئيسية</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">خدماتنا</a></li>
              <li><a href="#packages" className="hover:text-[#D4AF37] transition-colors">الباقات</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">تابعينا</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#D4AF37] transition-all">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" className="w-5 h-5" alt="Instagram" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#D4AF37] transition-all">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/tiktok.png" className="w-5 h-5" alt="TikTok" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#D4AF37] transition-all">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png" className="w-5 h-5" alt="WhatsApp" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} رونزا إيفنت - الكويت. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
