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
} from '@mantine/core';
import { useTranslation } from 'react-i18next';

import imageFirst from "./images/heroSectionImage.jpg";
import imageTest from "./images/Apperçue.jpg";
import imageSecond from "./images/produit_bracelet.jpg";
import imageThird from "./images/produit_chaussure.jpg";

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <Container size="lg" my="xl" id="about">
      <Stack gap="xl">
        {/* Badge + Titre principal */}
        <Group justify="center">
          <Badge color="red" size="lg">
            {t('about-badge')}
          </Badge>
        </Group>

        <Title order={1} ta="center" c="dark">
          {t('about-title')}
        </Title>

        {/* Grille principale */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={{ base: 'md', md: 'lg' }}>
          {/* Colonne 1 – Grande photo */}
          <Box>
            <Image
              radius="md"
              src={imageFirst}
              alt={t('about-alt-image1')}
              height={480}
              fit="cover"
            />
          </Box>

          {/* Colonne 2 – Texte + photo */}
          <Stack gap="xl">
            <Box>
              <Text size="sm" c="dimmed">
                {t('about-text-1')}
              </Text>
            </Box>

            <Image
              src={imageTest}
              radius="md"
              alt={t('about-alt-image2')}
              height={220}
              fit="cover"
            />
          </Stack>

          {/* Colonne 3 – Texte + photo + texte */}
          <Stack gap="md">
            <Box>
              <Text size="sm">
                {t('about-text-2')}
              </Text>
            </Box>

            <Image
              radius="md"
              src={imageSecond}
              alt={t('about-alt-image3')}
              height={140}
              fit="cover"
            />

            <Box>
              <Text size="sm" fw={500}>
                {t('about-text-3')}
              </Text>
            </Box>
          </Stack>

          {/* Colonne 4 – Grande photo verticale */}
          <Box>
            <Image
              radius="md"
              src={imageThird}
              alt={t('about-alt-image4')}
              height={480}
              fit="cover"
            />
          </Box>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}