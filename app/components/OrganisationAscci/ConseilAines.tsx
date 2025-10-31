import React from "react";
import imagefille from "../../assets/filleagir.png";
import Image from "next/image";

const ConseilAines = () => (
  <div className="space-y-4 text-[18px] text-[#14148a]">
    {/* <h2 className="text-4xl font-bold text-[#000080]">Conseil des ainés</h2> */}
    {/* <div className="prose max-w-none">
      <p>Contenu détaillé sur l&apos;histoire et les valeurs du mouvement scout...</p>
    </div> */}
    <div className="mt-6 p-4">
      <div className="flex lg:flex-row flex-col">
        <div className="w-full">
          <Image
            src={imagefille}
            width={300}
            alt="Logo de l'ASCCI"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full">
          <div className="p-4">
            {/* <p className="font-bold mb-2 text-xl">Composition</p> */}
            <p className="mb-2">
              Le Conseil des Aînés se compose de : <br />{" "}
            </p>
            <ul className="list-disc pl-5 mt-2 font-bold">
              <li>Membres de l’Association ayant au moins cinquante (50) ans
              d’âge, 20 ans de pratique régulière de scoutisme et qui n’ont pas
              de fonction au sein de l’Association.</li>
              <li>Bienfaiteurs et sympathisants de l’Association</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Attributions */}
      <div className="mt-6">
        <div className="flex flex-rows mb-2">
          <div className="bg-orange-500 w-2"></div>
          <h3 className="text-xl" style={{ fontFamily: 'ChunkFiveEx'}}>Attributions</h3>
        </div>
        <p>
            Il aide à la bonne marche de l’Association. <br />
            Il émet ses avis sur les dossiers qui lui sont soumis soit par le Comité National de Direction, soit par l’Equipe Nationale, ou toute autre structure de l’association. <br />
            Il conseille les partis en cas de conflits. <br />
            Il entretient des relations très fraternelles, amicales avec les Aînés des autres Associations sœurs au plan national et au plan international, avec l’Amitié Internationale des Scouts, Eclaireurs et Guides Aînés (A.I.D.S.E.G.A.). <br />
            Il participe aux côtés de l’Equipe nationale et du Comité National de Direction aux différentes manifestations d’ordre public ou religieux.
          </p>
      </div>

      {/* Mandature */}
      <div className="mt-6">
        <div className="flex flex-rows mb-2">
          <div className="bg-orange-500 w-2"></div>
          <h3 className="text-xl" style={{ fontFamily: 'ChunkFiveEx'}}>Mandature</h3>
        </div>

        <p>
           Le bureau du Conseil des Aînés est élu pour un mandat de trois (3) ans renouvelable une fois.
        </p>
      </div>

      {/* Bureau du Conseil des Aînés */}
      <div className="mt-6">
        <div className="flex flex-rows mb-2">
          <div className="bg-orange-500 w-2"></div>
          <h3 className="text-xl" style={{ fontFamily: 'ChunkFiveEx'}}>Bureau du Conseil des Aînés</h3>
        </div>
        <p className="mb-2">
          Il se compose de sept (7) membres ayant au moins trente (30) ans de pratique de scoutisme, à raison de : 
        </p>
        <ul className="list-disc pl-5 mt-2 font-bold">
              <li>1 président</li>
              <li>1 vice-président</li>
              <li>1 secrétaire Général</li>
              <li>1 trésorier</li>
              <li>2 membres ou conseillers</li>
            </ul>
      </div>
    </div>
  </div>
);

export default ConseilAines;
