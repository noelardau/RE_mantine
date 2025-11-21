// src/components/LanguageSwitcher.tsx
import { Menu, Button, Group } from '@mantine/core';
import { IconChevronDown, IconLanguage } from '@tabler/icons-react';
import { useTranslation } from '../hooks/useTranslation';
import { useEffect } from 'react';

export function LanguageSwitcher() {

    useEffect(function(){
        changeLanguage("mg")
    },[])


  const { changeLanguage, currentLanguage } = useTranslation();

 const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'mg', name: 'Malagasy', flag: '🇲🇬' },
];


  const currentLang = languages.find(lang => lang.code === currentLanguage);

    // changeLanguage("mg")

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button variant="light"  rightSection={<IconChevronDown size={16} />}>
          {currentLang?.flag} 
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        {languages.map((language) => (
          <Menu.Item
            key={language.code}
            leftSection={language.flag}
            onClick={() => changeLanguage(language.code)}
          >
            {language.name}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}