import { Box, Flex, HStack, IconButton, Image, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerCloseButton, VStack, Text } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import LanguageSwitch from './LanguageSwitch'

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { t } = useTranslation()

  const linkHoverStyle = {
    color: '#63b3ed',
    transform: 'scale(1.1)',
    transition: 'all 0.2s ease-in-out'
  }

  return (
    <Box as="nav" bg="gray.800" boxShadow="md" position="fixed" width="100%" zIndex="1000">
      <Flex maxW="1200px" mx="auto" py={4} px={{ base: 4, md: 8 }} alignItems="center" justifyContent="space-between">
        <Box _hover={{ textDecoration: 'none' }}>
          <Image src="/logo.webp" alt="Logo" boxSize="50px" />
        </Box>

        <HStack spacing="8vw" display={{ base: 'none', md: 'flex' }} alignItems="center">
          <Link to="inicio" smooth={true} offset={-70} duration={500}>
            <Text _hover={linkHoverStyle} color="white" cursor="pointer">
              {t('inicio')}
            </Text>
          </Link>
          <Link to="blog" smooth={true} offset={-70} duration={500}>
            <Text _hover={linkHoverStyle} color="white" cursor="pointer">
              {t('blog')}
            </Text>
          </Link>
          <Link to="contacto" smooth={true} offset={-70} duration={500}>
            <Text _hover={linkHoverStyle} color="white" cursor="pointer">
              {t('contacto')}
            </Text>
          </Link>
        </HStack>

        <Box display={{ base: 'none', md: 'block' }}>
          <LanguageSwitch />
        </Box>

        <IconButton aria-label="Open Menu" icon={<HamburgerIcon />} display={{ base: 'flex', md: 'none' }} onClick={onOpen} />

        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent bgColor="gray.800" position="relative">
              <DrawerCloseButton color="gray.50" top={2} right={2} _hover={{ bg: 'gray.700' }} />
              <DrawerHeader>
                <Image src="/logo.webp" alt="Logo" boxSize="50px" />
              </DrawerHeader>
              <DrawerBody>
                <VStack spacing={4}>
                  <Link to="inicio" smooth={true} offset={-70} duration={500} onClick={onClose}>
                    <Text _hover={linkHoverStyle} color="gray.100" cursor="pointer">
                      {t('inicio')}
                    </Text>
                  </Link>
                  <Link to="blog" smooth={true} offset={-70} duration={500} onClick={onClose}>
                    <Text _hover={linkHoverStyle} color="gray.100" cursor="pointer">
                      {t('blog')}
                    </Text>
                  </Link>
                  <Link to="contacto" smooth={true} offset={-70} duration={500} onClick={onClose}>
                    <Text _hover={linkHoverStyle} color="gray.100" cursor="pointer">
                      {t('contacto')}
                    </Text>
                  </Link>
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
