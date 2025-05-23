import React from 'react';
import CardGrid from './components/CardGrid';
import { CardProvider } from './contexts/CardContext';

function App() {
  return (
    <CardProvider>
      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-950 text-white">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-300 mb-2">
              Cartas del Tarot
            </h1>
            <p className="text-purple-200 mb-6">
              Elige tu carta del destino. Esta elección será tu guía espiritual permanente.
            </p>
          </header>

          <main>
            <CardGrid />
          </main>

          <footer className="mt-12 text-center text-purple-300 text-sm">
            <p>© 2025 Cartas del Tarot. Todos los derechos reservados.</p>
          </footer>
        </div>
      </div>
    </CardProvider>
  );
}

export default App;