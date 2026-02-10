import { IconArrowUpRight } from "@repo/icons";

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-32 bg-linear-to-br from-blue-50 via-background to-cyan-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary">
                Digital Transformation Partners
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Transform Your Business with Expert IT Solutions
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We deliver cutting-edge IT outsourcing and consulting services to help businesses accelerate digital transformation, reduce costs, and achieve sustainable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
              >
                Start Your Journey
                <IconArrowUpRight size={20} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                Explore Services
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">200+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
          <div className="relative h-96 lg:h-full">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 h-96 flex items-center justify-center border border-border">
              <div className="space-y-4 w-full">
                <div className="h-12 bg-linear-to-r from-primary/20 to-secondary/20 rounded-lg"></div>
                <div className="h-8 bg-linear-to-r from-primary/10 to-secondary/10 rounded-lg w-2/3"></div>
                <div className="h-8 bg-linear-to-r from-primary/10 to-secondary/10 rounded-lg w-full"></div>
                <div className="h-8 bg-linear-to-r from-primary/10 to-secondary/10 rounded-lg w-5/6"></div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="h-24 bg-primary/5 rounded-lg"></div>
                  <div className="h-24 bg-secondary/5 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
