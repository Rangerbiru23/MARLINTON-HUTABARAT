'use client';

import { useState } from 'react';
import { Menu, X, ArrowLeft, FileText, ShoppingCart, Users, AlertCircle, CheckCircle, Scale } from 'lucide-react';
import Link from 'next/link';

export default function Terms() {
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
              <Link href="/privacy" className="text-gray-700 hover:text-green-600 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-green-600 font-semibold">Terms</Link>
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
              <Link href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-green-600 font-semibold bg-gray-50">Terms</Link>
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
            <span className="text-green-600 font-semibold">Syarat & Ketentuan</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <FileText className="h-16 w-16 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat & Ketentuan <span className="text-green-600">MARLINTON HUTABARAT</span>
            </h1>
            <p className="text-xl text-gray-600">
              Syarat dan ketentuan penggunaan layanan perdagangan eceran sayuran kami.
            </p>
            <p className="text-gray-500 mt-2">Terakhir diperbarui: 1 Januari 2024</p>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8 rounded-r-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Pendahuluan</h2>
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di MARLINTON HUTABARAT. Syarat dan Ketentuan ini mengatur penggunaan layanan perdagangan 
                eceran sayuran yang kami sediakan. Dengan menggunakan layanan kami, Anda setuju untuk mematuhi syarat dan ketentuan ini.
              </p>
            </div>

            {/* Services */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <ShoppingCart className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Layanan Kami</h2>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Deskripsi Layanan</h3>
                <p className="text-gray-700 mb-4">
                  MARLINTON HUTABARAT menyediakan layanan perdagangan eceran sayuran meliputi:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Penjualan sayuran segar berkualitas tinggi</li>
                  <li>Konsultasi pemilihan sayuran</li>
                  <li>Pengemasan dan pengiriman</li>
                  <li>Layanan pelanggan purnajual</li>
                  <li>Program loyalitas pelanggan</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Ketersediaan Layanan</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Senin - Sabtu:</strong> 06:00 - 18:00 WIB</li>
                  <li>• <strong>Minggu:</strong> 06:00 - 12:00 WIB</li>
                  <li>• <strong>Layanan Pengiriman:</strong> Sesuai jadwal yang disepakati</li>
                  <li>• <strong>Layanan Darurat:</strong> Tersedia dengan biaya tambahan</li>
                </ul>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Kewajiban Pengguna</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Informasi Akurat</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Memberikan informasi kontak yang valid</li>
                    <li>✓ Menyediakan alamat pengiriman yang benar</li>
                    <li>✓ Menginformasikan perubahan data</li>
                    <li>✓ Merespons konfirmasi pesanan</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Perilaku Bertanggung Jawab</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Melakukan pembayaran tepat waktu</li>
                    <li>✓ Memeriksa pesanan saat diterima</li>
                    <li>✓ Melaporkan masalah segera</li>
                    <li>✓ Menghormati kebijakan pengembalian</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ordering and Payment */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Pemesanan & Pembayaran</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Proses Pemesanan</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Pemilihan produk melalui telepon, WhatsApp, atau langsung</li>
                    <li>Konfirmasi ketersediaan dan harga</li>
                    <li>Penyediaan informasi pengiriman</li>
                    <li>Konfirmasi akhir pesanan</li>
                    <li>Proses pembayaran</li>
                    <li>Pengemasan dan pengiriman</li>
                  </ol>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Metode Pembayaran</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Tunai:</strong> Saat pengiriman atau di toko</li>
                    <li>• <strong>Transfer Bank:</strong> Sebelum pengiriman</li>
                    <li>• <strong>E-Wallet:</strong> DANA, OVO, GoPay (tersedia)</li>
                    <li>• <strong>Kredit:</strong> Untuk pelanggan tetap dengan syarat</li>
                  </ul>
                  <p className="text-gray-600 mt-3 text-sm">
                    <strong>Catatan:</strong> Pembayaran harus diselesaikan sebelum atau saat pengiriman.
                  </p>
                </div>
              </div>
            </div>

            {/* Product Quality */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Kualitas Produk & Garansi</h2>
              </div>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Standar Kualitas</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Semua sayuran segar dan layak konsumsi</li>
                    <li>Tidak ada produk yang rusak atau busuk</li>
                    <li>Berat sesuai dengan yang dipesan</li>
                    <li>Kemasan higienis dan aman</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Kebijakan Pengembalian</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Pengembalian maksimal 24 jam setelah penerimaan</li>
                    <li>Produk harus dalam kondisi asli saat diterima</li>
                    <li>Bukti pembelian wajib disertakan</li>
                    <li>Pengembalian uang atau penggantian produk</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Scale className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Batasan Tanggung Jawab</h2>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  MARLINTON HUTABARAT tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Keterlambatan pengiriman karena cuaca buruk atau faktor eksternal</li>
                  <li>Kerusakan produk setelah penerimaan oleh pelanggan</li>
                  <li>Alergi atau reaksi kesehatan terhadap produk</li>
                  <li>Kehilangan produk setelah serah terima</li>
                  <li>Kerugian tidak langsung atau konsekuensial</li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Kekayaan Intelektual</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Semua konten, merek dagang, logo, dan materi di website dan materi pemasaran MARLINTON HUTABARAT 
                  dilindungi oleh hukum hak cipta dan merek dagang.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Nama "MARLINTON HUTABARAT" adalah merek dagang terdaftar</li>
                  <li>Logo dan desain adalah hak milik eksklusif</li>
                  <li>Dilarang menyalin atau mendistribusikan tanpa izin tertulis</li>
                  <li>Pelanggaran akan dikenakan sanksi hukum</li>
                </ul>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pemutusan Layanan</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Pihak Kami Berhak Memutuskan Layanan Jika:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Pelanggan melanggar syarat dan ketentuan</li>
                    <li>Pelanggan melakukan penipuan atau kecurangan</li>
                    <li>Pelanggan merugikan bisnis kami</li>
                    <li>Alasan bisnis yang sah</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Pelanggan Dapat Menghentikan Layanan:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Kapan saja tanpa alasan khusus</li>
                    <li>Dengan pemberitahuan minimal 1 hari</li>
                    <li>Setelah menyelesaikan semua pembayaran</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Syarat & Ketentuan</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Kami berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Diinformasikan melalui website atau komunikasi langsung</li>
                  <li>Berlaku efektif 7 hari setelah pemberitahuan</li>
                  <li>Menggantikan semua syarat dan ketentuan sebelumnya</li>
                  <li>Penggunaan lanjutan berarti persetujuan terhadap perubahan</li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pertanyaan tentang Syarat & Ketentuan?</h2>
              <p className="text-gray-700 mb-6">
                Jika Anda memiliki pertanyaan atau membutuhkan klarifikasi tentang Syarat & Ketentuan kami, 
                silakan hubungi kami:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> legal@marlintonhutabarat.com</p>
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