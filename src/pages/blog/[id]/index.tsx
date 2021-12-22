// libs
import React from 'react';
import axios from 'axios';
import { GetStaticProps, GetStaticPaths } from 'next';
import ReactMarkDown from 'react-markdown';
// types
import { blogPost } from 'types/blogPost';
// style
import styles from 'styles/pages/Blog.module.scss';

interface blogProps {
  post: blogPost;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postRes = await axios.get(`http://localhost:1337/api/posts`);
  const postData: blogPost[] = postRes.data.data;

  const paths = postData.map(post => ({ params: { id: post.id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postId = params?.id;
  const postRes = await axios.get(`http://localhost:1337/api/posts/${postId}`);
  const postData: [blogPost] = postRes.data.data;

  if (!postData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: postData,
    },
  };
};

const blogId = ({ post }: blogProps) => (
  <div className={styles.wrapper}>
    <div className={styles.wrapperInner}>
      This is post {post.id}
      <ReactMarkDown>{post.attributes.content}</ReactMarkDown>
    </div>
  </div>
);
export default blogId;
