// https://codepen.io/leonam-silva-de-souza/pen/vYowKqP

"use client";

import { useEffect, useState } from "react";
import { Container } from "../shared/utilities/container";
import { Button, IconButton, Option, Select, Typography } from "@material-tailwind/react";
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
import {
  AtSymbolIcon,
  CalendarDaysIcon,
  DevicePhoneMobileIcon,
  GlobeAmericasIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import "./page.scss";

export default function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  // {isLoading ? (<></>) : (<></>)}

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  const [userInfo, setUserInfo] = useState({
    name: "Gabriel Gelbcke",
    nickname: "Gelbcke",
    email: "gabrielgelbcke@gmail.com",
    phone: "+1 (213) 352-2795",
    birthday: "12 December, 2001",
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
    location: {
      street: "Rua Voluntários da Pátria",
      number: "475",
      city: "Curitiba, PR",
    },
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
                  {isLoading ? (
                    <>
                      <Typography as="div" variant="h1" className="mb-4 h-3 w-[12rem] rounded-full bg-gray-700 animate-pulse-strong">
                        &nbsp;
                      </Typography>
                      <Typography as="div" variant="paragraph" className="title mb-2 h-2 !w-[6rem] rounded-full bg-gray-700 animate-pulse-strong">
                        &nbsp;
                      </Typography>
                    </>
                  ) : (
                    <>
                      <h1 className="name">{userInfo.name}</h1>
                      <p className="title">{userInfo.nickname}</p>
                    </>
                  )}
                </div>
              </div>

              <div className="sidebar-info-more">
                <div className="separator"></div>

                <ul className="contacts-list">
                  <li className="contact-item">
                    <div className="icon-box">
                      <AtSymbolIcon className="w-[1.3rem] md:w-[2rem]" />
                    </div>

                    <div className="contact-info">
                      <p className="contact-title">Email</p>
                      {isLoading ? (
                        <>
                          <Typography as="div" variant="paragraph" className="title mt-2 h-2 rounded-full bg-gray-700 animate-pulse-strong">
                            &nbsp;
                          </Typography>
                        </>
                      ) : (
                        <>
                          <p className="contact-link">{userInfo.email}</p>
                        </>
                      )}
                    </div>
                  </li>

                  <li className="contact-item">
                    <div className="icon-box">
                      <DevicePhoneMobileIcon className="w-[1.3rem] md:w-[2rem]" />
                    </div>

                    <div className="contact-info">
                      <p className="contact-title">Phone</p>
                      {isLoading ? (
                        <>
                          <Typography as="div" variant="paragraph" className="title mt-2 h-2 w-[70%] rounded-full bg-gray-700 animate-pulse-strong">
                            &nbsp;
                          </Typography>
                        </>
                      ) : (
                        <>
                          <p className="contact-link">{userInfo.phone}</p>
                        </>
                      )}
                    </div>
                  </li>

                  <li className="contact-item">
                    <div className="icon-box">
                      <CalendarDaysIcon className="w-[1.3rem] md:w-[2rem]" />
                    </div>

                    <div className="contact-info">
                      <p className="contact-title">Birthday</p>
                      {isLoading ? (
                        <>
                          <Typography as="div" variant="paragraph" className="title mt-2 h-2 w-[50%] rounded-full bg-gray-700 animate-pulse-strong">
                            &nbsp;
                          </Typography>
                        </>
                      ) : (
                        <>
                          <time dateTime="2023-06-14">{userInfo.birthday}</time>
                        </>
                      )}
                    </div>
                  </li>

                  <li className="contact-item">
                    <div className="icon-box">
                      <MapPinIcon className="w-[1.3rem] md:w-[2rem]" />
                    </div>

                    <div className="contact-info">
                      <p className="contact-title">Location</p>
                      {isLoading ? (
                        <>
                          <Typography as="div" variant="paragraph" className="title mt-2 h-2 w-[40%] rounded-full bg-gray-700 animate-pulse-strong">
                            &nbsp;
                          </Typography>
                        </>
                      ) : (
                        <>
                          <address>{playerInfo.location.city}</address>
                        </>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            </aside>

            <div className="mainbar-content mb-10">
              {/* ABOUT THE PLAYER */}
              <article className="about mainbar">
                <header className="flex justify-between">
                  <h2 className="headings text-2xl article-title">About the player</h2>
                  {isLoading ? (
                    <>
                      <Typography as="div" variant="button" className="mt-2 h-10 w-10 rounded-full bg-gray-700 animate-pulse-strong">
                        &nbsp;
                      </Typography>
                    </>
                  ) : (
                    <>
                      <IconButton color="blue-gray" className="rounded-full">
                        <PencilSquareIcon onClick={() => setEditPlayerInfo(!editPlayerInfo)} className="w-[1.5rem]" />
                      </IconButton>
                    </>
                  )}
                </header>
                <section>
                  {/* FAVORITE SPORT */}
                  <section className="timeline mb-8">
                    <div className="title-wrapper">
                      <div className="icon-box">
                        {playerInfo.favoriteSport == "basketball" ? <PiBasketballDuotone className="text-[1.3rem] md:text-[2rem]" /> : null}
                        {playerInfo.favoriteSport == "football" ? <PiSoccerBallDuotone className="text-[1.3rem] md:text-[2rem]" /> : null}
                        {playerInfo.favoriteSport == "tennis" ? <PiTennisBallDuotone className="text-[1.3rem] md:text-[2rem]" /> : null}
                        {playerInfo.favoriteSport == "volleyball" ? <PiVolleyballDuotone className="text-[1.3rem] md:text-[2rem]" /> : null}
                      </div>

                      <h3 className="headings text-lg tracking-wider">Favorite Sport</h3>
                    </div>

                    <ol className="timeline-list">
                      {editPlayerInfo ? (
                        <>
                          <li className="timeline-item">
                            <h4 className="headings text-sm2 timeline-item-title">Basketball</h4>
                            <div className="py-3 w-[50%]">
                              <Select
                                color="blue-gray"
                                variant="outlined"
                                label="Select Favorite Sport"
                                menuProps={{ className: "bg-[#1e1e1f] border-[#1e1e1f] text-white" }}
                                value={playerInfo.favoriteSport}
                                onChange={(val) => (playerInfo.favoriteSport = val)}
                              >
                                <Option value="basketball">Basketball</Option>
                                <Option value="football">Football</Option>
                                <Option value="tennis">Tennis</Option>
                                <Option value="volleyball">Volleyball</Option>
                              </Select>
                            </div>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="timeline-item">
                            <h4 className="headings text-sm2 timeline-item-title">Sport</h4>
                            {isLoading ? (
                              <>
                                <Typography as="div" variant="paragraph" className="mt-2 h-2 w-[20%] rounded-full bg-gray-700 animate-pulse-strong">
                                  &nbsp;
                                </Typography>
                              </>
                            ) : (
                              <>
                                <p className="timeline-text capitalize">{playerInfo.favoriteSport}</p>
                              </>
                            )}
                          </li>
                        </>
                      )}
                    </ol>
                  </section>

                  {/* PLAYER POSITION */}
                  <section className="timeline mb-8">
                    <div className="title-wrapper">
                      <div className="icon-box">
                        <PiPerson className="text-[1.3rem] md:text-[2rem]" />
                      </div>

                      <h3 className="flex headings text-lg tracking-wider">Player Position</h3>
                    </div>

                    <ol className="timeline-list">
                      {/* BASKETBALL POSITION */}
                      {!editPlayerInfo && playerInfo.basketballPosition == null ? null : (
                        <>
                          {editPlayerInfo ? (
                            <>
                              <li className="timeline-item">
                                <h4 className="headings text-sm2 timeline-item-title">Basketball</h4>
                                <div className="py-3 w-[50%]">
                                  <Select
                                    color="blue-gray"
                                    variant="outlined"
                                    label="Select Position"
                                    menuProps={{ className: "bg-[#1e1e1f] border-[#1e1e1f] text-white" }}
                                    value={playerInfo.basketballPosition}
                                    onChange={(val) => {
                                      if (val.length == 0) {
                                        playerInfo.basketballPosition = null;
                                      } else {
                                        playerInfo.basketballPosition = val;
                                      }
                                    }}
                                  >
                                    <Option value="">None</Option>
                                    <Option value="Point Guard">Point Guard</Option>
                                    <Option value="Shooting Guard">Shooting Guard</Option>
                                    <Option value="Small Forward">Small Forward</Option>
                                    <Option value="Power Forward">Power Forward</Option>
                                    <Option value="Center">Center</Option>
                                  </Select>
                                </div>
                              </li>
                            </>
                          ) : (
                            <>
                              <li className="timeline-item">
                                <h4 className="headings text-sm2 timeline-item-title">Basketball</h4>
                                {isLoading ? (
                                  <>
                                    <Typography
                                      as="div"
                                      variant="paragraph"
                                      className="mt-2 h-2 w-[30%] rounded-full bg-gray-700 animate-pulse-strong"
                                    >
                                      &nbsp;
                                    </Typography>
                                  </>
                                ) : (
                                  <>
                                    <p className="timeline-text">{playerInfo.basketballPosition}</p>
                                  </>
                                )}
                              </li>
                            </>
                          )}
                        </>
                      )}

                      {/* FOOTBALL POSITION */}
                      {!editPlayerInfo && playerInfo.footballPosition == null ? null : (
                        <>
                          {editPlayerInfo ? (
                            <>
                              <li className="timeline-item">
                                <h4 className="headings text-sm2 timeline-item-title">Football</h4>
                                <div className="py-3 w-[50%]">
                                  <Select
                                    color="blue-gray"
                                    variant="outlined"
                                    label="Select Position"
                                    menuProps={{ className: "bg-[#1e1e1f] border-[#1e1e1f] text-white" }}
                                    value={playerInfo.footballPosition}
                                    onChange={(val) => {
                                      if (val.length == 0) {
                                        playerInfo.footballPosition = null;
                                      } else {
                                        playerInfo.footballPosition = val;
                                      }
                                    }}
                                  >
                                    <Option value="">None</Option>
                                    <Option value="Goalkeeper">Goalkeeper</Option>
                                    <Option value="Defender">Defender</Option>
                                    <Option value="Midfielder">Midfielder</Option>
                                    <Option value="Forward">Forward</Option>
                                    <Option value="Striker">Striker</Option>
                                  </Select>
                                </div>
                              </li>
                            </>
                          ) : (
                            <>
                              <li className="timeline-item">
                                <h4 className="headings text-sm2 timeline-item-title">Football</h4>
                                {isLoading ? (
                                  <>
                                    <Typography
                                      as="div"
                                      variant="paragraph"
                                      className="mt-2 h-2 w-[30%] rounded-full bg-gray-700 animate-pulse-strong"
                                    >
                                      &nbsp;
                                    </Typography>
                                  </>
                                ) : (
                                  <>
                                    <p className="timeline-text">{playerInfo.footballPosition}</p>
                                  </>
                                )}
                              </li>
                            </>
                          )}
                        </>
                      )}

                      {/* VOLLEYBALL POSITION */}
                      {!editPlayerInfo && playerInfo.volleyballPosition == null ? null : (
                        <>
                          {editPlayerInfo ? (
                            <>
                              <li className="timeline-item">
                                <h4 className="headings text-sm2 timeline-item-title">Volleyball</h4>
                                <div className="py-3 w-[50%]">
                                  <Select
                                    color="blue-gray"
                                    variant="outlined"
                                    label="Select Position"
                                    menuProps={{ className: "bg-[#1e1e1f] border-[#1e1e1f] text-white" }}
                                    value={playerInfo.volleyballPosition}
                                    onChange={(val) => {
                                      if (val.length == 0) {
                                        playerInfo.volleyballPosition = null;
                                      } else {
                                        playerInfo.volleyballPosition = val;
                                      }
                                    }}
                                  >
                                    <Option value="">None</Option>
                                    <Option value="Setter">Setter</Option>
                                    <Option value="Outside Hitter">Outside Hitter</Option>
                                    <Option value="Opposite Hitter">Opposite Hitter</Option>
                                    <Option value="Middle Blocker">Middle Blocker</Option>
                                    <Option value="Libero">Libero</Option>
                                  </Select>
                                </div>
                              </li>
                            </>
                          ) : (
                            <>
                              <li className="timeline-item">
                                <h4 className="headings text-sm2 timeline-item-title">Volleyball</h4>
                                {isLoading ? (
                                  <>
                                    <Typography
                                      as="div"
                                      variant="paragraph"
                                      className="mt-2 h-2 w-[30%] rounded-full bg-gray-700 animate-pulse-strong"
                                    >
                                      &nbsp;
                                    </Typography>
                                  </>
                                ) : (
                                  <>
                                    <p className="timeline-text">{playerInfo.volleyballPosition}</p>
                                  </>
                                )}
                              </li>
                            </>
                          )}
                        </>
                      )}
                    </ol>
                  </section>

                  {/* SAVE BUTTON */}
                  {editPlayerInfo ? (
                    <>
                      <div className="w-full mb-2">
                        <Button
                          onClick={() => {
                            setEditPlayerInfo(!editPlayerInfo);
                            // TODO: Set isLoading variable to true.
                            // TODO: Use a PUT method to update the Player's info on the DB.
                            // TODO: Call the method to retrieve user info again.
                            // TODO: Set isLoading variable to false.
                          }}
                          color="green"
                          className="ml-auto flex items-center gap-3 rounded-full"
                        >
                          <PaperAirplaneIcon className="h-4 w-4" /> Save
                        </Button>
                      </div>
                    </>
                  ) : null}
                </section>
              </article>

              <br />
              <br />

              {/* PLAYER STATS */}
              <article className="location mainbar">
                <header>
                  <h2 className="headings text-2xl article-title">Player Stats</h2>
                </header>
                <section>
                  {/* XP */}
                  {/* <section className="timeline mb-8">
                    <div className="title-wrapper">
                      <div className="icon-box">
                        <PiCoinsThin className="text-[1.3rem] md:text-[2rem]" />
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
                        <PiGameController className="text-[1.3rem] md:text-[2rem]" />
                      </div>

                      <h3 className="headings text-lg tracking-wider">Total Games</h3>
                    </div>

                    <ol className="timeline-list">
                      {playerInfo.basketballGames != 0 ? (
                        <>
                          <li className="timeline-item">
                            <h4 className="headings text-sm2 timeline-item-title">Basketball</h4>
                            {isLoading ? (
                              <>
                                <Typography as="div" variant="paragraph" className="mt-2 h-2 w-[10%] rounded-full bg-gray-700 animate-pulse-strong">
                                  &nbsp;
                                </Typography>
                              </>
                            ) : (
                              <>
                                <span>
                                  <strong>{playerInfo.basketballGames}</strong>
                                </span>
                              </>
                            )}
                          </li>
                        </>
                      ) : null}

                      {playerInfo.footballGames != 0 ? (
                        <>
                          <li className="timeline-item">
                            <h4 className="headings text-sm2 timeline-item-title">Football</h4>
                            {isLoading ? (
                              <>
                                <Typography as="div" variant="paragraph" className="mt-2 h-2 w-[10%] rounded-full bg-gray-700 animate-pulse-strong">
                                  &nbsp;
                                </Typography>
                              </>
                            ) : (
                              <>
                                <span>
                                  <strong>{playerInfo.footballGames}</strong>
                                </span>
                              </>
                            )}
                          </li>
                        </>
                      ) : null}

                      {playerInfo.tennisGames != 0 ? (
                        <>
                          <li className="timeline-item">
                            <h4 className="headings text-sm2 timeline-item-title">Tennis</h4>
                            {isLoading ? (
                              <>
                                <Typography as="div" variant="paragraph" className="mt-2 h-2 w-[10%] rounded-full bg-gray-700 animate-pulse-strong">
                                  &nbsp;
                                </Typography>
                              </>
                            ) : (
                              <>
                                <span>
                                  <strong>{playerInfo.tennisGames}</strong>
                                </span>
                              </>
                            )}
                          </li>
                        </>
                      ) : null}

                      {playerInfo.volleyballGames != 0 ? (
                        <>
                          <li className="timeline-item">
                            <h4 className="headings text-sm2 timeline-item-title">Volleyball</h4>
                            {isLoading ? (
                              <>
                                <Typography as="div" variant="paragraph" className="mt-2 h-2 w-[10%] rounded-full bg-gray-700 animate-pulse-strong">
                                  &nbsp;
                                </Typography>
                              </>
                            ) : (
                              <>
                                <span>
                                  <strong>{playerInfo.volleyballGames}</strong>
                                </span>
                              </>
                            )}
                          </li>
                        </>
                      ) : null}
                    </ol>
                  </section>

                  {/* BEST PLAYER AWARD */}
                  <section className="timeline mb-8">
                    <div className="title-wrapper">
                      <div className="icon-box">
                        <PiTrophy className="text-[1.3rem] md:text-[2rem]" />
                      </div>

                      <h3 className="headings text-lg tracking-wider">Best Player Award</h3>
                    </div>

                    <ol className="timeline-list">
                      <li className="timeline-item">
                        <h4 className="headings text-sm2 timeline-item-title">Total Awards</h4>
                        {isLoading ? (
                          <>
                            <Typography as="div" variant="paragraph" className="mt-2 h-2 w-[10%] rounded-full bg-gray-700 animate-pulse-strong">
                              &nbsp;
                            </Typography>
                          </>
                        ) : (
                          <>
                            <span>
                              <strong>{playerInfo.bestPlayerAward}</strong>
                            </span>
                          </>
                        )}
                      </li>
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
                        <PiMapTrifold className="text-[1.3rem] md:text-[2rem]" />
                      </div>

                      <h3 className="headings text-lg tracking-wider">Reference Address</h3>
                    </div>

                    <ol className="timeline-list">
                      <li className="timeline-item">
                        <h4 className="headings text-sm2 timeline-item-title">Address</h4>
                        {isLoading ? (
                          <>
                            <Typography as="div" variant="paragraph" className="mt-2 h-2 w-[80%] rounded-full bg-gray-700 animate-pulse-strong">
                              &nbsp;
                            </Typography>
                          </>
                        ) : (
                          <>
                            <p className="timeline-text">
                              {playerInfo.location.street}, {playerInfo.location.number} - {playerInfo.location.city}
                            </p>
                          </>
                        )}
                      </li>
                    </ol>
                  </section>

                  {/* LOCATION MAP */}
                  <section className="mapbox" data-mapbox>
                    {isLoading ? (
                      <>
                        <div className="grid h-full max-h-[300px] min-h-[160px] w-full animate-pulse-strong place-items-center rounded-lg bg-gray-700">
                          <GlobeAmericasIcon className="h-16 w-16 text-gray-500" />
                        </div>
                      </>
                    ) : (
                      <>
                        <figure>
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230503.43746694!2d-49.43401161685449!3d-25.48448775126223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce35351cdb3dd%3A0x6d2f6ba5bacbe809!2sCuritiba%2C%20Paran%C3%A1!5e0!3m2!1sfr!2sbr!4v1743117337947!5m2!1sfr!2sbr"
                            width="600"
                            height="450"
                            allowFullScreen=""
                            loading="lazy"
                          ></iframe>
                        </figure>
                      </>
                    )}
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
