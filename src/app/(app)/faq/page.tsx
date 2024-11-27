export default function FAQPage() {
  const faqs = [
    {
      question: "How do I start hunting for a property?",
      answer: "To start hunting for a property, use our search bar to enter your desired location, property type, and budget. You can also browse our featured listings or use advanced filters to narrow down your search."
    },
    {
      question: "What documents do I need to sell my property?",
      answer: "To sell your property, you'll typically need the title deed, compliance certificates (electrical, gas, water), and a valid ID. It's also helpful to have recent utility bills and approved building plans."
    },
    {
      question: "How does property swapping work?",
      answer: "Property swapping allows you to exchange your property with another owner. List your property for swapping, browse other available properties, and when you find a match, you can propose a swap and negotiate terms with the other owner."
    },
    {
      question: "Are there any fees for using this platform?",
      answer: "Basic property hunting and browsing is free. There may be fees for premium features, listing properties for sale, or for property developers using our specialized services. Check our pricing page for more details."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

