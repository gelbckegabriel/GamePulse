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
        <div className="card w-[100%] max-w-[22rem] h-[10rem]" data-effect="blur">
          <button className="card__save" type="button">
            <i></i>
          </button>

          <figure className="card__image">
            <img src={backgroundImage} />
          </figure>

          <div className="card__body mt-[15%]">
            <h3 className="card__name">{name}</h3>
            <p className="card__bio">
              Filter locations where you can find a {name} court
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
