import { Box, Card, Text, useBreakpointValue } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import SocialLinks from './SocialLinks'

const Home = () => {
  const { t } = useTranslation()
  const isSocialLinksInCard = useBreakpointValue({ base: false, md: true })
  const shouldShowSocialLinks = useBreakpointValue({ base: false, md: true })

  return (
    <Box
      as="section"
      minH="100vh"
      w="100%"
      bgImage={{ base: "url('/mobile.webp')", md: "url('/fondo.webp')" }}
      bgSize="cover"
      bgPosition="center"
      display="flex"
      alignItems="center"
      justifyContent={{ base: 'center', md: 'flex-start' }}
      px={{ base: 4, md: 8 }}
      py={{ base: 2, md: 0 }}
      position="relative">
      <Box color="gray.50" maxW={{ base: '100%', md: 'container.md' }} mx={{ base: 'auto', md: '0' }}>
        <Card bgColor="gray.800" minH={{ base: 'auto', md: 'auto' }} p={{ base: 4, md: 8 }} ml={{ base: 0, md: '5vw' }} mt={{ base: '15vh', lg: '5vh' }} rounded="xl" opacity={0.9} w="100%">
          <Text fontSize={{ base: '1.2em', md: '5xl' }} as="b" textAlign={{ base: 'center', md: 'left' }} color="gray.50">
            {t('homeHeader')}
          </Text>
          <Text fontSize={{ base: 'sm', md: '2em' }} textAlign={{ base: 'center', md: 'left' }} color="gray.50">
            {t('homeSubHeader')}
          </Text>
          <Box
            maxW={{ base: '100%', md: '700px' }}
            w={{ base: '100%', md: 'auto' }}
            maxH="none"
            minH="auto"
            sx={{
              '&::-webkit-scrollbar': {
                width: '6px'
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(107, 114, 128, 0.4)',
                borderRadius: '8px'
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'rgba(26, 32, 44, 0.8)'
              }
            }}>
            {(() => {
              const aboutMe = t('aboutMeParagraph', { returnObjects: true })
              const paragraphs = Array.isArray(aboutMe) ? aboutMe : [aboutMe]
              return paragraphs.map((p: string, idx: number) => (
                <Text key={idx} fontSize="1em" textAlign={{ base: 'left', md: 'left' }} mt={idx === 0 ? 4 : 2} color="gray.50">
                  {p}
                </Text>
              ))
            })()}
          </Box>
          {shouldShowSocialLinks && isSocialLinksInCard && (
            <Box mt={{ base: 4, md: 8 }}>
              <SocialLinks />
            </Box>
          )}
        </Card>
        {shouldShowSocialLinks && !isSocialLinksInCard && (
          <Box position="absolute" bottom={8} left="50%" transform="translateX(-50%)" w="100%" display="flex" justifyContent="center" mt={4}>
            <SocialLinks />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Home
