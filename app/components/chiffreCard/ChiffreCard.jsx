"use client";

import React from "react";
import Image from "next/image";
import scoutben from "../../assets/scoutbene.png";
import fillegarcon from "../../assets/fillegarcon.png";
import benevole from "../../assets/benevole.png";
import region from "../../assets/region.png";
import district from "../../assets/district.png";
import groupe from "../../assets/groupe.png";

const ChiffreCard = () => {
  const stats = [
    { img: scoutben, width: 55, value: "+30 000", text: "Scouts et bénévoles" },
    { img: fillegarcon, width: 80, value: "25 000", text: "Jeunes Filles et Garçons" },
    { img: benevole, width: 70, value: "5000", text: "Bénévoles" },
    { img: region, width: 80, value: "15", text: "Région Scoutes" },
    { img: district, width: 80, value: "145", text: "Districts" },
    { img: groupe, width: 100, value: "2300", text: "Groupes Scouts" },
    
  ];

  const StatItem = ({ img, width, value, text }) => (
    <div className="flex flex-col justify-center items-center mt-12 w-full gap-5">
      <Image src={img} width={width} alt={text} />
      <p className="text-4xl font-black text-red-600">{value}</p>
      <p className="text-[18px] text-[#14148a]" style={{ fontFamily: "Montserrat", fontWeight: 600 }}>
        {text}
      </p>
    </div>
  );

  return (
    <section>
      <div className="flex lg:flex-row lg:px-32 md:w-full flex-col justify-between items-center py-10 gap-5">
        {stats.slice(0, 3).map((item, i) => (
          <StatItem key={i} {...item} />
        ))}
      </div>
      <div className="flex lg:flex-row lg:px-32 md:w-full flex-col justify-between items-center py-10 gap-5">
        {stats.slice(3).map((item, i) => (
          <StatItem key={i+3} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ChiffreCard;


// Pour compter automatique les nombres
// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import logoascci from "../../assets/logo_ascci.png";
// import scoutben from "../../assets/scoutbene.png";
// import fillegarcon from "../../assets/fillegarcon.png";
// import benevole from "../../assets/benevole.png";
// import region from "../../assets/region.png";
// import district from "../../assets/district.png";
// import groupe from "../../assets/groupe.png";

// const AnimatedCounter = ({ value, prefix = "" }) => {
//   const [count, setCount] = useState(0);
//   const duration = 10000; // Durée de l'animation en ms
//   const startTime = useRef(null);
//   const requestRef = useRef();

//   const animate = (timestamp) => {
//     if (!startTime.current) startTime.current = timestamp;
//     const progress = timestamp - startTime.current;
//     const percentage = Math.min(progress / duration, 1);
//     // Easing function pour un effet plus naturel
//     const easedPercentage = 1 - Math.pow(1 - percentage, 3);
//     const currentCount = Math.floor(easedPercentage * value);
    
//     setCount(currentCount);

//     if (percentage < 1) {
//       requestRef.current = requestAnimationFrame(animate);
//     }
//   };

//   useEffect(() => {
//     requestRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(requestRef.current);
//   }, [value]);

//   return (
//     <p className="text-4xl font-black text-red-600">
//       {prefix}{count.toLocaleString()}
//     </p>
//   );
// };

// const StatCard = ({ imageSrc, imageWidth, altText, value, description, prefix = "" }) => {
//   return (
//     <div className="flex flex-col justify-center items-center mt-12 w-full gap-5">
//       <Image src={imageSrc} width={imageWidth} height={imageWidth} alt={altText} />
//       <AnimatedCounter value={value} prefix={prefix} />
//       <p
//         className="text-[18px] text-[#14148a]"
//         style={{ fontFamily: "Montserrat", fontWeight: 600 }}
//       >
//         {description}
//       </p>
//     </div>
//   );
// };

// const ChiffreCard = () => {
//   return (
//     <section>
//       {/* Première ligne */}
//       <div className="flex lg:flex-row lg:px-32 md:w-full flex-col justify-between items-center py-10 gap-5">
//         <StatCard 
//           imageSrc={scoutben}
//           imageWidth={55}
//           altText="Scouts et bénévoles"
//           value={30000}
//           description="Scouts et bénévoles"
//           prefix="+"
//         />

//         <StatCard 
//           imageSrc={fillegarcon}
//           imageWidth={80}
//           altText="Jeunes Filles et Garçons"
//           value={25000}
//           description="Jeunes Filles et Garçons"
//         />

//         <StatCard 
//           imageSrc={benevole}
//           imageWidth={70}
//           altText="Bénévoles"
//           value={5000}
//           description="Bénévoles"
//         />
//       </div>

//       {/* Deuxième ligne */}
//       <div className="flex lg:flex-row lg:px-32 md:w-full flex-col justify-between items-center py-10 gap-5">
//         <StatCard 
//           imageSrc={region}
//           imageWidth={80}
//           altText="Région Scoutes"
//           value={14}
//           description="Région Scoutes"
//         />

//         <StatCard 
//           imageSrc={district}
//           imageWidth={80}
//           altText="Districts"
//           value={145}
//           description="Districts"
//         />

//         <StatCard 
//           imageSrc={groupe}
//           imageWidth={100}
//           altText="Groupes Scouts"
//           value={2300}
//           description="Groupes Scouts"
//         />
//       </div>
//     </section>
//   );
// };

// export default ChiffreCard;