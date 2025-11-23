import { Button, Group, Paper, SimpleGrid, Text, Textarea, TextInput } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { ContactIconsList } from './ContactIcons';
import classes from './GetInTouch.module.css';

export function GetInTouch() {
  const { t } = useTranslation();

  return (
    <Paper shadow="md" radius="lg">
      <div className={classes.wrapper}>
        {/* Colonne de gauche - Infos de contact */}
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

        {/* Formulaire */}
        <form 
          className={classes.form} 
          onSubmit={(event) => event.preventDefault()}
        >
          <Text className="titleSection">
            {t('contact-form-title')}
          </Text>

          <Text fz="sm" c="dimmed" mt="xs" mb="md">
            {t('contact-form-description')}
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput 
                label={t('contact-name')} 
                placeholder={t('contact-name')}
              />
              <TextInput 
                label={t('contact-email')} 
                placeholder="exemple@mail.com"
                required 
              />
            </SimpleGrid>

            <TextInput 
              mt="md" 
              label={t('contact-subject')} 
              placeholder={t('contact-subject')}
              required 
            />

            <Textarea
              mt="md"
              label={t('contact-message')}
              placeholder={t('contact-placeholder')}
              minRows={5}
              autosize
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control}>
                {t('contact-send')}
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}