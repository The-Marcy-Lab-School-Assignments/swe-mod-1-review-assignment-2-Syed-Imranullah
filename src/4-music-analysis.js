const songs = [
  { title: "Essence", artist: "Wizkid", streams: 2500000, duration: 226, releaseYear: 2020 },
  { title: "Peru", artist: "Fireboy DML", streams: 1800000, duration: 195, releaseYear: 2021 },
  { title: "Last Last", artist: "Burna Boy", streams: 3200000, duration: 275, releaseYear: 2022 },
  { title: "Calm Down", artist: "Rema", streams: 4100000, duration: 239, releaseYear: 2022 },
  { title: "Love Nwantiti", artist: "CKay", streams: 3800000, duration: 134, releaseYear: 2019 },
  { title: "Buga", artist: "Kizz Daniel", streams: 2100000, duration: 242, releaseYear: 2022 }
];

// A: Use filter to create a new array called `hitSongs` containing only songs with more than 3 million streams.
const hitSongs = songs.filter((song) => song.streams > 3000000);

//console.log(hitSongs)

// B: Use map to create an array called `songTitles` containing just the titles of all songs.
const songTitles = songs.map((song) => song.title);
//console.log(songTitles)

// C: Use find to locate the song "Calm Down" and store it in a variable called `calmDown`.
const calmDown = songs.find((song) => song.title === 'Calm Down');
//console.log(calmDown)

// D: Use forEach to log each song in this format:
// "Essence by Wizkid - 2500000 streams"
// "Peru by Fireboy DML - 1800000 streams"
// etc...

const log = songs.forEach((song) => {
  console.log( `${song.title} by ${song.artist} - ${song.streams} streams`)
})
