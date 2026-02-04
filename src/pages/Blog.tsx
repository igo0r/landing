import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import './Blog.css';

const Blog = () => {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="blog-page">
      <div className="blog-content">
        <h1 className="blog-heading">Blog</h1>
        <p className="blog-subtitle">
          Thoughts on test automation, QA leadership, and building quality
          software.
        </p>
        <div className="blog-grid">
          {sortedPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="blog-card"
            >
              <article>
                <time className="blog-card-date" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-description">{post.description}</p>
                <span className="blog-card-link">Read more →</span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
