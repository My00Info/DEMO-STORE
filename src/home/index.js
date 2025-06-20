import styles from './style.module.css';
import ScrollVelocity from '@/TextAnimations/ScrollVelocity/ScrollVelocity';
import HeroSlider from '../components/HeroSlider';

export default function Home() {
  return (
    <main>
        <HeroSlider />
        <ScrollVelocity
          texts={['Welcome to', 'Demo Store']}
          className="scroll-text"
          velocity={40} // Slower speed
          damping={40} // More damping
          stiffness={150} // Softer spring
          velocityMapping={{ input: [0, 400], output: [0, 2.5] }} 
        />
    </main>
  );
}