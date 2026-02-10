import { IconCheckCircle } from "@repo/icons";

export default function ExperienceSection() {
  const highlights = [
    "10+ years of industry expertise",
    "Global team of 200+ professionals",
    "ISO 27001 certified",
    "24/7 support and monitoring",
  ];

  const services = [
    {
      title: "Custom Development",
      description:
        "Scalable, secure, and maintainable software solutions tailored to your unique business needs.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Migration, optimization, and management of cloud infrastructure across AWS, Azure, and GCP.",
    },
    {
      title: "DevOps Services",
      description:
        "CI/CD pipelines, infrastructure automation, and deployment optimization for faster delivery.",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Advanced analytics, predictive models, and intelligent automation to drive business value.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Experience & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With over a decade of proven expertise, we deliver world-class IT solutions
            that drive innovation and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why Choose TechFlow?
            </h3>
            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <IconCheckCircle
                    className="text-primary shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-8 inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Learn More
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-border rounded-xl hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <h4 className="font-semibold text-foreground mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
