import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="blog-post-page">
      <Link to="/blog" className="back-link">← Back to Blog</Link>
      <h1>Blog Post: {slug}</h1>
      <p>Blog post content coming soon.</p>
    </div>
  );
};

export default BlogPost;
