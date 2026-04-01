export const metadata = {
  title: "BI Consulting Site",
  description: "BI・データ基盤の課題を実務目線で支援",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
