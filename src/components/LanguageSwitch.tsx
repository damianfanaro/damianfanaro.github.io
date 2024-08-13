import { useTranslation } from 'react-i18next'
import { Button } from '@chakra-ui/react'

const LanguageSwitch = () => {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(newLang)
  }

  return (
    <div id="language-switch">
      <Button onClick={toggleLanguage} variant="ghost" fontSize="24px">
        {i18n.language === 'es' ? '🇺🇸' : '🇦🇷'}
      </Button>
    </div>
  )
}

export default LanguageSwitch
