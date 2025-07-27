export default function BlogCard({ title, summary, imageUrl, wikiUrl, podcastUrl }) {
  const truncated = summary.length > 150 ? summary.slice(0, 150) + '...' : summary;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] transition duration-300 flex flex-col">
      <img
        src={imageUrl}
        alt={title}
        className="rounded-t-lg h-48 w-full object-contain"
      />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4 flex-1">{truncated}</p>
        <div className="flex space-x-2">
          <a
            href={wikiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors self-start"
          >
            Read More
          </a>
          {podcastUrl && (
            <a
              href={podcastUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors self-start"
            >
              Podcast
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
