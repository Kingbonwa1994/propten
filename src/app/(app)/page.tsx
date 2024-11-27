import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import PropertySearch from '@/components/property-search'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#2E8B57] via-[#000080] to-[#FFB6C1]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <PropertySearch />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

