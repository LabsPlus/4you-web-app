import LogoToYou from '../../public/LogoToYou.svg'
import ImageHeader from './components/home/ImageHeader';
import './style/home.css'
import Computador from '../../public/Computador.svg';
import Planos from '../app/components/Planos/index';
import MulherComCelular from '../../public/MulherComCelular.svg'
import Faq from './components/Faq';

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div>

          <img src="LogoToYou.svg" alt="Logo to you" />


          <div className="text-container">
            <h1>Welcome to To yoou – <br /> The Personalized <br /> Friendship Site to <br /> Celebrate Special <br /> Connections!</h1>

            <p>Imagine having a personalized space just for you and your closest friends. With 4yoou, you create a unique friendship tree, with special details about each friend and automatic reminders for important dates so you never miss a celebration.</p>
          </div>

        </div>
        <ImageHeader />
      </div>

      <main>
        <h1>How It Works</h1>

        <div className="info-container">
          <div className='info1-container' >
            <div className='info1'>
              <h5>Create Your Page</h5>

              <p>Enter your information, select your closest friends, and personalize your friendship tree.</p>
            </div>
          </div>

          <div className="info2-container">
            <div className='info2'>
              <img className='computador' src="Computador.svg" alt="Computador" />

              <div className="info2-text">

                <h5>Activate and Share</h5>

                <p>Complete the payment and receive a link and QR code to easily share with your friends.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Planos />

      <section className='section-container'>
        <div className='text-section'>
          <h1>Get Started Now</h1>

          <p>Don’t let your friendships stay only on social media. With 4yoou, create an exclusive space to celebrate and remember each special moment with the people who matter most.</p>

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
