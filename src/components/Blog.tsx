import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import { LinkedInPost1, LinkedInPost2, LinkedInPost3 } from './LinkedInPosts'
import { useTranslation } from 'react-i18next'

const Blog = () => {
  const { t } = useTranslation()

  return (
    <Box id="blog" py={12} px={{ base: 2, md: 8 }} minH="100vh" bgGradient="linear(to-b, gray.50, gray.200)" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Box mb={10} mt={{ base: 4, md: '6vh' }} w="100%" maxW="1200px" mx="auto">
        <Heading as="h2" size="2xl" mb={2} textAlign="start" color="blue.700" letterSpacing="tight">
          {t('blog')}
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" textAlign="start">
          {t('myLinkedInArticles')}
        </Text>
      </Box>
      <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={{ base: 6, md: 2, lg: 8 }} justifyContent="center" alignItems="center" w={{ base: '90%', md: '100%', lg: '70%' }}>
        <GridItem display="flex" justifyContent="center">
          <Box
            borderRadius="2xl"
            overflow="hidden"
            width="100%"
            maxW="500px"
            minH={{ base: '250px', md: '420px' }}
            boxShadow="2xl"
            bg="whiteAlpha.900"
            transition="transform 0.2s, box-shadow 0.2s"
            _hover={{ transform: 'translateY(-6px) scale(1.03)', boxShadow: '3xl' }}
            display="flex"
            flexDirection="column"
            justifyContent="center">
            <LinkedInPost1 />
          </Box>
        </GridItem>
        <GridItem display="flex" justifyContent="center">
          <Box
            borderRadius="2xl"
            overflow="hidden"
            width="100%"
            maxW="500px"
            minH={{ base: '250px', md: '420px' }}
            boxShadow="2xl"
            bg="whiteAlpha.900"
            transition="transform 0.2s, box-shadow 0.2s"
            _hover={{ transform: 'translateY(-6px) scale(1.03)', boxShadow: '3xl' }}
            display="flex"
            flexDirection="column"
            justifyContent="center">
            <LinkedInPost2 />
          </Box>
        </GridItem>
        <GridItem display="flex" justifyContent="center">
          <Box
            borderRadius="2xl"
            overflow="hidden"
            width="100%"
            maxW="500px"
            minH={{ base: '250px', md: '420px' }}
            boxShadow="2xl"
            bg="whiteAlpha.900"
            transition="transform 0.2s, box-shadow 0.2s"
            _hover={{ transform: 'translateY(-6px) scale(1.03)', boxShadow: '3xl' }}
            display="flex"
            flexDirection="column"
            justifyContent="center">
            <LinkedInPost3 />
          </Box>
        </GridItem>
      </Grid>
      {/* Sección Igrowker */}
      <Box mt={16} mb={8} w="100%" maxW="900px" mx="auto" px="4">
        <a href="https://igrowker.com" target="_blank" rel="noopener noreferrer">
          <img src="/igrowker.png" alt="Igrowker logo" style={{ height: '40px', width: 'auto', display: 'inline-block', verticalAlign: 'middle' }} />
        </a>
        <Heading as="h3" size="md" color="blue.700" mb={4} textAlign="start" mt="4">
          {t('igrowker.title')}
        </Heading>
        <Text fontSize="md" color="gray.700" mb={4} textAlign="start">
          {t('igrowker.paragraph')}
        </Text>
        <Text fontSize="md" color="gray.700" mb={6} textAlign="start">
          {t('igrowker.description')}
        </Text>
        <Box display="flex" alignItems="center" justifyContent="start" gap={4}>
          <Text>{t('igrowker.button')} →</Text>
          <a href="https://igrowker.com" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: 600, fontSize: '1.1em', textDecoration: 'underline' }}>
            igrowker.com
          </a>
        </Box>
      </Box>
    </Box>
  )
}

export default Blog
