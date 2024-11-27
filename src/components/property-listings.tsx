import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Home, Bed, Bath, Maximize, DollarSign, Star } from 'lucide-react'

const properties = [
  {
    id: 1,
    title: "Modern City Apartment",
    type: "Apartment",
    price: 250000,
    bedrooms: 2,
    bathrooms: 2,
    size: 1000,
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Suburban Family Home",
    type: "House",
    price: 450000,
    bedrooms: 4,
    bathrooms: 3,
    size: 2500,
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Luxury Beachfront Villa",
    type: "Villa",
    price: 1200000,
    bedrooms: 5,
    bathrooms: 4,
    size: 3500,
    rating: 4.9,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function PropertyListings() {
  return (
    <section className="py-12 bg-gradient-to-r from-[#2E8B57] via-[#3498db] to-[#FFB6C1]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden transition-transform duration-300 hover:scale-105">
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-[#2E8B57]">
                    {property.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl mb-2">{property.title}</CardTitle>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-[#2E8B57] mr-1" />
                    <span className="font-bold">{property.price.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span>{property.rating}</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1 text-[#3498db]" />
                    <span>{property.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1 text-[#3498db]" />
                    <span>{property.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Maximize className="w-4 h-4 mr-1 text-[#3498db]" />
                    <span>{property.size} sqft</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 p-4">
                <Button className="w-full bg-gradient-to-r from-[#2E8B57] to-[#3498db] hover:from-[#3498db] hover:to-[#2E8B57] text-white transition-all duration-300">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

