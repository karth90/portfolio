import Hero from './Hero';
import WorkExperience from './components/WorkExperience';
import Companies from './components/Companies';
import Innovation from './components/Innovation';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Companies />
      <WorkExperience />
      <Innovation />
    </main>
  );
}
