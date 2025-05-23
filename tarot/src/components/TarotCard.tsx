import React, { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';
import { Card } from '../types/card';
import { useCardContext } from '../contexts/CardContext';

interface TarotCardProps {
  card: Card;
}

const TarotCard: React.FC<TarotCardProps> = ({ card }) => {
  const { selectedCardId, selectCard, isCardLocked } = useCardContext();
  const [isFlipped, setIsFlipped] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  
  const isSelected = selectedCardId === card.id;
  const isLocked = isCardLocked(card.id);

  // Efeito para manter a carta selecionada sempre virada
  useEffect(() => {
    if (isSelected) {
      setIsFlipped(true);
      setShowDescription(true);
    } else {
      setIsFlipped(false);
      setShowDescription(false);
    }
  }, [isSelected]);
  
  const handleClick = () => {
    if (isLocked) {
      return; // Não faz nada se a carta estiver bloqueada
    }

    if (!isSelected && selectedCardId === null) {
      // Primeira seleção - seleciona a carta
      selectCard(card.id);
    }
  };

  return (
    <div className="flex justify-center">
      <div 
        className={`tarot-card ${!isLocked ? 'cursor-pointer' : 'cursor-not-allowed'} ${isFlipped ? 'flipped' : ''} ${isLocked ? 'locked' : ''}`}
        onClick={handleClick}
        title={isLocked ? 'Carta bloqueada' : card.name}
      >
        <div className="card-inner">
          <div className="card-back">
            <div className={`rounded-lg bg-gradient-to-br from-indigo-800 to-indigo-950 border-2 border-amber-600 h-full w-full relative ${isLocked ? 'opacity-50' : ''}`}>
              <div className="h-full w-full flex items-center justify-center p-4">
                <div className="card-back-design">
                  <svg 
                    viewBox="0 0 100 160" 
                    className="h-full w-full text-amber-400"
                    fill="currentColor"
                  >
                    <circle cx="50" cy="50" r="25" fillOpacity="0.6" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M50 5 L50 95" stroke="currentColor" strokeWidth="1" />
                    <path d="M5 50 L95 50" stroke="currentColor" strokeWidth="1" />
                    <path d="M25 25 L75 75" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M25 75 L75 25" stroke="currentColor" strokeWidth="0.5" />
                    <text x="50" y="120" textAnchor="middle" fontSize="14" fill="currentColor">Tarot</text>
                  </svg>
                </div>
              </div>
              
              {/* Cadeado para cartas bloqueadas */}
              {isLocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
                  <div className="bg-gray-800 bg-opacity-90 rounded-full p-3">
                    <Lock className="w-8 h-8 text-gray-300" />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="card-front">
            <div className="rounded-lg bg-white h-full w-full relative">
              <img 
                src={card.imageUrl} 
                alt={card.name} 
                className="h-full w-full object-cover rounded-lg"
              />
              {showDescription && (
                <div className="absolute inset-0 bg-black bg-opacity-75 rounded-lg p-4 flex items-center justify-center">
                  <div className="space-y-2">
                    <h2 className="text-amber-300 text-xl font-serif text-center mb-2">{card.name}</h2>
                    <p className="text-white text-sm md:text-base text-center">
                      {card.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarotCard;