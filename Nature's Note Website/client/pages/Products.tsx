import Layout from "@/components/Layout";

export default function Products() {
  return (
    <Layout>
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Our Collections
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our assorted catalog of luxury colognes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Product 1 */}
            <div className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square bg-secondary flex items-center justify-center border-b border-border">
                <p className="text-muted-foreground text-center">
                  [Product Image Placeholder]
                </p>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Lorem Ipsum
                </h3>
                <p className="text-lg text-primary font-bold mb-4">$150</p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
                <button className="w-full bg-primary text-primary-foreground py-3 rounded-md hover:bg-primary/90 transition-all duration-300 font-semibold shadow-md hover:shadow-lg">
                  Order
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square bg-secondary flex items-center justify-center border-b border-border">
                <p className="text-muted-foreground text-center">
                  [Product Image Placeholder]
                </p>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Dolor Sit
                </h3>
                <p className="text-lg text-primary font-bold mb-4">$175</p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
                <button className="w-full bg-primary text-primary-foreground py-3 rounded-md hover:bg-primary/90 transition-all duration-300 font-semibold shadow-md hover:shadow-lg">
                  Order
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square bg-secondary flex items-center justify-center border-b border-border">
                <p className="text-muted-foreground text-center">
                  [Product Image Placeholder]
                </p>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Amet Consectetur
                </h3>
                <p className="text-lg text-primary font-bold mb-4">$200</p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
                <button className="w-full bg-primary text-primary-foreground py-3 rounded-md hover:bg-primary/90 transition-all duration-300 font-semibold shadow-md hover:shadow-lg">
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
