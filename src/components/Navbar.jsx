import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-lg font-semibold hover:underline">Research Hub</Link>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <a href="https://github.com/sonu84it/research-hub/wiki/Deep-Research-Knowledge-Base" target="_blank" rel="noopener noreferrer" className="hover:underline">Wiki</a>
      </div>
    </nav>
  );
}
