import BlogCard from '../components/BlogCard';

const posts = [
  {
    title: 'AI Regulations: US, EU, China',
    summary: 'Comparative analysis of AI laws and policies across major regions.',
    wikiUrl: 'https://chatgpt.com/s/dr_6886059934e8819197ba14a82ff994bb',
    podcastUrl: 'https://chatgpt.com/s/dr_6886059934e8819197ba14a82ff994bb',
    imageUrl: `${process.env.PUBLIC_URL}/images/Global_AI_Regulation.png`
  },
  {
    title: 'EV Battery Tech: Tesla vs Rivian vs BYD',
    summary: 'Deep dive into EV battery innovations and roadmaps for 2025–2030.',
    wikiUrl: 'https://chatgpt.com/s/dr_688601a9ca988191882349e4307adb37',
    podcastUrl: 'https://chatgpt.com/s/dr_688601a9ca988191882349e4307adb37',
    imageUrl: `${process.env.PUBLIC_URL}/images/EV_Battery_Tech.png`
  },
  {
    title: 'Fintech in India & Southeast Asia (2025 Outlook)',
    summary: 'User adoption, regulations, and top players in fintech growth.',
    wikiUrl: 'https://chatgpt.com/s/dr_68860b53b6cc819190788e51c80814ab',
    podcastUrl: 'https://chatgpt.com/s/dr_68860b53b6cc819190788e51c80814ab',
    imageUrl: `${process.env.PUBLIC_URL}/images/Fintech_Output_2025.png`
  },
  {
    title: 'Remote Work Productivity: Global Study',
    summary: 'Impact of remote work since 2020: employee wellbeing & business results.',
    wikiUrl: 'https://github.com/yourusername/yourrepo/wiki/Remote-Work-Productivity',
    podcastUrl: 'https://github.com/yourusername/yourrepo/wiki/Remote-Work-Productivity',
    imageUrl: 'https://source.unsplash.com/800x600/?remote-work'
  },
  {
    title: 'South China Sea Disputes: 1950–2025 Timeline',
    summary: 'A geopolitical timeline of key events, claims, and rulings.',
    wikiUrl: 'https://github.com/yourusername/yourrepo/wiki/South-China-Sea-Disputes',
    podcastUrl: 'https://github.com/yourusername/yourrepo/wiki/South-China-Sea-Disputes',
    imageUrl: 'https://source.unsplash.com/800x600/?geopolitics'
  },
  {
    title: 'COVID-19 Vaccines vs Variants (Post-2024)',
    summary: 'Analysis of vaccine efficacy against emerging variants.',
    wikiUrl: 'https://github.com/yourusername/yourrepo/wiki/COVID19-Vaccine-Efficacy',
    podcastUrl: 'https://github.com/yourusername/yourrepo/wiki/COVID19-Vaccine-Efficacy',
    imageUrl: 'https://source.unsplash.com/800x600/?vaccine'
  },
  {
    title: 'AI in Product Management',
    summary: 'How AI agents automate tasks and augment decision making.',
    wikiUrl: 'https://github.com/yourusername/yourrepo/wiki/AI-in-Product-Management',
    podcastUrl: 'https://github.com/yourusername/yourrepo/wiki/AI-in-Product-Management',
    imageUrl: 'https://source.unsplash.com/800x600/?ai,product'
  },
  {
    title: 'Sand House Building: Sustainable Architecture',
    summary: 'Story of building a sand house over 6 months using humanoid robotics.',
    wikiUrl: 'https://github.com/yourusername/yourrepo/wiki/Sand-House-Building',
    podcastUrl: 'https://github.com/yourusername/yourrepo/wiki/Sand-House-Building',
    imageUrl: 'https://source.unsplash.com/800x600/?architecture'
  },
  {
    title: 'Shredder ASMR: Top 5 Satisfying Crushes',
    summary: 'Compilation of unique items shredded for ASMR effect.',
    wikiUrl: 'https://github.com/yourusername/yourrepo/wiki/ASMR-Shredder-Crushes',
    podcastUrl: 'https://github.com/yourusername/yourrepo/wiki/ASMR-Shredder-Crushes',
    imageUrl: 'https://source.unsplash.com/800x600/?asmr'
  },
  {
    title: 'Mars Rover Race: Tour de Mars',
    summary: 'A futuristic race across Mars using AI-powered rovers.',
    wikiUrl: 'https://github.com/yourusername/yourrepo/wiki/Tour-de-Mars',
    podcastUrl: 'https://github.com/yourusername/yourrepo/wiki/Tour-de-Mars',
    imageUrl: 'https://source.unsplash.com/800x600/?mars,rover'
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
