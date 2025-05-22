export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sadie-light">
      <div className="text-center">
        
        {/* Animated Logo */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-sadie-primary to-emerald-green rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-2xl font-bold text-white">S</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Sadie OS</h2>
          <p className="text-gray-600 text-sm">Loading...</p>
        </div>

        {/* Loading Animation */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-sadie-primary rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-sadie-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-sadie-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Loading Text */}
        <div className="text-gray-600 text-sm">
          Initializing your tech solution platform...
        </div>
      </div>
    </div>
  );
}