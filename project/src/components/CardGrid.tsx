import React from 'react';
import TarotCard from './TarotCard';
import { cards } from '../data/cards';

const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cards.map((card) => (
        <TarotCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardGrid;