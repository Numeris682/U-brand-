import './globals.css';

export const metadata = {
  title: "U-Brand",
  description: "Générateur de noms, logos et analyses branding IA"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-black text-white">
        <nav className="bg-gray-900 p-4 flex gap-6 text-white">
          <a href="/" className="hover:text-cyan-400">🏠 Générer Noms</a>
          <a href="/analyze" className="hover:text-cyan-400">📊 Analyser Marque</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
