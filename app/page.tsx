"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import {
  Github,
  ExternalLink,
  Play,
  GitBranch,
  Target,
  Lightbulb,
  FileCode2,
  Layers,
  Palette,
  Component,
  Workflow,
} from "lucide-react";
import { Nav } from "@/components/Nav";
import { FadeIn } from "@/components/FadeIn";

const technologies = [
  { name: "TypeScript", icon: FileCode2 },
  { name: "Playwright", icon: Layers },
  { name: "Tailwind CSS", icon: Palette },
  { name: "shadcn/ui", icon: Component },
  { name: "GitHub Actions", icon: Workflow },
];

const achievements = [
  {
    icon: <Play className="w-5 h-5" />,
    title: "Playwright テスト実行",
    description: "ブラウザ操作の自動化テスト",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
  },
  {
    icon: <GitBranch className="w-5 h-5" />,
    title: "GitHub Actions",
    description:
      "GitHub Actionsでの自動テスト実行（build・deployステップは現在ダミー）",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop",
  },
];

const learningPoints = [
  "E2Eテストの設計から実装までの実践的なスキル習得",
  "CI/CDパイプラインの構築と運用",
  "品質保証の自動化の重要性を深く理解",
];

export default function PlaywrightPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background orbs — large, diffused, very low opacity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-64 -right-64 w-[600px] h-[600px] bg-blue-500/[0.04] rounded-full blur-3xl" />
        <div className="absolute -bottom-64 -left-64 w-[600px] h-[600px] bg-slate-500/[0.04] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/[0.02] rounded-full blur-3xl" />
      </div>

      <Nav />

      {/* Hero */}
      <section className="relative z-10 px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-slate-400 border border-white/[0.06] rounded-full px-4 py-1.5 mb-6">
              QA Automation Engineer
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-2">
              森 英一
            </h1>
            <p className="text-lg text-slate-400 mb-8">Eiichi Mori</p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Playwright Testing
              <span className="block text-slate-400">Portfolio</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-base text-slate-400 leading-relaxed mb-10 max-w-2xl">
              モダンなウェブアプリケーションに対応したE2Eテスト環境をPlaywrightで構築し、CI/CDパイプラインとの統合までを実現。ブラウザ自動化による品質保証を学習する実践的なプロジェクトです。
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <a
              href="https://github.com/MoriEiichi/my-playwright-test"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-white text-slate-950 hover:bg-slate-200 font-semibold px-6 py-2.5 transition-colors">
                <Github className="w-4 h-4 mr-2" />
                ソースコード
              </Button>
            </a>
          </FadeIn>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Technology Stack */}
      <section className="relative z-10 px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-3">
              使用技術
            </h3>
            <p className="text-sm text-slate-400 mb-10">
              プロジェクトで使用した主要な技術スタック
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.1] rounded-full px-4 py-2 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-300">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Goals and Learning */}
      <section className="relative z-10 px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <FadeIn>
            <Card className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] hover:border-white/[0.1] transition-colors h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white text-xl font-display tracking-tight">
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-cyan-400" />
                  </div>
                  目的
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-slate-400 leading-relaxed">
                  実際の開発現場で使われるE2Eテスト環境を構築し、CI/CDパイプラインとの統合までを実現。品質保証の自動化を学習。
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] hover:border-white/[0.1] transition-colors h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white text-xl font-display tracking-tight">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-blue-400" />
                  </div>
                  学んだこと
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-slate-400 leading-relaxed mb-4">
                  E2Eテストの設計から実装、CI/CDパイプラインの構築まで、実践的なスキルを習得。品質保証の自動化の重要性を理解。
                </p>
                <div className="space-y-2.5">
                  {learningPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 shrink-0" />
                      <span className="text-sm text-slate-400">{point}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Project Achievements */}
      <section className="relative z-10 px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-3">
              プロジェクト成果物
            </h3>
            <p className="text-sm text-slate-400 mb-10">
              実装した機能と成果の詳細
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] hover:border-white/[0.1] transition-colors overflow-hidden h-full">
                  <div className="relative">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-48 object-cover brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/[0.06]">
                        {achievement.icon}
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-white text-lg font-display tracking-tight">
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {achievement.description}
                    </p>
                    {index === 0 ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full mt-4 bg-transparent border-white/[0.06] hover:border-white/[0.1] hover:bg-white/[0.03] text-slate-300 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            動画を見る
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
                    ) : (
                      <Button
                        variant="outline"
                        className="w-full mt-4 bg-transparent border-white/[0.06] hover:border-white/[0.1] hover:bg-white/[0.03] text-slate-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        詳細を見る
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* CTA */}
      <section className="relative z-10 px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-4">
              プロジェクトを詳しく見る
            </h3>
            <p className="text-base text-slate-400 mb-8 max-w-2xl mx-auto">
              このプロジェクトの詳細な実装内容、学習過程、そして実際の動作をご確認いただけます。
            </p>
            <a
              href="https://github.com/MoriEiichi/my-playwright-test"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-white text-slate-950 hover:bg-slate-200 font-semibold px-6 py-2.5 transition-colors">
                <Github className="w-4 h-4 mr-2" />
                GitHubで見る
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
            <a
              href="https://github.com/MoriEiichi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <p>Built with Next.js, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
