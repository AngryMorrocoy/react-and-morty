import { FaHeart, FaGenderless } from "react-icons/fa";
import { GiDeathSkull, GiFemale, GiMale } from "react-icons/gi";
import { GrStatusUnknown } from "react-icons/gr";
import "./CharacterCard.css";

const CharacterCard = ({ character }) => {
  let statusIcon, genderIcon;

  if (character.status === "Alive")
    statusIcon = (
      <FaHeart
        style={{
          color: "#E5525F",
        }}
      />
    );
  else if (character.status === "Dead")
    statusIcon = (
      <GiDeathSkull
        style={{
          color: "#B8B8B8",
        }}
      />
    );
  else
    statusIcon = (
      <GrStatusUnknown
        style={{
          color: "#242424",
        }}
      />
    );

  if (character.gender === "Female")
    genderIcon = <GiFemale style={{ color: "#E684B9" }} />;
  else if (character.gender === "Male")
    genderIcon = <GiMale style={{ color: "#499CE4" }} />;
  else if (character.gender === "Genderless")
    genderIcon = <GrStatusUnknown style={{ color: "#242424" }} />;
  else genderIcon = <FaGenderless style={{ color: "#242424" }} />;

  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <div className="character-card__info">
        <p className="character__name">{character.name}</p>
        <p className="character__status">
          {statusIcon} {character.status} - {character.species}
        </p>
        <p className="character__gender">
          {genderIcon} {character.gender}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
