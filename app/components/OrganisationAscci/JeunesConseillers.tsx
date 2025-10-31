import React from "react";
import imagefille from "../../assets/filleagir.png";
import Image from "next/image";

const JeunesConseillers = () => (
  <div className="space-y-4">
    <div className="mt-6 p-4 text-[18px] text-[#14148a]">
      <div className="flex lg:flex-row flex-col">
        <div className="w-full">
          <Image
            src={imagefille}
            width={300}
            alt="Logo de l'ASCCI"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full ">
          <div className="pl-4">
            Le Forum des Jeunes de l’Association des Scouts Catholique de Côte
            d’Ivoire offre aux jeunes de l’association la chance d'exprimer
            leurs points de vue, de faire des recommandations concernant les
            sujets qui les intéressent, et de développer les compétences
            nécessaires pour améliorer leur capacité à prendre part aux
            processus de prise de décision. Précédant l’assemblé générale, il
            offre également aux délégués du Forum des Jeunes l'opportunité
            d'écouter les points de vue des jeunes sur les questions qui les
            concernent.
          </div>
        </div>
      </div>
      <div className="w-full mt-2">
        Il a pour but d’offrir une plateforme aux jeunes de l’Ascci pour
        exprimer leurs opinions, participer aux processus de prise de décision
        au sein de l’association, et développer leurs compétences et leurs
        capacités de leadership, pour finalement façonner l'avenir de
        l’association. Le Forum des jeunes prépare et propose des
        recommandations à l’assemblé générale qui sont délibérées et, si elles
        sont votées, font partie des résolutions de l’assemblée générale. En
        outre, le Forum des Jeunes offre l'opportunité aux délégués et aux
        observateurs de développer les compétences pratiques nécessaires pour
        leur permettre de participer plus efficacement aux processus de prise de
        décision et assumer des rôles de leadership à l’intérieur et à
        l’extérieur de l’association pour leur propre développement personnel.
      </div>

      <div className="mt-4">
        <p>Ses objectifs sont de :</p>
        <ol className="list-decimal pl-5 mt-2 font-bold">
          <li>
            Fournir un environnement d'apprentissage par le biais de discussions
            sur des sujets d'intérêt et le partage d'expériences.
          </li>
          <li>
            Améliorer les capacités de prise de décision des participants pour
            l’association et la société en général.
          </li>
          <li>
            Développer l'amitié entre les participants et créer un réseau qui
            peut se poursuivre au-delà du Forum.
          </li>
          <li>
            Apporter une contribution pertinente et faire des propositions et
            des recommandations qui seront présentées à l’assemblée générale.
          </li>
        </ol>
      </div>
    </div>
  </div>
);

export default JeunesConseillers;
