import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#000080] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TendaHaven</h3>
            <p>Revolutionary real estate solutions for everyone.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-[#FFB6C1]">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#FFB6C1]">Contact</Link></li>
              <li><Link href="#" className="hover:text-[#FFB6C1]">FAQ</Link></li>
              <li><Link href="#" className="hover:text-[#FFB6C1]">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#FFB6C1]">Facebook</Link>
              <Link href="#" className="hover:text-[#FFB6C1]">Twitter</Link>
              <Link href="#" className="hover:text-[#FFB6C1]">Instagram</Link>
              <Link href="#" className="hover:text-[#FFB6C1]">LinkedIn</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 TendaHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

