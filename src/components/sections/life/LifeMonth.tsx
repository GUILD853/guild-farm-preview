import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { life } from "@/content/life";

/**
 * /life/ 04 1ヶ月で滞在するなら（体験の日／自分の時間／最後の2日）。
 *
 * 曜日の一覧（旧 rhythm：月＝フリー、火＝技術を学ぶ日…）は、2026-11-10 に削除しました。
 * 「決まった時間割がある」と読まれるためです。復活させないでください。
 *
 * ⚠ 「自由」の一語で終わらせないため、2つめのブロック（Your Time）の直後に
 *   具体例（month.examples）を4つ置いています。
 *
 * ■ 文章 … src/content/life.ts の month
 * ■ 写真 … src/config/images.ts の aboutField
 *          ※ 打上げのBBQの写真は素材にありません（追加撮影推奨）。
 *            ページ末尾の共通CTAの背景写真（cta）が近い雰囲気です。
 * ⚠ 日付（1日入居・30日BBQ・31日退去）は毎月固定かどうかが未確認のため書きません。
 * ⚠ 料金へのリンクは、ページ末尾の導線（LifeNext）に一本化しています。
 */
export function LifeMonth() {
  return (
    <section
      id="month"
      className="scroll-mt-16 bg-cream py-16 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-14">
          <div className="md:col-span-6">
            <SectionHeading
              index={life.month.index}
              label={life.month.label}
              title={life.month.title}
            />
          </div>
          <p className="wrap-phrase reveal text-[0.9rem] leading-[2.05] text-ink-soft md:col-span-5 md:col-start-8 md:text-[0.95rem]">
            {life.month.lead}
          </p>
        </div>

        <Photo
          image={images.aboutField}
          ratio="3 / 2"
          sizes="100vw"
          className="reveal mt-12 md:mt-16"
        />

        {/* 1週目 → 2〜4週目（＋具体例） → 最後の2日 */}
        <div className="mt-12 space-y-12 md:mt-24 md:space-y-20">
          {life.month.blocks.map((block, i) => (
            <div key={block.title}>
              <div className="reveal grid gap-5 border-t border-sand pt-10 md:grid-cols-12 md:gap-14 md:pt-12">
                <div className="md:col-span-5">
                  <p className="label-en text-[0.62rem] text-clay">
                    {block.kicker}
                  </p>
                  <h3 className="heading-jp wrap-phrase mt-4 text-[1.3rem] leading-[1.6] text-ink md:text-[1.6rem]">
                    {block.title}
                  </h3>
                </div>
                <div className="space-y-5 md:col-span-6 md:col-start-7">
                  {block.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[0.9rem] leading-[2.05] text-ink-soft md:text-[0.95rem]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* 2週目以降の組み方の例。「自由」の一語で終わらせないためのブロックです */}
              {i === 1 ? (
                <ul className="mt-8 grid gap-px overflow-hidden rounded-sm border border-sand bg-sand md:mt-10 md:grid-cols-2">
                  {life.month.examples.map((example) => (
                    <li key={example.title} className="reveal bg-paper p-6 md:p-7">
                      <h4 className="heading-item wrap-phrase text-ink">
                        {example.title}
                      </h4>
                      <p className="mt-3 text-[0.85rem] leading-[2] text-ink-soft">
                        {example.text}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>

        {/* 滞在中の補足 */}
        <ul className="reveal mt-12 grid gap-4 md:mt-24 md:grid-cols-12">
          {life.month.notes.map((note) => (
            <li
              key={note}
              className="grid grid-cols-[0.85rem_1fr] gap-x-3 border-t border-sand pt-4 text-[0.82rem] leading-[2] text-soil md:col-span-4"
            >
              <span aria-hidden="true" className="mt-[0.95em] h-px bg-clay/50" />
              <span>{note}</span>
            </li>
          ))}
        </ul>

      </Container>
    </section>
  );
}
