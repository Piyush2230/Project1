import React from 'react';
import HamperList from '../components/HamperList';
import ThemeSwitcher from '../components/ThemeSwitcher';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Gift Hampers</h1>
                <ThemeSwitcher />
            </header>
            <main>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Explore Our Hampers</h2>
                <HamperList />
            </main>
        </div>
    );
};

export default Home;