import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Github, Play, FileText, Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* ヘッダーセクション */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-white">Playwright Testing Portfolio</h1>
            <p className="text-xl text-gray-400">AIエンジニアの実践環境</p>
          </div>

          {/* 技術スタック */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">使用技術</CardTitle>
              <CardDescription className="text-gray-400">プロジェクトで使用した主要な技術スタック</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Badge variant="secondary" className="flex items-center gap-2 bg-gray-700 text-gray-200">
                  <span className="font-mono">TS</span>
                  <span>TypeScript</span>
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2 bg-gray-700 text-gray-200">
                  <span>🎭</span>
                  <span>Playwright</span>
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2 bg-gray-700 text-gray-200">
                  <span className="font-mono">TW</span>
                  <span>Tailwind</span>
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2 bg-gray-700 text-gray-200">
                  <span>⚡</span>
                  <span>GitHub Actions</span>
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2 bg-gray-700 text-gray-200">
                  <span>🐳</span>
                  <span>Docker</span>
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2 bg-gray-700 text-gray-200">
                  <span>📊</span>
                  <span>Allure</span>
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* 目的と学んだこと */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">🎯 目的</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">実際の開発現場で使われるE2Eテスト環境を構築し、CI/CDパイプラインとの統合までを実現。品質保証の自動化を学習。</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">💡 学んだこと</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">E2Eテストの設計から実装、CI/CDパイプラインの構築まで、実践的なスキルを習得。品質保証の自動化の重要性を理解。</p>
              </CardContent>
            </Card>
          </div>

          {/* プロジェクト成果物 */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">プロジェクト成果物</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">🎭 Playwright テスト実行</h3>
                <p className="text-gray-400">並列実行による高速テストの様子</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">📊 Allure レポート</h3>
                <p className="text-gray-400">美しいHTMLレポートで結果確認</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">⚡ GitHub Actions</h3>
                <p className="text-gray-400">自動テスト実行とデプロイの流れ</p>
              </div>
            </CardContent>
          </Card>

          {/* アクションボタン */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="default" className="gap-2 bg-blue-600 hover:bg-blue-700">
              <Play className="h-4 w-4" />
              テスト実行
            </Button>
            <Button variant="outline" className="gap-2 border-gray-600 text-gray-300 hover:bg-gray-700">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline" className="gap-2 border-gray-600 text-gray-300 hover:bg-gray-700">
              <FileText className="h-4 w-4" />
              ドキュメント
            </Button>
            <Button variant="outline" className="gap-2 border-gray-600 text-gray-300 hover:bg-gray-700">
              <Globe className="h-4 w-4" />
              デモ
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
