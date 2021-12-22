// libs
import React from 'react';
import axios from 'axios';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Card } from 'antd';
// types
import { blogPost } from 'types/blogPost';
// style
import styles from 'styles/pages/Blog.module.scss';

export const getStaticProps: GetStaticProps = async () => {
  const postRes = await axios.get('http://localhost:1337/api/posts');
  const postData: [blogPost] = postRes.data.data;

  if (!postData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: postData,
    },
  };
};
const Blog = ({ posts }: { posts: blogPost[] }) => (
  <div className={styles.wrapper}>
    <div className={styles.wrapperInner}>
      {posts &&
        posts.map((post: blogPost) => (
          <Link href={`/blog/${post.id}`} key={post.id} passHref>
            <a>
              <Card title={post.attributes.title} bordered={false}>
                {post.attributes.description}
              </Card>
            </a>
          </Link>
        ))}
    </div>
  </div>
);
export default Blog;
