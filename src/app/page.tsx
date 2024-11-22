import ImageHeader from './components/home/ImageHeader';
import './style/home.css'
import Planos from '../app/components/Planos/index';
import Faq from './components/Faq';
import HowItWork from './components/how-it-work';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div>
          <Image src="LogoToYou.svg" alt="Logo to you" width={100} height={100} className='logoToYou' />



          <div className="text-container">
            <h1>Welcome to To yoou – <br /> The Personalized <br /> Friendship Site to <br /> Celebrate Special <br /> Connections!</h1>

            <p>Imagine having a personalized space just for you and your closest friends. With br 4yoou, you create a unique friendship tree, with special details about each friend and automatic reminders for important dates so you never miss a celebration.</p>
          </div>

        </div>
        <ImageHeader />
      </div>

      <main>
        <h1>How It Works</h1>

        <input type='image' className='bolinhas' src="Bolinhas.svg" alt="bolinhas" />

        <HowItWork />

      </main>

      <Planos />

      <section className='section-container'>
        <div className='text-section'>
          <h1>Get Started Now</h1>

          <p>Don't let your friendships stay only on social media. With 4yoou, create an exclusive space to celebrate and remember each special moment with the people who matter most.</p>

          <button className='btn-section'>
            Start Creating Your Friendship Site
          </button>
        </div>

        <img className='mulherSection' src="MulherComCelular.svg" alt="" />
      </section>


      <Faq />

    </>
  );
}
