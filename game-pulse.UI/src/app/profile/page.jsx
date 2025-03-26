// https://codepen.io/leonam-silva-de-souza/pen/vYowKqP

import { AtSymbolIcon, CalendarDaysIcon, ChevronDownIcon, DevicePhoneMobileIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Container } from "../shared/container";
import "./page.scss";

export default function Profile() {
  return (
    <>
      <div className="bg-background text-white min-h-[100vh]">
        <Container>
          <div className="pt-10">
            <aside className="sidebar active">
              <div className="sidebar-info">
                <figure className="avatar-box">
                  <img src="./home/basketball.webp" alt="avatar" width="80" className="rounded-[100%]" />
                </figure>

                <div className="info-content">
                  <h1 className="name">Gabriel Gelbcke</h1>
                  <p className="title">Gelbcke</p>
                </div>
              </div>

              <div className="sidebar-info-more">
                <div className="separator"></div>

                <ul className="contacts-list">
                  <li className="contact-item">
                    <div className="icon-box">
                      <AtSymbolIcon className="w-[2rem]" />
                      {/* <ion-icon name="mail-outline"></ion-icon> */}
                    </div>

                    <div className="contact-info">
                      <p className="contact-title">Email</p>

                      <a href="mailto:richard@example.com" className="contact-link">
                        richardexample.com
                      </a>
                    </div>
                  </li>

                  <li className="contact-item">
                    <div className="icon-box">
                      <DevicePhoneMobileIcon className="w-[2rem]" />
                      {/* <ion-icon name="phone-portrait-outline"></ion-icon> */}
                    </div>

                    <div className="contact-info">
                      <p className="contact-title">Phone</p>

                      <a href="tel:+12133522795" className="contact-link">
                        +1 (213) 352-2795
                      </a>
                    </div>
                  </li>

                  <li className="contact-item">
                    <div className="icon-box">
                      <CalendarDaysIcon className="w-[2rem]" />
                      {/* <ion-icon name="calendar-outline"></ion-icon> */}
                    </div>

                    <div className="contact-info">
                      <p className="contact-title">Birthday</p>

                      <span>June 23, 1982</span>
                    </div>
                  </li>

                  <li className="contact-item">
                    <div className="icon-box">
                      <MapPinIcon className="w-[2rem]" />
                      {/* <ion-icon name="location-outline"></ion-icon> */}
                    </div>

                    <div className="contact-info">
                      <p className="contact-title">Location</p>

                      <address>Sacramento, California, USA</address>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  );
}
