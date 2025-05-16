import React, { useState, useEffect } from "react";
import logoascci from "../../assets/logo_ascci.png";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  const [activeHash, setActiveHash] = useState<string | null>(null);
  const [visiblePopup, setVisiblePopup] = useState<number | null>(null);

  // Les trois lien en bas
  const menuBas = [
    {
      id: 1,
      name: "Qui sommes-nous ?",
      link: "/qui-sommes-nous",
      icon: "../../assetst/logo_ascci.png",
    },
    {
      id: 2,
      name: "Que faisons-nous ?",
      link: "/que-faisons-nous",
      icon: "../../assetst/logo_ascci.png",
    },
    {
      id: 3,
      name: "Où nous trouvez ?",
      link: "/ou-nous-trouvez",
      icon: "../../assetst/logo_ascci.png",
    },
  ];

   //  la visibilité des popups
  const togglePopup = (id: number) => {
    setVisiblePopup(visiblePopup === id ? null : id);
  };

  /* Les fonction pour les du Scout ASCCI */ 
  const isProjetPedagogique = () =>
    checkCurrentSectionScoutAscci({
      path: "/Scout-Ascci",
      hash: "#Projet-pédagogique",
    });

  const isMouvementScout = () =>
    checkCurrentSectionScoutAscci({
      path: "/Scout-Ascci",
      hash: "#Le-Mouvement-Scout",
      debug: true, // Active les logs pour debug
    });

  const isMethodeScoute = () =>
    checkCurrentSectionScoutAscci({
      path: "/Scout-Ascci",
      hash: "#Méthode-Scoute",
    });

  const isPromesseLoiScoutes = () =>
    checkCurrentSectionScoutAscci({
      path: "/Promesse-et-loi-scoutes",
      hash: "#Promesse-et-loi-scoutes",
    });

  const isHistoireScoutisme = () =>
    checkCurrentSectionScoutAscci({
      path: "/Histoire-du-scoutisme",
      hash: "#Histoire-du-scoutisme",
    });

  const isFormation = () =>
    checkCurrentSectionScoutAscci({
      path: "/Formation",
      hash: "#Formation",
    });
/*Fin fonction*/
  
  const sectionsScoutAscci = [
    {
      checkFn: isProjetPedagogique,
      id: "Projet-pedagogique",
      delay: 1,
    },
    {
      checkFn: isMouvementScout,
      id: "Le-Mouvement-Scout",
      delay: 10,
    },
    {
      checkFn: isMethodeScoute,
      id: "MethodeScoute",
      delay: 10,
    },
    {
      checkFn: isPromesseLoiScoutes,
      id: "PromesseLoiScoutes",
      delay: 10,
    },
    {
      checkFn: isHistoireScoutisme,
      id: "HistoireScoutisme",
      delay: 10,
    },
    {
      checkFn: isFormation,
      id: "Formation",
      delay: 10,
    },
  ];

    // pour afficher le lien et le focus à chaque clique du bloc Scout Ascci
  const checkCurrentSectionScoutAscci = (section: {
    path: string;
    hash: string;
    debug?: boolean;
  }) => {
    if (typeof window === "undefined") return false;

    if (section.debug) {
      console.log("checking section:", section.path + section.hash);
      console.log("current:", window.location.pathname + window.location.hash);
    }

    return (
      window.location.pathname === section.path &&
      window.location.hash === section.hash
    );
  };

  // Gestion unifiée du focus au chargement du bloc Scout Ascci
  useEffect(() => {
    sectionsScoutAscci.forEach(({ checkFn, id, delay }) => {
      if (checkFn()) {
        setActiveHash(id);
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            element.focus({ preventScroll: true });
          }
        }, delay);
      }
    });
  }, []);

  /* Les fonctions pour les du Organisation ASCCI */ 
