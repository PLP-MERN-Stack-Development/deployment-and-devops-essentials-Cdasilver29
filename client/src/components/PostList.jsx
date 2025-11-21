import PostCard from './PostCard';
import LoadingSpinner from './LoadingSpinner';

const PostList = ({ posts, loading, error }) => {
  if (loading) return <LoadingSpinner />;
  
  if (error) {
    return (
      <div className="animate-slide-down">
        <div className="max-w-2xl mx-auto bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">
            Oops! Something went wrong
          </h3>
          <p className="text-red-600 dark:text-red-400">
            {error}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="animate-fade-in">
        <div className="max-w-2xl mx-auto text-center py-20">
          {/* Empty State Illustration */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center animate-bounce-gentle">
              <svg className="w-16 h-16 text-indigo-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl -z-10"></div>
          </div>

          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            No Posts Yet
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Be the first to share your story! Create your first post and start inspiring others.
          </p>
          
          <a
            href="/create"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Create Your First Post</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Posts Count */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
            Latest Posts
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {posts.length} {posts.length === 1 ? 'post' : 'posts'} available
          </p>
        </div>
        
        {/* Optional: Sort/Filter buttons */}
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
            Latest
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
            Popular
          </button>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div
            key={post._id}
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
