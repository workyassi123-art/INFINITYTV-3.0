export default function PromoHero() {
  return (
    <section className="section promo-hero">
      <div className="container promo-wrap">
        {/* Left: image */}
        <div className="promo-media">
          {/* put your image in /public/hero/iptv-card.png or change the src */}
          <img src="/hero/pub.jpg" alt="Infinity TV devices and apps" />
          <div className="promo-glow" aria-hidden="true" />
        </div>

        {/* Right: content */}
        <div className="promo-content">
          <span className="promo-kicker">INFINITY TV</span>
          <h2 className="promo-title">
            The best IPTV subscription for 2025, finally experience real quality
            with Infinity TV!
          </h2>

          <p className="promo-text">
            Tired of IPTV subscriptions that promise the world but leave you
            disappointed? With Infinity TV, say goodbye to interruptions,
            unavailable channels, and mediocre picture quality. With 8 years of
            experience, we deliver a stable, reliable IPTV experience, backed by
            high-bandwidth servers and robust hardware.
          </p>

          <p className="promo-text">
            Over 27,000 channels, including VIP sports channels, plus a
            constantly updated VOD library—you’re guaranteed unlimited
            entertainment. Compatible with all apps and devices via Xtream
            Codes, our service is the solution to end your IPTV frustrations.
          </p>

          <a className="btn promo-cta" href="#pricing" aria-label="See the plans">
            SEE THE PLANS →
          </a>
        </div>
      </div>
    </section>
  );
}
