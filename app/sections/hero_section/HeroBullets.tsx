import { IconCheck } from '@tabler/icons-react';
import { Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
import image from './newHeroImage.jpeg';
import classes from './HeroBullets.module.css';

import { useTranslation } from 'react-i18next';

export function HeroBullets() {
    const { t }= useTranslation()

  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            {t("hero-section-title") + ' '+ t("hero-section-title-1")}<span className={classes.highlight}> {t("hero-section-title-2")}</span> 
          </Title>
          <Text c="dimmed" mt="md">
           {t("hero-section-text")}
          </Text>

          

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              {t("see-services-btn")}
            </Button>
            <Button variant="outline" radius="xl" size="md" className={classes.control}>
              {t("contact-btn")}
            </Button>
          </Group>
        </div>
        <Image src={image} className={classes.image} />
      </div>
    </Container>
  );
}