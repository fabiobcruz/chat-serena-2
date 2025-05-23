import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CardContextType {
  selectedCardId: number | null;
  selectCard: (cardId: number) => void;
  isCardLocked: (cardId: number) => boolean;
}

const CardContext = createContext<CardContextType | undefined>(undefined);

interface CardProviderProps {
  children: ReactNode;
}

export const CardProvider: React.FC<CardProviderProps> = ({ children }) => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  // Carregar do localStorage na inicialização
  useEffect(() => {
    const savedCardId = localStorage.getItem('selectedTarotCard');
    if (savedCardId) {
      setSelectedCardId(parseInt(savedCardId, 10));
    }
  }, []);

  const selectCard = (cardId: number) => {
    setSelectedCardId(cardId);
    localStorage.setItem('selectedTarotCard', cardId.toString());
  };

  const isCardLocked = (cardId: number) => {
    return selectedCardId !== null && selectedCardId !== cardId;
  };

  return (
    <CardContext.Provider value={{
      selectedCardId,
      selectCard,
      isCardLocked
    }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error('useCardContext deve ser usado dentro de um CardProvider');
  }
  return context;
}; 