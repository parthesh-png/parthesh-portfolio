import React from 'react';
import about from '../../img/about.jpg'; // Ensure the path is correct

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* Photo section */}
                    <div className="lg:w-1/2">
                        <img
                            src={about}
                            alt="Profile"
                            className="w-full rounded-lg"
                        />
                    </div>
                    {/* Text content section */}
                    <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            Hi there! I'm Parthesh Singh,
                        </h2>
                        <p className="text-lg text-gray-700 mb-4">
                            I'm currently a 4th-semester B.E. CSE student at Rungta College, where I'm passionate about exploring the vast world of technology and its applications.
                        </p>
                       
                        <p className="text-lg text-gray-700 mb-4">
                            With advanced knowledge in  Java and C++, I'm always eager to dive into new technologies and expand my skill set. I believe in the power of continuous learning and innovation to drive progress.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            Outside of the digital realm, you can find me indulging in my hobbies. I'm an avid gamer, and I also have a deep love for plantation and farming-related activities. There's something fulfilling about nurturing and growing things, whether it's virtual worlds or real-life plants.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            What sets me apart is my enthusiasm for embracing new technologies and my dedication to working smart and hard. I thrive in dynamic environments where I can apply my creativity and problem-solving skills to make a difference.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
