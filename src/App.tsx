import React from 'react';
import { Syringe, Phone } from 'lucide-react';
import AppointmentForm from './components/AppointmentForm';
import Background from './components/Background';

function App() {
  return (
    <Background>
      <header className="bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Syringe className="h-8 w-8 text-pink-600" />
            <h1 className="text-2xl font-bold text-gray-900">BrazilianDerme</h1>
          </div>
          <div className="flex items-center space-x-2 text-pink-600">
            <Phone size={20} />
            <span className="text-lg">(07) 8080-7366</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-lg p-6 md:p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Agende seu Horário</h2>
              <p className="mt-2 text-gray-600">
                Disponível de segunda a sexta, das 9h às 19h
              </p>
            </div>
            <AppointmentForm />
          </div>
        </div>
      </main>

      <footer className="bg-white/90 backdrop-blur-sm mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} BrazilianDerme. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </Background>
  );
}

export default App;