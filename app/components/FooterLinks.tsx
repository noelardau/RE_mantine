import { IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text } from '@mantine/core';
import { useTranslation } from "../hooks/useTranslation";
import classes from '../styles/FooterLinks.module.css';

export function FooterLinks() {
  const { t } = useTranslation();

  const data = [
    {
      title: t('footer-section-services'),
      links: [
        { label: t('footer-service-1'), link: '/services#seminaires' },
        { label: t('footer-service-2'), link: '/services#spectacles' },
        { label: t('footer-service-3'), link: '/services#conferences' },
        { label: t('footer-service-4'), link: '/services#foires-salons' },
      ],
    },
    {
      title: t('footer-section-nav'),
      links: [
        { label: t('footer-nav-home'), link: '#hero' },
        { label: t('footer-nav-services'), link: '#services' },
        { label: t('footer-nav-about'), link: '#about' },
        { label: t('footer-nav-contact'), link: '#contacts' },
      ],
    },
  ];

  // Fonction de scroll fluide
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // Si le lien commence par # → c'est un ancrage sur la même page
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else {
      // Sinon, navigation normale (ex: /services#seminaires)
      window.location.href = href;
    }
  };

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(e) => handleScroll(e, link.link)}
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
            <Text size="sm" c="dimmed">038 22 749</Text>
            <Text size="sm" c="dimmed">038 00 01 03</Text>
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
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://instagram.com/toncompte"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://facebook.com/toncompte"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandFacebook size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}