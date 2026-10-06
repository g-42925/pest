import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Shield, Clock, Award, Phone, MessageCircle, Bug, Rat, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Home = () => {
  const features = [{
    icon: Award,
    text: 'Tenaga ahli bersertifikat'
  }, {
    icon: Shield,
    text: 'Produk aman untuk manusia & hewan'
  }, {
    icon: CheckCircle2,
    text: 'Layanan cepat dan bergaransi'
  }, {
    icon: Clock,
    text: 'Siap melayani 24 jam'
  }];
  const pests = [{
    icon: Bug,
    name: 'Rayap',
    color: 'from-amber-500 to-orange-500'
  }, {
    icon: Bug,
    name: 'Semut',
    color: 'from-red-500 to-pink-500'
  }, {
    icon: Droplets,
    name: 'Nyamuk',
    color: 'from-blue-500 to-cyan-500'
  }, {
    icon: Bug,
    name: 'Lalat',
    color: 'from-gray-500 to-slate-500'
  }, {
    icon: Rat,
    name: 'Tikus',
    color: 'from-purple-500 to-indigo-500'
  }, {
    icon: Bug,
    name: 'Kecoa',
    color: 'from-green-500 to-emerald-500'
  }];
const testimonials = [
  { name: 'Rina', location: 'Ibu Rumah Tangga', rating: 5, text: 'Pelayanan cepat dan hasilnya memuaskan! Rumah saya benar-benar bebas rayap.' },
  { name: 'Siti', location: 'Kepala Gudang', rating: 5, text: 'Sangat direkomendasikan! Masalah tikus di gudang saya tuntas dalam sekejap.' },
  { name: 'Agus', location: 'Manajer Restoran', rating: 4, text: 'Harga transparan dan pengerjaan rapi. Terima kasih Leryn Pest.' },
  { name: 'Dewi', location: 'Ibu Rumah Tangga', rating: 5, text: 'Setelah fogging, nyamuk DBD tidak ada lagi. Keluarga jadi lebih tenang.' },
  { name: 'Hendra', location: 'Supervisor Restoran', rating: 5, text: 'Kontrak pemeliharaan untuk restoran saya sangat membantu. Properti jadi selalu bersih dari hama.' },
  { name: 'Lina', location: 'Ibu Rumah Tangga', rating: 5, text: 'Penanganan rayapnya benar-benar sampai ke koloninya. Terbaik!' },
  { name: 'Joko', location: 'Manajer Hotel', rating: 4, text: 'Konsultasi gratisnya sangat informatif. Timnya jujur dan tidak memaksa.' },
  { name: 'Putri', location: 'Manajer Store', rating: 5, text: 'Layanan 24 jam sangat membantu saat ada masalah darurat. Respon super cepat!' },
  { name: 'Ahmad', location: 'Pemilik Apartemen', rating: 5, text: 'Kecoa di apartemen saya hilang total. Sangat puas dengan hasilnya.' }
];
  return <>
    <Helmet>
      <title>Leryn Pest Indonesia - Jasa Pembasmi Hama Profesional</title>
      <meta name="description" content="Jasa pembasmi hama profesional untuk rumah dan bisnis. Layanan cepat, aman, dan bergaransi. Hubungi kami untuk konsultasi gratis!" />
    </Helmet>

    <div className="pt-20">
      <section className="relative bg-white/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
              opacity: 0,
              x: -50
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Lindungi Rumah & Bisnis Anda dari{' '}
                <span className="gradient-text">Serangan Hama!</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Kami hadir untuk membantu Anda menyingkirkan hama dengan cepat, aman, dan bergaransi.
              </p>
              <p className="text-gray-700 mb-8">
                Leryn Pest Indonesia adalah perusahaan profesional pembasmi hama yang melayani rumah, kantor, restoran, gudang, dan berbagai jenis properti di seluruh Indonesia. Kami mengutamakan keamanan keluarga Anda dengan metode ramah lingkungan dan hasil yang terbukti efektif.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/6281267887788" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                    <Phone className="w-5 h-5 mr-2" />
                    Hubungi Kami Sekarang
                  </Button>
                </a>
                <a href="https://wa.me/6281267887788" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-100/50 w-full sm:w-auto">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Konsultasi Gratis
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div initial={{
              opacity: 0,
              x: 50
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }} className="relative">
              <img className="rounded-2xl shadow-2xl w-full" alt="Professional pest control service" src="https://horizons-cdn.hostinger.com/530dec68-53d3-43a7-8160-ab092245e48f/whatsapp-image-2025-10-29-at-10.00.36-N26Qr.jpeg" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan layanan terbaik dengan standar profesional tertinggi
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-200/50">
              <feature.icon className="w-12 h-12 text-green-600 mb-4" />
              <p className="text-gray-900 font-medium">{feature.text}</p>
            </motion.div>)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jenis Hama yang Kami Tangani
            </h2>
            <p className="text-gray-600">
              Solusi lengkap untuk berbagai jenis hama
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {pests.map((pest, index) => <motion.div key={index} initial={{
              opacity: 0,
              scale: 0.8
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} whileHover={{
              scale: 1.05
            }} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer">
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${pest.color} rounded-full flex items-center justify-center`}>
                <pest.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-center font-medium text-gray-900">{pest.name}</p>
            </motion.div>)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Testimoni Pelanggan
            </h2>
            <p className="text-gray-600">
              Kepuasan pelanggan adalah prioritas kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.05
            }} className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-md border border-gray-200/50">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <span key={i} className="text-yellow-400 text-xl">⭐</span>)}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">— {testimonial.name}, {testimonial.location}</p>
            </motion.div>)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Dapatkan Penawaran Gratis Sekarang!
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Atau chat kami langsung di WhatsApp untuk konsultasi cepat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Isi Form Cepat
                </Button>
              </Link>
              <a href="https://wa.me/6281267887788" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white text-green-600 hover:bg-white/10 w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat Langsung
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  </>;
};
export default Home;