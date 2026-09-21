import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import {
  Github,
  ExternalLink,
  Play,
  Mail,
  Server,
  LayoutTemplate,
  Database,
  MailCheck,
  ShieldCheck,
  Gauge,
  ArrowDown,
} from "lucide-react";
import { Nav } from "@/components/Nav";
import { FadeIn } from "@/components/FadeIn";

/**
 * 掲載する内容はすべて ~/cw-hunt/portfolio.md に対応する。
 * 同ファイルの「書いてはいけないこと」に触れる表現を追加しないこと
 * （例: Uzme を「デザインから一貫して担当」、美トークを「コードでカスタマイズ」、
 * Outward Matrix を「2016年から4年間WordPressで運用」とは書けない）。
 */

const works = [
  {
    slug: "outward-matrix",
    name: "Outward Matrix",
    kind: "ビジネスメディア／制作＋月次保守",
    image: "/works/outward-matrix.jpg",
    caption: "Wayback Machine 2018年3月のアーカイブより",
    period: "WordPressでの稼働 2017年秋〜2019年11月（記事は551本）",
    stack: "WordPress / jstork + 子テーマ / All in One SEO / Redirection",
    points: [
      "子テーマで single.php 等を上書き、関連記事の独自テンプレートを作成",
      "本文への広告の自動挿入と、SSL化に伴う http→https 置換（混在コンテンツ対策）を実装・検証",
      "広告枠を wp_is_mobile でPC／スマホ出し分け",
      "毎月のバックアップ取得・リンク切れ確認・コアとプラグインの更新を継続",
    ],
    note: "記事はクライアントご本人が執筆。集客導線はクライアントが設計し、WordPressへの組み込みを担当しました。",
  },
  {
    slug: "b-talk",
    name: "美トーク",
    kind: "話し方研修・講演サービスのサイト／新規制作",
    image: "/works/b-talk.jpg",
    caption: "Wayback Machine 2021年6月のアーカイブより",
    period: "2016年10月〜2024年2月（7年以上公開）",
    stack: "WordPress / TCDテーマ AGENT / Contact Form 7",
    points: [
      "企業研修・講演・セミナーの集客を目的にしたB2Bサービスサイト",
      "講座・セミナー・講演と複数のサービスを整理して見せる構成を設計",
      "お問い合わせ導線まで含めて公開までを担当",
      "納品後はお客様側で更新できる状態でお渡しし、保守に関与しないまま7年以上公開が続いた",
    ],
    note: "デザイン・実装はテーマの設定で行える範囲での構築です。保守は担当していません。",
  },
  {
    slug: "uzme",
    name: "ダンスカンパニー Uzme",
    kind: "公式サイト／新規制作＋公開後の更新代行",
    image: "/works/uzme.jpg",
    caption: "Wayback Machine 2018年8月のアーカイブより",
    period: "2017年2月〜2018年7月（1年半以上の運用）",
    stack: "WordPress / Avada（子テーマ導入）/ Contact Form 7 / Google Maps",
    points: [
      "HOME／ABOUT／STAGE／DANCER／CONTACT の構成",
      "写真・動画を活かす見せ方の選定と全体構成を担当",
      "フォーム・地図・OGP設定まで含めて公開までを担当",
      "公開後1年半以上、公演情報の差し替えを継続して担当",
    ],
    note: "テーマの標準デザインをベースにした構成で、独自デザインの制作ではありません。子テーマのカスタマイズは限定的です。",
  },
];

