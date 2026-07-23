import { VIDEO } from "../content";
import sidevid3 from "../assets/sidevid3.mp4";

export default function VideoSection() {
  return (
    <section className="bg-sky-50 py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-black text-brand-navy mb-6">
          See ClearView Pro In Action
        </h2>

        <div className="relative rounded-xl overflow-hidden shadow-lg bg-black aspect-video">
          
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              // poster={VIDEO.poster}
              src={sidevid3}
            />
        </div>
      </div>
    </section>
  );
}
