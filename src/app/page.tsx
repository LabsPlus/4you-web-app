import ImageHeader from './components/home/ImageHeader';
import './style/home.css'
import Planos from '../app/components/Planos/index';
import Faq from './components/Faq';
import HowItWork from './components/how-it-work';

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div>

          <img className='logoToYou' src="LogoToYou.svg" alt="Logo to you" />


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
        {/* <div className="info-container">
          <div className='info1-container' >
            <div className='info1'>
              <h5>Create Your Page</h5>

              <input type="image" className='risco1' src="Risco.svg" alt="risco" />

              <p>Enter your information, select your closest friends, and <br /> personalize your friendship tree.</p>
            </div>
          </div>

          <div className="info2-container">
            <div className='info2'>
              <input type="image" className='computador' src="Computador.svg" alt="Computador" />

              <div className="info2-text">

                <h5>Activate and Share</h5>

                <input type="image" className='risco2' src="Risco.svg" alt="risco" />

                <p>Complete the payment and receive a link and QR code to breasily share with your friends.</p>
              </div>
            </div>
          </div>

          <div className='info3-container' >
            <div className='info3'>
              <input type="image" className='settings' src="Settings.svg" alt="settings" />

              <div className="info3-text">
                <h5>Details That Make a Difference</h5>

                <input type="image" className='risco3' src="Risco.svg" alt="risco" />

                <p>Your friends fill out a form with preferences and <br /> memories – creating an exclusive mural of your best <br /> moments together.</p>
              </div>
            </div>
          </div>

          
          <div className='info4-container' >
          <div style={{width: '35rem', height: '12rem', left: '722px', top: '2073px', position: 'absolute', background: 'white', boxShadow: '0px 69px 114px rgba(0, 122, 255, 0.46)', borderRadius: '10px'}}></div>

            <div className='info4'>
              <h5>Automatic Reminders and <br /> Suggestions</h5>

              <input type="image" className='risco4' src="Risco.svg" alt="risco" />

              <p>Receive special notifications for birthdays and <br /> interests, with gift ideas and actions to strengthen <br /> these connections even more!</p>
            </div>
          </div> 
        </div> */}
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
