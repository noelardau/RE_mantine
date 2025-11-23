import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text } from '@mantine/core';

import classes from '../styles/FooterLinks.module.css';

const data = [
  {
    title: 'NOS SERVICES',
    links: [
      { label: 'Séminaires & formateurs', link: '#' },
      { label: 'Spectacles & Shows', link: '#' },
      { label: 'Conférences', link: '#' },
      { label: 'Foires & Salons', link: '#' },
    ],
  },
  {
    title: 'NAVIGATION',
    links: [
      { label: 'Accueil', link: '#' },
      { label: 'Services', link: '#' },
      { label: 'A propos', link: '#' },
      { label: 'Contactez', link: '#' },
    ],
  },
];

export function FooterLinks() {
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
            Organisateur d'événements professionnels, associatifs, culturels, sportifs, corporatifs et tous vos événements divers, conférences et foires.
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
          © 2025 RENY Events. Tous droits réservés.
        </Text>
        <Text c="dimmed" size="sm">
          Organisateur événementiel professionnel.
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