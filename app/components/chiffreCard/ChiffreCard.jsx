"use client";

import React from "react";
import Image from "next/image";
import logoascci from "../../assets/logo_ascci.png";
import scoutben from "../../assets/scoutbene.png";
import fillegarcon from "../../assets/fillegarcon.png";
import benevole from "../../assets/benevole.png";
import region from "../../assets/region.png";
import district from "../../assets/district.png";
import groupe from "../../assets/groupe.png";

const ChiffreCard = () => {
  return (
    <section>
      <div
        className="flex lg:flex-row lg:px-32 md:w-full flex-col justify-between items-center 
        py-10 gap-5"
      >
        <div className="flex flex-col justify-center items-center mt-12 w-full gap-5">
          <Image src={scoutben} width={55} alt="Logo de l'ASCCI" />
          <p className="text-4xl font-black text-red-600">+30 000</p>
          <p
            className="text-[18px] text-[#14148a]"
            style={{ fontFamily: "Montserrat", fontWeight: 600 }}
          >
            Scouts et bénévoles
          </p>
        </div>

        <div className="flex flex-col justify-center items-center mt-12 w-full gap-5">
          <Image src={fillegarcon} width={80} alt="Logo de l'ASCCI" />
          <p className="text-4xl font-black text-red-600">25 000</p>
          <p
            className="text-[18px] text-[#14148a]"
            style={{ fontFamily: "Montserrat", fontWeight: 600 }}
          >
            Jeunes Filles et Garçons
          </p>
        </div>

        <div className="flex flex-col justify-center items-center mt-12 w-full gap-5">
          <Image src={benevole} width={70} alt="Logo de l'ASCCI" />
          <p className="text-4xl font-black text-red-600">5000</p>
          <p
            className="text-[18px] text-[#14148a]"
            style={{ fontFamily: "Montserrat", fontWeight: 600 }}
          >
            Bénévoles
          </p>
        </div>
      </div>

      {/* Deuxième colonnes */}
      <div
        className="flex lg:flex-row lg:px-32 md:w-full flex-col justify-between items-center 
        py-10 gap-5"
      >
        <div className="flex flex-col justify-center items-center mt-12 w-full gap-5">
          <Image src={region} width={80} alt="Logo de l'ASCCI" />
          <p className="text-4xl font-black text-red-600">14</p>
          <p
            className="text-[18px] text-[#14148a]"
            style={{ fontFamily: "Montserrat", fontWeight: 600 }}
          >
            Région Scoutes
          </p>
        </div>

        <div className="flex flex-col justify-center items-center mt-12 w-full gap-5">
          <Image src={district} width={80} alt="Logo de l'ASCCI" />
          <p className="text-4xl font-black text-red-600">145 </p>
          <p
            className="text-[18px] text-[#14148a]"
            style={{ fontFamily: "Montserrat", fontWeight: 600 }}
          >
            Districts
          </p>
        </div>

        <div className="flex flex-col justify-center items-center mt-12 w-full gap-5">
          <Image src={groupe} width={100} alt="Logo de l'ASCCI" />
          <p className="text-4xl font-black text-red-600">2300</p>
          <p
            className="text-[18px] text-[#14148a]"
            style={{ fontFamily: "Montserrat", fontWeight: 600 }}
          >
            Groupes Scouts
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChiffreCard;
