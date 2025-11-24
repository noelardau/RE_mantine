import { Button, Paper, Text, Stack, Center } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { ContactIconsList } from './ContactIcons';
import classes from './GetInTouch.module.css';
import { mail_contact } from '~/constants/mailto';
import { IconMail } from '@tabler/icons-react';

export function GetInTouch() {
  const { t } = useTranslation();

  const gmailLink = `https://mail.google.com/mail/u/0/?fs=1&to=${mail_contact}&su=${encodeURIComponent(
    "Prise de contact depuis Reny Event"
  )}&body=${encodeURIComponent(
    "Bonjour,\n\nJe vous contacte concernant…\n\nCordialement,\n"
  )}&tf=cm`;

  return (
    <Paper shadow="md" radius="lg">
      <div className={classes.wrapper}>
        {/* Colonne de gauche – reste inchangée */}
        <div
          className={classes.contacts}
          style={{ backgroundColor: "oklch(71% 0.22 27.325)" }}
        >
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            {t('contact-title')}
          </Text>
          <Text fz="sm" c="#fff" mt="xs" mb="xl">
            {t('contact-subtitle')}
          </Text>
          <ContactIconsList />
        </div>

        {/* Colonne de droite – parfaitement centrée */}
        <div className={classes.form}>
          <Center h="100%" p="xl">
            <Stack align="center" gap="xl">
              <div>
                <Text className="titleSection" ta="center" mb={4}>
                  {t('contact-form-title')}
                </Text>
                <Text fz="sm" c="dimmed" ta="center">
                  {t("contact-form-description")}
                </Text>
              </div>

              <Button
                component="a"
                href={gmailLink}
                target="_blank"
                rel="noopener"
                size="lg"
                leftSection={<span role="img" aria-label="email"><IconMail></IconMail></span>}
                style={{ minWidth: 320 }} // même largeur que sur ta capture
              >
                 → renyevent@gmail.com
              </Button>
            </Stack>
          </Center>
        </div>
      </div>
    </Paper>
  );
}