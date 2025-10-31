import React from "react";
import imagefille from "../../assets/filleagir.png";
import Image from "next/image";

const ConseilNationalDirection = () => (
  <div className="space-y-4 h-full">
    <div className="mt-6 p-4 text-[18px]">
      <div className="flex lg:flex-row flex-col">
        <div className="w-full text-[#14148a]">
          Le Conseil National de Direction (CND) est l’organe de gouvernance, de
          suivi et de contrôle stratégique de l’ASCCI. Il garantit la bonne
          exécution des décisions de l’Assemblée Générale, la transparence de la
          gestion, et le respect des valeurs du Scoutisme Catholique, véritable
          pilier de la stabilité institutionnelle, le CND s’inspire des
          standards internationaux en matière de bonne gouvernance, de
          redevabilité et de leadership intergénérationnel.
        </div>
        <div className="w-full">
          <Image
            src={imagefille}
            width={300}
            alt="Logo de l'ASCCI"
            className="w-full rounded-2xl"
          />
        </div>
      </div>
      <div className="mt-6">
        <div className="flex flex-rows mb-2">
          <div className="bg-gradient-to-l from-orange-500 to-orange-700 lg:w-[45%] rounded-2xl md:w-full">
            <h3 className="text-xl p-2 text-white" style={{ fontFamily: 'ChunkFiveEx' }}>
              1. Composition et Qualité des Membres
            </h3>
          </div>
        </div>
        <div className="text-[#14148a]">
          <p>
          Les membres du CND sont choisis parmi les anciens responsables
          nationaux ou régionaux ayant marqué la vie de l’ASCCI par leur
          engagement, leur intégrité et leur sens du service.
        </p>

        <p>Peuvent être membres :</p>
        <ul className="list-disc pl-5 mt-2 font-bold">
          <li>Les anciens Commissaires Nationaux</li>
          <li>Les anciens membres de l’Équipe Nationale</li>
          <li>Les anciens Commissaires Régionaux</li>
          <li>Les anciens membres des équipes régionales</li>
        </ul>
        <p>
          Le CND compte sept (7) membres, proposés par le Conseil des Aînés en
          accord avec le Commissaire National, puis élus en Assemblée Générale.{" "}
          <br />
          Le Président du CND est élu par ses pairs.
        </p>
        <p>Composition du CND:</p>
        <ul className="list-disc pl-5 mt-2 font-bold">
          <li>1 Président</li>
          <li>1 Vice-président</li>
          <li>1 Secrétaire Général</li>
          <li>1 Secrétaire Général Adjoint</li>
          <li>1 Trésorier</li>
          <li>2 Membres</li>
        </ul>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex flex-rows mb-2">
          <div className="bg-gradient-to-l from-orange-500 to-orange-700 lg:w-[30%] rounded-2xl md:w-full">
            <h3 className="text-xl p-2 text-white" style={{ fontFamily: 'ChunkFiveEx'}}>
              2. Rôle et Attributions
            </h3>
          </div>
        </div>
        <p className="text-[#14148a]">
          Le Conseil National de Direction assure un rôle de garant moral et stratégique de l’ASCCI. <br />
          Il Contrôle la gestion du patrimoine; Veille à la bonne exécution du budget annuel et à la conformité des dépenses ; <br />
          Apporte un appui aux projets de coopération nationale et internationale ; <br />
          Conseille les organes dirigeants dans leurs décisions et orientations ; <br />
          Joue un rôle de médiation et d’arbitrage en cas de litiges internes ; <br />
          Participe aux manifestations officielles, religieuses et publiques au nom du Mouvement ; <br />
          Procède à l’investiture du Commissaire National et au suivi de son mandat. <br />

        </p>      
      </div>

      <div className="mt-6">
        <div className="flex flex-rows mb-2">
          <div className="bg-gradient-to-l from-orange-500 to-orange-700 lg:w-[30%] rounded-2xl md:w-full">
            <h3 className="text-xl p-2 text-white" style={{ fontFamily: 'ChunkFiveEx'}}>
              3. Mandat
            </h3>
          </div>
        </div>
        <p className="text-[#14148a]">
          La durée du mandat du CND est de trois (3) ans, renouvelable une seule fois. <br />
          Le Président compose son bureau et répartit les attributions spécifiques des membres de l’équipe. <br />
          Le CND se réunit régulièrement pour : <br />
          <ul className="list-disc pl-5 mt-2 font-bold">
            <li>Examiner les rapports d’activités et financiers ;</li>
            <li>Évaluer la mise en œuvre des décisions de l’Assemblée Générale ;</li>
            <li>Formuler des avis stratégiques et recommandations à l’Équipe Nationale et au Bureau National. </li>
          </ul>
        </p>      
      </div>
    </div>
  </div>
);

export default ConseilNationalDirection;
