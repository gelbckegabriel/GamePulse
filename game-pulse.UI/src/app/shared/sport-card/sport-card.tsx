import Link from "next/link";
import "./sport-card.scss";

type Props = {
  backgroundImage: string;
  name: string;
};

export const SportCard = ({ backgroundImage, name }: Props) => {
  return (
    <>
      {/* CHOOSE DATA-EFFECT BETWEEN: 'zoom', 'blur' and 'color' */}
      <div className="column">
        {/* <Link
              href={`/portfolio/${row.name}`}
              style={{ textDecoration: "none" }}
            > */}
        <div className="card" data-effect="blur">
          <button className="card__save" type="button">
            <i></i>
          </button>

          <figure className="card__image">
            <img src={backgroundImage} />
          </figure>

          <div className="card__body mt-[10vh]">
            <h3 className="card__name">{name}</h3>
            <p className="card__bio">
              Filter locations where you can find a '{name}' court
            </p>
          </div>
        </div>
        {/* </Link> */}
      </div>
    </>
  );
};
