import { Box, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <Box as="footer" textAlign="center" fontSize="0.9em"  p={4} bg="gray.900" color="white">
      <Text mb={2}>
        © {currentYear} {t('footer.rightsReserved')}
      </Text>
    </Box>
  )
}

export default Footer
