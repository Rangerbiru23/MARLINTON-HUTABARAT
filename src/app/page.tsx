'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Leaf, ShoppingCart, Users, Clock, CheckCircle } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img src="/logo.png" alt="MARLINTON HUTABARAT" className="h-10 w-10 mr-3" />
                <span className="text-xl font-bold text-green-700">MARLINTON HUTABARAT</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">Tentang Kami</a>
              <a href="#products" className="text-gray-700 hover:text-green-600 transition-colors">Produk</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Kontak</a>
              <a href="/privacy" className="text-gray-700 hover:text-green-600 transition-colors">Privacy</a>
              <a href="/terms" className="text-gray-700 hover:text-green-600 transition-colors">Terms</a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50">Beranda</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50">Tentang Kami</a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50">Produk</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50">Kontak</a>
              <a href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50">Privacy</a>
              <a href="/terms" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50">Terms</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Sayuran <span className="text-green-600">Segar</span> Langsung dari Pertanian
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                MARLINTON HUTABARAT - Menyediakan sayuran berkualitas tinggi dengan harga terjangkau untuk kebutuhan keluarga Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#products" 
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                >
                  Lihat Produk
                </a>
                <a 
                  href="#contact" 
                  className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Leaf className="h-12 w-12 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">100% Organik</h3>
                  </div>
                  <div className="text-center">
                    <Clock className="h-12 w-12 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Fresh Setiap Hari</h3>
                  </div>
                  <div className="text-center">
                    <Users className="h-12 w-12 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Pelayanan Terbaik</h3>
                  </div>
                  <div className="text-center">
                    <ShoppingCart className="h-12 w-12 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Harga Terjangkau</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tentang <span className="text-green-600">MARLINTON HUTABARAT</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami adalah mitra terpercaya Anda dalam menyediakan sayuran segar dan berkualitas untuk keluarga Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Komitmen Kami</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Kualitas Terjamin</h4>
                    <p className="text-gray-600">Semua sayuran kami melalui proses seleksi ketat untuk memastikan kualitas terbaik.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Harga Bersaing</h4>
                    <p className="text-gray-600">Kami menawarkan harga yang kompetitif tanpa mengorbankan kualitas.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Pelayanan Ramah</h4>
                    <p className="text-gray-600">Tim kami siap melayani Anda dengan senyum hati dan profesional.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Lokasi Strategis</h4>
                    <p className="text-gray-600">Mudah dijangkau dari berbagai wilayah di Kabupaten Dharmasraya.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Informasi Kontak</h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-3 text-green-600" />
                      <span>Jorong Pasar Baru, Sungai Rumbai, Dharmasraya</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-5 w-5 mr-3 text-green-600" />
                      <span>0852-8570-3497</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-5 w-5 mr-3 text-green-600" />
                      <span>marlinton@example.com</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Jam Operasional</h4>
                  <div className="text-gray-600">
                    <p>Senin - Sabtu: 06:00 - 18:00</p>
                    <p>Minggu: 06:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Produk <span className="text-green-600">Unggulan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai jenis sayuran segar yang tersedia setiap hari dengan kualitas terbaik.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Sayuran Hijau', desc: 'Bayam, Kangkung, Sawi, Selada', icon: '🥬' },
              { name: 'Sayuran Buah', desc: 'Terong, Tomat, Mentimun, Cabai', icon: '🍆' },
              { name: 'Sayuran Umbi', desc: 'Wortel, Kentang, Bawang Merah, Bawang Putih', icon: '🥕' },
              { name: 'Sayuran Batang', desc: 'Seledri, Daun Bawang, Kembang Kol', icon: '🥦' },
              { name: 'Jamur', desc: 'Jamur Kancing, Jamur Tiram', icon: '🍄' },
              { name: 'Sayuran Import', desc: 'Brokoli, Paprika, Zucchini', icon: '🥒' },
              { name: 'Herbs & Rempah', desc: 'Kemangi, Serai, Kunyit, Jahe', icon: '🌿' },
              { name: 'Sayuran Paket', desc: 'Paket Hemat Keluarga', icon: '📦' }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                <div className="text-4xl mb-4 text-center">{product.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-center">{product.name}</h3>
                <p className="text-gray-600 text-sm text-center">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi <span className="text-green-600">Kami</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Siap melayani kebutuhan sayuran segar Anda. Hubungi kami sekarang juga!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kunjungi Kami</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Alamat</h4>
                    <p className="text-gray-600">
                      JORONG PASAR BARU<br />
                      Desa/Kelurahan Sungai Rumbai<br />
                      Kec. Sungai Rumbai, Kab. Dharmasraya<br />
                      Provinsi Sumatera Barat
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Telepon</h4>
                    <p className="text-gray-600">0852-8570-3497</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">marlinton@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tulis pesan Anda..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/logo.png" alt="MARLINTON HUTABARAT" className="h-8 w-8 mr-2" />
                <span className="text-lg font-bold">MARLINTON HUTABARAT</span>
              </div>
              <p className="text-green-100">
                Perdagangan Eceran Sayuran terpercaya di Dharmasraya.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-green-100">
                <li>Sayuran Segar</li>
                <li>Sayuran Organik</li>
                <li>Paket Keluarga</li>
                <li>Pengiriman</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Jam Buka</h4>
              <ul className="space-y-2 text-green-100">
                <li>Senin - Sabtu: 06:00 - 18:00</li>
                <li>Minggu: 06:00 - 12:00</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-green-100 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-green-100 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-green-100 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-100">
            <p>&copy; 2024 MARLINTON HUTABARAT. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}