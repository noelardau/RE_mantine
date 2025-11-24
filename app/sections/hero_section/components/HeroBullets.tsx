import { IconCheck } from '@tabler/icons-react';
import { Button, Group, Image, Text, Title } from '@mantine/core';
import image from '../newHeroImage.jpeg';
import classes from './HeroBullets.module.css';
import { useTranslation } from 'react-i18next';

export function HeroBullets() {
  const { t } = useTranslation();

  // Fonction pour smooth scroll vers un ID
  const smoothScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // 'start' pour aligner en haut, 'center' si tu préfères au milieu
      });
    }
  };

  return (
    <div className={classes.inner}>
      <div className={classes.content}>
        <Title className={classes.title}>
          {t("hero-section-title")} {t("hero-section-title-1")}
          <span className={classes.highlight}> {t("hero-section-title-2")}</span>
        </Title>

        <Text c="dimmed" mt="md">
          {t("hero-section-text")}
        </Text>

        <Group mt={30}>
          <Button
            radius="xl"
            size="md"
            className={classes.control}
            onClick={() => smoothScrollTo('#services')}
          >
            {t("see-services-btn")}
          </Button>

          <Button
            variant="outline"
            radius="xl"
            size="md"
            className={classes.control}
            onClick={() => smoothScrollTo('#contacts')}
          >
            {t("contact-btn")}
          </Button>
        </Group>
      </div>

      <Image src={image} className={classes.image} />
    </div>
  );
}