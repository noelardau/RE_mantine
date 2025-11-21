import { IconCalendarEvent, IconChevronDown, IconHome, IconPhone } from '@tabler/icons-react';
import { Burger, Center, Container, Drawer, Group, Menu, NavLink, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '../styles/HeaderMenu.module.css';
import { useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LangageSwitcher';


export function HeaderMenu() {

  const {t} = useTranslation()

  const links = [
    { link: '/about', label: t("home") },
    {
      link: '#1',
      label: t("about")
    },
    { link: '/about', label: t("services") },
    { link: '/pricing', label: t("contacts") },
    { link:"#", label: "ls"}
   
  ];
  const [opened, { toggle, close }] = useDisclosure(false);
  

  const items = links.map((link) => {
   
    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
        >
        {
        link.label == "ls" ?
         <LanguageSwitcher/> 
        :
        link.label
        
        }
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          {/* <MantineLogo size={28} /> */}
          <Title c={"reny.4"}>RENY Events</Title>
          <Group gap={5} visibleFrom="sm">
            {items}

          </Group>
          <Drawer
        opened={opened}
        onClose={close}
        title="Menu"
        position="top"
        size="xs"
        hiddenFrom='sm'
      >
        <Stack gap="sm">
          {items}
        </Stack>
      </Drawer>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}