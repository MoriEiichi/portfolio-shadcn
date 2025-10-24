import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { 
  Github, 
  ExternalLink, 
  Play, 
  BarChart3, 
  GitBranch,
  TestTube,
  Zap,
  Target,
  Lightbulb,
  Award
} from 'lucide-react';

const PlaywrightPortfolio = () => {
  const technologies = [
    { name: 'TypeScript', icon: 'TS', color: 'from-blue-400 to-blue-600', isEmoji: false },
    { name: 'Playwright', icon: '🎭', color: 'from-green-400 to-green-600', isEmoji: true },
    { name: 'Tailwind', icon: 'TW', color: 'from-cyan-400 to-cyan-600', isEmoji: false },
    { name: 'Shadcn/ui', icon: 'UI', color: 'from-slate-400 to-slate-600', isEmoji: false },
    { name: 'GitHub Actions', icon: '⚡', color: 'from-purple-400 to-purple-600', isEmoji: true }
  ];

  const achievements = [
    {
      icon: <Play className="w-6 h-6" />,
      title: 'Playwright テスト実行',
      description: 'ブラウザ操作の自動化テスト',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop'
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'GitHub Actions',
      description: 'GitHub Actionsでの自動テスト実行（build・deployステップは現在ダミー）',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop'
    }
  ];

  const learningPoints = [
    'E2Eテストの設計から実装までの実践的なスキル習得',
    'CI/CDパイプラインの構築と運用',
    '品質保証の自動化の重要性を深く理解'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full backdrop-blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-300/10 rounded-full backdrop-blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full backdrop-blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/15 backdrop-blur-2xl border border-white/25 rounded-2xl px-6 py-4 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                  <TestTube className="w-6 h-6 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    森 英一
                  </h1>
                  <p className="text-lg md:text-xl text-white/80 font-medium">
                    Eiichi MORI
                  </p>
                  <h2 className="text-sm md:text-base text-white/70 mt-1">
                    Playwright Testing Portfolio
                  </h2>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/MoriEiichi/my-playwright-test"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-cyan-400/30 hover:bg-cyan-400/40 backdrop-blur-lg border border-white/30 text-white transition-all duration-300 hover:scale-105 shadow-lg">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-12 shadow-2xl hover:bg-white/20 transition-all duration-500">
            <div className="inline-flex items-center gap-2 bg-cyan-400/30 backdrop-blur-lg border border-white/30 text-white px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">AIネイティブ開発者</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
              Playwright Testing
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              モダンなウェブアプリケーションに対応したE2Eテスト環境をPlaywrightで構築し、CI/CDパイプラインとの統合までを実現。
              ブラウザ自動化による品質保証を学習する実践的なプロジェクトです。
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/MoriEiichi/my-playwright-test"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-lg border border-white/30 text-white px-8 py-4 text-lg font-semibold">
                  <Github className="w-5 h-5 mr-2" />
                  ソースコード
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">使用技術</h3>
            <p className="text-white/80 text-lg">プロジェクトで使用した主要な技術スタック</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white/15 backdrop-blur-2xl border border-white/25 rounded-2xl p-6 text-center shadow-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <span className={`text-white font-bold ${tech.isEmoji ? 'text-2xl' : 'text-lg'}`}>
                    {tech.icon}
                  </span>
                </div>
                <h4 className="text-white font-semibold text-sm">{tech.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals and Learning */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Goals */}
          <Card className="bg-white/15 backdrop-blur-2xl border border-white/25 shadow-xl hover:bg-white/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white text-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                目的
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 leading-relaxed text-lg">
                実際の開発現場で使われるE2Eテスト環境を構築し、CI/CDパイプラインとの統合までを実現。
                品質保証の自動化を学習。
              </p>
            </CardContent>
          </Card>

          {/* Learning */}
          <Card className="bg-white/15 backdrop-blur-2xl border border-white/25 shadow-xl hover:bg-white/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white text-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                学んだこと
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 leading-relaxed text-lg mb-4">
                E2Eテストの設計から実装、CI/CDパイプラインの構築まで、実践的なスキルを習得。
                品質保証の自動化の重要性を理解。
              </p>
              <div className="space-y-2">
                {learningPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-white/80 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Project Achievements */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">プロジェクト成果物</h3>
            <p className="text-white/80 text-lg">実装した機能と成果の詳細</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white/15 backdrop-blur-2xl border border-white/25 shadow-xl hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-48 object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center border border-white/30">
                      {achievement.icon}
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-white text-xl flex items-center gap-2">
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 leading-relaxed">{achievement.description}</p>
                  {index === 0 ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full mt-4 bg-cyan-400/30 hover:bg-cyan-400/40 backdrop-blur-lg border border-white/30 text-white">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          動画を見る
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <div className="w-full flex flex-col items-center">
                          <video controls style={{ maxWidth: '100%', maxHeight: '70vh', background: '#000' }}>
                            <source src="/video/testing-movie-with-playwright.webm" type="video/webm" />
                            お使いのブラウザは動画再生に対応していません。
                          </video>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Button className="w-full mt-4 bg-cyan-400/30 hover:bg-cyan-400/40 backdrop-blur-lg border border-white/30 text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      詳細を見る
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-white/15 backdrop-blur-2xl border border-white/25 shadow-2xl hover:bg-white/20 transition-all duration-500">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Award className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
                プロジェクトを詳しく見る
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                このプロジェクトの詳細な実装内容、学習過程、そして実際の動作をご確認いただけます。
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://github.com/MoriEiichi/my-playwright-test"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-lg border border-white/30 text-white px-8 py-4 text-lg font-semibold">
                    <Github className="w-5 h-5 mr-2" />
                    GitHubで見る
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center">
            <p className="text-white/70">
              © 2025 Playwright Testing Portfolio. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlaywrightPortfolio;

// 静的生成を明示的に設定
export const dynamic = 'force-static';