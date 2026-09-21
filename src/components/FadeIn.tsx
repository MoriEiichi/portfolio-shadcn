import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * 読み込み時に一度だけフェードインする。
 *
 * **`whileInView`（スクロール連動）は使わない。** 2026-09-21、本番の
 * morieiichi.com をヘッドレスChromeで撮ったところ、ヒーロー以下の
 * 「制作実績」以降が丸ごと出ず、opacity:0 のまま残っていた。
 * IntersectionObserver の発火に依存すると、撮影・リンクプレビュー・
 * JSの読み込みが遅い環境で本文が消える。演出よりも「必ず出ること」を採る。
 */
export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
