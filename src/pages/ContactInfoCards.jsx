export default function ContactInfoCards() {
  return (
    <section className="section contact-cards">
      <div className="container contact-cards-grid">
        {/* Phone */}
        <a className="ccard" href="tel:+33XXXXXXXXX">
          <div className="ccard-icon">
            {/* headset icon */}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 12a8 8 0 0 1 16 0v6a2 2 0 0 1-2 2h-2v-6h4M8 20H6a2 2 0 0 1-2-2v-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="9" cy="15" r="1.8" fill="currentColor"/>
            </svg>
          </div>
          <h3>Contact us</h3>
          <p className="ccard-emph">+44</p>
        </a>

        {/* Email */}
        <a className="ccard" href="mailto:contact@monsite.com">
          <div className="ccard-icon">
            {/* mail icon */}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M3 7l9 6 9-6" fill="none" stroke="currentColor" strokeWidth="2"/>
              <text x="12" y="11" textAnchor="middle" fontSize="6" fill="currentColor" opacity=".7">@</text>
            </svg>
          </div>
          <h3>Email</h3>
          <p className="ccard-emph">infinitytv.cont@hotmail.com</p>
        </a>

        {/* Instagram (replaces 'Notre bureau') */}
        <a
          className="ccard"
          href="https://instagram.com/infinity_tv__" /* <-- put your IG */
          target="_blank" rel="noreferrer"
        >
          <div className="ccard-icon">
            {/* instagram icon */}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="17" cy="7" r="1.2" fill="currentColor"/>
            </svg>
          </div>
          <h3>Our Instagram</h3>
          <p className="ccard-emph">@infinity_tv__</p>
        </a>
      </div>
    </section>
  );
}
