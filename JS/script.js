let button = document.getElementById("button");
const getArtistName = (ARTIST_NAME) => {
  fetch(
    `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var artist = "";
      data.results.map((temp) => {
        artist += `<ul class="list-wrapper">
              <li class="wrapperType">${temp.wrapperType}</li>
              <li class="collectionType">${temp.collectionType}</li>
              <li class="artistId">${temp.artistId}</li>
              <li class="collectionId">${temp.collectionId}</li>
              <li class="collectionId">${temp.artistName}</li> 
              <li class="collectionId">${temp.primaryGenreName}</li> 
              <li class="collectionId">${temp.country}</li> </ul>`;
        console.log(temp.country);
      });
      console.log(data);
      document.getElementById("list-wrapper").innerHTML = artist;
    });
};
button.addEventListener("click", (e) => {
  const ARTIST_NAME = document.getElementById("input").value;
  getArtistName(ARTIST_NAME);
});
