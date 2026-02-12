export default function ClientsSection() {
  const clients = [
    { name: "Global Finance Corp", industry: "Financial Services" },
    { name: "RetailHub International", industry: "E-commerce" },
    { name: "HealthCare Plus", industry: "Healthcare" },
    { name: "EduLearn Systems", industry: "EdTech" },
    { name: "LogiTech Solutions", industry: "Logistics" },
    { name: "EnergizeAI", industry: "Energy" },
  ];

  const testimonials = [
    {
      text: "TechFlow transformed our entire IT infrastructure. Their team's expertise and dedication were exceptional.",
      author: "Sarah Johnson",
      company: "Global Finance Corp",
    },
    {
      text: "Working with TechFlow was seamless. They delivered our project on time and exceeded our expectations.",
      author: "Michael Chen",
      company: "RetailHub International",
    },
    {
      text: "Best decision we made for our cloud migration. Professional, reliable, and cost-effective solutions.",
      author: "Emma Williams",
      company: "HealthCare Plus",
    },
  ];

  return (
    <section className="lg:py-20 bg-white" id="client">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We partner with companies across various industries to deliver
            innovative solutions.
          </p>
        </div>
        <div className="mb-5 lg:mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 lg:mb-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="p-6 bg-linear-to-br from-blue-50 to-cyan-50 border border-border rounded-xl hover:border-primary/30 transition-all text-center"
              >
                <p className="font-semibold text-foreground mb-2">
                  {client.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {client.industry}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-background border border-border rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
