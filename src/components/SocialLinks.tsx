import { FaGithub, FaLinkedin } from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <section id="social-links" className="text-center">
      <div className="d-flex justify-content-center">
        <a href="https://github.com/damianfanaro" target="_blank" rel="noopener noreferrer" className="mx-3">
          <FaGithub size={32} />
        </a>
        <a href="https://linkedin.com/in/damianfanaro" target="_blank" rel="noopener noreferrer" className="mx-3">
          <FaLinkedin size={32} />
        </a>
      </div>
    </section>
  )
}

export default SocialLinks
