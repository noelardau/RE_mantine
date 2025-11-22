import {
  Container,
  SimpleGrid,
  Stack,
  Title,
  Text,
  Image,
  Group,
  Badge,
  Box,
  useMantineTheme,
  px,
} from '@mantine/core';

import imageTest from "./images/Apperçue.jpg"
import imageFirst from "./images/heroSectionImage.jpg"
import imageSecond from "./images/produit_bracelet.jpg"
import imageThird from "./images/produit_chaussure.jpg"

export function AboutSection() {
  const theme = useMantineTheme();

  return (
    <Container size="lg" my="xl" id='about'>
      <Stack gap="xl">
        {/* Titre principal */}
        <Group justify="center">
          <Badge color="red" size="lg">
            NOTRE HISTOIRE
          </Badge>
        </Group>
        <Title order={1} ta="center" c="dark">
          Reny Events de l’événementiel, du solidaire
        </Title>

        {/* Grille principale identique à ton skeleton */}
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 4 }}
          spacing={{ base: 'md', md: 'lg' }}
        >
          {/* Colonne 1 : Grande photo (marché en plein air) */}
          <Box>
            <Image
              radius="md"
              src={imageFirst} // remplace par ton vrai chemin
              alt="Stand Reny Events lors d’un marché solidaire en plein air"
              height={480}
              fit="cover"
            />
          </Box>

          {/* Colonne 2 : Deux blocs texte/photo */}
          <Stack gap="xl" >
            <Box>
              <Text size="sm" c="dimmed" mb={4}>
                Créée en 2022, la société Reny Events s’est constituée une place dans le paysage de l’organisation événementielle dans la capitale. 
                Reny Events est également une association solidaire qui soutient les femmes dans leurs activités quotidiennes.
              </Text>
            </Box>

            <Image
              src={imageTest}
              radius="md"
              alt="Plateaux de pâtisseries et desserts préparés par les femmes de l’association"
              height={220}
              fit="cover"
              />
          </Stack>

          {/* Colonne 3 : Trois petits blocs (texte + photos) */}
          <Stack gap="md">
            <Box>
              <Text size="sm">
                Nous organisons des événements solidaires (mariages, baptêmes, anniversaires, repas de quartier…) 
                et nous accompagnons les femmes porteuses de projets culinaires en leur offrant visibilité et débouchés commerciaux.
              </Text>
            </Box>

            <Image
              radius="md"
              
              src={imageSecond}
              alt="Bénévoles et cuisinières de Reny Events"
              height={140}
              fit="cover"
            />

            <Box>
              <Text size="sm" fw={500}>
                Notre mission : valoriser le talent des femmes, créer du lien social et proposer une cuisine maison authentique et généreuse.
              </Text>
            </Box>
          </Stack>

          {/* Colonne 4 : Grande photo verticale (jus et boissons) */}
          <Box>
            <Image
              radius="md"
             
              src={imageThird}
              alt="Jus de fruits frais et boissons artisanales proposées par Reny Events"
              height={480}
              fit="cover"
            />
          </Box>
        </SimpleGrid>

        {/* Optionnel : petite section finale avec photos de plats (comme dans ton image du bas) */}
        {/* <SimpleGrid cols={{ base: 2, sm: 4, md: 6 }} mt="xl">
          <Image radius="md" 
              src={imageTest} alt="Tajine" height={180} fit="cover" />
          <Image radius="md" 
              src={imageTest} alt="Couscous" height={180} fit="cover" />
          <Image radius="md" 
              src={imageTest} alt="Briouates" height={180} fit="cover" />
          <Image radius="md" 
              src={imageTest} alt="Salade marocaine" height={180} fit="cover" />
          <Image radius="md" 
              src={imageTest} alt="Pâtisseries orientales" height={180} fit="cover" />
          <Image radius="md" 
              src={imageTest} alt="Thé à la menthe" height={180} fit="cover" />
        </SimpleGrid> */}
      </Stack>
    </Container>
  );
}