import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text } from '@mantine/core';
import {useTranslation} from "../hooks/useTranslation"

import classes from '../styles/FooterLinks.module.css';


export function FooterLinks() {
  
  const {t} = useTranslation()


 const data = [
    {
      title: t('footer-section-services'), // "NOS SERVICES" ou "NY TOLOTRA"
      links: [
        { label: t('footer-service-1'), link: '/services#seminaires' },        // Séminaires & formateurs
        { label: t('footer-service-2'), link: '/services#spectacles' },       // Spectacles & Shows
        { label: t('footer-service-3'), link: '/services#conferences' },      // Conférences
        { label: t('footer-service-4'), link: '/services#foires-salons' },    // Foires & Salons
      ],
    },
    {
      title: t('footer-section-nav'), // "NAVIGATION" ou "FITODIANA"
      links: [
        { label: t('footer-nav-home'),     link: '/' },           // Accueil / Trano
        { label: t('footer-nav-services'), link: '/services' },   // Services / Tolotra
        { label: t('footer-nav-about'),    link: '/a-propos' },   // À propos / Momba anay
        { label: t('footer-nav-contact'),  link: '/contact' },    // Contactez / Hifandray
      ],
    },
  ];

  
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Text fw={700} size="xl" className={classes.brand}>
            RENY EVENTS
          </Text>
          <Text size="sm" c="dimmed" className={classes.description}>
           {t("footer-description")}
          </Text>
          <Group mt="sm">
            <Text size="sm" c="dimmed">
              038 22 749
            </Text>
            <Text size="sm" c="dimmed">
              038 00 01 03
            </Text>
          </Group>
          <Text size="sm" c="dimmed" mt="xs">
            1 Reny events
          </Text>
          <Text size="sm" c="dimmed">
            1 Pavillon 2, Cité Perrier, Amphandra
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
         {t("footer-copyright")}
        </Text>
        <Text c="dimmed" size="sm">
        {t("footer-tagline")}
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
        
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandFacebook size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}