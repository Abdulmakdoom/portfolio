import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const posts = [
    {
      title: 'Understanding MongoDB Aggregation Pipeline',
      date: 'FEBRUARY 21, 2025',
      image: 'https://www.tech-prastish.com/wp-content/uploads/2020/01/page-4-img-1.png',
      href: "https://billowy-cucumber-166.notion.site/Understanding-MongoDB-Aggregation-Pipeline-A-Comprehensive-Guide-1-1a10790374748071b9aeffbef5bbc71b"
    },
    {
      title: 'Understanding Web Authentication: Cookies vs JWT',
      date: 'JANUARY 10, 2025',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ad7e20be-d53b-4f31-8f29-dcc5c1c54136.jpeg',
      href: "https://billowy-cucumber-166.notion.site/Understanding-Web-Authentication-Cookies-vs-JWT-A-Comprehensive-Guide-1a3079037474808396cecafd7a9bf694"
    },
    {
      title: 'Building Modern Web Applications with React.js and Redux Toolkit',
      date: 'DECEMBER 6, 2024',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2614e1a3-285e-43e6-ae70-090d820b9a42.jpeg',
      href: "https://billowy-cucumber-166.notion.site/Building-Modern-Web-Applications-with-React-js-and-Redux-Toolkit-1a307903747480d987f8f4c118999627"

    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-200 dark:bg-[#212121]">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-emerald-500 mb-2">CHECK OUT MY LATEST POSTS</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Blog</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 dark:bg-[#212121] shadow-2xl bg-cyan-200 shadow-lg shadow-cyan-100/30 rounded-lg shadow-2xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-[#212121] p-4">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="object-contain w-full h-60"
                />
              </div>
              <div className="p-6">
                <p className="text-emerald-500 text-sm mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{post.title}</h3>
                <a 
                  href={post.href}
                  className="text-emerald-500 hover:text-emerald-600 transition-colors"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
