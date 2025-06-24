import ReactPlayer from "react-player/youtube";

export default function CustomTrailerPlayer({ youtubeId }) {
  return (
    <div className="max-w-full mx-auto p-8 px-10  bg-[#00b7db05]">
      <h2 className="text-cyan-400 text-2xl font-bold mb-6">Anime Tarilar</h2>
      <div className="aspect-video max-w-3xl shadow overflow-hidden mx-auto sm:mx-12">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${youtubeId}`}
          controls
          width="100%"
          height="100%"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
