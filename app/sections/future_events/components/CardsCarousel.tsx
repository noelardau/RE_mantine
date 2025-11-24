import { Carousel } from '@mantine/carousel';
import { Button, Paper, Text, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './CardsCarousel.module.css';
import "@mantine/carousel/styles.css"
import type { evenement } from '../interfaces/Evenement';
import { base64ToDataUrl } from '../utils/base64';
import { Link } from 'react-router';
import { api_get_event_url } from '~/constants/api';



function Card({ titre, type_evenement, image, idEvent}:{titre: string, type_evenement:{},image:string, idEvent: string}) {
  return (
    <Paper
      shadow="md"
      p="xl"
      mt={20}
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
     <div
  style={{
    backgroundColor: 'rgba(0, 0, 0, 0.65)',   // noir à 65 % d’opacité
    padding: '1.5rem 1.25rem',
    // borderRadius: '12px',
    backdropFilter: 'blur(8px)',             // effet verre dépoli (facultatif mais magnifique)
    // border: '1px solid rgba(255, 255, 255, 0.1)',
  }}
>
  <Text className={classes.category} size="xs" c="white" fw={600}>
    {type_evenement.nom}
  </Text>
  <Title order={3} className={classes.title} c="white" fw={700}>
    {titre}
  </Title>
</div>
     <Link to={api_get_event_url(idEvent)}>
       <Button variant="white" color="dark">
       Détails 
      </Button>
     </Link>
    </Paper>
  );
}

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Aurora in Norway: when to visit for best experience',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
];

export function CardsCarousel({events}:{events:evenement[]}) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = events.map((item) => {
    const binaryData = item.fichiers?.[0]?.donnees_binaire;
    const imageFromBase64 = base64ToDataUrl(binaryData); 

    return <Carousel.Slide key={item.titre} >
      <Card titre={item.titre} type_evenement={item.type_evenement} image={imageFromBase64}  idEvent={item.evenement_id} />
    </Carousel.Slide>
  });

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={2}
      emblaOptions={{ align: 'start', slidesToScroll: mobile ? 1 : 2 }}
      
    >
      {slides}
    </Carousel>
  );
}