// https://codepen.io/leonam-silva-de-souza/pen/vYowKqP

"use client";

import { AtSymbolIcon, CalendarDaysIcon, DevicePhoneMobileIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Container } from "../shared/container";
import "./page.scss";
import { useState } from "react";
import { PiCoinsThin, PiGameController, PiMapTrifold, PiPerson, PiStar, PiTrophy } from "react-icons/pi";

export default function Profile() {
  const [userInfo, setUserInfo] = useState({
    name: "Gabriel Gelbcke",
    nickname: "Gelbcke",
    email: "gabrielgelbcke@gmail.com",
    phone: "+1 (213) 352-2795",
    birthday: "12 December, 2001",
    location: "Curitiba, PR",
  });

  const [playerInfo, setPlayerInfo] = useState({
    xpPoints: 1254,
    totalCoins: 256,
    basketballGames: 301,
    footballGames: 5,
    tennisGames: 0,
    volleyballGames: 10,
    totalGames: 316,
    favoriteSport: "basketball",
    playerPosition: "Point Guard",
    bestPlayerAward: 57,
    address: "Rua Voluntários da Pátria, 475 - Curitiba, PR",
  });

  const [editUserInfo, setEditUserInfo] = useState(false);
  const [editPlayerInfo, setEditPlayerInfo] = useState(false);

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
                <h2 className="h2 article-title">About the player</h2>
              </header>

              <section className="about-text">
                {/* XP */}
                <section className="timeline mb-8">
                  <div className="title-wrapper">
                    <div className="icon-box">
                      <PiCoinsThin className="text-[2rem]" />
                    </div>

                    <h3 className="headings text-lg tracking-wider">XP</h3>
                  </div>

                  <ol className="timeline-list">
                    <li className="timeline-item">
                      <h4 className="headings text-sm2 timeline-item-title">Total XP</h4>
                      <span>
                        <strong>{playerInfo.xpPoints}</strong>
                      </span>
                    </li>

                    <li className="timeline-item">
                      <h4 className="headings text-sm2 timeline-item-title">Total Coins</h4>
                      <span>
                        <strong>{playerInfo.totalCoins}</strong>
                      </span>
                    </li>
                  </ol>
                </section>

                {/* TOTAL GAMES */}
                <section className="timeline mb-8">
                  <div className="title-wrapper">
                    <div className="icon-box">
                      <PiGameController className="text-[2rem]" />
                    </div>

                    <h3 className="headings text-lg tracking-wider">Total Games</h3>
                  </div>

                  <ol className="timeline-list">
                    {playerInfo.basketballGames != 0 ? (
                      <>
                        {" "}
                        <li className="timeline-item">
                          <h4 className="headings text-sm2 timeline-item-title">Basketball</h4>
                          <span>{playerInfo.basketballGames}</span>
                        </li>
                      </>
                    ) : null}

                    {playerInfo.footballGames != 0 ? (
                      <>
                        {" "}
                        <li className="timeline-item">
                          <h4 className="headings text-sm2 timeline-item-title">Football</h4>
                          <span>{playerInfo.footballGames}</span>
                        </li>
                      </>
                    ) : null}

                    {playerInfo.tennisGames != 0 ? (
                      <>
                        {" "}
                        <li className="timeline-item">
                          <h4 className="headings text-sm2 timeline-item-title">Tennis</h4>
                          <span>{playerInfo.tennisGames}</span>
                        </li>
                      </>
                    ) : null}

                    {playerInfo.volleyballGames != 0 ? (
                      <>
                        {" "}
                        <li className="timeline-item">
                          <h4 className="headings text-sm2 timeline-item-title">Volleyball</h4>
                          <span>{playerInfo.volleyballGames}</span>
                        </li>
                      </>
                    ) : null}
                  </ol>
                </section>

                {/* BEST PLAYER AWARD */}
                <section className="timeline mb-8">
                  <div className="title-wrapper">
                    <div className="icon-box">
                      <PiTrophy className="text-[2rem]" />
                    </div>

                    <h3 className="headings text-lg tracking-wider">XP</h3>
                  </div>

                  <ol className="timeline-list">
                    <li className="timeline-item">
                      <h4 className="headings text-sm2 timeline-item-title">University school of the arts</h4>
                      <span>2008 - 2010</span>
                      <p className="timeline-text">
                        There I learnt a wide range of topics that are essential to understanding both the theory and practical aspects of computing.
                        This involves programming fundamentals, computer architecture, operating systems, databases, software engineering, problem
                        solving, collaboration and communication soft skills.
                      </p>
                    </li>

                    <li className="timeline-item">
                      <h4 className="headings text-sm2 timeline-item-title">New York Academy of Art</h4>
                      <span>2006 - 2007</span>
                      <p className="timeline-text">
                        I chose my master degree in technology. There I deepened my knowledge, enhanced my skills in the area and learnt how to
                        increase my career prospects in a competitive job market.
                      </p>
                    </li>
                  </ol>
                </section>

                {/* FAVORITE SPORT */}
                <section className="timeline mb-8">
                  <div className="title-wrapper">
                    <div className="icon-box">
                      <PiStar className="text-[2rem]" />
                    </div>

                    <h3 className="headings text-lg tracking-wider">XP</h3>
                  </div>

                  <ol className="timeline-list">
                    <li className="timeline-item">
                      <h4 className="headings text-sm2 timeline-item-title">University school of the arts</h4>
                      <span>2008 - 2010</span>
                      <p className="timeline-text">
                        There I learnt a wide range of topics that are essential to understanding both the theory and practical aspects of computing.
                        This involves programming fundamentals, computer architecture, operating systems, databases, software engineering, problem
                        solving, collaboration and communication soft skills.
                      </p>
                    </li>

                    <li className="timeline-item">
                      <h4 className="headings text-sm2 timeline-item-title">New York Academy of Art</h4>
                      <span>2006 - 2007</span>
                      <p className="timeline-text">
                        I chose my master degree in technology. There I deepened my knowledge, enhanced my skills in the area and learnt how to
                        increase my career prospects in a competitive job market.
                      </p>
                    </li>
                  </ol>
                </section>

                {/* PLAYER POSITION */}
                <section className="timeline mb-8">
                  <div className="title-wrapper">
                    <div className="icon-box">
                      <PiPerson className="text-[2rem]" />
                    </div>

                    <h3 className="headings text-lg tracking-wider">XP</h3>
                  </div>

                  <ol className="timeline-list">
                    <li className="timeline-item">
                      <h4 className="headings text-sm2 timeline-item-title">University school of the arts</h4>
                      <span>2008 - 2010</span>
                      <p className="timeline-text">
                        There I learnt a wide range of topics that are essential to understanding both the theory and practical aspects of computing.
                        This involves programming fundamentals, computer architecture, operating systems, databases, software engineering, problem
                        solving, collaboration and communication soft skills.
                      </p>
                    </li>

                    <li className="timeline-item">
                      <h4 className="headings text-sm2 timeline-item-title">New York Academy of Art</h4>
                      <span>2006 - 2007</span>
                      <p className="timeline-text">
                        I chose my master degree in technology. There I deepened my knowledge, enhanced my skills in the area and learnt how to
                        increase my career prospects in a competitive job market.
                      </p>
                    </li>
                  </ol>
                </section>

                {/* REFERENCE ADDRESS */}
                <section className="timeline mb-8">
                  <div className="title-wrapper">
                    <div className="icon-box">
                      <PiMapTrifold className="text-[2rem]" />
                    </div>

                    <h3 className="headings text-lg tracking-wider">XP</h3>
                  </div>

                  <ol className="timeline-list">
                    <li className="timeline-item">
                      <h4 className="headings text-sm2 timeline-item-title">University school of the arts</h4>
                      <span>2008 - 2010</span>
                      <p className="timeline-text">
                        There I learnt a wide range of topics that are essential to understanding both the theory and practical aspects of computing.
                        This involves programming fundamentals, computer architecture, operating systems, databases, software engineering, problem
                        solving, collaboration and communication soft skills.
                      </p>
                    </li>

                    <li className="timeline-item">
                      <h4 className="headings text-sm2 timeline-item-title">New York Academy of Art</h4>
                      <span>2006 - 2007</span>
                      <p className="timeline-text">
                        I chose my master degree in technology. There I deepened my knowledge, enhanced my skills in the area and learnt how to
                        increase my career prospects in a competitive job market.
                      </p>
                    </li>
                  </ol>
                </section>

                {/* LOCATION MAP */}
              </section>
            </article>
          </div>
        </Container>
      </div>
    </>
  );
}
