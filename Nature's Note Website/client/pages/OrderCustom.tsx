import Layout from "@/components/Layout";

export default function OrderCustom() {
  return (
    <Layout>
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Order a Custom Perfume
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Design your own unique fragrance
            </p>
          </div>

          <div className="bg-white rounded-xl border border-border p-10 md:p-14 shadow-lg">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  How It Works
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 bg-secondary rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-4">1</div>
                  <h3 className="font-bold text-foreground mb-3 text-lg">
                    Choose Your Notes
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </p>
                </div>
                <div className="p-8 bg-secondary rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-4">2</div>
                  <h3 className="font-bold text-foreground mb-3 text-lg">
                    Select Intensity
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </p>
                </div>
                <div className="p-8 bg-secondary rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-4">3</div>
                  <h3 className="font-bold text-foreground mb-3 text-lg">
                    Place Your Order
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Pricing
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Each custom perfume is crafted to your specifications. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                Order Your Custom Perfume
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
