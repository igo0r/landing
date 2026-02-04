import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { posts } from '../data/posts';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="blog-post-content">
          <Link to="/blog" className="back-link">
            ← Back to Blog
          </Link>
          <div className="not-found">
            <h1>Post Not Found</h1>
            <p>The article you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="blog-post-page">
      <div className="blog-post-content">
        <Link to="/blog" className="back-link">
          ← Back to Blog
        </Link>
        <article className="blog-article">
          <header className="blog-post-header">
            <time className="blog-post-date" dateTime={post.date}>
              {formattedDate}
            </time>
            <h1 className="blog-post-title">{post.title}</h1>
          </header>
          <div className="blog-post-body">
            <ReactMarkdown
              components={{
                code({ className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  const codeString = String(children).replace(/\n$/, '');

                  if (match) {
                    return (
                      <SyntaxHighlighter
                        style={oneDark}
                        language={match[1]}
                        PreTag="div"
                      >
                        {codeString}
                      </SyntaxHighlighter>
                    );
                  }

                  return (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
