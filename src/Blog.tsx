import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import { LinkedInPost1, LinkedInPost2, LinkedInPost3 } from './components/LinkedInPosts'
import { useTranslation } from 'react-i18next'

const Blog = () => {
  const { t } = useTranslation()

  return (
    <Box id="blog" py={10} px={{ base: 4, md: 8 }} h="100vh">
      <Box mb={6} mt="6vh" ml="10vw">
        <Heading as="h2" size="lg" mb={4} textAlign="left">
          {t('blog')}
        </Heading>
        <Text fontSize="1em" color="gray.500" textAlign="left">
          {t('myLinkedInArticles')}
        </Text>
      </Box>
      <Box ml="10vw">
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" justifyContent="center" alignItems="center" w="100%">
          <GridItem display="flex" justifyContent="center" maxW="350px" height="auto">
            <Box border="1px solid #ccc" borderRadius="md" overflow="hidden" width="100%" height="450px" boxShadow="md">
              <LinkedInPost1 />
            </Box>
          </GridItem>
          <GridItem display="flex" justifyContent="center" maxW="350px" height="auto">
            <Box border="1px solid #ccc" borderRadius="md" overflow="hidden" width="100%" height="450px" boxShadow="md">
              <LinkedInPost2 />
            </Box>
          </GridItem>
          <GridItem display="flex" justifyContent="center" maxW="350px" height="auto">
            <Box border="1px solid #ccc" borderRadius="md" overflow="hidden" width="100%" height="450px" boxShadow="md">
              <LinkedInPost3 />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}

export default Blog
