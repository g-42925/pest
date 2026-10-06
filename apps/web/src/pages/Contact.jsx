import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    service: 'Lainnya',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Halo Leryn Pest, saya ${formData.name}. Saya tertarik dengan layanan ${formData.service}. \n\nPesan: ${formData.message}`;
    const whatsappUrl = `https://wa.me/6281267887788?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Mengarahkan ke WhatsApp!",
      description: "Lanjutkan mengirim pesan Anda melalui WhatsApp.",
    });
    setFormData({ name: '', service: 'Lainnya', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      content: 'Grand Slipi Tower Lt. 9 Unit O',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Phone,
      title: 'Telepon',
      content: '0812-6788-7788',
      link: 'tel:081267887788',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'lerynpest@gmail.com',
      link: 'mailto:lerynpest@gmail.com',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      content: 'Layanan 24 Jam',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Hubungi Kami - Leryn Pest Indonesia</title>
        <meta name="description" content="Hubungi Leryn Pest Indonesia untuk konsultasi gratis. Layanan 24 jam siap membantu Anda mengatasi masalah hama." />
      </Helmet>

      <div className="pt-20">
        <section className="bg-white/50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Hubungi <span className="gradient-text">Kami</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tim kami siap membantu Anda 24/7. Konsultasi gratis untuk semua layanan!
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/80 border border-gray-200/50 rounded-xl p-6 hover:shadow-lg transition-all shadow-md backdrop-blur-sm"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mb-4`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-green-600 hover:text-green-700 transition-colors">
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.content}</p>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/90 p-8 rounded-2xl shadow-2xl backdrop-blur-lg"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Kirim Pesan Cepat</h2>
                <p className="text-center text-gray-600 mb-8">Isi form di bawah untuk langsung terhubung ke WhatsApp kami.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Layanan yang Dibutuhkan
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                    >
                      <option value="Basmi Rayap">Basmi Rayap</option>
                      <option value="Basmi Tikus">Basmi Tikus</option>
                      <option value="Basmi Nyamuk & Lalat">Basmi Nyamuk & Lalat</option>
                      <option value="Kontrak Pemeliharaan">Kontrak Pemeliharaan</option>
                      <option value="Lainnya">Konsultasi / Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan Singkat (Opsional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 bg-white/50 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all resize-none"
                      placeholder="Contoh: Rumah saya di area Jakarta Selatan, ada masalah rayap..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" size="lg">
                    <Send className="w-5 h-5 mr-2" />
                    Kirim via WhatsApp
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;