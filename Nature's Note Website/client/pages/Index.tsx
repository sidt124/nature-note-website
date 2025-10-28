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

          <div className="flex justify-center">
            {/* Product */}
            <div className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300 max-w-sm w-full">
              <div className="aspect-square bg-secondary flex items-center justify-center border-b border-border overflow-hidden">
                <img
                  src="/solaris.png"
                  alt="Solaris - Nature's Note"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Solaris — by Nature's Note
                </h3>
                <p className="text-lg text-primary font-bold mb-4">$69.99</p>
                <div className="text-muted-foreground text-sm mb-6 leading-relaxed space-y-3">
                  <p>A bright fusion of citrus, marine air, and smooth woods. Solaris captures the energy of sunlight and sea breeze — clean, confident, and effortlessly refined.</p>

                  <div>
                    <p>Top Notes:</p>
                    <p>Citrus, Bergamot, Pineapple, Marine Accord</p>
                  </div>

                  <div>
                    <p>Middle Notes:</p>
                    <p>Jasmine, Aromatic Woods, Herbal Accord</p>
                  </div>

                  <div>
                    <p>Base Notes:</p>
                    <p>Musk, Sandalwood, Amberwood, Vetiver</p>
                  </div>

                  <div>
                    <p>Mood:</p>
                    <p>Radiant. Fresh. Confident.</p>
                  </div>
                </div>
                <a
                  href="https://pci.jotform.com/form/252998793059176"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block bg-primary text-primary-foreground py-3 rounded-md hover:bg-primary/90 transition-all duration-300 font-semibold shadow-md hover:shadow-lg text-center"
                >
                  Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
