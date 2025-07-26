import BlogCard from '../components/BlogCard';

const posts = [
  {
    title: 'AI Regulations: US, EU, China',
    summary: 'Comparative analysis of AI laws and policies across major regions.',
    url: 'https://github.com/yourusername/yourrepo/wiki/AI-Regulations-US-EU-China',
    image: 'https://source.unsplash.com/800x600/?law,ai'
  },
  {
    title: 'EV Battery Tech: Tesla vs Rivian vs BYD',
    summary: 'Deep dive into EV battery innovations and roadmaps for 2025–2030.',
    url: 'https://github.com/yourusername/yourrepo/wiki/EV-Battery-Comparison',
    image: 'https://source.unsplash.com/800x600/?battery,ev'
  },
  {
    title: 'Fintech in India & Southeast Asia (2025 Outlook)',
    summary: 'User adoption, regulations, and top players in fintech growth.',
    url: 'https://github.com/yourusername/yourrepo/wiki/Fintech-India-SEA-2025',
    image: 'https://source.unsplash.com/800x600/?fintech'
  },
  {
    title: 'Remote Work Productivity: Global Study',
    summary: 'Impact of remote work since 2020: employee wellbeing & business results.',
    url: 'https://github.com/yourusername/yourrepo/wiki/Remote-Work-Productivity',
    image: 'https://source.unsplash.com/800x600/?remote-work'
  },
  {
    title: 'South China Sea Disputes: 1950–2025 Timeline',
    summary: 'A geopolitical timeline of key events, claims, and rulings.',
    url: 'https://github.com/yourusername/yourrepo/wiki/South-China-Sea-Disputes',
    image: 'https://source.unsplash.com/800x600/?geopolitics'
  },
  {
    title: 'COVID-19 Vaccines vs Variants (Post-2024)',
    summary: 'Analysis of vaccine efficacy against emerging variants.',
    url: 'https://github.com/yourusername/yourrepo/wiki/COVID19-Vaccine-Efficacy',
    image: 'https://source.unsplash.com/800x600/?vaccine'
  },
  {
    title: 'AI in Product Management',
    summary: 'How AI agents automate tasks and augment decision making.',
    url: 'https://github.com/yourusername/yourrepo/wiki/AI-in-Product-Management',
    image: 'https://source.unsplash.com/800x600/?ai,product'
  },
  {
    title: 'Sand House Building: Sustainable Architecture',
    summary: 'Story of building a sand house over 6 months using humanoid robotics.',
    url: 'https://github.com/yourusername/yourrepo/wiki/Sand-House-Building',
    image: 'https://source.unsplash.com/800x600/?architecture'
  },
  {
    title: 'Shredder ASMR: Top 5 Satisfying Crushes',
    summary: 'Compilation of unique items shredded for ASMR effect.',
    url: 'https://github.com/yourusername/yourrepo/wiki/ASMR-Shredder-Crushes',
    image: 'https://source.unsplash.com/800x600/?asmr'
  },
  {
    title: 'Mars Rover Race: Tour de Mars',
    summary: 'A futuristic race across Mars using AI-powered rovers.',
    url: 'https://github.com/yourusername/yourrepo/wiki/Tour-de-Mars',
    image: 'https://source.unsplash.com/800x600/?mars,rover'
  }
];

export default function Home() {
  return (
    <div className="p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map(post => (
        <BlogCard key={post.title} {...post} />
      ))}
    </div>
  );
}
