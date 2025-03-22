"use client"
import Hero from './components/Hero/Hero';
import ChiffreCard from './components/chiffreCard/ChiffreCard';
import Event from './components/Event/Event';


export default function Home() {

  return (
    <div>
      {/* Image background */}
      <Hero />

      {/* Les chiffres de l'ASCCI */}
      <ChiffreCard />

      {/* Event */}
      <Event />

      {/* Les pages : les routes */}
      <main>
        
      </main>
    </div>
  );
}
