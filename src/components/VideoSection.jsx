import { VIDEO } from "../content";

export default function VideoSection() {
  return (
    <section className="bg-sky-50 py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-black text-brand-navy mb-6">
          See ClearView Pro In Action
        </h2>

        <div className="relative rounded-xl overflow-hidden shadow-lg bg-black aspect-video">
          {VIDEO.url ? (
            <video
              className="w-full h-full object-cover"
              controls
              poster={VIDEO.poster}
              src={VIDEO.url}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-white gap-3">
              <div className="w-16 h-16 rounded-full bg-brand-gold/90 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-brand-navy ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-sm text-gray-300 px-6">
                Product demo video goes here — drop the hosted video URL into{" "}
                <code className="bg-white/10 px-1 rounded">VIDEO.url</code> in{" "}
                <code className="bg-white/10 px-1 rounded">content.js</code>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
