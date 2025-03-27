// https://codepen.io/leonam-silva-de-souza/pen/vYowKqP

"use client";

import { AtSymbolIcon, CalendarDaysIcon, DevicePhoneMobileIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Container } from "../shared/container";
import "./page.scss";
import { useState } from "react";
import {
  PiBasketballDuotone,
  PiCoinsThin,
  PiGameController,
  PiMapTrifold,
  PiPerson,
  PiSoccerBallDuotone,
  PiTennisBallDuotone,
  PiTrophy,
  PiVolleyballDuotone,
} from "react-icons/pi";

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
    footballGames: 0,
    tennisGames: 0,
    volleyballGames: 17,
    favoriteSport: "basketball",
    basketballPosition: "Point Guard",
    footballPosition: null,
    volleyballPosition: null,
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
            {/* USER INFO */}
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

            <div className="mainbar-content">
              {/* ABOUT THE PLAYER */}
              <article className="about mainbar">
                <header>
                  <h2 className="headings text-2xl article-title">About the player</h2>
                </header>
                <section>
                  {/* XP */}
                  {/* <section className="timeline mb-8">
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
                </section> */}

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
                            <span>
                              <strong>{playerInfo.basketballGames}</strong>
                            </span>
                          </li>
                        </>
                      ) : null}

                      {playerInfo.footballGames != 0 ? (
                        <>
                          {" "}
                          <li className="timeline-item">
                            <h4 className="headings text-sm2 timeline-item-title">Football</h4>
                            <span>
                              <strong>{playerInfo.footballGames}</strong>
                            </span>
                          </li>
                        </>
                      ) : null}

                      {playerInfo.tennisGames != 0 ? (
                        <>
                          {" "}
                          <li className="timeline-item">
                            <h4 className="headings text-sm2 timeline-item-title">Tennis</h4>
                            <span>
                              <strong>{playerInfo.tennisGames}</strong>
                            </span>
                          </li>
                        </>
                      ) : null}

                      {playerInfo.volleyballGames != 0 ? (
                        <>
                          {" "}
                          <li className="timeline-item">
                            <h4 className="headings text-sm2 timeline-item-title">Volleyball</h4>
                            <span>
                              <strong>{playerInfo.volleyballGames}</strong>
                            </span>
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

                      <h3 className="headings text-lg tracking-wider">Best Player Award</h3>
                    </div>

                    <ol className="timeline-list">
                      <li className="timeline-item">
                        <h4 className="headings text-sm2 timeline-item-title">Total Awards</h4>
                        <span>
                          <strong>{playerInfo.bestPlayerAward}</strong>
                        </span>
                      </li>
                    </ol>
                  </section>

                  {/* FAVORITE SPORT */}
                  <section className="timeline mb-8">
                    <div className="title-wrapper">
                      <div className="icon-box">
                        {playerInfo.favoriteSport == "basketball" ? <PiBasketballDuotone className="text-[2rem]" /> : null}
                        {playerInfo.favoriteSport == "football" ? <PiSoccerBallDuotone className="text-[2rem]" /> : null}
                        {playerInfo.favoriteSport == "tennis" ? <PiTennisBallDuotone className="text-[2rem]" /> : null}
                        {playerInfo.favoriteSport == "volleyball" ? <PiVolleyballDuotone className="text-[2rem]" /> : null}
                        {/* <PiStar className="text-[2rem]" /> */}
                      </div>

                      <h3 className="headings text-lg tracking-wider">Favorite Sport</h3>
                    </div>

                    <ol className="timeline-list">
                      <li className="timeline-item">
                        <h4 className="headings text-sm2 timeline-item-title">Sport</h4>
                        <p className="timeline-text capitalize">{playerInfo.favoriteSport}</p>
                      </li>
                    </ol>
                  </section>

                  {/* PLAYER POSITION */}
                  <section className="timeline mb-8">
                    <div className="title-wrapper">
                      <div className="icon-box">
                        <PiPerson className="text-[2rem]" />
                      </div>

                      <h3 className="headings text-lg tracking-wider">Player Position</h3>
                    </div>

                    <ol className="timeline-list">
                      {/* BASKETBALL POSITION */}
                      {!editPlayerInfo && playerInfo.basketballPosition == null ? null : (
                        <>
                          {playerInfo.basketballPosition != null ? (
                            <>
                              <li className="timeline-item">
                                <h4 className="headings text-sm2 timeline-item-title">Basketball</h4>
                                <p className="timeline-text">{playerInfo.basketballPosition}</p>
                              </li>
                            </>
                          ) : (
                            <>
                              <li className="timeline-item">
                                <h4 className="headings text-sm2 timeline-item-title">Basketball</h4>
                                <p className="timeline-text">FILL IN</p>
                              </li>
                            </>
                          )}
                        </>
                      )}

                      {/* FOOTBALL POSITION */}
                      {!editPlayerInfo && playerInfo.footballPosition == null ? null : (
                        <>
                          {playerInfo.footballPosition != null ? (
                            <>
                              <li className="timeline-item">
                                <h4 className="headings text-sm2 timeline-item-title">Football</h4>
                                <p className="timeline-text">{playerInfo.footballPosition}</p>
                              </li>
                            </>
                          ) : (
                            <>
                              <li className="timeline-item">
                                <h4 className="headings text-sm2 timeline-item-title">Football</h4>
                                <p className="timeline-text">FILL IN</p>
                              </li>
                            </>
                          )}
                        </>
                      )}

                      {/* VOLLEYBALL POSITION */}
                      {!editPlayerInfo && playerInfo.volleyballPosition == null ? null : (
                        <>
                          {playerInfo.volleyballPosition != null ? (
                            <>
                              <li className="timeline-item">
                                <h4 className="headings text-sm2 timeline-item-title">VolleyBall</h4>
                                <p className="timeline-text">{playerInfo.volleyballPosition}</p>
                              </li>
                            </>
                          ) : (
                            <>
                              <li className="timeline-item">
                                <h4 className="headings text-sm2 timeline-item-title">VolleyBall</h4>
                                <p className="timeline-text">FILL IN</p>
                              </li>
                            </>
                          )}
                        </>
                      )}
                    </ol>
                  </section>
                </section>
              </article>

              <br />
              <br />

              {/* LOCATION */}
              <article className="location mainbar">
                <header>
                  <h2 className="headings text-2xl article-title">Location</h2>
                </header>
                <section>
                  {/* REFERENCE ADDRESS */}
                  <section className="timeline mb-8">
                    <div className="title-wrapper">
                      <div className="icon-box">
                        <PiMapTrifold className="text-[2rem]" />
                      </div>

                      <h3 className="headings text-lg tracking-wider">Reference Address</h3>
                    </div>

                    <ol className="timeline-list">
                      <li className="timeline-item">
                        <h4 className="headings text-sm2 timeline-item-title">Address</h4>
                        <p className="timeline-text">{playerInfo.address}</p>
                      </li>
                    </ol>
                  </section>

                  {/* LOCATION MAP */}
                  <section className="mapbox" data-mapbox>
                    <figure>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230503.43746694!2d-49.43401161685449!3d-25.48448775126223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce35351cdb3dd%3A0x6d2f6ba5bacbe809!2sCuritiba%2C%20Paran%C3%A1!5e0!3m2!1sfr!2sbr!4v1743117337947!5m2!1sfr!2sbr"
                        width="600"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                      ></iframe>
                    </figure>
                  </section>
                </section>
              </article>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
