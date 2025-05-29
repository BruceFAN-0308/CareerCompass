// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
      <div className="min-h-screen flex flex-col bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <Head>
          <title>CareerCompass</title>
          <meta name="description" content="Explore your career path with AI-powered suggestions." />
        </Head>

        <header className="text-center py-6 bg-black bg-opacity-30">
          <h1 className="text-4xl font-bold tracking-tight">CareerCompass</h1>
          <p className="mt-2 text-lg">Your personalized guide to finding the right career path</p>
        </header>

        <main className="flex-grow flex items-center justify-center">
          <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg max-w-md text-center">
            <h2 className="text-2xl font-semibold mb-4">Welcome!</h2>
            <p className="text-lg">
              We're building an AI-powered platform to help you explore careers that match your skills and interests.
            </p>
            <p className="mt-4">
              Stay tuned – exciting features are on the way!
            </p>
            <button className="mt-6 px-4 py-2 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-200">
              Learn More
            </button>
          </div>
        </main>

        <footer className="text-center py-4 text-sm bg-black bg-opacity-30">
          &copy; {new Date().getFullYear()} CareerCompass. All rights reserved.
        </footer>
      </div>
  );
}
