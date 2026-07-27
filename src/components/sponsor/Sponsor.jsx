import React from "react";
import { ExternalLink } from "lucide-react";

const Sponsor = () => {
  const sponsorData = {
    banner:
      "https://shifu.hotstarext.com/SOURCE/VOD/cd-2026-06-01/EmergentDBB2-714c4d0b-03b7-4405-ab1e-5ebe9ec36357.jpg",
    logo:
      "https://brand-img1.hotstarext.com/image/upload/v1780312059/rohit/rohit/Emergent_Logo_1.jpg",
    brand: "Emergent",
    title: "Create an App in Minutes",
    description:
      "Turn conversations into revenue-generating apps. Start building for free.",
    cta: "Build Now",
    link: "https://app.emergent.sh",
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex h-[170px] overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 shadow-lg">
        {/* Banner Section */}
        <a
          href={sponsorData.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-[60%] flex-shrink-0"
        >
          <img
            src={sponsorData.banner}
            alt={sponsorData.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20" />
        </a>

        {/* Content Section */}
        <div className="flex w-[40%] flex-col justify-between p-4">
          <div>
            {/* Header */}
            <div className="flex items-center gap-3">
              <img
                src={sponsorData.logo}
                alt={sponsorData.brand}
                className="h-10 w-10 rounded-md object-cover"
              />

              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-yellow-500 px-1.5 py-0.5 text-[10px] font-semibold text-black">
                    Ad
                  </span>

                  <h3 className="text-sm font-semibold text-white">
                    {sponsorData.brand}
                  </h3>
                </div>

                <p className="text-xs text-gray-400">
                  {sponsorData.title}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-3 line-clamp-2 text-xs leading-5 text-gray-300">
              {sponsorData.description}
            </p>
          </div>

          {/* CTA */}
          <a
            href={sponsorData.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex w-full items-center justify-center gap-2 rounded-md bg-white py-2 text-sm font-medium text-black transition hover:bg-gray-200">
              {sponsorData.cta}
              <ExternalLink size={14} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;