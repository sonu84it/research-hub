export default function About() {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">About</h2>
      <p className="text-gray-700">
        Welcome to our research blog — a curated hub for exploring some of the most critical and fast-evolving topics shaping our future.
      </p>
      <p className="text-gray-700 mt-4">
        This site covers deep insights into:
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
        <li>
          <strong>AI Regulation:</strong> A global perspective on the legal and ethical frameworks emerging across the US, EU, China, and beyond.
        </li>
        <li>
          <strong>EV Battery Technology:</strong> A comparison of innovations by leaders like Tesla, Rivian, and BYD, including battery chemistry, sustainability, and roadmaps.
        </li>
        <li>
          <strong>Fintech Evolution:</strong> A look into digital finance trends, user adoption, and government policies across India and Southeast Asia.
        </li>
        <li>
          <strong>Remote Work Productivity:</strong> An analysis of global research studies on how remote work impacts productivity, employee well-being, and hybrid strategies.
        </li>
        <li>
          <strong>Emerging Renewable Energy Technologies:</strong> A ranked summary of the top innovations disrupting energy markets between 2025 and 2030.
        </li>
      </ul>
      <p className="text-gray-700 mt-4">
        All research is generated using ChatGPT's Deep Research mode, and audio summaries are podcasted with Google NotebookLM to enable easy listening and deeper engagement.
      </p>
      <p className="text-yellow-800 font-semibold mt-4">
        ⚠️ Disclaimer: While the content is generated with care and leverages AI-based research tools, users are strongly advised to validate facts independently before making decisions based on the information here. This website is for informational purposes only and should not be considered a substitute for expert advice or verified primary sources.
      </p>
      <p className="text-gray-700 mt-4">
        Thank you for visiting — and stay curious!
      </p>
    </div>
  );
}
