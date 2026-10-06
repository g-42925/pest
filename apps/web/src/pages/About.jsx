import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle2 } from 'lucide-react';
const About = () => {
  const missions = ['Memberikan layanan pembasmi hama yang cepat, efektif, dan aman', 'Menggunakan teknologi dan bahan terbaik yang sesuai standar kesehatan', 'Membangun kepercayaan melalui pelayanan yang transparan dan profesional'];
  return <>
      <Helmet>
        <title>Tentang Kami - Leryn Pest Indonesia</title>
        <meta name="description" content="Leryn Pest Indonesia berdiri dengan komitmen menciptakan lingkungan sehat dan bebas hama. Berpengalaman melayani ratusan klien di Indonesia." />
      </Helmet>

      <div className="pt-20">
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Tentang <span className="gradient-text">Leryn Pest Indonesia</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Berdiri dengan komitmen untuk menciptakan lingkungan yang sehat dan bebas hama
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }}>
              <img className="rounded-2xl shadow-xl w-full" alt="Leryn Pest Indonesia team" src="https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmezP4XTWKUXwfvy1iMpbaGSeP5pkwEiY7FViH1E85RvuK" />
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Siapa Kami?</h2>
                <p className="text-gray-700 mb-4">
                  Leryn Pest Indonesia berdiri dengan komitmen untuk menciptakan lingkungan yang sehat dan bebas hama. Kami telah berpengalaman melayani ratusan rumah tangga, kantor, hotel, dan restoran di berbagai kota di Indonesia.
                </p>
                <p className="text-gray-700">
                  Kami percaya bahwa pencegahan hama bukan sekadar penyemprotan, tapi investasi dalam kenyamanan dan kesehatan Anda.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h3>
                <p className="text-gray-700">
                  Menjadi penyedia layanan pest control terpercaya di Indonesia yang berfokus pada solusi ramah lingkungan.
                </p>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2
            }} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h3>
                <ul className="space-y-3">
                  {missions.map((mission, index) => <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{mission}</span>
                    </li>)}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mengapa Memilih Kami?
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="p-6">
                  <div className="text-5xl font-bold gradient-text mb-2">500+</div>
                  <p className="text-gray-600">Klien Puas</p>
                </div>
                <div className="p-6">
                  <div className="text-5xl font-bold gradient-text mb-2">10+</div>
                  <p className="text-gray-600">Tahun Pengalaman</p>
                </div>
                <div className="p-6">
                  <div className="text-5xl font-bold gradient-text mb-2">24/7</div>
                  <p className="text-gray-600">Layanan Siap</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default About;