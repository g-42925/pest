import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img className="h-14 w-auto object-contain" src="https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmZQuWMJETpqQhmZxvpKCQ8Q2NeWpgkkFvZZHCdAVSn51K"/>
              
            </div>
            <p className="text-sm mb-4">Jasa pembasmi hama profesional yang aman, cepat, dan bergaransi untuk rumah dan bisnis Anda.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61572102312117" className="hover:text-green-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/lerynpest/" className="hover:text-green-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block">Layanan Kami</span>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-green-400 transition-colors">Basmi Rayap</Link></li>
              <li><Link to="/services" className="hover:text-green-400 transition-colors">Basmi Tikus</Link></li>
              <li><Link to="/services" className="hover:text-green-400 transition-colors">Basmi Nyamuk</Link></li>
              <li><Link to="/services" className="hover:text-green-400 transition-colors">Kontrak Pemeliharaan</Link></li>
            </ul>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block">Tautan Cepat</span>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-green-400 transition-colors">Tentang Kami</Link></li>
              <li><Link to="/gallery" className="hover:text-green-400 transition-colors">Galeri</Link></li>
              <li><Link to="/blog" className="hover:text-green-400 transition-colors">Blog & Tips</Link></li>
              <li><Link to="/contact" className="hover:text-green-400 transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block">Kontak Kami</span>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-green-400" />
                <span>Grand Slipi Tower Lt. 9 Unit O</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-green-400" />
                <a href="tel:081267887788" className="hover:text-green-400 transition-colors">081267887788</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-green-400" />
                <a href="mailto:lerynpest@gmail.com" className="hover:text-green-400 transition-colors">lerynpest@gmail.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4 flex-shrink-0 text-green-400" />
                <span>Layanan 24 Jam</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© 2025 Leryn Pest Indonesia – Jasa Pembasmi Hama Profesional</p>
          <p className="text-green-400 mt-1">"Bersih, Aman, dan Terpercaya"</p>
        </div>
      </div>
    </footer>;
};
export default Footer;