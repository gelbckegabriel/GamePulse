// COURTS IS GENERAL, EVERYTHING CLOSE TO YOU.
// COURT IS THE SPECIFIC COURT, YOU CAN SEE MORE DETAILS AND EXECUTE THE REGISTER ITSELF, SEE PLAYER LIST, ETC.
import Link from "next/link";
import "./page.scss";

export default function Court() {
  const cards = [
    {
      image: "/auth/user-login.webp",
      name: "Login",
      subtitle: "Sign in to your account",
      bio: "Log in to your GamePulse account to access exclusive features and book a court for your next game!",
    },
    {
      image: "/auth/user-registration.webp",
      name: "Registration",
      subtitle: "Create a new account",
      bio: "Join GamePulse today! Sign up to unlock exclusive features and easily find courts for your next game.",
    },
  ];

  return (
    <>
      <div className="row mt-10" style={{ maxWidth: "100%" }}>
        {/* CHOOSE DATA-EFFECT BETWEEN: 'zoom', 'blur' and 'color' */}
        {cards.map((row, index) => (
          <div className="column" key={index}>
            <Link
              href={`/portfolio/${row.name}`}
              style={{ textDecoration: "none" }}
            >
              <div className="card" data-effect="blur">
                <button className="card__save" type="button">
                  <i></i>
                </button>

                <figure className="card__image">
                  <img src={row.image} />
                </figure>

                <div className="card__header">
                  <figure className="card__profile">
                    {/* <img src="./Images/BigData.jpg" alt="Short description" /> */}
                  </figure>
                </div>

                <div className="card__body">
                  <h3 className="card__name">{row.name}</h3>
                  <p className="card__subtitle">{row.subtitle}</p>
                  <p className="card__bio">{row.bio}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