const capabilities = [
  {
    icon: LayoutTemplate,
    title: "テーマのカスタマイズ・子テーマ制作",
    body: "Cocoon / Snow Monkey / Lightning / SWELL。デザインカンプの反映にも対応します。",
  },
  {
    icon: Database,
    title: "カスタム投稿・フィールド設計",
    body: "Advanced Custom Fields を使った投稿タイプの設計。お客様が管理画面から更新できる形にします。",
  },
  {
    icon: MailCheck,
    title: "フォーム実装",
    body: "Contact Form 7 / MW WP Form。自動返信や項目の追加も含めて対応します。",
  },
  {
    icon: Server,
    title: "サーバー設定から公開まで",
    body: "Xserver / ConoHa / さくら。DNS設定・SSL化・本番デプロイまで一貫して対応します。",
  },
  {
    icon: Gauge,
    title: "表示速度の改善",
    body: "キャッシュ・画像最適化などWordPressの範囲で行える高速化に対応します。",
  },
  {
    icon: ShieldCheck,
    title: "セキュリティの基本設定",
    body: "SiteGuard の導入、バックアップ体制の用意、コアとプラグインの更新運用。",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background orbs — large, diffused, very low opacity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-64 -right-64 w-[600px] h-[600px] bg-blue-500/[0.04] rounded-full blur-3xl" />
        <div className="absolute -bottom-64 -left-64 w-[600px] h-[600px] bg-slate-500/[0.04] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/[0.02] rounded-full blur-3xl" />
      </div>

      <Nav />

      {/*
        ヒーローは FadeIn で包まない。包むと初期状態が opacity:0 になり、
        JSの読み込みが遅い環境やスクリーンショットでは本文が一切見えない
        （2026-09-21、ヘッドレスChromeで撮ったら真っ黒になった）。
        最初の画面に出る文字は、アニメーションなしで即座に描画する。
      */}
      <section className="relative z-10 px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl mx-auto">
          {/* uppercase は付けない。付けると WordPress が WORDPRESS になる（2026-09-21に修正） */}
          <span className="inline-block text-xs font-medium tracking-widest text-slate-400 border border-white/[0.06] rounded-full px-4 py-1.5 mb-6">
            WordPress 制作・カスタマイズ
          </span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-2">
            森 英一
          </h1>
          <p className="text-lg text-slate-400 mb-8">Eiichi Mori</p>

          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            WordPressサイトの制作と、
            <span className="block text-slate-400">公開後の運用まで</span>
          </h2>

          <p className="text-base text-slate-400 leading-relaxed mb-8 max-w-2xl">
            フリーランスでWordPressの制作・カスタマイズを約10年、累計15件以上手がけてきました。
            制作会社を通さない直接のやり取りで、サーバーの設定から公開までを一人で担当します。
            納品して終わりではなく、公開後の更新や保守を継続してお引き受けした案件もあります。
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 mb-10">
            <span>WordPress歴 約10年</span>
            <span className="text-slate-700">/</span>
            <span>累計15件以上</span>
            <span className="text-slate-700">/</span>
            <span>東京・平日10:00〜19:00 連絡可</span>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#works" className="inline-block">
              <Button className="bg-white text-slate-950 hover:bg-slate-200 font-semibold px-6 py-2.5 transition-colors">
                <ArrowDown className="w-4 h-4 mr-2" />
                制作実績を見る
              </Button>
            </a>
            <a href="mailto:mori@morieiichi.com" className="inline-block">
              <Button
                variant="outline"
                className="bg-transparent border-white/[0.06] hover:border-white/[0.1] hover:bg-white/[0.03] text-slate-300 font-semibold px-6 py-2.5 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                お問い合わせ
              </Button>
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* 制作実績 */}
      <section id="works" className="relative z-10 px-6 py-20 md:py-28 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-3">
              制作実績
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              担当した範囲を、実際に行った作業のかたちで記載しています
            </p>
            <p className="text-xs text-slate-500 leading-relaxed mb-10 max-w-2xl">
              以下3件はいずれも現在ドメインが失効しており、公開中のURLがありません。
              掲載している画面は Internet Archive（Wayback Machine）に保存された当時のページを表示して撮影したものです。
              アーカイブのため、一部の画像やロゴが欠けている箇所があります。
            </p>
          </FadeIn>

          <div className="space-y-8">
            {works.map((work, index) => (
              <FadeIn key={work.slug} delay={index * 0.1}>
                <Card className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] hover:border-white/[0.1] transition-colors overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative">
                      <img
                        src={work.image}
                        alt={`${work.name} のトップページ`}
                        width={1100}
                        height={651}
                        loading={index === 0 ? "eager" : "lazy"}
                        className="w-full h-full min-h-[200px] object-cover object-top"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-white text-xl font-display tracking-tight mb-1">
                          {work.name}
                        </CardTitle>
                        <p className="text-sm text-slate-400">{work.kind}</p>
                      </CardHeader>
                      <CardContent className="p-0">
                        <dl className="text-sm mb-4 space-y-1.5">
                          <div className="flex gap-3">
                            <dt className="text-slate-500 shrink-0 w-14">期間</dt>
                            <dd className="text-slate-300">{work.period}</dd>
                          </div>
                          <div className="flex gap-3">
                            <dt className="text-slate-500 shrink-0 w-14">技術</dt>
                            <dd className="text-slate-300">{work.stack}</dd>
                          </div>
                        </dl>
                        <ul className="space-y-2 mb-4">
                          {work.points.map((point) => (
                            <li key={point} className="flex items-start gap-2.5">
                              <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 shrink-0" />
                              <span className="text-sm text-slate-400 leading-relaxed">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-slate-500 leading-relaxed border-t border-white/[0.06] pt-3">
                          担当範囲の補足：{work.note}
                        </p>
                        <p className="text-xs text-slate-600 mt-2">{work.caption}</p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-8 bg-white/[0.02] border border-white/[0.06] rounded-lg px-6 py-5">
              <p className="text-sm text-slate-300 mb-1">
                現在も公開中のサイト
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                <a
                  href="https://notemagic.jp/blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-200 underline decoration-slate-600 hover:decoration-slate-300 underline-offset-4"
                >
                  notemagic.jp/blog
                </a>
                　2010年の公開から現在まで16年、停止せず運用が続いています。アーカイブ100件以上、商品販売と申込フォームが継続して稼働中です。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* 対応できること */}
      <section className="relative z-10 px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-3">
              対応できること
            </h3>
            <p className="text-sm text-slate-400 mb-10">
              WordPressの制作・カスタマイズと、公開までの作業
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <FadeIn key={cap.title} delay={(index % 3) * 0.1}>
                  <Card className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] hover:border-white/[0.1] transition-colors h-full">
                    <CardHeader className="pb-3">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <CardTitle className="text-white text-base font-display tracking-tight leading-snug">
                        {cap.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {cap.body}
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.2}>
            <p className="text-xs text-slate-500 leading-relaxed mt-8 max-w-3xl">
              受注前にご相談いただきたい領域：WooCommerceの複雑な実装・決済ゲートウェイの連携、
              Gutenbergカスタムブロックの新規開発、React / Vue を使ったフロントエンド開発。
              ご要望の中心がこれらの場合は、正直にお伝えしたうえで可否をご相談させてください。
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* 進め方 */}
      <section className="relative z-10 px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-3">
              進め方
            </h3>
            <p className="text-sm text-slate-400 mb-10">
              既存サイトを壊さないための手順と、納品前の確認
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <Card className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] h-full">
                <CardHeader>
                  <CardTitle className="text-white text-lg font-display tracking-tight">
                    公開中のサイトには直接手を入れません
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    既存サイトの改修では、同じ構成の複製を手元の環境に作り、そこで動作を確認したうえで本番に反映します。
                    公開中のサイトが表示できなくなる状態を作らない進め方です。
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] h-full">
                <CardHeader>
                  <CardTitle className="text-white text-lg font-display tracking-tight">
                    直接のやり取りで進めます
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    制作会社を通さないため、ご要望の確認から実装までの間に伝言が入りません。
                    平日10:00〜19:00に連絡が取れます。標準的な構成のコーポレートサイトは、自前のテンプレートを使って短い期間で対応できます。
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* テスト自動化（Playwright） */}
      <section className="relative z-10 px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-3">
              テスト自動化の取り組み
            </h3>
            <p className="text-sm text-slate-400 mb-10 max-w-2xl">
              画面の操作を自動で確認する仕組み（E2Eテスト）を Playwright で構築し、GitHub Actions 上で実行できるところまで作りました
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] hover:border-white/[0.1] transition-colors">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-5">
                  {["TypeScript", "Playwright", "GitHub Actions"].map((t) => (
                    <span
                      key={t}
                      className="text-xs text-slate-300 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  ブラウザ操作の自動テストを書き、CI上で走らせる構成を実装しました。
                  フォームの送信や画面の表示崩れといった「毎回手で確かめている確認」を自動化するための土台です。
                  WordPressサイトの納品前の確認にも応用できると考えています。
                </p>

                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  補足：個人で作った学習プロジェクトで、<strong className="text-slate-400 font-medium">WordPress案件でこの仕組みを納品した実績はまだありません</strong>。
                  CIのうちデプロイの工程は未接続です。できることの範囲としてご覧ください。
                </p>

                <div className="flex flex-wrap gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="bg-transparent border-white/[0.06] hover:border-white/[0.1] hover:bg-white/[0.03] text-slate-300 transition-colors"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        動作の動画を見る
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl bg-slate-900 border-white/[0.06]">
                      <div className="w-full flex flex-col items-center">
                        <video
                          controls
                          style={{
                            maxWidth: "100%",
                            maxHeight: "70vh",
                            background: "#000",
                          }}
                        >
                          <source
                            src="/video/testing-movie-with-playwright.webm"
                            type="video/webm"
                          />
                          お使いのブラウザは動画再生に対応していません。
                        </video>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <a
                    href="https://github.com/MoriEiichi/my-playwright-test"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button
                      variant="outline"
                      className="bg-transparent border-white/[0.06] hover:border-white/[0.1] hover:bg-white/[0.03] text-slate-300 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      ソースコード
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* CTA */}
      <section className="relative z-10 px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-4">
              ご相談をお待ちしています
            </h3>
            <p className="text-base text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              新規制作でも、公開中のサイトの改修でも構いません。
              ご希望のページ構成や参考にされているサイトがあれば、あわせてお知らせください。
              対応できる範囲と、想定の期間をお返しします。
            </p>
            <a href="mailto:mori@morieiichi.com" className="inline-block">
              <Button className="bg-white text-slate-950 hover:bg-slate-200 font-semibold px-6 py-2.5 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                メールで問い合わせる
              </Button>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Eiichi Mori</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/MoriEiichi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-300 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:mori@morieiichi.com"
                className="hover:text-slate-300 transition-colors"
                aria-label="メール"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p>WordPress 制作・カスタマイズ／東京</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
