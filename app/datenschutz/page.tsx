import type { Metadata } from "next";
import { LegalPage, Ph } from "@/components/Legal";
import { legal } from "@/lib/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false, follow: true },
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutz">
      <p>Stand: <Ph value={legal.lastUpdated} /></p>

      <h2>1. Verantwortlicher</h2>
      <p>
        {site.name}, <Ph value={legal.owner} />
        <br />
        {site.address.street}, {site.address.zip} {site.address.city}
        <br />
        Telefon: {site.phone.display} · E-Mail: <Ph value={legal.email} />
      </p>

      <h2>2. Überblick</h2>
      <p>
        Diese Website verwendet keine Cookies, keine Analyse- oder Tracking-Tools und keine Kontaktformulare, die Daten
        an uns übertragen. Schriftarten werden lokal von unserem Server geladen; es findet keine Verbindung zu Google
        Fonts statt.
      </p>

      <h2>3. Hosting und Server-Logfiles</h2>
      <p>
        Diese Website wird bei folgendem Anbieter gehostet: <Ph value={legal.hostingProvider} />.
      </p>
      <p>
        Beim Aufruf der Website verarbeitet der Hoster automatisch Informationen, die Ihr Browser übermittelt
        (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Browsertyp, Betriebssystem,
        Referrer-URL). Dies ist technisch erforderlich, um die Website auszuliefern und ihre Sicherheit zu gewährleisten.
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. <Ph value="[SPEICHERDAUER DER LOGFILES / AUFTRAGSVERARBEITUNGSVERTRAG / DRITTLANDTRANSFER ERGÄNZEN]" />
      </p>

      <h2>4. Kontakt per Telefon</h2>
      <p>
        Wenn Sie uns anrufen, verarbeiten wir Ihre Telefonnummer und die Angaben aus dem Gespräch, um Ihre Anfrage zu
        bearbeiten und einen Termin zu vereinbaren (Art. 6 Abs. 1 lit. b DSGVO). Die Daten werden gelöscht, sobald sie
        für diesen Zweck nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten bestehen.
      </p>

      <h2>5. Kontakt per WhatsApp</h2>
      <p>
        Unsere WhatsApp-Schaltflächen und die Schnellanfrage sind einfache Links. Auf dieser Website werden dabei keine
        Daten gespeichert oder an uns übermittelt. Erst wenn Sie den Link anklicken, wird WhatsApp (WhatsApp Ireland
        Limited, Merrion Road, Dublin 4, Irland) geöffnet, und Sie entscheiden selbst, ob Sie die vorbereitete Nachricht
        absenden.
      </p>
      <p>
        Wenn Sie uns per WhatsApp schreiben, verarbeiten wir Ihre Telefonnummer, Ihren Namen und den Inhalt Ihrer
        Nachricht zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Dabei verarbeitet auch WhatsApp bzw. Meta
        Daten, unter Umständen auch in den USA. Informationen dazu finden Sie in der{" "}
        <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer">
          Datenschutzrichtlinie von WhatsApp
        </a>
        . Wenn Sie das nicht möchten, rufen Sie uns gerne an.
      </p>

      <h2>6. Google Maps (Link)</h2>
      <p>
        Für die Routenplanung verlinken wir auf Google Maps. Es wird keine Karte auf dieser Website eingebettet. Erst
        wenn Sie auf „Route planen“ klicken, werden Sie zu Google (Google Ireland Limited, Gordon House, Barrow Street,
        Dublin 4, Irland) weitergeleitet; dort gelten die Datenschutzbestimmungen von Google.
      </p>

      <h2>7. Ihre Rechte</h2>
      <p>Sie haben jederzeit das Recht auf:</p>
      <ul>
        <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        <li>
          Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO), z. B. beim Landesbeauftragten für den Datenschutz und
          die Informationsfreiheit Rheinland-Pfalz
        </li>
      </ul>
      <p>Wenden Sie sich dazu einfach an die oben genannten Kontaktdaten.</p>
    </LegalPage>
  );
}
