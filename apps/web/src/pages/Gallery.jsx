import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryCategories = [
    {
      title: 'Tim Profesional Kami',
      description: 'Teknisi bersertifikat siap melayani',
      images: [
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmeXu28BVQRdVDfkyTHVFNDLnoxeQmh9EYpriWTL5wHqYz',
          alt: 'Teknisi pest control sedang berdiskusi',
          content: 'Tim ahli berdiskusi sebelum bekerja'
        },
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/Qme9ALi6mr6iFsEQcVPE8U5YR1HZ9VHej7uNkcY33Up1HS',
          alt: 'Teknisi pest control sedang berdiskusi',
          content: 'Tim ahli berdiskusi sebelum bekerja'
        },
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmVz7iAydyuK9FEPYUkp4gjdoMatLAGZjs63vDMLuDvqVg',
          alt: 'Teknisi pest control sedang berdiskusi',
          content: 'Tim ahli berdiskusi sebelum bekerja'
        },
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmXR3xYbZ7pRTfPhqU1N8ugHCXyyZcNJjLHq6uLGMfMAKz',
          alt: 'Teknisi pest control sedang berdiskusi',
          content: 'Tim ahli berdiskusi sebelum bekerja'
        },
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmUPag2jh3AXRGyRP5FToEEiTWuFF7L6xUpiKgZpRgsgJM',
          alt: 'Teknisi pest control sedang berdiskusi',
          content: 'Tim ahli berdiskusi sebelum bekerja'
        },
      ]
    },
    {
      title: 'Peralatan Modern',
      description: 'Menggunakan teknologi terkini',
      images: [
        {
          alt: 'Mesin fogging modern',
          content: 'Mesin fogging untuk area luas',
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmQ1UwhEHt5HD44G93ya7Frya9nv1qYRAqCyiugdWpPSGx',
        },
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmSCCqoadWoNYdB6eNYvDhBuhiopPBf8knY9LriFXKgDHk',
          alt: 'Alat semprot presisi',
          content: 'Sprayer presisi untuk area dalam ruangan'
        },
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmWVFwUgCdYoCQnyBs3BrAWvbYh1CEXnPKRaeSsoLFat3q',
          alt: 'Umpan rayap canggih',
          content: 'Sistem umpan rayap modern'
        },
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmeB5SrF8wfmzoxH9PEWwnTfM2hvt1oyvJjLVQPsCemEuu',
          alt: 'Kamera inspeksi hama',
          content: 'Kamera endoskop untuk inspeksi'
        },
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmdQfqMocpfehbDGqjAEZbcDxWmpwKrK4qiixU7dNpCK1C',
          alt: 'Peralatan pelindung diri lengkap',
          content: 'APD lengkap untuk keamanan teknisi'
        }
      ]
    },
    {
      title: 'Proses Penyemprotan',
      description: 'Metode aman dan efektif',
      images: [
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmNhGVM9RESVxiJBeyFDpXgNGVrdgRiduFsLh7Lx6HGJBg',
          alt: 'Penyemprotan di area dapur',
          content: 'Penyemprotan aman di area dapur'
        },
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmfBGVpxiiRFFWmmVDTDP3ogYECHW9dL9cnpARLWYYWSf6',
          alt: 'Fogging di halaman rumah',
          content: 'Fogging untuk basmi nyamuk'
        },
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmUiNwtyfJwycdchgoFBZLqHyfN3jGtJcmHfoNxYefroe4',
          alt: 'Pemasangan umpan tikus',
          content: 'Instalasi umpan tikus yang aman'
        },
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmciWtvTZTSHNjWkKF3egFkkeiYyGbUNFF6G9a4tZyCJMF',
          alt: 'Perawatan anti rayap pada pondasi',
          content: 'Treatment anti rayap pada pondasi bangunan'
        },
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmTTR236maZeNYq34FnFjeFmUhUsT9zV4pMVtUVbxt2NJe',
          alt: 'Penyemprotan di area gudang',
          content: 'Layanan untuk area komersial'
        }
      ]
    },
    {
      title: 'Hasil Sebelum-Sesudah',
      description: 'Bukti nyata layanan kami',
      images: [
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/Qma6n3cYAWJavEZvgRejdw6gaCeJLPgjTyHzMmkjNokAh8',
          src2: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmeMr1yWVirdPmCQT4GCNdio4hjFsVfKTWzhDAFC8qW2aT',
          alt: 'Kayu rusak karena rayap',
          content: 'Kerusakan sebelum penanganan rayap',
          content2: 'Sesudah penanganan rayap'
        },
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmXCSzCW96K89YnjcARGLpdu3J3B9Xu8cgCaZSVC5GnfJH',
          src2: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmQ2SBx3LgM4uLXsxZaeY95LGKQJDAWEGdkTJuNYK9W5zn',
          alt: 'Dapur kotor dengan jejak tikus',
          content: 'Masalah tikus di dapur',
          content2: 'Sesudah penanganan hama tikus'
        },
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmdFznnc8z6KcqKzSfZMMdpUmcYfgbsvPBK5X28W3scQ94',
          src2: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmeNLFMJVtdmDvGcWovB8PaTr6ownbLvZQQSSHc3BaXZte',
          alt: 'Sarang kecoa di sudut ruangan',
          content: 'Sebelum: Sarang kecoa',
          content2: 'Penanganan serangan hama kecoa'
        },
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmUVG2rbXEZuuHK8AmhevJyXMagAvxkzQEBrRNQy7KFRGs',
          src2: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmdWo8m6FTSVAgPULpwRh95uj5doUWrwBYVZD3bQMKUste',
          alt: 'Dapur kotor penuh lalat',
          content: 'Sebelum penanganan lalat di dapur',
          content2: 'Dapur yang bersih dan higienis'
        },
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/Qme7i5FMV9pp4TiJGS4EDHfK5Zgmw18ggDNXongUMJzMjT',
          src2: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmStgHC9E1JrGkY5MFVztBmsxGMygnYZKLzLmjPg2jYxKs',
          alt: 'Komplek perumahan dengan nyamuk',
          content: 'Sebelum penanganan nyamuk',
          content2: 'Komplek perumahan yang bebas nyamuk'
        }
      ]
    },
    {
      title: 'Layanan Komersial',
      description: 'Melayani kantor dan restoran',
      images: [
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmYPBV5CMoTbfx3JtNvkCp4tUTsqsJngGjphS4WNJp8o94',
          alt: 'Pest control di lobi hotel',
          content: 'Perawatan rutin di hotel'
        },
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/Qmd5iYQ7drQ3ETSeQDEHPNpb4XAM2t7GFFosHYg5JZjPmq',
          alt: 'Penyemprotan di area restoran',
          content: 'Menjaga higienitas restoran'
        },
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmXxZPDJuD33hkbxfK6eBnPHxvUkei4w6hQVrsdymZyNt2',
          alt: 'Pest control di gedung perkantoran',
          content: 'Lingkungan kerja bebas hama'
        },
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmU5U9V1AL3wt6UdmMqSrKtrmdBbJ2neTiZ89pjvq2NG5R',
          alt: 'Perawatan gudang industri',
          content: 'Melindungi aset di gudang'
        },
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmTWmzkgnGYgYrfQRHLgmYpLQRMgBpnaB7rMo5w3vpkdbs',
          alt: 'Penyemprotan di kafe',
          content: 'Kenyamanan pelanggan adalah prioritas'
        }
      ]
    },
    {
      title: 'Layanan Residensial',
      description: 'Solusi untuk rumah Anda',
      images: [
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmRq1A7uLF5o99Ly3SZQGkukGaZQDBQCBhD79X3SKAC2a2',
          alt: 'Penyemprotan di kamar tidur',
          content: 'Kamar tidur nyaman bebas serangga'
        },
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/Qmf8iMWDW1y349rqTBnmBqzr9zDaspuKreiRqNFmGpqd19',
          alt: 'Perlindungan anti rayap untuk rumah baru',
          content: 'Investasi jangka panjang untuk rumah'
        },
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmPdPHkqDXnpzmneCX2GmKqTFa2CubZQiPGhroMtMsjZSg',
          alt: 'Fogging di taman perumahan',
          content: 'Area bermain anak yang aman'
        },
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmS7L41MuHgQwP54YKjQ62kQVRZGKN1r24U9demcfjRQA6',
          alt: 'Pemeriksaan atap dari hama',
          content: 'Inspeksi menyeluruh hingga ke atap'
        },
        {
          src: 'https://wooden-plum-woodpecker.myfilebase.com/ipfs/QmYe5Csx5RPdi45agsq1GVZ7ESVYoqjbYyg8GkVKJDwmzN',
          alt: 'Keluarga bahagia di rumah bebas hama',
          content: 'Rumahku, istanaku yang bebas hama'
        }
      ]
    }
  ];

  function handleHover(e, content) {
    e.target.firstElementChild.innerHTML = content;
  }

  function handleMouseLeave(e, content) {
    e.target.firstElementChild.innerHTML = content
  }

  return (
    <>
      <Helmet>
        <title>Galeri - Leryn Pest Indonesia</title>
        <meta name="description" content="Lihat dokumentasi layanan pest control kami, tim profesional, peralatan modern, dan hasil kerja yang memuaskan." />
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
            }} className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Galeri <span className="text-green-600">Kami</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dokumentasi layanan profesional dan hasil kerja kami
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {galleryCategories.map((category, catIndex) => {
              if (category.title != "Hasil Sebelum-Sesudah") {
                if (category.title != "Tim Profesional Kami") {
                  return (
                    <div key={catIndex} className="mb-16">
                      <motion.div initial={{
                        opacity: 0,
                        y: 20
                      }} whileInView={{
                        opacity: 1,
                        y: 0
                      }} viewport={{
                        once: true
                      }} className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                        <p className="text-gray-600">{category.description}</p>
                      </motion.div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {category.images.map((image, imgIndex) => (
                          <motion.div key={imgIndex} initial={{
                            opacity: 0,
                            scale: 0.9
                          }} whileInView={{
                            opacity: 1,
                            scale: 1
                          }} viewport={{
                            once: true
                          }} transition={{
                            delay: imgIndex * 0.1
                          }} whileHover={{
                            scale: 1.05
                          }} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-2xl shadow-lg h-64">
                              <img
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                alt={image.alt}
                                src={image.src}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  {image.content}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )
                }
                else {
                  return (
                    <div key={catIndex} className="mb-16">
                      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                        <p className="text-gray-600">{category.description}</p>
                      </motion.div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {category.images.map((image, imgIndex) => (
                          <motion.div onClick={() => setSelectedImage(image.src)} key={imgIndex} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: imgIndex * 0.1 }} whileHover={{ scale: 1.05 }} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-2xl shadow-lg h-64">
                              <img
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                alt={image.alt}
                                src={image.src}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                <p className="opacity-1 group-hover:opacity-0 transition-opacity duration-300 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  {image.content}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                        <AnimatePresence>
                          {selectedImage && (
                            <motion.div
                              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              onClick={() => setSelectedImage(null)}
                            >
                              <motion.img
                                src={selectedImage}
                                className="max-w-[90%] max-h-[90%] rounded-xl"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={(e) => e.stopPropagation()}
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  )
                }
              }
              if (category.title == "Hasil Sebelum-Sesudah") {
                return (
                  <div key={catIndex} className="mb-16">
                    <motion.div initial={{
                      opacity: 0,
                      y: 20
                    }} whileInView={{
                      opacity: 1,
                      y: 0
                    }} viewport={{
                      once: true
                    }} className="mb-8">
                      <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                      <p className="text-gray-600">{category.description}</p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {category.images.map((image, imgIndex) => (
                        <motion.div key={imgIndex} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: imgIndex * 0.1 }} whileHover={{ scale: 1.05 }} className="group cursor-pointer">
                          <div className="relative overflow-hidden rounded-2xl shadow-lg h-64">

                            <div className="relative w-full h-full">

                              <img
                                src={image.src}
                                alt={image.alt}
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[3000ms] ease-in-out opacity-100 group-hover:opacity-0"
                              />

                              {image.src2 && (
                                <img
                                  src={image.src2}
                                  alt={image.alt}
                                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[3000ms] ease-in-out opacity-0 group-hover:opacity-100"
                                />
                              )}

                            </div>

                            <div onMouseLeave={(e) => handleMouseLeave(e, image.content)} onMouseOver={(e) => handleHover(e, image.content2)} className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                              <p className="text-white text-sm font-medium">
                                {image.content}
                              </p>
                            </div>

                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Gallery;