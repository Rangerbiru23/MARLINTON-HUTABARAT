'use client';

import { useState } from 'react';
import { Menu, X, ArrowLeft, Shield, Eye, Database, Lock, UserCheck, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Privacy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img src="/logo.png" alt="MARLINTON HUTABARAT" className="h-10 w-10 mr-3" />
                <span className="text-xl font-bold text-green-700">MARLINTON HUTABARAT</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">Beranda</Link>
              <Link href="/privacy" className="text-green-600 font-semibold">Privacy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-green-600 transition-colors">Terms</Link>
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
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50">Beranda</Link>
              <Link href="/privacy" className="block px-3 py-2 text-green-600 font-semibold bg-gray-50">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50">Terms</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600 transition-colors flex items-center">
              <ArrowLeft size={16} className="mr-1" />
              Beranda
            </Link>
            <span className="mx-2">/</span>
            <span className="text-green-600 font-semibold">Kebijakan Privasi</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Shield className="h-16 w-16 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi <span className="text-green-600">MARLINTON HUTABARAT</span>
            </h1>
            <p className="text-xl text-gray-600">
              Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda.
            </p>
            <p className="text-gray-500 mt-2">Terakhir diperbarui: 1 Januari 2024</p>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8 rounded-r-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Pendahuluan</h2>
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di MARLINTON HUTABARAT. Kami menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda berikan kepada kami. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat menggunakan layanan perdagangan 
                eceran sayuran kami.
              </p>
            </div>

            {/* Data Collection */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Database className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Data yang Kami Kumpulkan</h2>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Informasi Pribadi</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Nama lengkap</li>
                  <li>Nomor telepon</li>
                  <li>Alamat email</li>
                  <li>Alamat pengiriman</li>
                  <li>Informasi pembayaran</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Informasi Non-Pribadi</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Data penggunaan website</li>
                  <li>Informasi perangkat</li>
                  <li>Alamat IP</li>
                  <li>Cookie dan teknologi pelacakan</li>
                  <li>Preferensi produk</li>
                </ul>
              </div>
            </div>

            {/* Data Usage */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Penggunaan Data</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Tujuan Utama</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Memproses pesanan Anda</li>
                    <li>✓ Mengirimkan produk</li>
                    <li>✓ Komunikasi pelanggan</li>
                    <li>✓ Peningkatan layanan</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Tujuan Sekunder</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Analisis pasar</li>
                    <li>✓ Personalisasi pengalaman</li>
                    <li>✓ Pemasaran dan promosi</li>
                    <li>✓ Penelitian bisnis</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Lock className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Keamanan Data</h2>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Kami menerapkan berbagai langkah keamanan untuk melindungi data pribadi Anda:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Enkripsi Data</h4>
                      <p className="text-gray-600 text-sm">Semua data sensitif dienkripsi dengan standar industri</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Akses Terbatas</h4>
                      <p className="text-gray-600 text-sm">Hanya personil berwenang yang dapat mengakses data</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Backup Rutin</h4>
                      <p className="text-gray-600 text-sm">Data di-backup secara berkala untuk mencegah kehilangan</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Monitoring Keamanan</h4>
                      <p className="text-gray-600 text-sm">Sistem monitoring 24/7 untuk deteksi ancaman</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Rights */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <UserCheck className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Hak Anda sebagai Pengguna</h2>
              </div>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Hak Akses</h3>
                  <p className="text-gray-700">Anda berhak mengakses dan melihat data pribadi yang kami simpan tentang Anda.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Hak Koreksi</h3>
                  <p className="text-gray-700">Anda dapat memperbarui atau mengoreksi data pribadi yang tidak akurat.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Hak Penghapusan</h3>
                  <p className="text-gray-700">Anda dapat meminta penghapusan data pribadi Anda dari sistem kami.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Hak Pembatasan</h3>
                  <p className="text-gray-700">Anda dapat membatasi cara kami menggunakan data pribadi Anda.</p>
                </div>
              </div>
            </div>

            {/* Third Party */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Pihak Ketiga</h2>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Kami mungkin berbagi data Anda dengan pihak ketiga terpercaya untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Proses pembayaran (payment gateway)</li>
                  <li>Layanan pengiriman (logistik)</li>
                  <li>Analisis data (analytics)</li>
                  <li>Komunikasi (email service)</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Kami memastikan semua pihak ketiga mematuhi standar keamanan yang sama dengan kami.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pertanyaan tentang Privasi?</h2>
              <p className="text-gray-700 mb-6">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi kami atau ingin menggunakan hak Anda, 
                silakan hubungi kami:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> privacy@marlintonhutabarat.com</p>
                <p><strong>Telepon:</strong> 0852-8570-3497</p>
                <p><strong>Alamat:</strong> Jorong Pasar Baru, Sungai Rumbai, Dharmasraya</p>
              </div>
            </div>
          </div>
        </div>
      </main>

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
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-green-100">
                <li><Link href="/privacy" className="hover:text-white">Kebijakan Privasi</Link></li>
                <li><Link href="/terms" className="hover:text-white">Syarat & Ketentuan</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-green-100">
                <li>0852-8570-3497</li>
                <li>Dharmasraya, Sumatera Barat</li>
              </ul>
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