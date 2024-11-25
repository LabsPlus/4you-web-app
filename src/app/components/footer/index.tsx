import React from 'react'
import './style.css'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-wrapper">

                <div className="title">
                    <h2>Start your 30 days free <br /> trail today!</h2>

                    <button className='btn-footer' >Contact Us</button>
                </div>

                <div className="line">

                    <Image src="Line.svg" alt="Line" width={100} height={100} className='line-img' />
                </div>
            </div>

            <div className="final-footer">

                <div className='title-final' >
                    <h3>About Rareblocks</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nullam dictum aliquet accumsan porta lectus ridiculus in <br /> mattis. Netus sodales in volutpat ullamcorper amet <br /> adipiscing fermentum.</p>


                    <div className="redes-sociais">
                        <Image src="X.svg" alt="Line" width={100} height={100} className='img-footer' />
                        <Image src="Facebook.svg" alt="Line" width={100} height={100} className='img-fb' />
                        <Image src="Instagram.svg" alt="Line" width={100} height={100} className='img-footer' />
                        <Image src="GitHub.svg" alt="Line" width={100} height={100} className='img-footer' />
                    </div>
                </div>

                <div className="company-wrapper">
                    <h3>Company</h3>
                    
                    <Link href="">Abouts</Link>
                    <Link href="">Feature</Link>
                    <Link href="">Works</Link>
                    <Link href="">Career</Link>
                </div>

                <div className="help-wrapper">
                    <h3>Help</h3>

                    <Link href="">Customer Support</Link>
                    <Link href="">Delivery Details</Link>
                    <Link href="">Terms & Conditions</Link>
                    <Link href="">Privacy Policy</Link>
                </div>

                <div className="resources-wrapper">
                    <h3>Resources</h3>

                    <Link href="">Free eBooks</Link>
                    <Link href="">Development Tutorial</Link>
                    <Link href="">How to-Blog</Link>
                    <Link href="">Youtube PlayList</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer