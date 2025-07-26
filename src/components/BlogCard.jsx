export default function BlogCard({ title, summary, image, url }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col">
      <img src={image} alt={title} className="rounded-t-lg h-48 w-full object-cover" />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4 flex-1">{summary}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 self-start">Read More</a>
      </div>
    </div>
  );
}
