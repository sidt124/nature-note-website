import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
                Nature's Note <span className="text-primary">Luxury</span> Colognes
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <Link
                to="/products"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Collections
              </Link>
            </div>

            {/* Right Image Placeholder */}
            <div className="flex items-center justify-center">
              <div className="w-full aspect-square bg-secondary rounded-xl flex items-center justify-center border border-border shadow-lg">
                <div className="text-center">
                  <p className="text-muted-foreground text-lg">
                    [Hero Image Placeholder]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Nature's Note Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">Nature's Note</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Discover what makes our colognes special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Reason 1 */}
            <div className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <div className="w-7 h-7 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Insert
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <div className="w-7 h-7 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Insert
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <div className="w-7 h-7 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Insertxs
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Customer Reviews
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Hear what our satisfied customers have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Review 1 */}
            <div className="bg-white rounded-xl p-10 border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed font-light italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="font-bold text-foreground">- Insert Name</p>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-xl p-10 border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed font-light italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="font-bold text-foreground">- Insert Name</p>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-xl p-10 border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed font-light italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="font-bold text-foreground">- Insert Name</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
