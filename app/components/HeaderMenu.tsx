import { Burger, Container, Drawer, Group, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '../styles/HeaderMenu.module.css';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LangageSwitcher';
import { Anchor } from '@mantine/core';

export function HeaderMenu() {
  const { t } = useTranslation();
  const [opened, { toggle, close }] = useDisclosure(false);

  const links = [
    { link: '#hero', label: t("home") },
    { link: '#services', label: t("services") },
    { link: '#about', label: t("about") },
    { link: '#contacts', label: t("contacts") },
    { link: "#", label: "ls" },
  ];

  // Fonction de scroll fluide + fermeture du drawer + mise à jour URL
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === "#") return; // pour le LanguageSwitcher

    // Mettre à jour l'URL dans la barre d'adresse
    if (href && href !== '#') {
      window.history.pushState(null, '', href);
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    close(); // ferme le drawer mobile
  };

  const items = links.map((link) => (
    <Anchor
      key={link.label}
      href={link.link}
      onClick={(e) => handleScrollTo(e, link.link)}
      className={classes.link}
      underline="never"
      c="inherit"
    >
      {link.label === "ls" ? <LanguageSwitcher /> : link.label}
    </Anchor>
  ));

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Title c="reny.5" size="h3" fw={700}>
            RENY Events
          </Title>

          {/* Desktop */}
          <Group gap={20} visibleFrom="sm">
            {items}
          </Group>

          {/* Mobile */}
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />

          <Drawer
            opened={opened}
            onClose={close}
            title={<Title order={3}>Menu</Title>}
            position="top"
            size="xs"
            hiddenFrom="sm"
          >
            <Stack gap="md" align="stretch">
              {links.map((link) => (
                <Anchor
                  key={link.label}
                  href={link.link}
                  onClick={(e) => handleScrollTo(e, link.link)}
                  size="lg"
                  fw={500}
                  c="dimmed"
                >
                  {link.label === "ls" ? <LanguageSwitcher /> : link.label}
                </Anchor>
              ))}
            </Stack>
          </Drawer>
        </div>
      </Container>
    </header>
  );
}