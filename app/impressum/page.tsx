import type { Metadata } from "next";
import { LegalPage, Ph } from "@/components/Legal";
import { legal } from "@/lib/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        {site.name}
        <br />
        Inhaber/in: <Ph value={legal.owner} />
        <br />
        <Ph value={legal.legalForm} />
        <br />
        {site.address.street}
        <br />
        {site.address.zip} {site.address.city}
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a href={site.phone.href}>{site.phone.display}</a>
        <br />
        E-Mail: <Ph value={legal.email} />
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
        <br />
        <Ph value={legal.vatId} />
      </p>

      <h2>Registereintrag</h2>
      <p>
        <Ph value={legal.register} />
      </p>

      <h2>Aufsichtsbehörde / Kammer</h2>
      <p>
        <Ph value={legal.supervisoryAuthority} />
      </p>

      <h2>Redaktionell verantwortlich</h2>
      <p>
        <Ph value={legal.contentResponsible} />
      </p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte und Links</h2>
      <p>
        Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
        der Inhalte können wir jedoch keine Gewähr übernehmen. Für Inhalte externer Websites, auf die wir verlinken,
        sind ausschließlich deren Betreiber verantwortlich.
      </p>

      <h2>Bildnachweis</h2>
      <p>Videos: Stock-Footage (Felbaba Volodymyr, Denys Hrishyn). <Ph value="[LIZENZ / PLATTFORM ERGÄNZEN]" /></p>
    </LegalPage>
  );
}
