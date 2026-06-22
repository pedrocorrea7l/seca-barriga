/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BonusesFull } from './components/BonusesFull';
import { Explanation } from './components/Explanation';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Guarantee } from './components/Guarantee';
import { Hero } from './components/Hero';
import { MoreTestimonials } from './components/MoreTestimonials';
import { Testimonials } from './components/Testimonials';
import { TopBar } from './components/TopBar';

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <TopBar />
      <Hero />
      <Testimonials />
      <Explanation />
      <BonusesFull />
      <Guarantee />
      <MoreTestimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

