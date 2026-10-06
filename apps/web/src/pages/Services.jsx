import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Bug, Rat, Droplets, Calendar, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Services = () => {
  const { toast } = useToast();

  const services = [
    {
      icon: Bug,
      title: 'Jasa Basmi Rayap',
      description: 'Hentikan kerusakan sebelum terlambat! Kami menggunakan sistem umpan (baiting system) modern yang efektif menghentikan koloni rayap dari sumbernya.',
      features: ['Sistem baiting modern', 'Garansi hasil', 'Ramah lingkungan'],
      suitable: 'Cocok untuk: rumah, bangunan kayu, dan gudang',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Rat,
      title: 'Jasa Basmi Tikus',
      description: 'Tikus bisa membawa penyakit dan merusak properti. Kami menggunakan metode aman tanpa mengganggu aktivitas Anda.',
      features: ['Deteksi jalur tikus', 'Pemasangan perangkap', 'Pencegahan ulang'],
      suitable: 'Layanan mencakup deteksi, perangkap, dan pencegahan',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Droplets,
      title: 'Jasa Basmi Nyamuk & Lalat',
      description: 'Gunakan layanan fogging dan misting kami untuk melindungi keluarga Anda dari penyakit DBD, malaria, dan infeksi lainnya.',
      features: ['Fogging profesional', 'Misting treatment', 'Bahan aman'],
      suitable: 'Bahan yang digunakan aman untuk manusia dan hewan peliharaan',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Calendar,
      title: 'Kontrak Pemeliharaan Rutin',
      description: 'Solusi terbaik untuk kantor, hotel, restoran, dan gudang. Kami menyediakan jadwal kunjungan rutin agar properti Anda selalu bebas hama.',
      features: ['Jadwal rutin', 'Paket fleksibel', 'Monitoring berkala'],
      suitable: 'Tersedia paket bulanan & tahunan',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const handleBookService = (serviceName) => {
    window.open('https://wa.me/6281267887788', '_blank');
    toast({
      title: "Mengarahkan ke WhatsApp!",
      description: `Pesan layanan ${serviceName} via WhatsApp.`,
    });
  };

  return (
    <>
      <Helmet>
        <title>Layanan Kami - Leryn Pest Indonesia</title>
        <meta name="description" content="Layanan pembasmi hama profesional: rayap, tikus, nyamuk, lalat, dan kontrak pemeliharaan rutin. Solusi lengkap untuk rumah dan bisnis Anda." />
      </Helmet>

      <div className="pt-20">
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Layanan <span className="gradient-text">Profesional Kami</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Solusi lengkap pembasmi hama untuk berbagai kebutuhan Anda
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-sm text-green-700 font-medium mb-6 bg-green-50 p-3 rounded-lg">
                    {service.suitable}
                  </p>
                  
                  <Button 
                    onClick={() => handleBookService(service.title)}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Pesan Layanan Ini
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-br from-green-600 to-emerald-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Butuh Konsultasi?
              </h2>
              <p className="text-xl mb-8 text-green-50">
                Tim ahli kami siap membantu Anda memilih layanan yang tepat
              </p>
              <a href="tel:081267887788">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi Kami Sekarang
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;