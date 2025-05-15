import React from 'react';

const HistoireScoutisme = () => (
  <div className="space-y-4">
    <h2 className="text-4xl font-bold text-[#000080]">Histoire du Scoutisme</h2>
    <div className="prose max-w-none">
      <p>Contenu détaillé sur l&apos;histoire et les valeurs du mouvement scout...</p>
      {/* Ajoutez du contenu structuré ici */}
    </div>
    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
      <h3 className="font-semibold">Nos principes fondamentaux :</h3>
      <ul className="list-disc pl-5 mt-2">
        <li>Engagement envers les valeurs scoutes</li>
        <li>Éducation par l&apos;action</li>
        <li>Vie en communauté</li>
      </ul>
    </div>
  </div>
);

export default HistoireScoutisme;