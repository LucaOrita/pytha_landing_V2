import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politica de confidentialitate',
  description: 'Politica de confidentialitate si protectia datelor personale conform GDPR — pytha3d.ro.',
  robots: { index: false, follow: false },
};

export default function PoliticaConfidentialitatePage() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-3xl space-y-8">
          <h1 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Politica de confidentialitate
          </h1>
          <p className="text-sm text-gray-400">
            Ultima actualizare: Martie 2026
          </p>

          <div className="space-y-6 text-base leading-relaxed text-gray-600">
            <div>
              <h2 className="mb-2 text-xl font-bold text-gray-900">1. Cine suntem</h2>
              <p>
                AdLine Industries SRL, cu sediul in Bulevardul Metalurgiei 99-99B,
                Bucuresti 041832, Romania. Operam site-ul pytha3d.ro si suntem
                distribuitorul autorizat al software-ului PYTHA 3D-CAD in Romania.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-bold text-gray-900">2. Ce date colectam</h2>
              <p>
                Prin formularele de pe site, colectam: numele firmei, persoana de
                contact, adresa de email, numarul de telefon, tipul firmei si
                informatii despre echipamentele utilizate. Aceste date sunt furnizate
                voluntar de catre vizitator.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-bold text-gray-900">3. De ce colectam aceste date</h2>
              <p>
                Datele sunt utilizate exclusiv pentru a va contacta referitor la
                software-ul PYTHA 3D-CAD: programarea demonstratiilor, transmiterea
                ofertelor personalizate si furnizarea suportului tehnic.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-bold text-gray-900">4. Cum stocam si protejam datele</h2>
              <p>
                Datele sunt stocate securizat si nu sunt partajate cu terti, cu
                exceptia serviciilor tehnice necesare functionarii site-ului si
                comunicarii (hosting, email). Nu vindem si nu inchiriem datele
                dumneavoastra personale.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-bold text-gray-900">5. Drepturile dumneavoastra</h2>
              <p>
                Conform GDPR, aveti dreptul de acces la datele personale, dreptul de
                rectificare, dreptul de stergere si dreptul de a va opune prelucrarii.
                Pentru exercitarea acestor drepturi, ne puteti contacta la{' '}
                <a
                  href="mailto:pytha@adlineindustries.ro"
                  className="font-semibold text-[#8a1820] hover:underline"
                >
                  pytha@adlineindustries.ro
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
