import { IconBuilding, IconBuildingStore, IconMicrophone, IconMusic, IconNews, IconSchool } from '@tabler/icons-react';
import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import classes from './FeaturesCards.module.css';

import { useTranslation } from '~/hooks/useTranslation';
const mockdata = [
  {
    title: 'Séminaires & formations',
    description: 'Organisation complète de conférences, séminaires et formations avec salles équipées et matériel audiovisuel.',
    icon: IconSchool, // ou IconPresentation
  },
  {
    title: 'Conférences',
    description: 'Gestion de webinaires, colloques et conférences avec décoration événementielle et équipement audiovisuel.',
    icon: IconMicrophone, // ou IconVideo
  },
  {
    title: 'Spectacles & Shows',
    description: 'Organisation de soirées entreprises, concerts et coordination artistique pour des événements spectaculaires.',
    icon: IconMusic, // ou IconTheater
  },
  {
    title: 'Événements Corporate',
    description: 'Conception globale, coordination logistique et communication intégrée pour vos événements professionnels.',
    icon: IconBuilding, // ou IconBriefcase
  },
  {
    title: 'Foires & Salons',
    description: 'Stands personnalisés, logistique complète et promotion événementielle pour vos participations aux salons.',
    icon: IconBuildingStore, // ou IconMapPin
  },
  {
    title: 'Relations Publiques',
    description: 'Plans de communication, invitations médias et gestion de presse pour votre visibilité événementielle.',
    icon: IconNews, // ou IconMessage
  },
];

export function FeaturesCards() {

  const { t } = useTranslation()


  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon size={50} stroke={1.5} color={theme.colors.reny[6]} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
     

      <Title order={2} className={classes.title} ta="center" mt="sm">
        {t("services-title")}
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        {t("services-text")}
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}