import { Box, HStack, Link as ChakraLink } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <Box as="section" id="social-links" textAlign="center" mt={4}>
      <HStack justifyContent="center" spacing={6}>
        <ChakraLink href="https://github.com/damianfanaro" target="_blank" rel="noopener noreferrer">
          <FaGithub
            size={32}
            style={{
              filter: 'drop-shadow(0 0 6px rgba(26, 32, 44, 0.9)) drop-shadow(0 0 15px rgba(26, 32, 44, 0.8))'
            }}
          />
        </ChakraLink>
        <ChakraLink href="https://linkedin.com/in/damianfanaro" target="_blank" rel="noopener noreferrer">
          <FaLinkedin
            size={32}
            style={{
              filter: 'drop-shadow(0 0 6px rgba(26, 32, 44, 0.9)) drop-shadow(0 0 15px rgba(26, 32, 44, 0.8))'
            }}
          />
        </ChakraLink>
      </HStack>
    </Box>
  )
}

export default SocialLinks
