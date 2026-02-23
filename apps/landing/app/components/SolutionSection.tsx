import { IconCloud, IconCode2, IconTrendingUp } from "@repo/icons";
import { IconUsers } from "@repo/icons";
import { IconZap } from "@repo/icons";
import { IconShield } from "@repo/icons";

export default function SolutionsSection() {
  const solutions = [
    {
      icon: IconCode2,
      title: "Custom Software Development",
      description:
        "From concept to deployment, we build scalable applications tailored to your business requirements.",
      features: [
        "Full-stack development",
        "API design & integration",
        "Mobile app development",
      ],
    },
    {
      icon: IconCloud,
      title: "Cloud Migration & Management",
      description:
        "Seamless migration to cloud platforms with minimal downtime and maximum efficiency.",
      features: [
        "Cloud architecture design",
        "Infrastructure as Code",
        "Cost optimization",
      ],
    },
    {
      icon: IconShield,
      title: "Cybersecurity Solutions",
      description:
        "Protect your business with comprehensive security solutions and threat management.",
      features: [
        "Security audits",
        "Penetration testing",
        "24/7 monitoring",
      ],
    },
    {
      icon: IconZap,
      title: "DevOps & Automation",
      description:
        "Streamline your development pipeline with modern DevOps practices and automation.",
      features: [
        "CI/CD implementation",
        "Container orchestration",
        "Infrastructure automation",
      ],
    },
    {
      icon: IconTrendingUp,
      title: "Data Analytics & BI",
      description:
        "Turn data into actionable insights with advanced analytics and business intelligence solutions.",
      features: [
        "Data warehousing",
        "Real-time analytics",
        "Business intelligence dashboards",
      ],
    },
    {
      icon: IconUsers,
      title: "IT Staffing & Consulting",
      description:
        "Augment your team with skilled IT professionals and expert consulting services.",
      features: [
        "Team augmentation",
        "Tech consulting",
        "Staff training & development",
      ],
    },
  ];

  return (
    <section id="solution" className="py-10 lg:py-20 bg-linear-to-b from-background to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions designed to accelerate your digital transformation
            and drive business growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white border border-border rounded-xl hover:border-primary/30 hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={24} />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {solution.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {solution.description}
                </p>

                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
