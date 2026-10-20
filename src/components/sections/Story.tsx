import { Reveal, MaskLine } from "../ui/Reveal"
import { promises } from "@/lib/site"

export function Story() {
  return (
    <section id="shop" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7" y={30}>
            <div className="relative aspect-[4/3] overflow-hidden bg-paper-2">
              <img
                src="./images/shop-owner.jpg"
                alt="Ramesh Keshri standing in the aisle of Shree Keshri Synthetics, surrounded by shelves of fabric"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <span className="absolute left-4 top-4 bg-paper/90 px-3 py-1.5 font-mono text-[8.5px] uppercase tracking-[0.22em] text-ink">
                Inside the shop · High School Road
              </span>
            </div>
          </Reveal>

          <div className="lg:col-span-5 lg:pl-2">
            <Reveal y={12}>
              <p className="eyebrow">03 — Inside the shop</p>
            </Reveal>
            <h2 className="mt-5 font-display text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.03] tracking-[-0.03em]">
              <MaskLine>Aisles worth</MaskLine>
              <MaskLine delay={0.08}>
                getting <span className="italic text-maroon">lost</span> in.
              </MaskLine>
            </h2>
            <Reveal delay={0.16}>
              <p className="mt-6 text-[14.5px] leading-[1.85] text-ink-soft">
                Walk in and the first thing you notice is the colour — stacked, folded, wrapped and
                labelled, from the floor to a ceiling that disappears behind it. The second thing is
                that nobody rushes you.
              </p>
              <p className="mt-4 text-[14.5px] leading-[1.85] text-ink-soft">
                Ramesh Keshri has run this counter the way a good tailor runs a fitting: ask first,
                suggest second, sell last. Tell him the function, the weather and the budget, and
                the shortlist arrives on the counter within minutes.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6">
                {[
                  ["Sarees", "Silk · cotton · georgette"],
                  ["Readymades", "Kurtis · suits · sets"],
                  ["Menswear", "Shirts · tees · denim"],
                  ["The rest", "Dupatta · blouse · fabric"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-display text-[16px] text-ink">{k}</dt>
                    <dd className="mt-1 font-mono text-[8.5px] uppercase tracking-[0.18em] text-ink-mute">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Reveal y={26} delay={0.05}>
            <figure>
              <div className="aspect-[16/10] overflow-hidden bg-paper-2">
                <img
                  src="./images/shop-depth.jpg"
                  alt="The narrow aisle of the shop seen from the doorway, shelves of sarees on both sides"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[8.5px] uppercase tracking-[0.2em] text-ink-mute">
                Fig. 01 — The view from the shutter
              </figcaption>
            </figure>
          </Reveal>
          <Reveal y={26} delay={0.12}>
            <figure>
              <div className="aspect-[16/10] overflow-hidden bg-paper-2">
                <img
                  src="./images/shop-front.jpg"
                  alt="The shopfront on High School Road with sarees hanging at the entrance"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-[50%_38%]"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[8.5px] uppercase tracking-[0.2em] text-ink-mute">
                Fig. 02 — High School Road, Simri Bakhtiyarpur
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 border-t border-line pt-10 sm:grid-cols-3 lg:mt-20 lg:gap-12">
          {promises.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-gold">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-[21px] leading-none text-ink">{p.title}</h3>
                </div>
                <p className="mt-3 text-[13.5px] leading-[1.8] text-ink-soft">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
