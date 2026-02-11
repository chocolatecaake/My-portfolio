import React from "react";
import thumbnail from "../../assets/imgs/janPics/janThumbnail.png";
import home from "../../assets/imgs/janPics/Desktop.png";
import productList from "../../assets/imgs/janPics/Product List.png";
import product from "../../assets/imgs/janPics/product.png";
import cart from "../../assets/imgs/janPics/cart.png";

// Replace images in /assets/sooz/
// landing.png, listing.png, product.png, cart.png
// feature1.png, feature2.png, mobile.png, desktop.png, wireframe.png

export default function Sooz() {
  return (
    <div className="px-6 md:px-12 lg:px-24 py-16 space-y-28">
      {/* HERO */}
      <section className="space-y-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">
          JAN — Skincare eCommerce Experience
        </h1>
        <p className="text-lg opacity-80">
          A modern responsive storefront designed to simplify skincare discovery
          and improve product browsing clarity.
        </p>
        <img
          src={thumbnail}
          alt="SOOZ Landing"
          className="rounded-2xl shadow-xl mt-10"
        />
      </section>

      {/* MAIN SCREENS */}
      <section className="space-y-24 max-w-5xl mx-auto">
        <ProjectSection
          title="Homepage"
          text="Designed a clean hero and category hierarchy to quickly guide users toward products without overwhelming them."
          img={home}
        />

        <ProjectSection
          title="Product Listing"
          text="Grid layout optimized for visual scanning with clear product separation and readable information density."
          img={productList}
        />

        <ProjectSection
          title="Product Details"
          text="Focused on ingredient visibility, trust indicators, and purchase clarity to improve conversion confidence."
          img={product}
        />

        <ProjectSection
          title="Cart & Checkout"
          text="Minimal checkout flow designed to reduce friction and keep user focus on completing purchase."
          img={cart}
        />
      </section>

      {/* FINAL CTA */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-semibold">Final Outcome</h2>
        <p className="opacity-80 max-w-2xl mx-auto">
          The final design delivers a calm browsing experience suited for
          skincare shopping while maintaining strong visual identity and
          usability.
        </p>
      </section>

      <section></section>
    </div>
  );
}

function ProjectSection({ title, text, img }) {
  return (
    <div className="space-y-6 text-center">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="opacity-80 max-w-2xl mx-auto">{text}</p>
      <img src={img} className="rounded-2xl shadow-lg" />
    </div>
  );
}
