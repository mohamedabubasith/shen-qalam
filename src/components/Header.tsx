interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg transition-all duration-300 border-b border-blue-100/50 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="w-full sm:w-auto flex justify-between items-center">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:bg-gray-800 hover:from-blue-200 hover:to-purple-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm"
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
          <div className="text-center max-w-full">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-rose-600 dark:from-emerald-400 dark:to-teal-400 text-transparent bg-clip-text animate-gradient px-2 tracking-tight">SHEN QALAM</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mt-0.5 sm:mt-1 md:mt-2 px-2">Arabic Calligraphy Arts for sale</p>
          </div>
          <div className="w-full sm:w-auto"></div>
        </div>
      </div>
    </header>
  );
};
