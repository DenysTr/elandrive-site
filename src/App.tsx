import { useState, useEffect } from 'react';
import { Wrench, Mail, MapPin, Phone } from 'lucide-react';

export default function UnderConstruction() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-2xl">
            <Wrench className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              ElanDrive
            </span>
            <span className="text-white"> Labs</span>
          </h1>
        </div>

        {/* Main Message */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">
            Something Amazing is Coming Soon
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            We're working hard to bring you an innovative experience. Our team is crafting something special that will transform the way you think about technology.
          </p>
          
          {/* Progress indicator */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Progress</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-2000 ease-out" style={{width: '75%'}}></div>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <div className="w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
            <h3 className="text-white font-semibold mb-2">Innovation</h3>
            <p className="text-gray-400 text-sm">Cutting-edge solutions for tomorrow's challenges</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <div className="w-6 h-6 bg-blue-400 rounded-full animate-pulse delay-300"></div>
            </div>
            <h3 className="text-white font-semibold mb-2">Excellence</h3>
            <p className="text-gray-400 text-sm">Commitment to quality and user experience</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <div className="w-6 h-6 bg-indigo-400 rounded-full animate-pulse delay-700"></div>
            </div>
            <h3 className="text-white font-semibold mb-2">Future</h3>
            <p className="text-gray-400 text-sm">Building the technology of tomorrow, today</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
          <h3 className="text-xl font-semibold text-white mb-6">Get in Touch</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center md:justify-start text-gray-300">
              <Mail className="w-5 h-5 mr-3 text-purple-400" />
              <span>hello@elandrivelabs.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start text-gray-300">
              <Phone className="w-5 h-5 mr-3 text-blue-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center md:justify-start text-gray-300">
              <MapPin className="w-5 h-5 mr-3 text-indigo-400" />
              <span>Innovation Hub, Tech City</span>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-md mx-auto">
          <p className="text-gray-300 mb-4">Be the first to know when we launch</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 font-medium shadow-lg">
              Notify Me
            </button>
            <br/><br/>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-4 right-4 text-gray-500 text-sm z-20">
        © 2025 ElanDrive Labs. All rights reserved.
      </div>
    </div>
  );
}