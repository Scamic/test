import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
        id: 2,
        title: 'eegvedfv your conversion rate',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'piyush',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'prathmesh',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 4,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    
  ]
  

  export default function Blog() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="bg-slate-950 py-24 sm:py-32 relative overflow-hidden">
            {/* Blob Background Behind Blog Entries */}
            {/* <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-56 h-56 bg-blue-700 rounded-full mix-blend-screen filter blur-2xl opacity-60 top-0 right-1/4 ml-7 transform -translate-x-1/2 animate-horizontal-blob"></div>
            </div> */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute w-56 h-56 bg-violet-400 rounded-full mix-blend-screen filter blur-2xl opacity-60 top-1/4 left-1/3 transform -translate-x-1/2 animate-horizontal-blob"></div>
                <div className="absolute w-72 h-72 bg-pink-400 rounded-full mix-blend-screen filter blur-2xl opacity-60 bottom-0 mb-26 right-1/2 transform translate-x-1/2 animate-horizontal-blob"></div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-violet-800 text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 underline-animation p-4" data-aos="fade-up">
                        Recent Blogs
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-200" data-aos="fade-up" data-aos-delay="100">
                        Welcome to our blog section. Here, we share insights, stories, and the latest updates from the world of technology and beyond. Dive in to explore our innovative journey and be inspired.
                    </p>
                </div>
                <div className="mx-auto mt-4 sm:mt-8 grid max-w-2xl grid-cols-1 gap-x-22 gap-y-26 border-t border-gray-200 pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 relative z-10">
                    {posts.map((post, index) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="bg-gray-800 focus:outline-none rounded-lg border border-gray-600 p-8 w-full">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.datetime} className="text-gray-400">
                                        {post.date}
                                    </time>
                                    <a
                                        href={post.category.href}
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                        {post.category.title}
                                    </a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-300 group-hover:text-gray-100">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">{post.description}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-400">
                                            <a href={post.author.href}>
                                                <span className="absolute inset-0" />
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p className="text-gray-200">{post.author.role}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}