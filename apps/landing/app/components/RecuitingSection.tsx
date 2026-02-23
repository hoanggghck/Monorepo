import { IconZap } from "@repo/icons";
import { IconUsers } from "@repo/icons";
import { IconBriefcase } from "@repo/icons";

export default function RecruitingSection() {
  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      level: "Senior",
      location: "Hanoi, Vietnam",
      description: "Lead development of scalable web applications using React and Node.js",
    },
    {
      title: "Cloud Architect",
      level: "Senior",
      location: "Remote",
      description: "Design and implement cloud solutions on AWS and Azure platforms",
    },
    {
      title: "DevOps Engineer",
      level: "Mid-level",
      location: "Hanoi, Vietnam",
      description: "Build and maintain CI/CD pipelines and infrastructure automation",
    },
    {
      title: "Data Scientist",
      level: "Mid-level",
      location: "Remote",
      description: "Develop machine learning models and data analytics solutions",
    },
    {
      title: "Frontend Developer",
      level: "Junior",
      location: "Hanoi, Vietnam",
      description: "Create responsive and interactive user interfaces with React and TypeScript",
    },
    {
      title: "QA Automation Engineer",
      level: "Mid-level",
      location: "Hanoi, Vietnam",
      description: "Design and implement automated testing frameworks and test strategies",
    },
  ];

  const benefits = [
    {
      icon: IconBriefcase,
      title: "Competitive Salary",
      description: "Attractive compensation packages with performance bonuses",
    },
    {
      icon: IconUsers,
      title: "Team Culture",
      description: "Collaborative environment with talented professionals from around the world",
    },
    {
      icon: IconZap,
      title: "Growth Opportunities",
      description: "Career development, training programs, and international exposure",
    },
  ];

  return (
    <section className="py-10 lg:py-20 bg-linear-to-b from-blue-50 to-background" id="recuiting">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Join Our Growing Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're looking for talented professionals passionate about technology
            and innovation. Help us build the future of IT consulting.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 mb-8 lg:mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-4 lg:p-8 bg-linear-to-br from-blue-50 to-cyan-50 border border-border rounded-xl hover:border-primary/30 hover:shadow-lg transition-all text-center"
              >
                <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Open Positions
          </h3>

          <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="p-6 bg-linear-to-r from-background to-white border border-border rounded-xl hover:border-primary/30 hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {position.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {position.location}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {position.level}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{position.description}</p>
                <button className="inline-flex px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center p-8 bg-linear-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Don't see a position that fits?
          </h3>
          <p className="text-muted-foreground mb-6">
            Send us your resume and tell us what role interests you. We're always looking for talented people.
          </p>
          <a
            href="mailto:careers@techflow.com"
            className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Send Your Resume
          </a>
        </div>
      </div>
    </section>
  );
}
