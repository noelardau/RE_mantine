import { Burger, Container, Drawer, Group, Stack, Title, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useMantineColorScheme, useComputedColorScheme } from '@mantine/core';  // ← à ajouter
import { IconSun, IconMoon } from '@tabler/icons-react';                         // ← à ajouter
import classes from '../styles/HeaderMenu.module.css';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LangageSwitcher';
import { Anchor } from '@mantine/core';

export function HeaderMenu() {
  const { t } = useTranslation();
  const [opened, { toggle, close }] = useDisclosure(false);

  // === AJOUT DU SWITCH THÈME (2 lignes seulement) ===
  const { toggleColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light'); // 'light' ou 'dark'

  const links = [
    { link: '#hero', label: t("home") },
    { link: '#services', label: t("services") },
    { link: '#about', label: t("about") },
    { link: '#contacts', label: t("contacts") },
    { link: "#", label: "ls" },
  ];

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

  // Icône Soleil / Lune qui change automatiquement
  const ThemeToggle = () => (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      variant="subtle"
      size="lg"
      aria-label="Toggle theme"
    >
      {computedColorScheme === 'dark' ? <IconSun size={20} /> : <IconMoon size={20} />}
    </ActionIcon>
  );

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Title c="reny.5" size="h3" fw={700}>
            RENY Events
          </Title>

          {/* === Desktop : on ajoute le toggle à droite === */}
          <Group gap={20} visibleFrom="sm">
            {items}
            <ThemeToggle />   {/* ← ajouté ici */}
          </Group>

          {/* === Mobile : on ajoute le toggle dans le drawer === */}
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
              {/* Toggle thème dans le drawer mobile */}
              <Group justify="center" mt="md">
                <ThemeToggle />
              </Group>
            </Stack>
          </Drawer>
        </div>
      </Container>
    </header>
  );
}