const isOrganisation = () =>
    checkCurrentSectionOrganisationAscci({
      path: "/Organisation-Ascci",
      hash: "#Organisation",
    });

  const isEquipeNationale = () =>
    checkCurrentSectionOrganisationAscci({
      path: "/Equipe-nationale",
      hash: "#Equipe-nationale",
    });

  const isConseilNationalDirection = () =>
    checkCurrentSectionOrganisationAscci({
      path: "/Conseil-national-direction",
      hash: "#Conseil-national-direction",
    });

  const isConseilAines = () =>
    checkCurrentSectionOrganisationAscci({
      path: "/Conseil-des-ainés",
      hash: "#Conseil-des-aines",
    });

  const isCommissaireComptes = () =>
    checkCurrentSectionOrganisationAscci({
      path: "/Commissaire-aux-comptes",
      hash: "#Commissaire-aux-comptes",
    });

  const isJeunesConseillers = () =>
    checkCurrentSectionOrganisationAscci({
      path: "/Jeunes-conseillers",
      hash: "#Jeunes-conseillers",
    });
  /*Fin*/ 

    const sectionsOrganisationAscci = [
    {
      checkFn: isOrganisation,
      id: "Organisation",
      delay: 1,
    },
    {
      checkFn: isEquipeNationale,
      id: "Equipe-nationale",
      delay: 10,
    },
    {
      checkFn: isConseilNationalDirection,
      id: "Conseil-national-direction",
      delay: 10,
    },
    {
      checkFn: isConseilAines,
      id: "Conseil-des-aines",
      delay: 10,
    },
    {
      checkFn: isCommissaireComptes,
      id: "Commissaire-aux-comptes",
      delay: 10,
    },
    {
      checkFn: isJeunesConseillers,
      id: "Jeunes-conseillers",
      delay: 10,
    },
  ];

      // pour afficher le lien et le focus à chaque clique du bloc Organisation Ascci
  const checkCurrentSectionOrganisationAscci = (section: {
    path: string;
    hash: string;
    debug?: boolean;
  }) => {
    if (typeof window === "undefined") return false;

    if (section.debug) {
      console.log("checking section:", section.path + section.hash);
      console.log("current:", window.location.pathname + window.location.hash);
    }

    return (
      window.location.pathname === section.path &&
      window.location.hash === section.hash
    );
  };

  // Gestion unifiée du focus au chargement du bloc Scout Ascci
  useEffect(() => {
    sectionsOrganisationAscci.forEach(({ checkFn, id, delay }) => {
      if (checkFn()) {
        setActiveHash(id);
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            element.focus({ preventScroll: true });
          }
        }, delay);
      }
    });
  }, []);


/*Début Jeunes*/ 
    /* Les fonction pour du Jeunes */ 
  const isEnvironnement = () =>
    checkCurrentSectionJeunes({
      path: "/Environnement",
      hash: "#Environnement",
    });
  const isEducation = () =>
    checkCurrentSectionJeunes({
      path: "/Education",
      hash: "#Education",
    });
  const isPaix = () =>
    checkCurrentSectionJeunes({
      path: "/Paix",
      hash: "#Paix",
    });
   const isDiversiteInclusion = () =>
    checkCurrentSectionJeunes({
      path: "/Diversité-et-inclusion",
      hash: "#Diversite-et-inclusion",
    });
   const isActionHumanitaire = () =>
    checkCurrentSectionJeunes({
      path: "/Diversite-et-inclusion",
      hash: "#Diversite-et-inclusion",
    });
   const isCultureTradition = () =>
    checkCurrentSectionJeunes({
      path: "/Culture-et-tradition",
      hash: "#Culture-et-tradition",
    });
