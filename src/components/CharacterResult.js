import "./CharacterResult.css";

const CharacterResult = ({ character }) => {
  return (
    <div className="character-result">
      <img src={character.image} alt={character.name} className="character-result__img"/>
      <a href={character.url} rel="noreferrer" target="_blank" className="character-name">{character.name}</a>
    </div>
  );
};

export default CharacterResult;
