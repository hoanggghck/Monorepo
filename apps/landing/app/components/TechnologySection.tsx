export default function TechnologiesSection() {
  const techCategories = [
    {
      category: "Frontend",
      technologies: [
        "React",
        "Vue.js",
        "Angular",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      technologies: [
        "Node.js",
        "Python",
        "Java",
        "Go",
        ".NET",
        "PHP",
      ],
    },
    {
      category: "Cloud & Infrastructure",
      technologies: [
        "AWS",
        "Azure",
        "Google Cloud",
        "Kubernetes",
        "Docker",
        "Terraform",
      ],
    },
    {
      category: "Databases",
      technologies: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Redis",
        "DynamoDB",
        "Elasticsearch",
      ],
    },
    {
      category: "DevOps & Tools",
      technologies: [
        "GitHub Actions",
        "Jenkins",
        "GitLab CI",
        "Prometheus",
        "ELK Stack",
        "Grafana",
      ],
    },
    {
      category: "AI & Data",
      technologies: [
        "TensorFlow",
        "PyTorch",
        "Apache Spark",
        "Kafka",
        "Airflow",
        "Jupyter",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technologies We Master
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We stay at the cutting edge of technology, leveraging the best tools
            and frameworks to build robust solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-linear-to-br from-blue-50 to-cyan-50 border border-border rounded-xl hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">
                {item.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white border border-border rounded-full text-sm text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Don't see your technology of choice? We're always learning and expanding our expertise.
          </p>
          <a
            href="#contact"
            className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Discuss Your Tech Stack
          </a>
        </div>
      </div>
    </section>
  );
}
