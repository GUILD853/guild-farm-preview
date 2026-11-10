import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { life } from "@/content/life";

/**
 * /life/ 01 体験の日と、自分の時間。
 *
 * 旧 LifeFirstWeek（「最初の1週間は、こちらで予定を用意します。」）を作り替えたものです。
 * 2026-11-10 の松井さん指示で、「GUILD Farm側が日程を用意する」という書き方と、
 * 曜日別のスケジュール例（月〜土の一覧）をやめました。
 *   ・体験のある日は、前日にグループLINEでお知らせする
 *   ・参加するかどうかは自由（5泊6日も1ヶ月も同じ）
 *   ・参加しない日の過ごし方は自由
 * 曜日の一覧は復活させないでください。時間割に見えるためです。
 *
 * ■ 文章 … src/content/life.ts の stay
 * ■ 写真 … src/config/images.ts の expHarvest
 * ⚠ 受け入れ時期（各月の2〜4週目）と料金は /plans/ の担当です。ここには書きません。
 */
export function LifeStay() {
  return (
    <section
      id="stay"
      className="scroll-mt-16 bg-paper py-16 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            index={life.stay.index}
            label={life.stay.label}
            title={life.stay.title}
          />
        </div>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-14">
          {/* 左：説明の文章と写真 */}
          <div className="md:col-span-5">
            <div className="reveal space-y-5 text-[0.9rem] leading-[2.05] text-ink-soft md:text-[0.95rem]">
              {life.stay.lead.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <Photo
              image={images.expHarvest}
              ratio="4 / 5"
              ratioMobile="3 / 2"
              sizes="(min-width: 768px) 40vw, 100vw"
              className="reveal mt-10 md:mt-12"
            />
          </div>

          {/* 右：参加しない日の過ごし方。曜日の一覧にはしません */}
          <div className="md:col-span-6 md:col-start-7">
            <h3 className="heading-item reveal text-ink">
              {life.stay.freeTitle}
            </h3>

            <ul className="reveal mt-6 md:mt-8">
              {life.stay.free.map((item) => (
                <li
                  key={item.title}
                  className="border-t border-sand py-6 last:border-b md:py-7"
                >
                  <h4 className="heading-jp wrap-phrase text-[1.05rem] leading-[1.7] text-ink md:text-[1.15rem]">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-[0.875rem] leading-[2] text-ink-soft md:text-[0.9rem]">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="reveal mt-12 max-w-[44em] border-t border-sand pt-6 text-[0.8rem] leading-[2] text-ink-faint md:mt-16">
          {life.stay.note}
        </p>
      </Container>
    </section>
  );
}
