var song = {
  id: 9999,
  name: 'Kiss',
  artist: 'Prince',
  source: 'https://example.com/prince.mp3'
};


// var html = "<h1 data-id=" + song.id + ">"
// + song.name + "</h1>" + "<audio src=" + song.source + "></audio>"
//   $(".container").append(html);

// -----------------------------------------------

var html = `
  <div>
    <h1 data-id="${song.id}"> ${song.name} </h1>

    <p> ${song.artist} </p>
    <audio src="${song.source}"><audio>
  </div>
`;

// $('.container').append(html);
console.log(html);
