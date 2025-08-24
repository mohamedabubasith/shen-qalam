interface ContactProps {}

export const Contact: React.FC<ContactProps> = () => {
  return (
    <section className="py-6 sm:py-10 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-12">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-rose-600 dark:from-emerald-400 dark:to-teal-400 text-transparent bg-clip-text">
              For Orders & Inquiries
            </span>
          </h2>
          <div className="bg-gradient-to-br from-white/90 to-blue-50/90 dark:bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-3 sm:p-6 md:p-8 max-w-[320px] sm:max-w-md md:max-w-2xl mx-auto transform hover:scale-[1.01] sm:hover:scale-[1.02] transition-all duration-300 border border-blue-200/30">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 dark:from-emerald-400/5 dark:to-teal-400/5 rounded-xl animate-pulse-slow" />
              <div className="flex items-center justify-center gap-1.5 mb-4 sm:mb-6 md:mb-8 relative">
                <span className="text-lg sm:text-xl md:text-2xl flex-shrink-0">📦</span> 
                <p className="text-xs sm:text-sm md:text-base font-medium bg-gradient-to-r from-blue-800 to-purple-800 dark:text-gray-300 text-transparent bg-clip-text">
                  packed with care - fees may vary
                </p>
              </div>
              <div className="space-y-3 sm:space-y-4 md:space-y-6 relative">
                <a
                  href="tel:+94720317155"
                  className="flex items-center justify-center gap-2 sm:gap-3 p-2.5 sm:p-3 md:p-4 bg-gradient-to-r from-blue-100/80 to-purple-100/80 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-lg sm:rounded-xl hover:from-blue-200/80 hover:to-purple-200/80 dark:hover:from-emerald-800/30 dark:hover:to-teal-800/30 transition-all duration-300 group border border-blue-200/30 shadow hover:shadow-md transform hover:-translate-y-0.5 sm:hover:-translate-y-1"
                >
                  <span className="text-lg sm:text-xl md:text-2xl transform group-hover:scale-110 transition-transform flex-shrink-0">📱</span>
                  <span className="text-xs sm:text-sm md:text-base font-medium text-gray-900 dark:text-white">+94 72 031 7155</span>
                </a>
                <a
                  href="https://instagram.com/shen_qalam_calligraphy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 sm:gap-3 p-2.5 sm:p-3 md:p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-lg sm:rounded-xl hover:from-blue-100 hover:to-purple-100 dark:hover:from-emerald-800/30 dark:hover:to-teal-800/30 transition-colors group border border-blue-100/20 shadow hover:shadow-md transform hover:-translate-y-0.5 sm:hover:-translate-y-1"
                >
                  <span className="text-lg sm:text-xl md:text-2xl transform group-hover:scale-110 transition-transform flex-shrink-0">📷</span>
                  <span className="text-xs sm:text-sm md:text-base font-medium text-gray-900 dark:text-white break-words">@shen_qalam_calligraphy</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
