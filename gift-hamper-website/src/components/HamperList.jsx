import React from 'react';
import HamperCard from './HamperCard';

const hampers = [
    {
        id: 1,
        title: 'Luxury Spa Hamper',
        description: 'Indulge in a relaxing spa experience with our luxury spa hamper, featuring scented candles, bath bombs, and plush towels.',
        price: 49.99,
        image: '/assets/spa-hamper.jpg'
    },
    {
        id: 2,
        title: 'Gourmet Food Hamper',
        description: 'Savor the taste of gourmet treats with our food hamper, including artisanal cheeses, fine wines, and handcrafted chocolates.',
        price: 79.99,
        image: '/assets/gourmet-hamper.jpg'
    },
    {
        id: 3,
        title: 'Coffee Lover Hamper',
        description: 'Perfect for coffee enthusiasts, this hamper includes premium coffee beans, a stylish mug, and delicious biscotti.',
        price: 39.99,
        image: '/assets/coffee-hamper.jpg'
    },
    {
        id: 4,
        title: 'Baby Shower Hamper',
        description: 'Celebrate new beginnings with our baby shower hamper, filled with adorable baby clothes, toys, and essentials.',
        price: 59.99,
        image: '/assets/baby-hamper.jpg'
    }
];

const HamperList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {hampers.map(hamper => (
                <HamperCard 
                    key={hamper.id} 
                    title={hamper.title} 
                    description={hamper.description} 
                    price={hamper.price} 
                    image={hamper.image} 
                />
            ))}
        </div>
    );
};

export default HamperList;