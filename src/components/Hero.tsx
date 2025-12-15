import profile from "@/assets/profile.jpeg";

export const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] pt-24 sm:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8 w-full">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-6xl w-full">
        <div className="flex-shrink-0">
          <img 
            src={profile} 
            alt="Profile" 
            className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full object-cover shadow-xl ring-4 ring-white"
          />
        </div>

        <div className="flex flex-col gap-6 text-center lg:text-left max-w-2xl">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Hi, I'm Brian.
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
            I am a software engineer living in Madison, WI with my dog, Roscoe.
          </p>
        </div>
      </div>
    </section>
  );
};
