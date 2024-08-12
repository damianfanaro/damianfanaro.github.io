interface ProfilePhotoProps {
  src: string
  alt: string
  size?: number
}

const ProfilePicture: React.FC<ProfilePhotoProps> = ({ src, alt, size = 500 }) => {
  return (
    <div>
      <img src={src} alt={alt} style={{ width: size, height: size, marginBottom: 30 }} className="img-fluid rounded-circle" />
    </div>
  )
}

export default ProfilePicture
