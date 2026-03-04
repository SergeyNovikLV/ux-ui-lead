import "./ClientLogos.css";

/* Logos are loaded from public/logos/ — place PNG files there:
   c4.png (Channel 4), db.png (Deutsche Bank), jj.png (Johnson & Johnson),
   pm.png (Perfetti Van Melle), mapon.png (Mapon).
   Default: grayscale; hover: full color. */
const CLIENT_LOGOS = [
  { name: "Channel 4", src: import.meta.env.BASE_URL + "logos/c4.png" },
  { name: "Deutsche Bank", src: import.meta.env.BASE_URL + "logos/db.png" },
  { name: "Johnson & Johnson", src: import.meta.env.BASE_URL + "logos/jj.png" },
  { name: "Perfetti Van Melle", src: import.meta.env.BASE_URL + "logos/pm.png" },
  { name: "Mapon", src: import.meta.env.BASE_URL + "logos/mapon.png" },
];

export default function ClientLogos() {
  return (
    <section className="client-logos" aria-label="Companies and brands we have worked with">
      <div className="client-logos__inner">
        <span className="client-logos__label">Worked with</span>
        <div className="client-logos__divider" aria-hidden="true" />
        <div className="client-logos__list">
          {CLIENT_LOGOS.map(({ name, src }) => (
            <div key={name} className="client-logos__item">
              <img src={src} alt={name} width="auto" height="36" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
