import { Box, Flex, HStack, IconButton, Image, Link as ChakraLink, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerCloseButton, VStack } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import LanguageSwitch from './LanguageSwitch'

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { t } = useTranslation()

  return (
    <Box as="nav" bg="gray.800" boxShadow="md" position="fixed" width="100%" zIndex="1000">
      <Flex as="div" maxW="1200px" mx="auto" py={4} px={{ base: 4, md: 8 }} alignItems="center" justifyContent="space-between">
        <ChakraLink href="/" _hover={{ textDecoration: 'none' }}>
          <Image src="/logo.webp" alt="Logo" boxSize="50px" />
        </ChakraLink>

        {/* Desktop Navigation Links */}
        <HStack as="ul" spacing="8vw" display={{ base: 'none', md: 'flex' }} alignItems="center" justifyContent="center" flexGrow={1} listStyleType="none" mt="5">
          <Box as="li">
            <Link to="inicio" spy={true} smooth={true} offset={-70} duration={500}>
              {t('inicio')}
            </Link>
          </Box>
          <Box as="li">
            <Link to="blog" spy={true} smooth={true} offset={-70} duration={500}>
              {t('blog')}
            </Link>
          </Box>
          <Box as="li">
            <Link to="contacto" spy={true} smooth={true} offset={-70} duration={500}>
              {t('contacto')}
            </Link>
          </Box>
        </HStack>

        <Box display={{ base: 'none', md: 'block' }}>
          <LanguageSwitch />
        </Box>

        <IconButton aria-label="Open Menu" icon={<HamburgerIcon />} display={{ base: 'flex', md: 'none' }} onClick={onOpen} />

        {/* Mobile Drawer */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <Image src="/logo.webp" alt="Logo" boxSize="50px" />
              </DrawerHeader>
              <DrawerBody>
                <VStack as="ul" spacing={4} listStyleType="none">
                  <Box as="li">
                    <Link to="inicio" spy={true} smooth={true} offset={-70} duration={500} onClick={onClose}>
                      {t('inicio')}
                    </Link>
                  </Box>
                  <Box as="li">
                    <Link to="blog" spy={true} smooth={true} offset={-70} duration={500} onClick={onClose}>
                      {t('blog')}
                    </Link>
                  </Box>
                  <Box as="li">
                    <Link to="contacto" spy={true} smooth={true} offset={-70} duration={500} onClick={onClose}>
                      {t('contacto')}
                    </Link>
                  </Box>
                  <LanguageSwitch />
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
    </Box>
  )
}

export default NavBar
