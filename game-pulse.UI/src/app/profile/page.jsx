// https://codepen.io/leonam-silva-de-souza/pen/vYowKqP

"use client";

import { AtSymbolIcon, CalendarDaysIcon, ChevronDownIcon, DevicePhoneMobileIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Container } from "../shared/container";
import "./page.scss";
import { useState } from "react";

export default function Profile() {
  const [userInfo, setUserInfo] = useState({
    name: "Gabriel Gelbcke",
    nickname: "Gelbcke",
    email: "gabrielgelbcke@gmail.com",
    phone: "+1 (213) 352-2795",
    birthday: "12 December, 2001",
    location: "Curitiba, PR",
  });

  return (
    <>
      <div className="bg-background text-white min-h-[100vh]">
        <Container>
          <div className="md:flex md:justify-between pt-10">
            {/* SIDEBAR USER INFO */}
            <aside className="sidebar">
              <div className="sidebar-info">
                <figure className="avatar-box">
                  <img src="./home/basketball.webp" alt="avatar" width="80" className="rounded-[15%]" />
                </figure>

                <div className="info-content">
                  <h1 className="name">{userInfo.name}</h1>
                  <p className="title">{userInfo.nickname}</p>
                </div>
              </div>

              <div className="sidebar-info-more">
                <div className="separator"></div>

                <ul className="contacts-list">
                  <li className="contact-item">
                    <div className="icon-box">
                      <AtSymbolIcon className="w-[2rem]" />
                    </div>

                    <div className="contact-info">
                      <p className="contact-title">Email</p>

                      <a href="mailto:richard@example.com" className="contact-link">
                        {userInfo.email}
                      </a>
                    </div>
                  </li>

                  <li className="contact-item">
                    <div className="icon-box">
                      <DevicePhoneMobileIcon className="w-[2rem]" />
                    </div>

                    <div className="contact-info">
                      <p className="contact-title">Phone</p>

                      <a href="tel:+12133522795" className="contact-link">
                        {userInfo.phone}
                      </a>
                    </div>
                  </li>

                  <li className="contact-item">
                    <div className="icon-box">
                      <CalendarDaysIcon className="w-[2rem]" />
                    </div>

                    <div className="contact-info">
                      <p className="contact-title">Birthday</p>

                      <time dateTime="2023-06-14">{userInfo.birthday}</time>
                    </div>
                  </li>

                  <li className="contact-item">
                    <div className="icon-box">
                      <MapPinIcon className="w-[2rem]" />
                    </div>

                    <div className="contact-info">
                      <p className="contact-title">Location</p>

                      <address>{userInfo.location}</address>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>

            {/* MAINBAR */}
            <article className="about mainbar active">
              <header>
                <h2 className="h2 article-title">About me</h2>
              </header>

              <section className="about-text">
                <p>
                  I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex
                  problems into simple, beautiful and intuitive designs.
                </p>
                <p>
                  My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal
                  touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the
                  most creative way. I created web design for many famous brand companies.
                </p>
              </section>

              <section className="service">
                <h3 className="h3 service-title">What I'm doing</h3>

                <ul className="service-list">
                  <li className="service-item">
                    <div className="service-icon-box">
                      <img src="https://i.postimg.cc/4389jZkP/icon-design.png" alt="icon" width="40" />
                    </div>

                    <div className="service-content-box">
                      <h4 className="h4 service-item-title">Web Design</h4>
                      <p className="service-item-text">The most modern and high-quality design made at a professional level.</p>
                    </div>
                  </li>

                  <li className="service-item">
                    <div className="service-icon-box">
                      <img src="https://i.postimg.cc/ZqgqrqzG/icon-dev.png" alt="icon" width="40" />
                    </div>

                    <div className="service-content-box">
                      <h4 className="h4 service-item-title">Web development</h4>
                      <p className="service-item-text">High-quality development of sites at the professional level.</p>
                    </div>
                  </li>

                  <li className="service-item">
                    <div className="service-icon-box">
                      <img src="https://i.postimg.cc/xjLdzYxZ/icon-app.png" alt="icon" width="40" />
                    </div>

                    <div className="service-content-box">
                      <h4 className="h4 service-item-title">Mobile apps</h4>
                      <p className="service-item-text">Professional development of applications for iOS and Android.</p>
                    </div>
                  </li>

                  <li className="service-item">
                    <div className="service-icon-box">
                      <img src="https://i.postimg.cc/0NL8zHpx/icon-photo.png" alt="icon" width="40" />
                    </div>

                    <div className="service-content-box">
                      <h4 className="h4 service-item-title">Photography</h4>
                      <p className="service-item-text">I make high-quality photos of any category at a professional level.</p>
                    </div>
                  </li>
                </ul>
              </section>

              <section className="testimonials">
                <h3 className="h3 testimonials-title">Testimonials</h3>

                <ul className="testimonials-list has-scrollbar">
                  <li className="testimonials-item">
                    <div className="content-card" data-testimonials-item>
                      <figure className="testimonials-avatar-box">
                        <img src="https://i.postimg.cc/zGDHfn3G/avatar-1.png" alt="avatar" data-testimonials-avatar width="60" />
                      </figure>

                      <h4 className="h4 testimonials-item-title" data-testimonials-title>
                        Daniel Lewis
                      </h4>

                      <div className="testimonials-text" data-testimonials-text>
                        <p>
                          Richard was hired to create a corporate identity. It's modern, clean and with a beautiful design that got a lot of praises
                          from colleagues and visitors. We were very pleased with the work done. He has a lot of experience and is very concerned
                          about the needs of client.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className="testimonials-item">
                    <div className="content-card" data-testimonials-item>
                      <figure className="testimonials-avatar-box">
                        <img src="https://i.postimg.cc/DwY0yHtx/avatar-2.png" alt="avatar" data-testimonials-avatar width="60" />
                      </figure>

                      <h4 className="h4 testimonials-item-title" data-testimonials-title>
                        Jessica Miller
                      </h4>

                      <div className="testimonials-text" data-testimonials-text>
                        <p>
                          Working with Richard has been an absolute pleasure. I was impressed with his attention to detail, his web design skills and
                          his professional approach to our timelines and processes.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className="testimonials-item">
                    <div className="content-card" data-testimonials-item>
                      <figure className="testimonials-avatar-box">
                        <img src="https://i.postimg.cc/fRFWhX9F/avatar-3.png" alt="avatar" data-testimonials-avatar width="60" />
                      </figure>

                      <h4 className="h4 testimonials-item-title" data-testimonials-title>
                        Emily Evans
                      </h4>

                      <div className="testimonials-text" data-testimonials-text>
                        <p>
                          I couldn't be happier with the website that Richard created for us. His attention to detail and creativity is unmatched. Our
                          clients frequently compliment the design, and it has significantly improved our brand image.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className="testimonials-item">
                    <div className="content-card" data-testimonials-item>
                      <figure className="testimonials-avatar-box">
                        <img src="https://i.postimg.cc/zXv1Xv81/avatar-4.png" alt="avatar" data-testimonials-avatar width="60" />
                      </figure>

                      <h4 className="h4 testimonials-item-title" data-testimonials-title>
                        Henry Williams
                      </h4>

                      <div className="testimonials-text" data-testimonials-text>
                        <p>
                          I was overwhelmed with the thought of redesigning my online store, but Richard made the process seamless. The site is not
                          only visually appealing but also optimized for conversions. I've seen a 50% increase in traffic since the launch!
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>

              <div className="modal-container " data-modal-container>
                <div className="overlay " data-overlay></div>

                <section className="testimonials-modal">
                  <button className="modal-close-btn" data-modal-close-btn>
                    <ion-icon name="close-outline"></ion-icon>
                  </button>

                  <div className="modal-img-wrapper">
                    <figure className="modal-avatar-box">
                      <img src="https://i.postimg.cc/zGDHfn3G/avatar-1.png" alt="Daniel Lewis" width="80" data-modal-img />
                    </figure>

                    <img src="https://i.postimg.cc/mZ00RwX7/icon-quote.png" alt="quote icon" />
                  </div>

                  <div className="modal-content">
                    <h4 className="h3 modal-title" data-modal-title>
                      Daniel Lewis
                    </h4>
                    <time dateTime="2023-06-14">14 June, 2023</time>

                    <div className="modal-text" data-modal-text>
                      <p>
                        Richard was hired to create a corporate identity. It's modern, clean and with a beautiful design that got a lot of praises
                        from colleagues and visitors. We were very pleased with the work done. He has a lot of experience and is very concerned about
                        the needs of client.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <section className="clients">
                <h3 className="h3 clients-title">Clients</h3>

                <ul className="clients-list has-scrollbar">
                  <li className="clients-item">
                    <a href="#">
                      <img src="https://i.postimg.cc/YqfKyG66/logo-1-color.png" alt="logo" />
                    </a>
                  </li>

                  <li className="clients-item">
                    <a href="#">
                      <img src="https://i.postimg.cc/fWm6JtgG/logo-2-color.png" alt="logo" />
                    </a>
                  </li>

                  <li className="clients-item">
                    <a href="#">
                      <img src="https://i.postimg.cc/Bb07xpwd/logo-3-color.png" alt="logo" />
                    </a>
                  </li>

                  <li className="clients-item">
                    <a href="#">
                      <img src="https://i.postimg.cc/hv1yMmkh/logo-4-color.png" alt="logo" />
                    </a>
                  </li>

                  <li className="clients-item">
                    <a href="#">
                      <img src="https://i.postimg.cc/ry1P86Dc/logo-5-color.png" alt="logo" />
                    </a>
                  </li>

                  <li className="clients-item">
                    <a href="#">
                      <img src="https://i.postimg.cc/SsWDN8NV/logo-6-color.png" alt="logo" />
                    </a>
                  </li>
                </ul>
              </section>
            </article>
          </div>
        </Container>
      </div>
    </>
  );
}
