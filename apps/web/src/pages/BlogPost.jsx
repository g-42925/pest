import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { articles } from '@/lib/articles';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="pt-20 section-padding text-center">
        <h1 className="text-4xl font-bold">404 - Artikel Tidak Ditemukan</h1>
        <p className="mt-4">Maaf, artikel yang Anda cari tidak ada.</p>
        <Link to="/blog" className="mt-6 inline-block text-green-600 hover:underline">
          Kembali ke Blog
        </Link>
      </div>
    );
  }
  
  // A simple function to replace <img-replace> with actual <img> tags for display
  // In a real scenario, this would be handled by a proper markdown/html parser
  const renderContent = (content) => {
    // This is a simplified replacement for demo purposes.
    const replacedContent = content.replace(
      /<img-replace alt="([^"]+)">([^<]+)<\/img-replace>/g,
      `<img src="https://images.unsplash.com/photo-1587791801975-fc6a305b01e9?q=80&w=2070" alt="$1" class="rounded-lg shadow-md my-8" />`
    );
    return { __html: replacedContent };
  };

  return (
    <>
      <Helmet>
        <title>{article.title} - Leryn Pest Indonesia</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      <div className="pt-20">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <header className="mb-12 text-center">
             <Link to="/blog" className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Semua Artikel
            </Link>
            <p className="text-sm font-medium text-green-600">{article.category}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              {article.title}
            </h1>
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
            </div>
          </header>
          
          <div className="prose lg:prose-lg max-w-none mx-auto" dangerouslySetInnerHTML={renderContent(article.content)} />

        </motion.article>
      </div>
    </>
  );
};

export default BlogPost;