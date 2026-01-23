import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-200 text-gray-800">
      <div className="container-custom py-6">
        <div className="text-center text-sm">
          <p>IPC Hebron, Periyadka Road, Neria Post, Belthangady TQ, D.K, Karnataka, India. © {currentYear} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
