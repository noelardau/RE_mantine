
import type { Route } from "./+types/home";
import { HeroBullets } from "~/sections/hero_section/HeroBullets";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Reny Events - Votre Organisateur Événementiel d'Excellence" },
    { 
      name: "description", 
      content: "Reny Events - Créateur d'expériences mémorables. Organisation complète d'événements professionnels, mariages, séminaires et lancements de produit sur mesure." 
    },
    { 
      name: "keywords", 
      content: "organisateur événementiel, événements professionnels, mariage, séminaire, team building, lancement produit, organisation événements, Paris, France" 
    },
    { 
      name: "author", 
      content: "Reny Events" 
    },
    { 
      property: "og:title", 
      content: "Reny Events - Votre Organisateur Événementiel d'Excellence" 
    },
    { 
      property: "og:description", 
      content: "Des événements sur mesure qui marquent les esprits. De la conception à la réalisation, nous donnons vie à vos projets événementiels." 
    },
    { 
      property: "og:type", 
      content: "website" 
    }
  ];
}

export default function Home() {
  return <div >

      <HeroBullets></HeroBullets>

  </div>;
}
 