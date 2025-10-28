import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      {/* Meet the Team Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              About <span className="text-primary">Nature's Note</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the team behind Nature's Note Luxury Colognes
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mb-8 aspect-square bg-secondary rounded-xl flex items-center justify-center border border-border shadow-md hover:shadow-lg transition-shadow duration-300">
                <p className="text-muted-foreground">[Photo]</p>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Anay Goyal
              </h3>
              <p className="text-primary font-semibold mb-4 text-sm uppercase tracking-wide">CEO</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="mb-8 aspect-square bg-secondary rounded-xl flex items-center justify-center border border-border shadow-md hover:shadow-lg transition-shadow duration-300">
                <p className="text-muted-foreground">[Photo]</p>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Sanjay Chellamuthu
              </h3>
              <p className="text-primary font-semibold mb-4 text-sm uppercase tracking-wide">Design</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="mb-8 aspect-square bg-secondary rounded-xl flex items-center justify-center border border-border shadow-md hover:shadow-lg transition-shadow duration-300">
                <p className="text-muted-foreground">[Photo]</p>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Mahit Kapugorla
              </h3>
              <p className="text-primary font-semibold mb-4 text-sm uppercase tracking-wide">Finance</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Our Story
          </h2>

          <div className="space-y-16">
            {/* Event 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-sm font-bold text-primary mb-4 uppercase tracking-widest">
                  2025
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Lorem Ipsum Dolor
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="aspect-video bg-white rounded-xl flex items-center justify-center border border-border shadow-lg">
                <p className="text-muted-foreground">[Event Image]</p>
              </div>
            </div>

            {/* Event 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="aspect-video bg-white rounded-xl flex items-center justify-center border border-border shadow-lg order-2 md:order-1">
                <p className="text-muted-foreground">[Event Image]</p>
              </div>
              <div className="order-1 md:order-2">
                <div className="text-sm font-bold text-primary mb-4 uppercase tracking-widest">
                  2025
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Sit Amet Consectetur
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            {/* Event 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-sm font-bold text-primary mb-4 uppercase tracking-widest">
                  2025
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Adipiscing Elit Sed
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="aspect-video bg-white rounded-xl flex items-center justify-center border border-border shadow-lg">
                <p className="text-muted-foreground">[Event Image]</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