/*Fin fonction*/

  // pour afficher le lien et le focus à chaque clique du bloc Jeunes
  const checkCurrentSectionJeunes = (section: {
    path: string;
    hash: string;
    debug?: boolean;
  }) => {
    if (typeof window === "undefined") return false;

    if (section.debug) {
      console.log("checking section:", section.path + section.hash);
      console.log("current:", window.location.pathname + window.location.hash);
    }

    return (
      window.location.pathname === section.path &&
      window.location.hash === section.hash
    );
  };

      const sectionsJeunes = [
    {
      checkFn: isEnvironnement,
      id: "Environnement",
      delay: 1,
    },
    {
      checkFn: isEducation,
      id: "Education",
      delay: 1,
    },
    {
      checkFn: isPaix,
      id: "Paix",
      delay: 1,
    },
    {
      checkFn: isDiversiteInclusion,
      id: "Diversite-et-inclusion",
      delay: 1,
    },
    {
      checkFn: isActionHumanitaire,
      id: "Action-humanitaire",
      delay: 1,
    },
    {
      checkFn: isCultureTradition,
      id: "Culture-et-tradition",
      delay: 1,
    },
  ];
    // Gestion unifiée du focus au chargement du bloc Jeunes
  useEffect(() => {
    sectionsJeunes.forEach(({ checkFn, id, delay }) => {
      if (checkFn()) {
        setActiveHash(id);
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            element.focus({ preventScroll: true });
          }
        }, delay);
      }
    });
  }, []);

  /*Fin Jeunes*/

  /*Début Adules*/ 
    /* Les fonction pour du Jeunes */ 
  const isBadgeBois = () =>
    checkCurrentSectionAdultes({
      path: "/BadgeBois",
      hash: "#BadgeBois",
    });
  const isGnepka = () =>
    checkCurrentSectionAdultes({
      path: "/Gnépka",
      hash: "#Gnepka",
    });
  const isStappro = () =>
    checkCurrentSectionAdultes({
      path: "/Stappro",
      hash: "#Stappro",
    });
   const isCampFormationRegion = () =>
    checkCurrentSectionAdultes({
      path: "/Diversite-et-inclusion",
      hash: "#Diversite-et-inclusion",
    });

/*Fin fonction*/

  // pour afficher le lien et le focus à chaque clique du bloc Jeunes
  const checkCurrentSectionAdultes = (section: {
    path: string;
    hash: string;
    debug?: boolean;
  }) => {
    if (typeof window === "undefined") return false;

    if (section.debug) {
      console.log("checking section:", section.path + section.hash);
      console.log("current:", window.location.pathname + window.location.hash);
    }

    return (
      window.location.pathname === section.path &&
      window.location.hash === section.hash
    );
  };

      const sectionsAdultes = [
    {
      checkFn: isBadgeBois,
      id: "BadgeBois",
      delay: 1,
    },
    {
      checkFn: isGnepka,
      id: "Gnepka",
      delay: 1,
    },
    {
      checkFn: isStappro,
      id: "Stappro",
      delay: 1,
    },
    {
      checkFn: isCampFormationRegion,
      id: "Camp-formation-en-region",
      delay: 1,
    }
  ];
    // Gestion unifiée du focus au chargement du bloc Jeunes
  useEffect(() => {
    sectionsAdultes.forEach(({ checkFn, id, delay }) => {
      if (checkFn()) {
        setActiveHash(id);
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            element.focus({ preventScroll: true });
          }
        }, delay);
      }
    });
  }, []);
  
  /*Fin Adules*/ 

    /*Début Programmes*/ 
    /* Les fonction pour du Jeunes */ 
  const isProjetPlanete = () =>
    checkCurrentSectionProgrammes({
      path: "/Projet-planète",
      hash: "#ProjetPlanete",
    });
  const isMessagePaix = () =>
    checkCurrentSectionProgrammes({
      path: "/Message-de-la-paix",
      hash: "#Message-de-la-paix",
    });
