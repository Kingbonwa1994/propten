import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="py-20 text-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to TendaHaven</h1>
      <p className="text-xl mb-8">Your revolutionary, user-centric real estate platform</p>
      <div className="flex justify-center space-x-4">
        <Button size="lg" className="bg-white text-[#000080] hover:bg-[#FFB6C1] hover:text-white">
          Start Hunting
        </Button>
        <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-[#000080]">
          Learn More
        </Button>
      </div>
    </section>
  )
}

