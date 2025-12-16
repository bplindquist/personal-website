import { HiAcademicCap, HiLocationMarker, HiCode } from "react-icons/hi";

export const AboutMe = () => {
  return (
    <section className="flex-1 bg-white border border-gray-200 rounded-lg p-8 shadow-sm h-64 sm:h-80 flex flex-col justify-center">
      <h2 className="font-bold text-3xl mb-8">About Me</h2>

      <div className="flex flex-col gap-6">
        {/* Education */}
        <div className="flex items-center gap-4 group">
          <div className="p-3 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 transition-all flex-shrink-0">
            <HiAcademicCap className="w-6 h-6 text-purple-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-500 font-medium">Education</p>
            <p className="text-lg text-gray-700 font-medium">
              University of North Carolina Wilmington
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4 group">
          <div className="p-3 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 transition-all flex-shrink-0">
            <HiLocationMarker className="w-6 h-6 text-orange-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-500 font-medium">Location</p>
            <p className="text-lg text-gray-700 font-medium">
              Madison, Wisconsin
            </p>
          </div>
        </div>

        {/* Specialization */}
        <div className="flex items-center gap-4 group">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 transition-all flex-shrink-0">
            <HiCode className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-500 font-medium">Specialization</p>
            <p className="text-lg text-gray-700 font-medium">
              Full-Stack Development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
