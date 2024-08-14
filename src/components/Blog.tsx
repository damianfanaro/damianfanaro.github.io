import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import { LinkedInPost1, LinkedInPost2, LinkedInPost3 } from './LinkedInPosts'
import { useTranslation } from 'react-i18next'

const Blog = () => {
  const { t } = useTranslation()

  return (
    <Box id="blog" py={10} px={{ base: 4, md: 8 }} h={{ base: 'fit-content', md: '100vh' }}>
      <Box mb={6} mt="6vh" ml="10vw">
        <Heading as="h2" size="lg" mb={4} textAlign="left">
          {t('blog')}
        </Heading>
        <Text fontSize="1em" color="gray.500" textAlign="left">
          {t('myLinkedInArticles')}
        </Text>
      </Box>
      <Box ml={{ base: '2vw', md: '10vw' }}>
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" justifyContent="center" alignItems="center" w="100%">
          <GridItem display="flex" justifyContent="center" maxW="350px" h={{ base: '250px', md: 'auto' }} mb={{ base: '20px', md: '0' }}>
            <Box border="1px solid #ccc" borderRadius="md" overflow="hidden" width="100%" h={{ base: '250px', md: '450px' }}>
              <LinkedInPost1 />
            </Box>
          </GridItem>
          <GridItem display="flex" justifyContent="center" maxW="350px" h={{ base: '250px', md: 'auto' }} mb={{ base: '20px', md: '0' }}>
            <Box border="1px solid #ccc" borderRadius="md" overflow="hidden" width="100%" h={{ base: '250px', md: '450px' }}>
              <LinkedInPost2 />
            </Box>
          </GridItem>
          <GridItem display="flex" justifyContent="center" maxW="350px" h={{ base: '250px', md: 'auto' }}>
            <Box border="1px solid #ccc" borderRadius="md" overflow="hidden" width="100%" h={{ base: '250px', md: '450px' }}>
              <LinkedInPost3 />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}

export default Blog
