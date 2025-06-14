import React from 'react'
import { Box, Button, Center, FormControl, FormLabel, Input, Textarea, Heading, Text, Image, useToast } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import emailjs from 'emailjs-com'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const userId = import.meta.env.VITE_EMAILJS_USER_ID

const Contact: React.FC = () => {
  const { t } = useTranslation()
  const toast = useToast()

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs.sendForm(serviceId, templateId, e.currentTarget, userId).then(
      () => {
        toast({
          title: t('contact.successTitle'),
          description: t('contact.successMessage'),
          status: 'success',
          duration: 5000,
          isClosable: true
        })
      },
      () => {
        toast({
          title: t('contact.errorTitle'),
          description: t('contact.errorMessage'),
          status: 'error',
          duration: 5000,
          isClosable: true
        })
      }
    )

    e.currentTarget.reset()
  }

  return (
    <Box id="contact" py={{ base: 10, md: 20 }} px={{ base: 2, md: 0 }} minH="100vh" w="100vw" bgGradient="linear(to-b, #0a2540, gray.900 80%)" display="flex" alignItems="center" justifyContent="center">
      <Box
        as="section"
        w="100%"
        maxW="1100px"
        bg="white"
        borderRadius="2xl"
        boxShadow="0 8px 32px 0 rgba(10,37,64,0.18)"
        p={{ base: 4, md: 10 }}
        display={{ base: 'block', md: 'grid' }}
        gridTemplateColumns={{ md: '1fr 1.2fr' }}
        gap={{ base: 8, md: 16 }}
        alignItems="center">
        <Box as={Center} flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" px={{ base: 0, md: 4 }}>
          <Image src="/profile.webp" alt="contact image" boxSize="120px" mb={4} borderRadius="full" boxShadow="lg" border="4px solid #0a2540" />
          <Heading as="h2" size="xl" mb={2} color="#0a2540" fontWeight="extrabold" letterSpacing="tight">
            {t('contact.title')}
          </Heading>
          <Text fontSize="lg" color="#193b5a" mb={4}>
            {t('contact.description')}
          </Text>
        </Box>
        <Box as="form" onSubmit={sendEmail} bg="#f7fafc" p={{ base: 4, md: 8 }} borderRadius="2xl" boxShadow="md" border="1px solid #e2e8f0" maxW="600px" mx="auto" w="80%">
          <FormControl id="name" mb={5} isRequired>
            <FormLabel fontWeight="bold" color="#0a2540">
              {t('contact.name')}
            </FormLabel>
            <Input type="text" name="user_name" placeholder={t('contact.namePlaceholder')} bg="white" borderRadius="lg" borderColor="#e2e8f0" _focus={{ borderColor: '#0a2540', boxShadow: '0 0 0 2px #0a254055' }} fontSize="md" color="#193b5a" />
          </FormControl>
          <FormControl id="email" mb={5} isRequired>
            <FormLabel fontWeight="bold" color="#0a2540">
              {t('contact.email')}
            </FormLabel>
            <Input type="email" name="user_email" placeholder={t('contact.emailPlaceholder')} bg="white" borderRadius="lg" borderColor="#e2e8f0" _focus={{ borderColor: '#0a2540', boxShadow: '0 0 0 2px #0a254055' }} fontSize="md" color="#193b5a" />
          </FormControl>
          <FormControl id="message" mb={6} isRequired>
            <FormLabel fontWeight="bold" color="#0a2540">
              {t('contact.message')}
            </FormLabel>
            <Textarea
              name="message"
              placeholder={t('contact.messagePlaceholder')}
              bg="white"
              borderRadius="lg"
              borderColor="#e2e8f0"
              minH="120px"
              resize="vertical"
              _focus={{ borderColor: '#0a2540', boxShadow: '0 0 0 2px #0a254055' }}
              fontSize="md"
              color="#193b5a"
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="blue"
            bg="#0a2540"
            color="white"
            width="full"
            size="lg"
            borderRadius="lg"
            fontWeight="bold"
            letterSpacing="wide"
            boxShadow="md"
            _hover={{ bg: '#193b5a', transform: 'translateY(-2px)', boxShadow: 'lg' }}
            transition="all 0.2s"
            mt={2}>
            {t('contact.sendButton')}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact
