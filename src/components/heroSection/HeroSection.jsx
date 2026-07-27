import { Play, Plus } from "lucide-react";

 function HeroSection() {
  const thumbnails = [
    "/thumb1.jpg",
    "/thumb2.jpg",
    "/thumb3.jpg",
    "/thumb4.jpg",
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <img
        src="/bg.jpg"
        alt="Match Fixing"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-2xl px-10">
          {/* Title */}
          <h1 className="text-6xl font-bold text-white mb-4">
            Match Fixing
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-gray-300 text-sm mb-4">
            <span>2025</span>
            <span>•</span>
            <span>U/A 16+</span>
            <span>•</span>
            <span>2h 24m</span>
            <span>•</span>
            <span>Hindi</span>
          </div>

          {/* Description */}
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Army officer Col. Avinash Patwardhan is framed as a scapegoat
            by a conspiracy that ignores a terrorist attack to gain an
            electoral advantage.
          </p>

          {/* Genres */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "Thriller",
              "Drama",
              "Based on Books",
              "Conspiracy",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-black hover:bg-gray-200">
              <Play size={18} fill="black" />
              Watch Now
            </button>

            <button className="flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-white hover:bg-white/20">
              <Plus size={18} />
              Watchlist
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Carousel */}
      {/* <div className="absolute bottom-6 right-10 flex gap-3">
        {thumbnails.map((item, index) => (
          <img
            key={index}
            src={item}
            alt=""
            className="h-20 w-36 rounded-lg object-cover border border-white/20 hover:scale-105 transition"
          />
        ))}
      </div> */}
    </section>
  );
}
export default HeroSection;