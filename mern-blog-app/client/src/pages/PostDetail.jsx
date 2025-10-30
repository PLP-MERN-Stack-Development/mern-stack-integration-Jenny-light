import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { postService } from '../services/postService';
import { useAuth } from '../context/AuthContext';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await postService.getPostById(id);
      setPost(response.data.data);
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await postService.deletePost(id);
        navigate('/');
      } catch (error) {
        alert('Error deleting post');
      }
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!post) {
    return <div className="text-center py-8">Post not found</div>;
  }

  const canEdit = user && (user._id === post.author?._id || user.role === 'admin');

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to posts
      </Link>

      {post.featuredImage && (
        <img
          src={`http://localhost:5000${post.featuredImage}`}
          alt={post.title}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
      )}

      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-4">
          <span className="text-blue-600 text-sm font-semibold">
            {post.category?.name}
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center gap-4 text-gray-600 mb-6 pb-6 border-b">
          <span>By {post.author?.name}</span>
          <span>•</span>
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          <span>•</span>
          <span>{post.views} views</span>
        </div>

        <div className="prose max-w-none mb-8">
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
        </div>

        {canEdit && (
          <div className="flex gap-4 pt-6 border-t">
            <Link
              to={`/edit-post/${post._id}`}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Edit Post
            </Link>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
            >
              Delete Post
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetail;