import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Home, Repeat, DollarSign, MessageCircle } from 'lucide-react'

export default function Features() {
  const features = [
    { title: 'Property Hunting', icon: Home, description: 'Find your dream home with our advanced search tools.' },
    { title: 'Property Swapping', icon: Repeat, description: 'Swap your property with ease using our innovative platform.' },
    { title: 'Seamless Payments', icon: DollarSign, description: 'Secure and easy payment options for all transactions.' },
    { title: 'Developer Contact', icon: MessageCircle, description: 'Direct communication with real estate developers.' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#000080]">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-to-br from-[#2E8B57] to-[#000080] text-white">
              <CardHeader>
                <feature.icon className="w-10 h-10 mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

