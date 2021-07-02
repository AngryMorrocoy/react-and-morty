const baseUrl = "https://rickandmortyapi.com/api";

const fetchRandomCharacters = async () => {
  let url = baseUrl + "/character/";
  for (let i = 0; i < 10; i++) {
    const randInt = Math.floor(Math.random() * 671) + 1;
    url += url.charAt(url.length - 1) === "/" ? randInt : `,${randInt}`;
  }
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const searchCharacters = async ({ name, status, gender, page }) => {
  const params = new URLSearchParams({
    page, name, status, gender
  });
  const url = `${baseUrl}/character/?${params.toString()}`.replaceAll("any", "");

  const response = await fetch(url);
  const json = await response.json()
  return json;
};

export {
  fetchRandomCharacters,
  searchCharacters
}
