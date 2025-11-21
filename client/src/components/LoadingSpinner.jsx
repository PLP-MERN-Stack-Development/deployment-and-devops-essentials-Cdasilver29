const LoadingSpinner = ({ fullScreen = false, message = "Loading..." }) => {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="text-center">
          <SpinnerAnimation />
          <p className="mt-4 text-gray-600 dark:text-gray-400 font-medium animate-pulse">
            {message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <SpinnerAnimation />
      <p className="mt-4 text-gray-600 dark:text-gray-400 font-medium animate-pulse">
        {message}
      </p>
    </div>
  );
};

const SpinnerAnimation = () => {
  return (
    <div className="relative">
      {/* Outer spinning ring */}
      <div className="w-16 h-16 border-4 border-gray-200 dark:border-gray-700 border-t-indigo-600 dark:border-t-purple-500 rounded-full animate-spin"></div>
      
      {/* Inner pulsing circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

// Skeleton Loading Component (for use in other components)
export const SkeletonCard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="h-56 bg-gray-200 dark:bg-gray-700"></div>
      
      {/* Content skeleton */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
        
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
        
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
        </div>
        
        <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
      </div>
    </div>
  );
};

// Posts Loading Grid
export const PostsLoadingSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default LoadingSpinner;
