import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/hero';
import PostPreview from '../components/postPreview';
import Insta from '../components/insta';
import usePosts from '../hooks/use-posts';

export default () => {
  const posts = usePosts();
  return (
    <>
      {console.log(posts)}
      <Hero />
      <Layout>
        <h1>Home</h1>
        <p>Hello Rye!</p>
        <Link to="/about/">Learn about me &rarr;</Link>

        <h2>Read Blog:</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}

        <Insta />
      </Layout>
    </>
  );
};