/*Fin fonction*/

  // pour afficher le lien et le focus à chaque clique du bloc Jeunes
  const checkCurrentSectionProgrammes = (section: {
    path: string;
    hash: string;
    debug?: boolean;
  }) => {
    if (typeof window === "undefined") return false;

    if (section.debug) {
      console.log("checking section:", section.path + section.hash);
      console.log("current:", window.location.pathname + window.location.hash);
    }

    return (
      window.location.pathname === section.path &&
      window.location.hash === section.hash
    );
  };

      const sectionsProgrammes = [
    {
      checkFn: isProjetPlanete,
      id: "ProjetPlanete",
      delay: 1,
    },
    {
      checkFn: isMessagePaix,
      id: "MessagePaix",
      delay: 1,
    },
  ];
    // Gestion unifiée du focus au chargement du bloc Jeunes
  useEffect(() => {
    sectionsProgrammes.forEach(({ checkFn, id, delay }) => {
      if (checkFn()) {
        setActiveHash(id);
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            element.focus({ preventScroll: true });
          }
        }, delay);
      }
    });
  }, []);
  
  /*Fin Programmes*/ 

  return (
    <>
      <div
        className="w-full flex flex-col lg:justify-start lg:items-start lg:text-start lg:py-[40px] lg:gap-3 md:flex-row
    md:w-full md:flex md:justify-center md:items-center md:text-center md:gap-[5px]
    sm:flex sm:justify-center sm:items-center sm:text-center sm:flex-col justify-center items-center
    "
      >
        <div
          className="flex justify-center items-start"
          data-aos="zoom-in-down"
          data-aos-delay="300"
        >
          <Image
            src={logoascci}
            width={180}
            height={180}
            alt="Logo de l'ASCCI"
            className="py-15"
          />
        </div>

        {/* Texte principale */}
        <div className="text-white text-prin">
          <h1
            className="text-6xl titre-prin"
            data-aos="fade-up"
            data-aos-delay="600"
            style={{ fontFamily: "ChunkFiveEx" }}
          >
            AGIR <br /> POUR UNE <br /> GÉNÉRATION <br /> INNOVANTE <br /> ET
            RÉSILIENTE
          </h1>

          <div
            className="lg:justify-start my-5 lg:items-start lg:text-start sm:flex 
        sm:justify-center sm:items-center sm:text-center"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            {/* Bouton direction sur le site d'adhésion */}
            <Link
              href="https://adhesion.scoutascci.org/"
              target="_blank"
              className="bg-gradient-to-l from-orange-500 to-orange-700 w-[200px] h-[50px] rounded-2xl text-2xl flex justify-center 
            items-center font-semibold sm:flex sm:justify-center sm:items-center sm:text-center
            md:flex md:justify-center md:items-center md:text-center
            "
              style={{ fontFamily: "MontserratRegular" }}
            >
              Inscrivez-vous
            </Link>
          </div>
        </div>
      </div>

      {/* Les trois liens en bas */}
      <div className="w-[15%] border-r-2 border-white  mt-[-50px] hidden lg:block">
        <ul className="lg:flex lg:flex-col">
          {menuBas.map(({ id, name }) => (
            <div key={id} className="flex items-center gap-1">
              <Link
                className="text-white cursor-pointer p-1 hover:border-orange-600
                hover:border-b-4 focus:border-orange-600 focus:border-b-4"
                style={{ fontFamily: "MontserratRegular" }}
                href=""
                onClick={() => togglePopup(id)}
              >
                {name}
              </Link>

              {/* Popup unique pour chaque lien l'id est égale 1 */}

              {visiblePopup === id && id === 1 && (
                <div>
                  <div
                    className="fixed top-10 left-0 w-screen h-screen bg-[#0e0d0d88] bg-opacity-30"
                    onClick={() => togglePopup(id)}
                  >
                    <div className="scroll-auto bg-white py-10 mt-48">
                      <div className="flex justify-evenly items-start">
                        <div>
                          <h1
                            className="text-[#000080] text-2xl"
                            style={{ fontFamily: "ChunkFiveEx" }}
                          >
                            Scout ASCCI
                          </h1>
                          <div className="flex flex-col justify-start items-start mt-5 gap-2 text-[#000080] text-semibold">
                            <Link
                              href=""
                              className={`${
                                activeHash === "Le-Mouvement-Scout" ||
                                isMouvementScout()
                                  ? null
                                  : null
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href =
                                  "/Scout-Ascci#Le-Mouvement-Scout";
                                setActiveHash("Le-Mouvement-Scout");
                              }}
                            >
                              Le Mouvement Scout
                            </Link>
                            <Link
                              href=""
                              className={`${
                                activeHash === "Projet-pédagogique" ||
                                isProjetPedagogique()
                                  ? null
                                  : null
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href =
                                  "/Scout-Ascci#Projet-pédagogique";
                                setActiveHash("Projet-pédagogique");
                              }}
                            >
                              Projet pédagogique
                            </Link>
                            <Link
                              href=""
                              className={`${
                                activeHash === "Méthode-scoute" ||
                                isMethodeScoute()
                                  ? null
                                  : null
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href =
                                  "/Scout-Ascci#Méthode-scoute";
                                setActiveHash("Méthode-scoute");
                              }}
                            >
                              Méthode scoute
                            </Link>
                            <Link
                              href=""
                              className={`${
                                activeHash === "Promesse-et-loi-scoutes" ||
                                isPromesseLoiScoutes()
                                  ? null
                                  : null
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href =
                                  "/Scout-Ascci#Promesse-et-loi-scoutes";
                                setActiveHash("Promesse-et-loi-scoutes");
                              }}
                            >
                              Promesse et loi scoutes
                            </Link>
                            <Link
                              href=""
                              className={`${
                                activeHash === "Histoire-du-scoutisme" ||
                                isHistoireScoutisme()
                                  ? null
                                  : null
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href =
                                  "/Scout-Ascci#Histoire-du-scoutisme";
                                setActiveHash("Histoire-du-scoutisme");
                              }}
                            >
                              Histoire du scoutisme
                            </Link>
                            <Link
                              href=""
                              className={`${
                                activeHash === "Formation" || isFormation()
                                  ? null
                                  : null
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "/Scout-Ascci#Formation";
                                setActiveHash("Histoire-du-scoutisme");
                              }}
                            >
                              Formation
                            </Link>
                          </div>
                        </div>

                        <div>
                          <h1
                            className="text-[#000080] text-2xl"
                            style={{ fontFamily: "ChunkFiveEx" }}
                          >
                            Organisation ASCCI
                          </h1>
                          <div className="flex flex-col justify-start items-start mt-5 gap-2 text-[#000080] text-semibold">
                            <Link 
                              href=""
                              className={`${
                                activeHash === "Organisation" || isOrganisation()
                                  ? null
                                  : null
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "/Organisation-Ascci#Organisation";
                                setActiveHash("Organisation");
                              }}
                            >Organigramme</Link>
                            <Link href=""
                              className={`${
                                activeHash === "Equipe-nationale" || isEquipeNationale()
                                  ? null
                                  : null
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "/Organisation-Ascci#Equipe-nationale";
                                setActiveHash("Equipe-nationale");
                              }}
                            >Equipe nationale</Link>
                            <Link href=""
                            className={`${
                                activeHash === "Conseil-national-direction" || isConseilNationalDirection()
                                  ? null
                                  : null
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "/Organisation-Ascci#Conseil-national-direction";
                                setActiveHash("Conseil-national-direction");
                              }}
                            >
                            CND
                            </Link>
                            <Link href=""
                              className={`${
                                activeHash === "Conseil-des-ainés" || isConseilAines()
                                  ? null
                                  : null
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "/Organisation-Ascci#Conseil-des-ainés";
                                setActiveHash("Conseil-des-ainés");
                              }}
                            >Conseil des ainés</Link>
                            <Link href=""
                              className={`${
                                activeHash === "Commissaire-aux-comptes" || isCommissaireComptes()
                                  ? null
                                  : null
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "/Organisation-Ascci#Commissaire-aux-comptes";
                                setActiveHash("Commissaire-aux-comptes");
                              }}
                            >Commissaire aux comptes</Link>
                            <Link href=""
                              className={`${
                                activeHash === "Jeunes-conseillers" || isJeunesConseillers()
                                  ? null
                                  : null
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "/Organisation-Ascci#Jeunes-conseillers";
                                setActiveHash("Jeunes-conseillers");
                              }}
                            >Jeunes Conseillers</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Popup unique pour chaque lien l'id est égale 2 */}
              {visiblePopup === id && id === 2 && (
                <div>
                  <div
                    className="fixed top-10 left-0 w-screen h-screen bg-[#0e0d0d88] bg-opacity-30"
                    onClick={() => togglePopup(id)}
                  >
                    <div className="bg-white py-10 mt-48">
                      <div className="flex justify-evenly items-start mt-2">
                        <div className="text-[#000080]">
                          <div>
                            <h1
                              className="text-2xl"
                              style={{ fontFamily: "ChunkFiveEx" }}
                            >
                              Jeunes
                            </h1>
                          </div>
                          <div className="flex flex-col justify-start items-start mt-5 gap-2 text-semibold">
                            <Link href=""
                              className={`${
                                activeHash === "Environnement" || isEnvironnement()
                                  ? null
                                  : null
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "/Jeunes#Environnement";
                                setActiveHash("Environnement");
                              }}
                            >Environnement</Link>
                            <Link href=""
                              className={`${
                                activeHash === "Education" || isEducation()
                                  ? null
                                  : null
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "/Jeunes#Education";
                                setActiveHash("Education");
                              }}
                            >Education</Link>
                            <Link href=""
                              className={`${
                                activeHash === "Paix" || isPaix()
                                  ? null
                                  : null
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "/Jeunes#Paix";
                                setActiveHash("Paix");
                              }}
                            >Paix</Link>
                            <Link href=""
                              className={`${
                                activeHash === "Diversité-et-inclusion" || isDiversiteInclusion()
                                  ? null
                                  : null
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "/Jeunes#Diversité-et-inclusion";
                                setActiveHash("Diversité-et-inclusion");
                              }}
                            >Diversité et inclusion</Link>
                            <Link href=""
                              className={`${
                                activeHash === "ActionHumanitaire" || isActionHumanitaire()
                                  ? null
                                  : null
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "/Jeunes#Action-humanitaire";
                                setActiveHash("Action-humanitaire");
                              }}
                            >Action humanitaire</Link>
                            <Link href=""
                              className={`${
                                activeHash === "CultureTradition" || isCultureTradition()
                                  ? null
                                  : null
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "/Jeunes#Culture-et-tradition";
                                setActiveHash("Culture-et-tradition");
                              }}
                            >Culture et tradition</Link>
                          </div>
                        </div>

                        <div className="text-[#000080]">
                          <div>
                            <h1
                              className="text-2xl"
                              style={{ fontFamily: "ChunkFiveEx" }}
                            >
                              Adultes
                            </h1>
                          </div>
                          <div className="flex flex-col justify-start items-start mt-5 gap-2 text-semibold">
                            <Link href=""
                              className={`${
                                activeHash === "BadgeBois" || isBadgeBois()
                                  ? null
                                  : null
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "/Adultes#Badge-de-bois";
                                setActiveHash("Badge-de-bois");
                              }}
                            >Badge de bois</Link>
                            <Link href=""
                              className={`${
                                activeHash === "Gnépka" || isGnepka()
                                  ? null
                                  : null
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "/Adultes#Gnépka";
                                setActiveHash("Gnépka");
                              }}
                            >Gnékpa</Link>
                            <Link href=""
                              className={`${
                                activeHash === "Stappro" || isStappro()
                                  ? null
                                  : null
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "/Adultes#Stappro";
                                setActiveHash("Stappro");
                              }}
                            >Stappro</Link>
                            <Link href=""
                              className={`${
                                activeHash === "CampFormationRegion" || isCampFormationRegion()
                                  ? null
                                  : null
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "/Adultes#Camp-formation-en-region";
                                setActiveHash("Camp-formation-en-region");
                              }}
                            >Camp formation en région</Link>
                          </div>
                        </div>

                        <div className="text-[#000080]">
                          <h1
                            className="text-2xl"
                            style={{ fontFamily: "ChunkFiveEx" }}
                          >
                            Programmes Internationaux
                          </h1>
                          <div className="flex flex-col justify-start items-start mt-5 gap-2 text-semibold">
                            <Link href=""
                              className={`${
                                activeHash === "Projet-planète" || isProjetPlanete()
                                  ? null
                                  : null
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "/Programmes-Internationaux#Projet-planète";
                                setActiveHash("Projet-planète");
                              }}
                            >Projet planète</Link>
                            <Link href=""
                               className={`${
                                activeHash === "Message-de-la-paix" || isProjetPlanete()
                                  ? null
                                  : null
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "/Programmes-Internationaux#Message-de-la-paix";
                                setActiveHash("Message-de-la-paix");
                              }}
                            >Messager de la paix</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Popup unique pour chaque lien l'id est égale 3 */}
              {visiblePopup === id && id === 3 && (
                <div>
                  <div
                    className="fixed top-10 left-0 w-screen h-screen bg-[#0e0d0d88] bg-opacity-30"
                    onClick={() => togglePopup(id)}
                  >
                    <div className="bg-white py-10 mt-48">
                      <div className="flex justify-evenly items-start mt-2">
                        <div>
                          <h1
                            className="text-[[#000080]] text-2xl"
                            style={{ fontFamily: "ChunkFiveEx" }}
                          >
                            Trouvez nous ici ?
                          </h1>

                          <div className="flex flex-col justify-start items-start gap-2 text-[[#000080]] text-semibold">
                            <Link href="">Région</Link>
                            <Link href="">District</Link>
                            <Link href="">Groupe</Link>
                            <Link href="">Dans le monde</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
