import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faBookOpen, faGamepad } from "@fortawesome/free-solid-svg-icons";

const StudyTools = () => {
  return (
      <section className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-100 to-white text-gray-800">
        {/* Hero Section */}
        <section id="hero" className="relative bg-gradient-to-br from-blue-600 to-indigo-600 text-white py-24">
          <div className="text-center max-w-2xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">Boost Your Learning with Quizzify</h1>
            <p className="text-lg md:text-xl mb-6">Challenge yourself with engaging quizzes & master new skills.</p>
            <a
              href="signup.html"
              className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </section>
  
        {/* How It Works Section */}
        <section id="howwork" className="py-20 px-6 md:px-12">
          <h2 className="text-3xl font-extrabold text-center mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <FontAwesomeIcon icon={faUserPlus} className="text-4xl text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Sign Up</h3>
              <p>Create your free account & start learning.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <FontAwesomeIcon icon={faBookOpen} className="text-4xl text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Pick a Subject</h3>
              <p>Choose from various subjects & topics.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <FontAwesomeIcon icon={faGamepad} className="text-4xl text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Play & Learn</h3>
              <p>Test your knowledge with quizzes & challenges.</p>
            </div>
          </div>
        </section>
  
        {/* Subjects Section */}
        <section id="subjects" className="py-20 bg-gray-50">
          <h1 className="text-3xl font-extrabold text-center mb-10">Explore Our Subjects</h1>
          <div className="flex justify-center space-x-4">
            <a
              href="math.html"
              className="btn2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              📐 Math
            </a>
            <a
              href="programming.html"
              className="btn2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
            >
              💻 Programming
            </a>
            <a
              href="dev.html"
              className="btn2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition"
            >
              🚀 Development
            </a>
          </div>
        </section>
  
        {/* Why Choose Us Section */}
        <section id="why" className="py-20 px-6 md:px-12">
          <h1 className="text-3xl font-extrabold text-center mb-8">Why Choose Quizzify?</h1>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>
              <span className="text-green-600 font-bold">✔️</span> Fun & Interactive Learning
            </li>
            <li>
              <span className="text-green-600 font-bold">✔️</span> Thousands of Questions
            </li>
            <li>
              <span className="text-green-600 font-bold">✔️</span> Compete with Friends
            </li>
            <li>
              <span className="text-green-600 font-bold">✔️</span> Earn Rewards
            </li>
          </ul>
        </section>
  
        {/* Join a Room Section */}
        <section id="join" className="py-20 bg-indigo-100">
          <h1 className="text-3xl font-extrabold text-center mb-6">Join a Room & Play With Friends</h1>
          <div className="flex justify-center items-center space-x-4">
            <input
              type="text"
              placeholder="Enter Room Code"
              className="px-4 py-2 w-64 border border-gray-400 rounded-md focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            />
            <button className="btn3 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
              Join Now
            </button>
          </div>
        </section>
  
        {/* Call to Action Section */}
        <section id="cta" className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to Get Started?</h2>
          <a
            href="signup.html"
            className="btn4 px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Join Now for Free
          </a>
        </section>
  
        {/* Footer */}
        <footer id="f" className="py-6 bg-gray-800 text-white text-center">
          &copy; Quizzify, Inc. 2025
        </footer>
      </section>
    );
}

export default StudyTools
