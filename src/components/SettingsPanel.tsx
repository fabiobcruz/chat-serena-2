import React from 'react';
import { X } from 'lucide-react';

interface SettingsPanelProps {
  cardCount: number;
  setCardCount: (count: number) => void;
  onClose: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ 
  cardCount, 
  setCardCount, 
  onClose 
}) => {
  const options = [3, 6];

  return (
    <div className="bg-purple-800 rounded-lg p-4 mb-6 relative">
      <button 
        onClick={onClose}
        className="absolute top-2 right-2 text-purple-300 hover:text-white"
        aria-label="Cerrar"
      >
        <X size={20} />
      </button>
      
      <h2 className="text-xl font-semibold mb-3 text-amber-300">Configuración</h2>
      
      <div className="mb-4">
        <label className="block text-purple-200 mb-2">Número de cartas:</label>
        <div className="flex gap-2">
          {options.map(option => (
            <button
              key={option}
              className={`py-2 px-4 rounded ${
                cardCount === option 
                  ? 'bg-amber-500 text-purple-900' 
                  : 'bg-purple-700 text-purple-200 hover:bg-purple-600'
              } transition-colors`}
              onClick={() => setCardCount(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;