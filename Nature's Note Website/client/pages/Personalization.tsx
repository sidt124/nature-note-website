import Layout from "@/components/Layout";

export default function Personalization() {
  return (
    <Layout>
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Scent Personalization
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover your perfect cologne scent
            </p>
          </div>

          <div className="bg-white rounded-xl border border-border p-10 md:p-14 shadow-lg">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                Take Our Scent Personalization Quiz
              </button>
            </div>
          </div>

          {/* Additional Content Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center bg-secondary rounded-xl p-8">
              <div className="text-5xl font-bold text-primary mb-3">100+</div>
              <p className="text-muted-foreground text-lg">Unique Scent Combinations</p>
            </div>
            <div className="text-center bg-secondary rounded-xl p-8">
              <div className="text-5xl font-bold text-primary mb-3">98%</div>
              <p className="text-muted-foreground text-lg">Customer Satisfaction Rate</p>
            </div>
            <div className="text-center bg-secondary rounded-xl p-8">
              <div className="text-5xl font-bold text-primary mb-3">10K+</div>
              <p className="text-muted-foreground text-lg">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
