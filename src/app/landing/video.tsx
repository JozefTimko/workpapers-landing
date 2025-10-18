// src/app/landing/video.tsx
type Props = { videoId: string; title: string };

export default function Video({ videoId, title }: Props) {
  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${videoId}`}
      title={title}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
      className="h-full w-full"
    />
  );
}
