import BlogCard from '../components/BlogCard';

const posts = [
  {
    title: 'AI Regulations: US, EU, China',
    summary: 'Comparative analysis of AI laws and policies across major regions.',
    wikiUrl: 'https://chatgpt.com/s/dr_6886059934e8819197ba14a82ff994bb',
    podcastUrl: 'https://notebooklm.google.com/notebook/0a4daa9d-36ca-4d24-99f4-039cac3f706a',
    imageUrl: `${process.env.PUBLIC_URL}/images/Global_AI_Regulation.png`
  },
  {
    title: 'EV Battery Tech: Tesla vs Rivian vs BYD',
    summary: 'Deep dive into EV battery innovations and roadmaps for 2025–2030.',
    wikiUrl: 'https://chatgpt.com/s/dr_688601a9ca988191882349e4307adb37',
    podcastUrl: 'https://notebooklm.google.com/notebook/56a1284c-cde5-4e8b-8f2d-fdbce07f8a51',
    imageUrl: `${process.env.PUBLIC_URL}/images/EV_Battery_Tech.png`
  },
  {
    title: 'Fintech in India & Southeast Asia (2025 Outlook)',
    summary: 'User adoption, regulations, and top players in fintech growth.',
    wikiUrl: 'https://chatgpt.com/s/dr_68860b53b6cc819190788e51c80814ab',
    podcastUrl: 'https://notebooklm.google.com/notebook/021034af-bdfd-43cf-89c6-be36554d5d5a',
    imageUrl: `${process.env.PUBLIC_URL}/images/Fintech_Output_2025.png`
  },
  {
    title: 'Remote Work Productivity: Global Study',
    summary: 'Impact of remote work since 2020: employee wellbeing & business results.',
    wikiUrl: 'https://chatgpt.com/s/dr_6886223c28f08191b16601118e303a13',
    podcastUrl: 'https://notebooklm.google.com/notebook/2f1abc7a-55bc-45fc-9fa8-05227d4c1e83',
    imageUrl: `${process.env.PUBLIC_URL}/images/Remote_Work_Productivity.png`
  },
  {
    title: 'Emerging Renewable Energy Technologies',
    summary: 'A futuristic race across Mars using AI-powered rovers.',
    wikiUrl: 'https://chatgpt.com/s/dr_688622fd98208191bbb9549e0342fa30',
    podcastUrl: 'https://notebooklm.google.com/notebook/ec1322ea-a0cf-4c7a-b37d-8b1ded99b75c',
    imageUrl: `${process.env.PUBLIC_URL}/images/Renewable_Energy.png`
  },
   {
    title: 'India’s Chemical Leap: Vision 2040 for Self-Reliance and Export Power',
    summary: 'A roadmap for reducing imports and making India a global chemical export hub by 2040.',
    wikiUrl: 'https://chatgpt.com/s/dr_688f0f2b9e788191bedf22d8a450f9b3',
    podcastUrl: 'https://notebooklm.google.com/notebook/e06c3e3e-5765-4d2f-87aa-f804b1953b4b',
    imageUrl: `${process.env.PUBLIC_URL}/images/India_Chemical_Trade.png`
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
