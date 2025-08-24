interface FeaturesProps {}

export const Features: React.FC<FeaturesProps> = () => {
  return (
    <section className="py-6 sm:py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-12 text-[#1E88E5]">
          Special Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {[
            { title: "Handmade", icon: "✨", description: "Each piece crafted with care" },
            { title: "Affordable", icon: "💰", description: "Quality art at great prices" },
            { title: "Customizable", icon: "🎨", description: "Available in A4, A3, and custom sizes" },
            { title: "Framing available", icon: "🖼️", description: "Complete your artwork perfectly" },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-[#121212] backdrop-blur-md rounded-xl p-2.5 sm:p-4 md:p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#1E88E5]/10"
            >
              <div className="absolute inset-0 bg-[#1E88E5]/5 dark:bg-[#1E88E5]/10 rounded-xl transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />
              <span className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4 md:mb-6 block transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">{feature.icon}</span>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#212121] dark:text-[#E0E0E0] mb-1 sm:mb-2">{feature.title}</h3>
              <p className="text-xs sm:text-sm md:text-base text-[#616161] dark:text-[#A0A0A0]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
