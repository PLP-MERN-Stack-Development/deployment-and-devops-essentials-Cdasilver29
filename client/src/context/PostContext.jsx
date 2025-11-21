import { createContext, useContext, useState, useEffect } from 'react';
import { postsApi, categoriesApi } from '../services/api';

const PostContext = createContext();

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePostContext must be used within PostProvider');
  }
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch categories on mount
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await categoriesApi.getAll();
      setCategories(response.data.data);
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };

  const fetchPosts = async (params = {}) => {
    setLoading(true);
    try {
      const response = await postsApi.getAll(params);
      setPosts(response.data.data);
      setError(null);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Error fetching posts');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (postData) => {
    try {
      const response = await postsApi.create(postData);
      setPosts([response.data.data, ...posts]); // Optimistic update
      return response.data.data;
    } catch (err) {
      throw err;
    }
  };

  const updatePost = async (id, postData) => {
    try {
      const response = await postsApi.update(id, postData);
      setPosts(posts.map(p => p._id === id ? response.data.data : p));
      return response.data.data;
    } catch (err) {
      throw err;
    }
  };

  const deletePost = async (id) => {
    try {
      await postsApi.delete(id);
      setPosts(posts.filter(p => p._id !== id)); // Optimistic update
    } catch (err) {
      throw err;
    }
  };

  const value = {
    posts,
    categories,
    loading,
    error,
    fetchPosts,
    createPost,
    updatePost,
    deletePost,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export default PostProvider;