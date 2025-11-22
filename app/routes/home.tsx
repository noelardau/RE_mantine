import type { Route } from "./+types/home";



import { HeroSection } from "~/sections/hero_section/HeroSection";
import { FuturEvent } from "~/sections/future_events/FuturEvent";
import { FeaturesCards } from "~/sections/services/components/FeaturesCards";
import { AboutSection } from "~/sections/about/AboutSection";
import type { evenement } from "~/sections/future_events/interfaces/Evenement";
import { Services } from "~/sections/services/Services";
import { Contact } from "~/sections/contact/Contact";



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


export async function clientLoader({}: Route.LoaderArgs) {
 
//  let data = await fetch("http://localhost:3000/v1/evenements/all")
 
//  let events = await data.json()
  return null;
}



export default function Home({loaderData}: Route.ComponentProps) {

  let events:evenement[]=[
    {
      evenement_id: "dkjfqlsjfm",
      titre: "",
      description_evenement: "",
     
      type_evenement: {type_evenement_nom:"Test"},
     
     
   
      fichiers: [],
    }
  ]

 return <div >

      <HeroSection></HeroSection>
      <FuturEvent events={events}></FuturEvent>
     <Services id="services"></Services>
      <AboutSection></AboutSection>
      <Contact></Contact>


  </div>;
}
 