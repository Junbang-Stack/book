import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import posts from '../assets/posts/*.md';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const postData = await Promise.all(
        Object.keys(posts).map(async (slug) => {
          const { data, content } = matter(require(`../assets/posts/${slug}`));
          return { slug, data, content };
        })
      );
      setPosts(postData);
    };
    loadPosts();
  }, []);

  return (
    <div className="blog-container">
      {posts.map((post) => (
        <article key={post.slug} className="post-card">
          <h2>{post.data.title}</h2>
          <div className="post-meta">
            <span>{new Date(post.data.date).toLocaleDateString()}</span>
            <div className="tags">
              {post.data.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
          <ReactMarkdown children={post.content} />
        </article>
      ))}
    </div>
  );
}
