import React from 'react';

export default function AboutPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-gray-700 mb-4">
                Welcome to Game Pulse! We are dedicated to bringing you the latest news and updates in the gaming world.
            </p>
            <p className="text-lg text-gray-700">
                Our team of passionate gamers and writers work around the clock to provide you with the most accurate and up-to-date information.
            </p>
        </div>
    );
};