import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function PropertySearch() {
  return (
    <section className="py-20 bg-[#FFB6C1] bg-opacity-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Find Your Perfect Property</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Input placeholder="Location" className="bg-white" />
          <Select>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-100000">$0 - $100,000</SelectItem>
              <SelectItem value="100000-250000">$100,000 - $250,000</SelectItem>
              <SelectItem value="250000-500000">$250,000 - $500,000</SelectItem>
              <SelectItem value="500000+">$500,000+</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-[#2E8B57] hover:bg-[#000080] text-white">Search</Button>
        </div>
      </div>
    </section>
  )
}

