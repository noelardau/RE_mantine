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


export function FeaturesCards() {

  const { t } = useTranslation()

const mockdata = [
  {
    title: t("first-service-title"),
    description: t("first-service-description"),
    icon: IconSchool, // ou IconPresentation
  },
  {
    title: t("forth-service-title"),
    description: t("forth-service-description"),
    icon: IconMicrophone, // ou IconVideo
  },
  {
    title: t("second-service-title"),
    description: t("second-service-description"),
    icon: IconMusic, // ou IconTheater
  },
  {
    title: t("fifth-service-title"),
    description: t("fifth-service-description"),
    icon: IconBuilding, // ou IconBriefcase
  },
  {
    title: t("third-service-title"),
    description: t("third-service-description"),
    icon: IconBuildingStore, // ou IconMapPin
  },
  {
    title: t("sixth-service-title"),
    description: t("sixth-service-description"),
    icon: IconNews, // ou IconMessage
  },
];


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