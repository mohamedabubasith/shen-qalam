interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="py-8 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-conic from-emerald-200/30 via-teal-200/30 to-emerald-200/30 dark:from-emerald-900/30 dark:via-teal-900/30 dark:to-emerald-900/30 animate-slow-spin -z-10" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#212121] dark:text-[#E0E0E0] mb-6 sm:mb-8 leading-tight px-2">
            Elevate Your Space with{' '}
            <span className="text-[#1E88E5]">
              Elegant Handmade Arabic Art!
            </span>
          </h2>
          <div className="bg-white dark:bg-[#121212] backdrop-blur-md rounded-2xl shadow-xl p-3 sm:p-6 md:p-8 max-w-3xl mx-auto transform hover:scale-[1.02] transition-all duration-300 border border-[#1E88E5]/10">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-800 to-purple-800 dark:text-white text-transparent bg-clip-text mb-4 sm:mb-6 md:mb-8">What we provide:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 text-left">
              {[
                { icon: '✍️', text: 'Custom name calligraphy' },
                { icon: '🕌', text: 'Quranic verses / Islamic quotes' },
                { icon: '🎁', text: 'Gifts' },
                { icon: '🏠', text: 'Home decor' },
                { icon: '📚', text: 'Bookmarks' },
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 p-2 sm:p-3 md:p-4 rounded-lg bg-[#1E88E5]/5 dark:bg-[#1E88E5]/10 hover:bg-[#1E88E5]/10 dark:hover:bg-[#1E88E5]/20 transition-all duration-300 border border-[#1E88E5]/10 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
                  <span className="text-xl sm:text-2xl">{item.icon}</span>
                  <span className="text-sm sm:text-base text-[#212121] dark:text-[#E0E0E0] font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 sm:mt-8 inline-block">
              <p className="text-base sm:text-lg font-semibold px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500 text-white rounded-full shadow-lg shadow-emerald-500/20 dark:shadow-emerald-900/30">
                starting from LKR 350
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
