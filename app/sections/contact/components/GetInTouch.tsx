import { Button, Group, Paper, SimpleGrid, Text, Textarea, TextInput } from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import classes from './GetInTouch.module.css';

export function GetInTouch() {
  return (
    <Paper shadow="md" radius="lg">
      <div className={classes.wrapper}>
        <div className={classes.contacts} style={{ backgroundColor: "oklch(71% 0.22 27.325)" }}>
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Contactez RENY Events
          </Text>

          <Text fz="sm" c="#fff" mt="xs" mb="xl">
            Vous avez un projet d'événement ? Contactez-nous dès maintenant pour discuter de vos besoins et obtenir un devis personnalisé.
          </Text>

         

          <ContactIconsList />

          {/* <Text fz="sm" c="#fff" mt="xl" style={{ borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: '16px' }}>
            Pavillon 2, Cité Perrier Ampandrana
          </Text> */}
        </div>

        <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
          <Text fz="lg" fw={700} className={classes.title}>
            Envoyer un mail
          </Text>

          <Text fz="sm" c="dimmed" mt="xs" mb="md">
            Décrivez-nous votre projet et nous vous recontacterons rapidement avec une proposition personnalisée.
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Votre nom"  />
              <TextInput label="Votre email" required />
            </SimpleGrid>

            <TextInput mt="md" label="Objet"  required />

            <Textarea
              mt="md"
              label="Décrivez-nous votre évènement: objectif, format..."
              placeholder="Please include all relevant information"
              minRows={3}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control}>
                Envoyer
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}