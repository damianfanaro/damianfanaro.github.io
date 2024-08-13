import { Box, Card, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import SocialLinks from './SocialLinks'

const Home = () => {
  const { t } = useTranslation()

  return (
    <Box as="section" minH="100vh" w="100%" bgImage="url('/fondo.webp')" bgSize="cover" bgPosition="center" display="flex" alignItems="center" justifyContent="flex-start" px={{ base: 4, md: 8 }}>
      <Box color="white" maxW="container.md">

        <Card bgColor="gray.800" p="8" ml="4vw" mt="8vh" rounded="xl" opacity={0.9}>
        <Text fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bolder">
          {t('homeHeader')}
        </Text>
        <Text fontSize={{ base: 'md', md: '2em' }}>{t('homeSubHeader')}</Text>
        <Text fontSize="lg" lineHeight="taller" textAlign="left">
          {t('aboutMeParagraph')}
        </Text>
        <SocialLinks/>
        </Card>
      </Box>
    </Box>
  )
}

export default Home
