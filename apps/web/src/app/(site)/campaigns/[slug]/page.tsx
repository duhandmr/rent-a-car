import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./campaign-detail.module.scss";
import { getCampaign } from "@/lib/campaigns";
import WhatsappContent from "@/components/WhatsappContent";

export const revalidate = 0;

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = await getCampaign(params.slug).catch(() => null);
  return {
    title: c ? `${c.title} | Campaign` : "Campaign | Rent-a-Car",
    description: c?.shortDesc ?? "Campaign details and promo terms.",
  };
}

export default async function CampaignDetail({ params }: Props) {
  const c = await getCampaign(params.slug);

  const long =
    (c as any).longDesc ??
    c.shortDesc ??
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus, lorem nec blandit finibus, massa mi ultrices leo, nec gravida tortor velit id tellus. Quisque accumsan orci vitae nisi auctor rutrum. Sed nec luctus massa. Nulla mauris libero, consectetur placerat tortor eu, rutrum efficitur arcu. Mauris pretium accumsan pellentesque. Vivamus ut eleifend tortor, eget volutpat lectus. Nullam non nibh feugiat, gravida arcu ac, fermentum tellus. Fusce nec lorem suscipit, bibendum tellus eget, pellentesque ex. Nullam convallis nisl ligula, sit amet volutpat est posuere ultrices. Phasellus tristique purus eget finibus vehicula. Fusce sed orci tincidunt, luctus leo quis, congue justo. Pellentesque porta cursus sem, semper consectetur magna aliquam ut. Sed maximus sed justo ac efficitur.`;

  return (
    <main className={styles.main}>
      <div className="container">
        <header className={styles.top}>
          <h1 className={styles.title}>{c.title.toUpperCase()}</h1>
        </header>

        <section className={styles.content} aria-label="Campaign content">
          {/* SOL: Fotoğraf */}
          <figure className={styles.media}>
            <Image
              src={c.imageUrl || "/placeholder-car.jpg"}
              alt={c.title}
              width={720}
              height={480}
              className={styles.img}
              priority
            />
          </figure>

          {/* SAĞ: üstte bar + kalan alanda ortalanmış metin */}
          <div className={styles.right}>
            <div className={styles.borderBox} />
            <div className={styles.descWrap}>
              <p className={styles.desc}>{long}</p>
            </div>
          </div>
        </section>

        <WhatsappContent />
      </div>
    </main>
  );
}
