const baseUrl = "https://rickandmortyapi.com/api";

module.exports.fetchRandomCharacters = async () => {
  let url = baseUrl + "/character/";
  for (let i = 0; i < 10; i++) {
    const randInt = Math.floor(Math.random() * 671) + 1;
    url += url.charAt(url.length - 1) === "/" ? randInt : `,${randInt}`;
  }
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

module.exports.searchCharacters = async ({ name, status, gender }) => {
  console.log("?")
  const url =
    baseUrl +
    `/character/?name=${name}&status=${status === "any" &&
      ""}&gender=${gender === "any" && ""}`;

  const response = await fetch(url);
  const json = await response.json()
  return json;
};
