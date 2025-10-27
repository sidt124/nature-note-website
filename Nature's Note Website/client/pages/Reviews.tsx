import Layout from "@/components/Layout";
import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <Layout>
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Customer Reviews
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See reviews from our previous customers
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {/* Review 1 */}
            <div className="bg-white rounded-xl p-10 border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>
              <h3 className="font-bold text-foreground mb-4 text-lg">
                Exceptional Quality
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed italic font-light">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-bold text-primary">IN</span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">
                    Insert Name
                  </p>
                  <p className="text-xs text-muted-foreground">Verified Buyer</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-xl p-10 border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>
              <h3 className="font-bold text-foreground mb-4 text-lg">
                Best Purchase Ever
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed italic font-light">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-bold text-primary">IN</span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">
                    Insert Name
                  </p>
                  <p className="text-xs text-muted-foreground">Verified Buyer</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-xl p-10 border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>
              <h3 className="font-bold text-foreground mb-4 text-lg">
                Luxury Perfection
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed italic font-light">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-bold text-primary">IN</span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">
                    Insert Name
                  </p>
                  <p className="text-xs text-muted-foreground">Verified Buyer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Review Section */}
          <div className="bg-secondary rounded-xl p-10 md:p-16 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Share Your Experience
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Have you tried Nature's Note? We'd love to hear about your
              experience. Share your review with our community.
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
              Write a Review
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
