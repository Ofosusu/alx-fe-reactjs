function UserProfile() {
  return (
    <div className="user-profile bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-sm md:max-w-md mx-auto my-10 sm:my-16 md:my-20 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
      
      {/* Profile Image with Badge */}
      <div className="relative inline-block mx-auto">
        <img 
          src="https://via.placeholder.com/150" 
          alt="User" 
          className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto hover:scale-105 transition-transform duration-300 border-4 border-white shadow-md"
        />
        <div className="absolute bottom-0 right-0 sm:right-2 md:right-4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-green-500 rounded-full border-2 sm:border-3 border-white"></div>
      </div>
      
      {/* Name */}
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-800 my-3 sm:my-4 text-center font-bold tracking-tight">
        John Doe
      </h1>
      
      {/* Job Title Badge */}
      <div className="flex justify-center mb-3 sm:mb-4">
        <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
          Developer
        </span>
      </div>
      
      {/* Bio */}
      <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center leading-relaxed px-2 sm:px-3 md:px-4">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
      
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6">
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold py-2 sm:py-2.5 px-4 rounded-lg transition-colors duration-200">
          Follow
        </button>
        <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm sm:text-base font-semibold py-2 sm:py-2.5 px-4 rounded-lg transition-colors duration-200">
          Message
        </button>
      </div>
      
      {/* Social Stats */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
        <div className="text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">1.2K</p>
          <p className="text-xs sm:text-sm text-gray-500">Followers</p>
        </div>
        <div className="text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">342</p>
          <p className="text-xs sm:text-sm text-gray-500">Following</p>
        </div>
        <div className="text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">89</p>
          <p className="text-xs sm:text-sm text-gray-500">Posts</p>
        </div>
      </div>
      
    </div>
  );
}

export default UserProfile;