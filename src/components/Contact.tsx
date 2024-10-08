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
    <Box id="contact" py={10} px={{ base: 4, md: 8 }} maxW="800px" mx="auto">
      <Center flexDirection="column" mb={6}>
        <Image src="/profile.webp" alt="contact image" boxSize="150px" mb={4} borderRadius="full" />
        <Heading as="h2" size="lg" mb={4} textAlign="center">
          {t('contact.title')}
        </Heading>
        <Text fontSize="1em" color="gray.500" mb={6} textAlign="center">
          {t('contact.description')}
        </Text>
      </Center>
      <Box as="form" onSubmit={sendEmail}>
        <FormControl id="name" mb={4} isRequired>
          <FormLabel>{t('contact.name')}</FormLabel>
          <Input type="text" name="user_name" placeholder={t('contact.namePlaceholder')} />
        </FormControl>
        <FormControl id="email" mb={4} isRequired>
          <FormLabel>{t('contact.email')}</FormLabel>
          <Input type="email" name="user_email" placeholder={t('contact.emailPlaceholder')} />
        </FormControl>
        <FormControl id="message" mb={4} isRequired>
          <FormLabel>{t('contact.message')}</FormLabel>
          <Textarea name="message" placeholder={t('contact.messagePlaceholder')} />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">
          {t('contact.sendButton')}
        </Button>
      </Box>
    </Box>
  )
}

export default Contact
