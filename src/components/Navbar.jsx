import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-semibold">Research Hub</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <a href="https://github.com/yourusername/yourrepo/wiki" target="_blank" rel="noopener noreferrer" className="hover:underline">Wiki</a>
      </div>
    </nav>
  );
}
