import { IconAt, IconBrandFacebook, IconMapPin, IconPhone, IconSun } from '@tabler/icons-react';
import { Box, Stack, Text } from '@mantine/core';
import classes from './ContactIcons.module.css';
import { useTranslation } from '~/hooks/useTranslation';

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

export function ContactIconsList() {
  const {t} = useTranslation()

  const MOCKDATA = [
      {
        title: t('contact-icons.facebook.title'),
        description: t('contact-icons.facebook.description'),
        icon: IconBrandFacebook,
        link: 'https://facebook.com/renyevents' // à adapter
      },
      {
        title: t('contact-icons.phone.title'),
        description: t('contact-icons.phone.description'),
        icon: IconPhone,
        link: 'tel:+261383274601'
      },
      {
        title: t('contact-icons.address.title'),
        description: t('contact-icons.address.description'),
        icon: IconMapPin,
        link: 'https://maps.google.com/?q=Pavillon+2+Cité+Perrier+Ambohijatovo+Antananarivo'
      },
      {
        title: t('contact-icons.availability.title'),
        description: t('contact-icons.availability.description'),
        icon: IconSun
      },
    ]

  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}