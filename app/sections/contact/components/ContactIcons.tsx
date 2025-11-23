import { IconAt, IconBrandFacebook, IconMapPin, IconPhone, IconSun } from '@tabler/icons-react';
import { Box, Stack, Text } from '@mantine/core';
import classes from './ContactIcons.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon size={24} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}
const MOCKDATA = [
  { title: 'Facebook', description: 'Reny Events', icon: IconBrandFacebook },
  { title: 'Phone', description: '038 32 746 01 / 034 80 001 88', icon: IconPhone },
  { title: 'Address', description: 'Pavillon 2, Cité Perrier Ampandrana', icon: IconMapPin },
  { title: 'Disponibilité', description: '7j/7', icon: IconSun },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}