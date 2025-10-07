import React from 'react';

const HamperCard = ({ hamper }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img className="w-full" src={hamper.image} alt={hamper.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{hamper.name}</div>
                <p className="text-gray-700 text-base">
                    {hamper.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="font-bold text-lg">{`$${hamper.price}`}</span>
            </div>
        </div>
    );
};

export default HamperCard;