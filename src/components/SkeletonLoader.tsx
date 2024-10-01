export const SkeletonLoader = () => {
    return (
      <div className="bg-gray-300 animate-pulse p-4 rounded-lg shadow-md w-full h-60">
        {/* This is where the skeleton UI is */}
        <div className="h-40 bg-gray-400 rounded mb-4"></div>
        <div className="h-4 bg-gray-400 rounded mb-2"></div>
        <div className="h-4 bg-gray-400 rounded"></div>
      </div>
    );
  };
  