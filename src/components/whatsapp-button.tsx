'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const [message, setMessage] = useState('')

  const handleSendMessage = () => {
    // Replace this with your actual WhatsApp number
    const phoneNumber = '+27659505243'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" className="rounded-full bg-green-500 hover:bg-green-600">
            <MessageCircle className="h-6 w-6 text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <div className="flex flex-col h-full">
            <h2 className="text-lg font-semibold mb-4">Send us a WhatsApp message</h2>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="flex-grow mb-4"
            />
            <Button onClick={handleSendMessage} className="bg-green-500 hover:bg-green-600">
              Send WhatsApp Message
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

