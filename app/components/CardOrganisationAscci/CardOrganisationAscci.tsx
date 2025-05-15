import React, { useState, useEffect } from "react";
import Link from "next/link";
import Organisation from "../OrganisationAscci/Organisation";
import EquipeNationale from "../OrganisationAscci/EquipeNationale";
import ConseilNationalDirection from "../OrganisationAscci/ConseilNationalDirection";
import ConseilAines from "../OrganisationAscci/ConseilAines";
import CommissaireComptes from "../OrganisationAscci/CommissaireComptes";
import JeunesConseillers from "../OrganisationAscci/JeunesConseillers";

const CONTENT_COMPONENTS = {
  Organisation: Organisation,
  "Equipe-nationale": EquipeNationale,
  "Conseil-national-direction": ConseilNationalDirection,
  "Conseil-des-ainés": ConseilAines,
  "Commissaire-aux-comptes": CommissaireComptes,
  "Jeunes-conseillers": JeunesConseillers,
};

const CardOrganisationAscci = () => {
  //   useEffect(() => {
  //   if (initialActiveLink) {
  //     const key = initialActiveLink.replace("/", "");
  //     setActiveContent(contents[key as keyof typeof contents] || "");
  //   }
  // }, [initialActiveLink]);

  // Détecter le hash au chargement et lors des changements
  useEffect(() => {
    const handleHashChange = () => {
      if (typeof window !== "undefined") {
        const hash = window.location.hash.substring(1); // Retire le #
        setActiveComponent(hash as keyof typeof CONTENT_COMPONENTS);
        window.history.pushState(null, "", `#${hash}`);
      }
    };

    // Écouter les changements de hash
    window.addEventListener("hashchange", handleHashChange);

    // Vérifier le hash initial
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const [activeComponent, setActiveComponent] = useState<
    keyof typeof CONTENT_COMPONENTS | null
  >(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.substring(1);
      if (CONTENT_COMPONENTS.hasOwnProperty(hash)) {
        setActiveComponent(hash as keyof typeof CONTENT_COMPONENTS);
      }
    }
  }, []);

  const handleLinkClick = (id: keyof typeof CONTENT_COMPONENTS) => {
    console.log(id);

    setActiveComponent(id);
    window.history.pushState(null, "", `#${id}`);
  };

  const ActiveComponent = activeComponent
    ? CONTENT_COMPONENTS[activeComponent]
    : null;

  return (
    <div className="lg:mx-40 md:mx-10 lg:mt-[-15px] mb-15">
      <div className="lg:bg-white lg:h-[100vh]">
        <div className="p-8">
          {/* Afficher  */}
          {/* <div className="hidden lg:flex lg:flex-row justify-between items-center gap-2 text-black font-extrabold">
            {Object.keys(CONTENT_COMPONENTS).map((id) => (
              <Link
                key={id}
                href={`#${id}`}
                className={`px-6 py-2 rounded-lg transition-all ${
                  activeComponent === id
                    ? "bg-[#000080] text-white"
                    : "hover:bg-gray-100 text-[#000080]"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(id as keyof typeof CONTENT_COMPONENTS);
                }}
              >
                {id.split("-").join(" ")}
              </Link>
            ))}
          </div> */}

          {/* Version mobile - Liste déroulante */}
          {/* <div className="w-full lg:hidden">
            <select
              className="w-full p-3 rounded-lg bg-gray-100 text-[#000080] font-extrabold"
              value={activeComponent || ""}
              onChange={(e) => {
                const selectedId = e.target
                  .value as keyof typeof CONTENT_COMPONENTS;
                handleLinkClick(selectedId);
                window.location.hash = `#${selectedId}`;
              }}
            >
              <option value="">Sélectionnez une rubrique</option>
              {Object.keys(CONTENT_COMPONENTS).map((id) => (
                <option key={id} value={id}>
                  {id.split("-").join(" ")}
                </option>
              ))}
            </select>
          </div> */}

          {/* Zone de contenu */}
          {/* <div className="p-6 mt-4">
            {ActiveComponent ? (
              <ActiveComponent />
            ) : (
              <div className="text-center py-10 text-gray-500">
                <p>Sélectionnez une rubrique pour afficher son contenu</p>
              </div>
            )}
          </div> */}

          <div className="hidden md:flex flex-row justify-between items-center gap-2 text-black font-extrabold">
            {Object.keys(CONTENT_COMPONENTS).map((id) => (
              <Link
                key={id}
                href={`#${id}`}
                className={`px-6 py-2 rounded-lg transition-all ${
                  activeComponent === id
                    ? "bg-[#000080] text-white"
                    : "hover:bg-gray-100 text-[#000080]"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(id as keyof typeof CONTENT_COMPONENTS);
                }}
              >
                {id.split("-").join(" ")}
              </Link>
            ))}
          </div>

          {/* Version mobile - Liste déroulante */}
          <div className="md:hidden w-full">
            <select
              className="w-full p-3 rounded-lg border-2 border-[#000080] text-[#000080] font-extrabold"
              value={activeComponent || ""}
              onChange={(e) => {
                const selectedId = e.target
                  .value as keyof typeof CONTENT_COMPONENTS;
                handleLinkClick(selectedId);
                window.location.hash = `#${selectedId}`;
              }}
            >
              <option value="">Sélectionnez une rubrique</option>
              {Object.keys(CONTENT_COMPONENTS).map((id) => (
                <option key={id} value={id}>
                  {id.split("-").join(" ")}
                </option>
              ))}
            </select>
          </div>

          {/* Zone de contenu */}
          <div className="p-6 mt-4">
            {ActiveComponent ? (
              <ActiveComponent />
            ) : (
              <div className="text-center py-10 text-gray-500">
                <p>Sélectionnez une rubrique pour afficher son contenu</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOrganisationAscci;
