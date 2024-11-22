import React from "react";
import Image from "next/image";
import "./styles.css";
//import computerPhoto from "../../public/Computador.svg";

const HowItWork = () => {

    return (
        <>
            <div className="howItWorkWrapper">

                <div className="howItWorkItem" style={{margin: '0 20% 0 10%'}}>

                    <Image src="Computador.svg" alt="risco" width={100} height={100} />

                    <div className="howItWorkTextContent">
                        <h5>Create Your Page</h5>
                        <p>Enter your information, select your closest friends, and <br /> personalize your friendship tree.</p>
                    </div>

                </div>


                <div className="howItWorkItem" style={{margin: '0 20% 0 10%'}}>

                    <Image src="Computador.svg" alt="risco" width={100} height={100} />

                    <div className="howItWorkTextContent">
                        <h5>Activate and Share</h5>
                        <p>Complete the payment and receive a link and QR code to breasily share with your friends.</p>
                    </div>
                </div>

                <div className="howItWorkItem" style={{margin: '0 10% 0 20%'}}>

                    <Image src="Computador.svg" alt="risco" width={100} height={100} />

                    <div className="howItWorkTextContent">
                        <h5>Details That Make a Difference</h5>
                        <p>Your friends fill out a form with preferences and <br /> memories – creating an exclusive mural of your best <br /> moments together.</p>
                    </div>
                </div>

                <div className="howItWorkItem" style={{margin: '0 10% 0 20%'}}>

                    <Image src="Computador.svg" alt="risco" width={100} height={100} />
                    <div className="howItWorkTextContent">
                        <h5>Automatic Reminders and <br /> Suggestions</h5>
                        <p>Receive notifications and suggestions to keep your friendship tree up to date and full of life.</p>
                    </div>
                </div>
            </div>


        </>
    )
};

export default HowItWork;