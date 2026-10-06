import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { articles } from '@/lib/articles.jsx';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog & Tips - Leryn Pest Indonesia</title>
        <meta name="description" content="Tips dan artikel seputar pencegahan hama, kesehatan lingkungan, dan cara menjaga rumah bebas dari rayap, tikus, dan nyamuk." />
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
                Blog & <span className="gradient-text">Tips Pencegahan</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Artikel dan panduan lengkap untuk menjaga rumah Anda bebas hama
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/80 border border-gray-200/50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all flex flex-col shadow-lg backdrop-blur-sm"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                      alt={article.title}
                      // Just a placeholder image for the list
                      src={article.src}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 my-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    
                    <Link to={`/blog/${article.slug}`} className="mt-auto">
                      <Button 
                        variant="outline" 
                        className="w-full border-green-600 text-green-600 hover:bg-green-100/50"
                      >
                        Baca Selengkapnya
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;