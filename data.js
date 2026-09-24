/* Curated editorial catalogue. Minutes for shows are approximate episode lengths. */
const CATALOG = [
  {
    "id": "interstellar",
    "title": "Interstellar",
    "year": 2014,
    "type": "movie",
    "minutes": 169,
    "language": "English",
    "genres": [
      "Sci-fi",
      "Drama",
      "Adventure"
    ],
    "moods": [
      "Mind-bending",
      "Emotional",
      "Epic"
    ],
    "tags": "space family science time survival",
    "description": "A pilot joins a mission through a wormhole while his family faces a future on a dying Earth.",
    "poster": "gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "hue": 210
  },
  {
    "id": "inception",
    "title": "Inception",
    "year": 2010,
    "type": "movie",
    "minutes": 148,
    "language": "English",
    "genres": [
      "Sci-fi",
      "Thriller",
      "Action"
    ],
    "moods": [
      "Mind-bending",
      "Intense"
    ],
    "tags": "dreams heist puzzle reality",
    "description": "A specialist who steals secrets through dreams attempts to plant an idea instead.",
    "poster": "oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    "hue": 257
  },
  {
    "id": "the-dark-knight",
    "title": "The Dark Knight",
    "year": 2008,
    "type": "movie",
    "minutes": 152,
    "language": "English",
    "genres": [
      "Action",
      "Crime",
      "Drama"
    ],
    "moods": [
      "Intense",
      "Epic"
    ],
    "tags": "superhero batman moral crime",
    "description": "Batman faces a criminal whose chaos tests the limits of Gotham’s heroes.",
    "poster": "qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "hue": 304
  },
  {
    "id": "arrival",
    "title": "Arrival",
    "year": 2016,
    "type": "movie",
    "minutes": 116,
    "language": "English",
    "genres": [
      "Sci-fi",
      "Drama",
      "Mystery"
    ],
    "moods": [
      "Mind-bending",
      "Emotional"
    ],
    "tags": "aliens language time science",
    "description": "A linguist searches for a way to communicate with visitors from another world.",
    "poster": "x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
    "hue": 351
  },
  {
    "id": "everything-everywhere-all-at-once",
    "title": "Everything Everywhere All at Once",
    "year": 2022,
    "type": "movie",
    "minutes": 140,
    "language": "English",
    "genres": [
      "Sci-fi",
      "Comedy",
      "Action"
    ],
    "moods": [
      "Mind-bending",
      "Emotional"
    ],
    "tags": "multiverse family absurd identity",
    "description": "An exhausted laundromat owner discovers that the fate of multiple universes may depend on her.",
    "poster": "w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    "hue": 38
  },
  {
    "id": "dune",
    "title": "Dune",
    "year": 2021,
    "type": "movie",
    "minutes": 155,
    "language": "English",
    "genres": [
      "Sci-fi",
      "Adventure",
      "Drama"
    ],
    "moods": [
      "Epic",
      "Intense"
    ],
    "tags": "desert politics space destiny",
    "description": "A young heir travels to a desert planet at the centre of a struggle for power.",
    "poster": "d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    "hue": 85
  },
  {
    "id": "dune-part-two",
    "title": "Dune: Part Two",
    "year": 2024,
    "type": "movie",
    "minutes": 166,
    "language": "English",
    "genres": [
      "Sci-fi",
      "Adventure",
      "Action"
    ],
    "moods": [
      "Epic",
      "Intense"
    ],
    "tags": "desert politics space revenge",
    "description": "Paul Atreides joins the Fremen as personal loyalty collides with the demands of a growing legend.",
    "poster": "1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    "hue": 132
  },
  {
    "id": "blade-runner-2049",
    "title": "Blade Runner 2049",
    "year": 2017,
    "type": "movie",
    "minutes": 164,
    "language": "English",
    "genres": [
      "Sci-fi",
      "Mystery",
      "Drama"
    ],
    "moods": [
      "Mind-bending",
      "Emotional"
    ],
    "tags": "cyberpunk identity future noir",
    "description": "A replicant investigator uncovers a secret that could change the balance of a fractured society.",
    "poster": "gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    "hue": 179
  },
  {
    "id": "the-matrix",
    "title": "The Matrix",
    "year": 1999,
    "type": "movie",
    "minutes": 136,
    "language": "English",
    "genres": [
      "Sci-fi",
      "Action"
    ],
    "moods": [
      "Mind-bending",
      "Epic"
    ],
    "tags": "simulation reality cyberpunk hacker",
    "description": "A computer hacker learns that the world he knows may be an elaborate illusion.",
    "poster": "f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    "hue": 226
  },
  {
    "id": "ex-machina",
    "title": "Ex Machina",
    "year": 2014,
    "type": "movie",
    "minutes": 108,
    "language": "English",
    "genres": [
      "Sci-fi",
      "Thriller",
      "Drama"
    ],
    "moods": [
      "Mind-bending",
      "Intense"
    ],
    "tags": "robots ai technology isolation",
    "description": "A programmer is invited to evaluate an artificial intelligence at a secluded research estate.",
    "poster": "btbRB7BrD887j5NrvjxceRDmaot.jpg",
    "hue": 273
  },
  {
    "id": "the-martian",
    "title": "The Martian",
    "year": 2015,
    "type": "movie",
    "minutes": 144,
    "language": "English",
    "genres": [
      "Sci-fi",
      "Adventure",
      "Comedy"
    ],
    "moods": [
      "Feel-good",
      "Epic"
    ],
    "tags": "space science survival optimistic",
    "description": "Stranded on Mars, an astronaut relies on ingenuity while people on Earth plan a rescue.",
    "poster": "5BHuvQ6p9kfc091Z8RiFNhCwL4b.jpg",
    "hue": 320
  },
  {
    "id": "back-to-the-future",
    "title": "Back to the Future",
    "year": 1985,
    "type": "movie",
    "minutes": 116,
    "language": "English",
    "genres": [
      "Sci-fi",
      "Adventure",
      "Comedy"
    ],
    "moods": [
      "Feel-good",
      "Funny"
    ],
    "tags": "time travel family adventure nostalgic",
    "description": "A teenager accidentally travels into his parents’ past and risks erasing his own future.",
    "poster": "fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
    "hue": 7
  },
  {
    "id": "parasite",
    "title": "Parasite",
    "year": 2019,
    "type": "movie",
    "minutes": 132,
    "language": "Korean",
    "genres": [
      "Thriller",
      "Drama",
      "Comedy"
    ],
    "moods": [
      "Intense",
      "Mind-bending"
    ],
    "tags": "class dark satire family twists",
    "description": "A struggling family becomes entangled with a wealthy household in increasingly precarious ways.",
    "poster": "7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    "hue": 54
  },
  {
    "id": "knives-out",
    "title": "Knives Out",
    "year": 2019,
    "type": "movie",
    "minutes": 131,
    "language": "English",
    "genres": [
      "Mystery",
      "Comedy",
      "Crime"
    ],
    "moods": [
      "Funny",
      "Mind-bending"
    ],
    "tags": "detective whodunit family twists",
    "description": "A detective investigates the death of a novelist whose relatives all have something to hide.",
    "poster": "pThyQovXQrw2m0s9x82twj48Jq4.jpg",
    "hue": 101
  },
  {
    "id": "glass-onion",
    "title": "Glass Onion",
    "year": 2022,
    "type": "movie",
    "minutes": 140,
    "language": "English",
    "genres": [
      "Mystery",
      "Comedy",
      "Crime"
    ],
    "moods": [
      "Funny",
      "Mind-bending"
    ],
    "tags": "detective whodunit island satire",
    "description": "Benoit Blanc joins a private island gathering where old friendships conceal dangerous secrets.",
    "poster": "vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
    "hue": 148
  },
  {
    "id": "the-prestige",
    "title": "The Prestige",
    "year": 2006,
    "type": "movie",
    "minutes": 130,
    "language": "English",
    "genres": [
      "Mystery",
      "Drama",
      "Thriller"
    ],
    "moods": [
      "Mind-bending",
      "Intense"
    ],
    "tags": "magic rivalry twists obsession",
    "description": "Two stage magicians pursue an increasingly destructive rivalry in Victorian London.",
    "poster": "bdN3gXuIZYaJP7ftKK2sU0nPtEA.jpg",
    "hue": 195
  },
  {
    "id": "shutter-island",
    "title": "Shutter Island",
    "year": 2010,
    "type": "movie",
    "minutes": 138,
    "language": "English",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "Mind-bending",
      "Intense"
    ],
    "tags": "detective psychological island twists",
    "description": "A marshal investigates a disappearance at an isolated psychiatric hospital.",
    "poster": "nrmXQ0zcZUL8jFLrakWc90IR8z9.jpg",
    "hue": 242
  },
  {
    "id": "gone-girl",
    "title": "Gone Girl",
    "year": 2014,
    "type": "movie",
    "minutes": 149,
    "language": "English",
    "genres": [
      "Thriller",
      "Mystery",
      "Drama"
    ],
    "moods": [
      "Intense",
      "Mind-bending"
    ],
    "tags": "marriage crime twists media",
    "description": "A woman’s disappearance places her husband and their marriage under a national spotlight.",
    "poster": "qymaJhucquUwjpb8oiqynMeXnID.jpg",
    "hue": 289
  },
  {
    "id": "se7en",
    "title": "Se7en",
    "year": 1995,
    "type": "movie",
    "minutes": 127,
    "language": "English",
    "genres": [
      "Crime",
      "Thriller",
      "Mystery"
    ],
    "moods": [
      "Intense",
      "Dark"
    ],
    "tags": "detective serial killer disturbing",
    "description": "Two detectives pursue a killer whose crimes follow a disturbing pattern.",
    "poster": "6yoghtyTpznpBik8EngEmJskVUO.jpg",
    "hue": 336
  },
  {
    "id": "zodiac",
    "title": "Zodiac",
    "year": 2007,
    "type": "movie",
    "minutes": 157,
    "language": "English",
    "genres": [
      "Crime",
      "Mystery",
      "Drama"
    ],
    "moods": [
      "Intense",
      "Dark"
    ],
    "tags": "detective investigation obsession true crime",
    "description": "A cartoonist becomes consumed by the hunt for a serial killer in Northern California.",
    "poster": "",
    "hue": 23
  },
  {
    "id": "the-grand-budapest-hotel",
    "title": "The Grand Budapest Hotel",
    "year": 2014,
    "type": "movie",
    "minutes": 100,
    "language": "English",
    "genres": [
      "Comedy",
      "Adventure",
      "Drama"
    ],
    "moods": [
      "Funny",
      "Feel-good"
    ],
    "tags": "quirky stylish friendship whimsical",
    "description": "A concierge and his young protégé get caught in a battle over an inheritance.",
    "poster": "eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    "hue": 70
  },
  {
    "id": "fantastic-mr-fox",
    "title": "Fantastic Mr. Fox",
    "year": 2009,
    "type": "movie",
    "minutes": 87,
    "language": "English",
    "genres": [
      "Animation",
      "Comedy",
      "Adventure"
    ],
    "moods": [
      "Feel-good",
      "Funny"
    ],
    "tags": "animals family quirky stop motion",
    "description": "A fox’s return to his thieving ways puts his family and neighbours in conflict with three farmers.",
    "poster": "njbTizADSZg4PqeyJdDzZGooikv.jpg",
    "hue": 117
  },
  {
    "id": "paddington-2",
    "title": "Paddington 2",
    "year": 2017,
    "type": "movie",
    "minutes": 104,
    "language": "English",
    "genres": [
      "Comedy",
      "Family",
      "Adventure"
    ],
    "moods": [
      "Feel-good",
      "Funny"
    ],
    "tags": "kindness bear family cosy",
    "description": "Paddington sets out to buy a special gift and finds himself caught up in a theft.",
    "poster": "1OJ9vkD5xPt3skC6KguyXAgagRZ.jpg",
    "hue": 164
  },
  {
    "id": "the-intouchables",
    "title": "The Intouchables",
    "year": 2011,
    "type": "movie",
    "minutes": 112,
    "language": "French",
    "genres": [
      "Comedy",
      "Drama"
    ],
    "moods": [
      "Feel-good",
      "Emotional"
    ],
    "tags": "friendship uplifting unlikely friends",
    "description": "A wealthy man and his new caregiver develop an unlikely friendship.",
    "poster": "1QU7HKgsQbGpzsJbJK4pAVQV9F5.jpg",
    "hue": 211
  },
  {
    "id": "am-lie",
    "title": "Amélie",
    "year": 2001,
    "type": "movie",
    "minutes": 122,
    "language": "French",
    "genres": [
      "Romance",
      "Comedy"
    ],
    "moods": [
      "Feel-good",
      "Romantic"
    ],
    "tags": "paris quirky kindness whimsical",
    "description": "A shy Parisian waitress quietly transforms other people’s lives while searching for connection.",
    "poster": "nSxDa3M9aMvGVLoItzWTepQ5h5d.jpg",
    "hue": 258
  },
  {
    "id": "the-truman-show",
    "title": "The Truman Show",
    "year": 1998,
    "type": "movie",
    "minutes": 103,
    "language": "English",
    "genres": [
      "Comedy",
      "Drama",
      "Sci-fi"
    ],
    "moods": [
      "Mind-bending",
      "Feel-good"
    ],
    "tags": "reality media identity satire",
    "description": "An ordinary man begins to suspect that his perfectly arranged life is hiding something.",
    "poster": "vuza0WqY239yBXOadKlGwJsZJFE.jpg",
    "hue": 305
  },
  {
    "id": "chef",
    "title": "Chef",
    "year": 2014,
    "type": "movie",
    "minutes": 114,
    "language": "English",
    "genres": [
      "Comedy",
      "Drama"
    ],
    "moods": [
      "Feel-good",
      "Funny"
    ],
    "tags": "food road trip family cooking cosy",
    "description": "A chef rebuilds his enthusiasm for food and family by taking a food truck on the road.",
    "poster": "",
    "hue": 352
  },
  {
    "id": "school-of-rock",
    "title": "School of Rock",
    "year": 2003,
    "type": "movie",
    "minutes": 110,
    "language": "English",
    "genres": [
      "Comedy",
      "Music"
    ],
    "moods": [
      "Funny",
      "Feel-good"
    ],
    "tags": "music school friendship rock",
    "description": "A struggling musician poses as a substitute teacher and introduces his students to rock music.",
    "poster": "",
    "hue": 39
  },
  {
    "id": "the-princess-bride",
    "title": "The Princess Bride",
    "year": 1987,
    "type": "movie",
    "minutes": 98,
    "language": "English",
    "genres": [
      "Adventure",
      "Romance",
      "Comedy"
    ],
    "moods": [
      "Feel-good",
      "Romantic"
    ],
    "tags": "fairytale swordplay witty fantasy",
    "description": "A storybook adventure sends lovers, outlaws, and unlikely allies on a playful rescue mission.",
    "poster": "",
    "hue": 86
  },
  {
    "id": "palm-springs",
    "title": "Palm Springs",
    "year": 2020,
    "type": "movie",
    "minutes": 90,
    "language": "English",
    "genres": [
      "Comedy",
      "Romance",
      "Sci-fi"
    ],
    "moods": [
      "Funny",
      "Romantic",
      "Mind-bending"
    ],
    "tags": "time loop wedding existential",
    "description": "Two wedding guests find themselves sharing the same day over and over.",
    "poster": "",
    "hue": 133
  },
  {
    "id": "about-time",
    "title": "About Time",
    "year": 2013,
    "type": "movie",
    "minutes": 123,
    "language": "English",
    "genres": [
      "Romance",
      "Drama",
      "Comedy"
    ],
    "moods": [
      "Romantic",
      "Emotional"
    ],
    "tags": "time travel family love cosy",
    "description": "A young man who can revisit his past discovers the limits of using time travel to perfect life.",
    "poster": "iR1bVfURbN7r1C46WHFbwCkVve.jpg",
    "hue": 180
  },
  {
    "id": "la-la-land",
    "title": "La La Land",
    "year": 2016,
    "type": "movie",
    "minutes": 128,
    "language": "English",
    "genres": [
      "Romance",
      "Music",
      "Drama"
    ],
    "moods": [
      "Romantic",
      "Emotional"
    ],
    "tags": "jazz dreams music ambition",
    "description": "An actor and a jazz musician fall in love as they chase their ambitions in Los Angeles.",
    "poster": "uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    "hue": 227
  },
  {
    "id": "before-sunrise",
    "title": "Before Sunrise",
    "year": 1995,
    "type": "movie",
    "minutes": 101,
    "language": "English",
    "genres": [
      "Romance",
      "Drama"
    ],
    "moods": [
      "Romantic",
      "Emotional"
    ],
    "tags": "conversation travel connection vienna",
    "description": "Two strangers meet on a train and spend a night walking and talking through Vienna.",
    "poster": "",
    "hue": 274
  },
  {
    "id": "past-lives",
    "title": "Past Lives",
    "year": 2023,
    "type": "movie",
    "minutes": 106,
    "language": "English",
    "genres": [
      "Romance",
      "Drama"
    ],
    "moods": [
      "Emotional",
      "Romantic"
    ],
    "tags": "korean connection identity quiet",
    "description": "Childhood friends reconnect years after one of them moves away from South Korea.",
    "poster": "",
    "hue": 321
  },
  {
    "id": "little-women",
    "title": "Little Women",
    "year": 2019,
    "type": "movie",
    "minutes": 135,
    "language": "English",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "Emotional",
      "Feel-good"
    ],
    "tags": "family sisters period creative",
    "description": "Four sisters navigate growing up, creativity, love, and the expectations placed on them.",
    "poster": "",
    "hue": 8
  },
  {
    "id": "pride-prejudice",
    "title": "Pride & Prejudice",
    "year": 2005,
    "type": "movie",
    "minutes": 129,
    "language": "English",
    "genres": [
      "Romance",
      "Drama"
    ],
    "moods": [
      "Romantic",
      "Feel-good"
    ],
    "tags": "period slow burn witty family",
    "description": "Elizabeth Bennet challenges her first impressions of a wealthy, reserved gentleman.",
    "poster": "",
    "hue": 55
  },
  {
    "id": "your-name",
    "title": "Your Name",
    "year": 2016,
    "type": "movie",
    "minutes": 106,
    "language": "Japanese",
    "genres": [
      "Animation",
      "Romance",
      "Fantasy"
    ],
    "moods": [
      "Romantic",
      "Emotional",
      "Mind-bending"
    ],
    "tags": "anime body swap fate time",
    "description": "Two teenagers living far apart begin waking up in each other’s lives.",
    "poster": "q719jXXEzOoYaps6babgKnONONX.jpg",
    "hue": 102
  },
  {
    "id": "spirited-away",
    "title": "Spirited Away",
    "year": 2001,
    "type": "movie",
    "minutes": 125,
    "language": "Japanese",
    "genres": [
      "Animation",
      "Fantasy",
      "Adventure"
    ],
    "moods": [
      "Epic",
      "Feel-good"
    ],
    "tags": "anime spirits magic coming of age",
    "description": "A girl enters a spirit world and must find the courage to rescue her parents.",
    "poster": "39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    "hue": 149
  },
  {
    "id": "my-neighbor-totoro",
    "title": "My Neighbor Totoro",
    "year": 1988,
    "type": "movie",
    "minutes": 86,
    "language": "Japanese",
    "genres": [
      "Animation",
      "Family",
      "Fantasy"
    ],
    "moods": [
      "Feel-good"
    ],
    "tags": "anime cosy nature family gentle",
    "description": "Two sisters settle into a rural home and encounter mysterious woodland creatures.",
    "poster": "",
    "hue": 196
  },
  {
    "id": "howl-s-moving-castle",
    "title": "Howl’s Moving Castle",
    "year": 2004,
    "type": "movie",
    "minutes": 119,
    "language": "Japanese",
    "genres": [
      "Animation",
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "Romantic",
      "Epic"
    ],
    "tags": "anime magic adventure war",
    "description": "A young woman under a curse seeks refuge in the moving castle of an elusive wizard.",
    "poster": "",
    "hue": 243
  },
  {
    "id": "spider-man-into-the-spider-verse",
    "title": "Spider-Man: Into the Spider-Verse",
    "year": 2018,
    "type": "movie",
    "minutes": 117,
    "language": "English",
    "genres": [
      "Animation",
      "Action",
      "Adventure"
    ],
    "moods": [
      "Epic",
      "Feel-good"
    ],
    "tags": "superhero multiverse coming of age comic",
    "description": "Miles Morales discovers his powers just as visitors from other dimensions arrive.",
    "poster": "iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    "hue": 290
  },
  {
    "id": "coco",
    "title": "Coco",
    "year": 2017,
    "type": "movie",
    "minutes": 105,
    "language": "English",
    "genres": [
      "Animation",
      "Family",
      "Music"
    ],
    "moods": [
      "Emotional",
      "Feel-good"
    ],
    "tags": "music family mexico afterlife",
    "description": "A young musician journeys into the Land of the Dead to uncover his family’s story.",
    "poster": "gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
    "hue": 337
  },
  {
    "id": "soul",
    "title": "Soul",
    "year": 2020,
    "type": "movie",
    "minutes": 100,
    "language": "English",
    "genres": [
      "Animation",
      "Music",
      "Fantasy"
    ],
    "moods": [
      "Emotional",
      "Feel-good"
    ],
    "tags": "jazz purpose life philosophical",
    "description": "A music teacher’s unexpected detour challenges his understanding of what makes life meaningful.",
    "poster": "",
    "hue": 24
  },
  {
    "id": "inside-out",
    "title": "Inside Out",
    "year": 2015,
    "type": "movie",
    "minutes": 95,
    "language": "English",
    "genres": [
      "Animation",
      "Family",
      "Comedy"
    ],
    "moods": [
      "Emotional",
      "Feel-good"
    ],
    "tags": "emotions family childhood psychology",
    "description": "A girl’s emotions struggle to help her adjust when her family moves to a new city.",
    "poster": "",
    "hue": 71
  },
  {
    "id": "wall-e",
    "title": "WALL-E",
    "year": 2008,
    "type": "movie",
    "minutes": 98,
    "language": "English",
    "genres": [
      "Animation",
      "Sci-fi",
      "Family"
    ],
    "moods": [
      "Feel-good",
      "Romantic"
    ],
    "tags": "robots space environment gentle",
    "description": "A lonely robot finds a new purpose when a visitor arrives on an abandoned Earth.",
    "poster": "hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
    "hue": 118
  },
  {
    "id": "the-iron-giant",
    "title": "The Iron Giant",
    "year": 1999,
    "type": "movie",
    "minutes": 86,
    "language": "English",
    "genres": [
      "Animation",
      "Family",
      "Sci-fi"
    ],
    "moods": [
      "Emotional",
      "Feel-good"
    ],
    "tags": "robot friendship childhood",
    "description": "A boy befriends a giant robot while the authorities search for the mysterious visitor.",
    "poster": "",
    "hue": 165
  },
  {
    "id": "mad-max-fury-road",
    "title": "Mad Max: Fury Road",
    "year": 2015,
    "type": "movie",
    "minutes": 120,
    "language": "English",
    "genres": [
      "Action",
      "Adventure"
    ],
    "moods": [
      "Epic",
      "Intense"
    ],
    "tags": "chase desert survival dystopia",
    "description": "Fugitives cross a desert wasteland while a warlord’s army follows in furious pursuit.",
    "poster": "8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    "hue": 212
  },
  {
    "id": "top-gun-maverick",
    "title": "Top Gun: Maverick",
    "year": 2022,
    "type": "movie",
    "minutes": 130,
    "language": "English",
    "genres": [
      "Action",
      "Drama"
    ],
    "moods": [
      "Epic",
      "Intense"
    ],
    "tags": "aviation mentor teamwork",
    "description": "An experienced pilot returns to train a younger group for a demanding mission.",
    "poster": "62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    "hue": 259
  },
  {
    "id": "john-wick",
    "title": "John Wick",
    "year": 2014,
    "type": "movie",
    "minutes": 101,
    "language": "English",
    "genres": [
      "Action",
      "Thriller"
    ],
    "moods": [
      "Intense",
      "Dark"
    ],
    "tags": "assassin revenge stylish crime",
    "description": "A retired assassin is drawn back into the criminal underworld after a personal loss.",
    "poster": "fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    "hue": 306
  },
  {
    "id": "the-lord-of-the-rings-the-fellowship-of-the-ring",
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "year": 2001,
    "type": "movie",
    "minutes": 178,
    "language": "English",
    "genres": [
      "Fantasy",
      "Adventure"
    ],
    "moods": [
      "Epic",
      "Emotional"
    ],
    "tags": "quest friendship magic journey",
    "description": "A fellowship sets out to destroy a powerful ring before it falls into the wrong hands.",
    "poster": "6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    "hue": 353
  },
  {
    "id": "get-out",
    "title": "Get Out",
    "year": 2017,
    "type": "movie",
    "minutes": 104,
    "language": "English",
    "genres": [
      "Horror",
      "Thriller",
      "Mystery"
    ],
    "moods": [
      "Dark",
      "Intense"
    ],
    "tags": "psychological satire disturbing twists",
    "description": "A visit to his girlfriend’s family reveals an unsettling pattern to a young photographer.",
    "poster": "tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    "hue": 40
  },
  {
    "id": "a-quiet-place",
    "title": "A Quiet Place",
    "year": 2018,
    "type": "movie",
    "minutes": 90,
    "language": "English",
    "genres": [
      "Horror",
      "Thriller",
      "Sci-fi"
    ],
    "moods": [
      "Dark",
      "Intense"
    ],
    "tags": "survival family creatures silence",
    "description": "A family lives in near silence to avoid creatures that hunt by sound.",
    "poster": "nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    "hue": 87
  },
  {
    "id": "train-to-busan",
    "title": "Train to Busan",
    "year": 2016,
    "type": "movie",
    "minutes": 118,
    "language": "Korean",
    "genres": [
      "Horror",
      "Action",
      "Thriller"
    ],
    "moods": [
      "Intense",
      "Emotional"
    ],
    "tags": "zombies survival train family",
    "description": "Passengers on a train fight to survive as a fast-moving outbreak spreads through the country.",
    "poster": "vNVFt6dtcqnI7hqa6LFBUibuFiw.jpg",
    "hue": 134
  },
  {
    "id": "the-conjuring",
    "title": "The Conjuring",
    "year": 2013,
    "type": "movie",
    "minutes": 112,
    "language": "English",
    "genres": [
      "Horror",
      "Mystery"
    ],
    "moods": [
      "Dark",
      "Intense"
    ],
    "tags": "haunted supernatural ghosts",
    "description": "Paranormal investigators are called to a farmhouse where a family is experiencing frightening events.",
    "poster": "",
    "hue": 181
  },
  {
    "id": "breaking-bad",
    "title": "Breaking Bad",
    "year": 2008,
    "type": "show",
    "minutes": 47,
    "language": "English",
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "moods": [
      "Intense",
      "Dark"
    ],
    "tags": "antihero drugs crime moral",
    "description": "A chemistry teacher’s entry into the drug trade transforms his family, partners, and himself.",
    "poster": "3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg",
    "hue": 228
  },
  {
    "id": "better-call-saul",
    "title": "Better Call Saul",
    "year": 2015,
    "type": "show",
    "minutes": 47,
    "language": "English",
    "genres": [
      "Crime",
      "Drama"
    ],
    "moods": [
      "Intense",
      "Dark"
    ],
    "tags": "lawyer moral antihero slow burn",
    "description": "An ambitious lawyer’s compromises gradually pull him towards a dangerous criminal world.",
    "poster": "",
    "hue": 275
  },
  {
    "id": "severance",
    "title": "Severance",
    "year": 2022,
    "type": "show",
    "minutes": 50,
    "language": "English",
    "genres": [
      "Sci-fi",
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "Mind-bending",
      "Intense"
    ],
    "tags": "work memory identity corporate dystopia",
    "description": "Employees whose work and personal memories are separated begin questioning their employer.",
    "poster": "pPHpeI2X1qEd1CS1SeyrdhZ4qnT.jpg",
    "hue": 322
  },
  {
    "id": "dark",
    "title": "Dark",
    "year": 2017,
    "type": "show",
    "minutes": 55,
    "language": "German",
    "genres": [
      "Sci-fi",
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "Mind-bending",
      "Dark"
    ],
    "tags": "time travel family puzzle small town",
    "description": "Missing children expose connections across generations in a small German town.",
    "poster": "",
    "hue": 9
  },
  {
    "id": "stranger-things",
    "title": "Stranger Things",
    "year": 2016,
    "type": "show",
    "minutes": 50,
    "language": "English",
    "genres": [
      "Sci-fi",
      "Horror",
      "Adventure"
    ],
    "moods": [
      "Epic",
      "Intense"
    ],
    "tags": "supernatural friendship teens nostalgic",
    "description": "A boy’s disappearance draws his friends into a secret experiment and a strange parallel world.",
    "poster": "uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
    "hue": 56
  },
  {
    "id": "black-mirror",
    "title": "Black Mirror",
    "year": 2011,
    "type": "show",
    "minutes": 60,
    "language": "English",
    "genres": [
      "Sci-fi",
      "Thriller",
      "Drama"
    ],
    "moods": [
      "Mind-bending",
      "Dark"
    ],
    "tags": "technology anthology dystopia society",
    "description": "Standalone stories explore unsettling possibilities at the intersection of people and technology.",
    "poster": "",
    "hue": 103
  },
  {
    "id": "the-good-place",
    "title": "The Good Place",
    "year": 2016,
    "type": "show",
    "minutes": 22,
    "language": "English",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "Funny",
      "Feel-good",
      "Mind-bending"
    ],
    "tags": "afterlife ethics friendship philosophical",
    "description": "A woman who appears to have entered the wrong afterlife tries to become a better person.",
    "poster": "",
    "hue": 150
  },
  {
    "id": "brooklyn-nine-nine",
    "title": "Brooklyn Nine-Nine",
    "year": 2013,
    "type": "show",
    "minutes": 22,
    "language": "English",
    "genres": [
      "Comedy",
      "Crime"
    ],
    "moods": [
      "Funny",
      "Feel-good"
    ],
    "tags": "sitcom workplace friends detective",
    "description": "An eccentric group of detectives balances investigations with everyday workplace chaos.",
    "poster": "",
    "hue": 197
  },
  {
    "id": "ted-lasso",
    "title": "Ted Lasso",
    "year": 2020,
    "type": "show",
    "minutes": 35,
    "language": "English",
    "genres": [
      "Comedy",
      "Drama",
      "Sport"
    ],
    "moods": [
      "Feel-good",
      "Funny"
    ],
    "tags": "football friendship kindness sports uplifting",
    "description": "An American coach takes charge of an English football club despite knowing little about the sport.",
    "poster": "",
    "hue": 244
  },
  {
    "id": "the-office-us",
    "title": "The Office (US)",
    "year": 2005,
    "type": "show",
    "minutes": 22,
    "language": "English",
    "genres": [
      "Comedy"
    ],
    "moods": [
      "Funny",
      "Feel-good"
    ],
    "tags": "sitcom workplace mockumentary awkward",
    "description": "A documentary crew follows the daily absurdities of a paper company’s office.",
    "poster": "",
    "hue": 291
  },
  {
    "id": "parks-and-recreation",
    "title": "Parks and Recreation",
    "year": 2009,
    "type": "show",
    "minutes": 22,
    "language": "English",
    "genres": [
      "Comedy"
    ],
    "moods": [
      "Funny",
      "Feel-good"
    ],
    "tags": "sitcom workplace friendship optimistic",
    "description": "A determined public servant and her colleagues try to improve their small town.",
    "poster": "",
    "hue": 338
  },
  {
    "id": "fleabag",
    "title": "Fleabag",
    "year": 2016,
    "type": "show",
    "minutes": 26,
    "language": "English",
    "genres": [
      "Comedy",
      "Drama"
    ],
    "moods": [
      "Funny",
      "Emotional",
      "Dark"
    ],
    "tags": "grief family witty adult",
    "description": "A London woman uses wit to navigate desire, loss, and her tangled relationships.",
    "poster": "",
    "hue": 25
  },
  {
    "id": "the-bear",
    "title": "The Bear",
    "year": 2022,
    "type": "show",
    "minutes": 30,
    "language": "English",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "moods": [
      "Intense",
      "Emotional"
    ],
    "tags": "food cooking grief family workplace",
    "description": "A chef returns home to run his family’s sandwich shop under relentless pressure.",
    "poster": "",
    "hue": 72
  },
  {
    "id": "succession",
    "title": "Succession",
    "year": 2018,
    "type": "show",
    "minutes": 60,
    "language": "English",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "moods": [
      "Dark",
      "Intense"
    ],
    "tags": "family politics business satire wealthy",
    "description": "The children of a media mogul compete for power within a fractured family empire.",
    "poster": "",
    "hue": 119
  },
  {
    "id": "the-queen-s-gambit",
    "title": "The Queen’s Gambit",
    "year": 2020,
    "type": "show",
    "minutes": 56,
    "language": "English",
    "genres": [
      "Drama"
    ],
    "moods": [
      "Emotional",
      "Intense"
    ],
    "tags": "chess prodigy period ambition miniseries",
    "description": "A young chess prodigy pursues success while wrestling with isolation and addiction.",
    "poster": "",
    "hue": 166
  },
  {
    "id": "arcane",
    "title": "Arcane",
    "year": 2021,
    "type": "show",
    "minutes": 41,
    "language": "English",
    "genres": [
      "Animation",
      "Fantasy",
      "Action"
    ],
    "moods": [
      "Epic",
      "Emotional"
    ],
    "tags": "sisters class steampunk videogame",
    "description": "Two sisters find themselves on opposing sides of a conflict between divided cities.",
    "poster": "",
    "hue": 213
  },
  {
    "id": "avatar-the-last-airbender",
    "title": "Avatar: The Last Airbender",
    "year": 2005,
    "type": "show",
    "minutes": 23,
    "language": "English",
    "genres": [
      "Animation",
      "Fantasy",
      "Adventure"
    ],
    "moods": [
      "Epic",
      "Feel-good"
    ],
    "tags": "elements friendship quest coming of age",
    "description": "A young Avatar and his friends journey to restore balance to a world at war.",
    "poster": "",
    "hue": 260
  },
  {
    "id": "attack-on-titan",
    "title": "Attack on Titan",
    "year": 2013,
    "type": "show",
    "minutes": 24,
    "language": "Japanese",
    "genres": [
      "Animation",
      "Action",
      "Fantasy"
    ],
    "moods": [
      "Epic",
      "Dark",
      "Intense"
    ],
    "tags": "anime war survival mystery",
    "description": "Humanity shelters behind immense walls while young soldiers confront enormous threats outside.",
    "poster": "",
    "hue": 307
  },
  {
    "id": "death-note",
    "title": "Death Note",
    "year": 2006,
    "type": "show",
    "minutes": 23,
    "language": "Japanese",
    "genres": [
      "Animation",
      "Crime",
      "Thriller"
    ],
    "moods": [
      "Mind-bending",
      "Dark"
    ],
    "tags": "anime detective moral strategy supernatural",
    "description": "A student discovers a notebook with lethal powers and enters a battle of wits with a detective.",
    "poster": "",
    "hue": 354
  },
  {
    "id": "spy-x-family",
    "title": "Spy x Family",
    "year": 2022,
    "type": "show",
    "minutes": 24,
    "language": "Japanese",
    "genres": [
      "Animation",
      "Comedy",
      "Action"
    ],
    "moods": [
      "Funny",
      "Feel-good"
    ],
    "tags": "anime family spies found family",
    "description": "A spy builds a pretend family without knowing that its members have extraordinary secrets.",
    "poster": "",
    "hue": 41
  },
  {
    "id": "crash-landing-on-you",
    "title": "Crash Landing on You",
    "year": 2019,
    "type": "show",
    "minutes": 80,
    "language": "Korean",
    "genres": [
      "Romance",
      "Drama",
      "Comedy"
    ],
    "moods": [
      "Romantic",
      "Emotional"
    ],
    "tags": "kdrama military love fish out of water",
    "description": "A South Korean businesswoman accidentally crosses the border and encounters a North Korean officer.",
    "poster": "",
    "hue": 88
  },
  {
    "id": "extraordinary-attorney-woo",
    "title": "Extraordinary Attorney Woo",
    "year": 2022,
    "type": "show",
    "minutes": 70,
    "language": "Korean",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "moods": [
      "Feel-good",
      "Emotional"
    ],
    "tags": "kdrama lawyer workplace growth",
    "description": "A talented autistic lawyer tackles cases and relationships at a major law firm.",
    "poster": "",
    "hue": 135
  },
  {
    "id": "squid-game",
    "title": "Squid Game",
    "year": 2021,
    "type": "show",
    "minutes": 55,
    "language": "Korean",
    "genres": [
      "Thriller",
      "Drama"
    ],
    "moods": [
      "Intense",
      "Dark"
    ],
    "tags": "survival games class competition",
    "description": "People facing severe financial hardship enter a competition with deadly stakes.",
    "poster": "",
    "hue": 182
  },
  {
    "id": "kingdom",
    "title": "Kingdom",
    "year": 2019,
    "type": "show",
    "minutes": 50,
    "language": "Korean",
    "genres": [
      "Horror",
      "Thriller",
      "Drama"
    ],
    "moods": [
      "Dark",
      "Intense"
    ],
    "tags": "zombies period politics survival",
    "description": "A crown prince investigates an outbreak amid a struggle for political power.",
    "poster": "",
    "hue": 229
  },
  {
    "id": "money-heist",
    "title": "Money Heist",
    "year": 2017,
    "type": "show",
    "minutes": 50,
    "language": "Spanish",
    "genres": [
      "Crime",
      "Thriller",
      "Drama"
    ],
    "moods": [
      "Intense",
      "Epic"
    ],
    "tags": "heist strategy hostage ensemble",
    "description": "An organised crew attempts an ambitious robbery while negotiating pressure from inside and outside.",
    "poster": "",
    "hue": 276
  },
  {
    "id": "lupin",
    "title": "Lupin",
    "year": 2021,
    "type": "show",
    "minutes": 45,
    "language": "French",
    "genres": [
      "Crime",
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "Mind-bending",
      "Intense"
    ],
    "tags": "heist gentleman thief revenge",
    "description": "A resourceful thief draws inspiration from Arsène Lupin while pursuing a personal injustice.",
    "poster": "",
    "hue": 323
  },
  {
    "id": "derry-girls",
    "title": "Derry Girls",
    "year": 2018,
    "type": "show",
    "minutes": 24,
    "language": "English",
    "genres": [
      "Comedy"
    ],
    "moods": [
      "Funny",
      "Feel-good"
    ],
    "tags": "sitcom teens friendship school nostalgic",
    "description": "A group of teenagers navigates school, family, and growing up in 1990s Northern Ireland.",
    "poster": "",
    "hue": 10
  },
  {
    "id": "schitt-s-creek",
    "title": "Schitt’s Creek",
    "year": 2015,
    "type": "show",
    "minutes": 22,
    "language": "English",
    "genres": [
      "Comedy"
    ],
    "moods": [
      "Funny",
      "Feel-good"
    ],
    "tags": "sitcom family small town growth",
    "description": "A once-wealthy family starts over in a small town they previously bought as a joke.",
    "poster": "",
    "hue": 57
  },
  {
    "id": "only-murders-in-the-building",
    "title": "Only Murders in the Building",
    "year": 2021,
    "type": "show",
    "minutes": 30,
    "language": "English",
    "genres": [
      "Mystery",
      "Comedy",
      "Crime"
    ],
    "moods": [
      "Funny",
      "Mind-bending"
    ],
    "tags": "detective podcast neighbours whodunit",
    "description": "Three true-crime fans investigate a death in their apartment building.",
    "poster": "",
    "hue": 104
  },
  {
    "id": "sherlock",
    "title": "Sherlock",
    "year": 2010,
    "type": "show",
    "minutes": 90,
    "language": "English",
    "genres": [
      "Crime",
      "Mystery",
      "Drama"
    ],
    "moods": [
      "Mind-bending",
      "Intense"
    ],
    "tags": "detective genius london puzzle",
    "description": "A modern Sherlock Holmes and his companion solve intricate cases in London.",
    "poster": "",
    "hue": 151
  },
  {
    "id": "the-last-of-us",
    "title": "The Last of Us",
    "year": 2023,
    "type": "show",
    "minutes": 55,
    "language": "English",
    "genres": [
      "Drama",
      "Horror",
      "Adventure"
    ],
    "moods": [
      "Emotional",
      "Intense"
    ],
    "tags": "survival found family post apocalyptic",
    "description": "A guarded survivor escorts a teenager across a country transformed by infection.",
    "poster": "",
    "hue": 198
  },
  {
    "id": "chernobyl",
    "title": "Chernobyl",
    "year": 2019,
    "type": "show",
    "minutes": 60,
    "language": "English",
    "genres": [
      "Drama",
      "History"
    ],
    "moods": [
      "Intense",
      "Dark"
    ],
    "tags": "miniseries disaster politics science",
    "description": "A dramatisation follows the nuclear disaster and the people responding to its consequences.",
    "poster": "",
    "hue": 245
  },
  {
    "id": "planet-earth-ii",
    "title": "Planet Earth II",
    "year": 2016,
    "type": "show",
    "minutes": 50,
    "language": "English",
    "genres": [
      "Documentary",
      "Nature"
    ],
    "moods": [
      "Epic",
      "Feel-good"
    ],
    "tags": "animals wildlife nature relaxing",
    "description": "Explore remarkable habitats and the animals adapting to life within them.",
    "poster": "",
    "hue": 292
  },
  {
    "id": "free-solo",
    "title": "Free Solo",
    "year": 2018,
    "type": "movie",
    "minutes": 100,
    "language": "English",
    "genres": [
      "Documentary",
      "Adventure",
      "Sport"
    ],
    "moods": [
      "Intense",
      "Epic"
    ],
    "tags": "climbing mountains real life challenge",
    "description": "A documentary follows a climber preparing to scale El Capitan without ropes.",
    "poster": "",
    "hue": 339
  },
  {
    "id": "rrr",
    "title": "RRR",
    "year": 2022,
    "type": "movie",
    "minutes": 187,
    "language": "Telugu",
    "genres": [
      "Action",
      "Drama",
      "Adventure"
    ],
    "moods": [
      "Epic",
      "Emotional"
    ],
    "tags": "friendship revolution musical india",
    "description": "Two men form a powerful bond while concealing missions that could put them at odds.",
    "poster": "",
    "hue": 26
  },
  {
    "id": "3-idiots",
    "title": "3 Idiots",
    "year": 2009,
    "type": "movie",
    "minutes": 170,
    "language": "Hindi",
    "genres": [
      "Comedy",
      "Drama"
    ],
    "moods": [
      "Funny",
      "Emotional",
      "Feel-good"
    ],
    "tags": "college friendship education india",
    "description": "Friends reflect on their college years and the unconventional classmate who challenged their assumptions.",
    "poster": "",
    "hue": 73
  },
  {
    "id": "the-lunchbox",
    "title": "The Lunchbox",
    "year": 2013,
    "type": "movie",
    "minutes": 104,
    "language": "Hindi",
    "genres": [
      "Romance",
      "Drama"
    ],
    "moods": [
      "Romantic",
      "Emotional"
    ],
    "tags": "food letters quiet india",
    "description": "A mistaken lunch delivery begins a correspondence between two lonely people.",
    "poster": "",
    "hue": 120
  },
  {
    "id": "ilo-ilo",
    "title": "Ilo Ilo",
    "year": 2013,
    "type": "movie",
    "minutes": 99,
    "language": "Mandarin",
    "genres": [
      "Drama"
    ],
    "moods": [
      "Emotional"
    ],
    "tags": "singapore family growing up domestic work",
    "description": "A Singaporean family and a new domestic worker form complicated bonds during financial uncertainty.",
    "poster": "",
    "hue": 167
  },
  {
    "id": "the-shawshank-redemption",
    "title": "The Shawshank Redemption",
    "year": 1994,
    "type": "movie",
    "minutes": 142,
    "language": "English",
    "genres": [
      "Drama"
    ],
    "moods": [
      "Emotional",
      "Feel-good"
    ],
    "tags": "prison hope friendship resilience",
    "description": "A banker builds an enduring friendship while adapting to life in prison.",
    "poster": "9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    "hue": 214
  },
  {
    "id": "whiplash",
    "title": "Whiplash",
    "year": 2014,
    "type": "movie",
    "minutes": 107,
    "language": "English",
    "genres": [
      "Drama",
      "Music"
    ],
    "moods": [
      "Intense",
      "Emotional"
    ],
    "tags": "jazz ambition music obsession",
    "description": "A young drummer’s pursuit of excellence intensifies under a demanding instructor.",
    "poster": "7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    "hue": 261
  }
];
const TRIVIA = [["In The Matrix, which pill does Neo take?", ["Red", "Blue", "Green", "White"], 0, "Neo takes the red pill to discover the truth about his world."], ["What is the name of the young Spider-Man in Into the Spider-Verse?", ["Peter Parker", "Miles Morales", "Miguel O’Hara", "Ben Reilly"], 1, "Miles Morales is the teenager at the heart of this Spider-Verse story."], ["Which instrument does the main character play in Whiplash?", ["Piano", "Saxophone", "Drums", "Guitar"], 2, "Andrew is a jazz drummer whose ambition drives the story."], ["Which city do the two leads explore in Before Sunrise?", ["Paris", "Prague", "Rome", "Vienna"], 3, "Jesse and Céline spend the night exploring Vienna."], ["In Ratatouille, what kind of animal is Remy?", ["Mouse", "Rabbit", "Rat", "Hamster"], 2, "Remy is a rat with an exceptional sense of taste and a passion for cooking."], ["Which game is central to The Queen’s Gambit?", ["Chess", "Go", "Poker", "Backgammon"], 0, "Beth Harmon is a chess prodigy."], ["What is the name of the desert planet in Dune?", ["Caladan", "Arrakis", "Hoth", "Pandora"], 1, "Arrakis is the desert planet central to the struggle over spice."], ["In WALL-E, what is the name of the sleek white robot?", ["AVA", "EVE", "R2", "JOY"], 1, "WALL-E meets EVE, a probe sent to look for signs of plant life."], ["What subject does Walter White teach in Breaking Bad?", ["Physics", "History", "Biology", "Chemistry"], 3, "Walter White begins the series as a high-school chemistry teacher."], ["What is the name of the paper company in The Office (US)?", ["Dunder Mifflin", "Wernham Hogg", "Initech", "Pied Piper"], 0, "The Scranton branch belongs to Dunder Mifflin."], ["Which family owns the media empire in Succession?", ["The Bluths", "The Roys", "The Roses", "The Starks"], 1, "The Roy family fights over the future of Waystar Royco."], ["Which of these is a film by Studio Ghibli?", ["Coco", "Soul", "Spirited Away", "The Iron Giant"], 2, "Spirited Away is a Studio Ghibli film directed by Hayao Miyazaki."], ["Which instrument does Sebastian play in La La Land?", ["Violin", "Piano", "Trumpet", "Drums"], 1, "Sebastian is a jazz pianist."], ["Which creature lends its name to My Neighbor Totoro?", ["A robot", "A forest spirit", "A dragon", "A talking cat"], 1, "Totoro is the mysterious woodland spirit the sisters encounter."], ["Where is Mark Watney stranded in The Martian?", ["Venus", "The Moon", "Mars", "Europa"], 2, "Watney uses his scientific knowledge to survive on Mars."], ["In The Good Place, who believes she was admitted by mistake?", ["Tahani", "Janet", "Eleanor", "Mindy"], 2, "Eleanor Shellstrop suspects that the good afterlife has the wrong person."], ["What kind of vehicle is used for time travel in Back to the Future?", ["Motorcycle", "Train only", "DeLorean car", "Bus"], 2, "Doc Brown turns a DeLorean into a time machine."], ["What is Aang’s role in Avatar: The Last Airbender?", ["Fire Lord", "Avatar", "Earth King", "Water Chief"], 1, "As the Avatar, Aang can learn to bend all four elements."], ["In Knives Out, what is the detective’s name?", ["Benoit Blanc", "Hercule Poirot", "Philip Marlowe", "Sam Spade"], 0, "Benoit Blanc is the detective investigating the Thrombey family."], ["Which sport does Ted Lasso coach in England?", ["Rugby", "Cricket", "Football", "Basketball"], 2, "Ted takes charge of AFC Richmond, a football club."], ["What does Paddington famously love to eat?", ["Honey", "Marmalade sandwiches", "Pancakes", "Chocolate cake"], 1, "Marmalade sandwiches are Paddington’s favourite."], ["What type of shop does the family operate in Everything Everywhere All at Once?", ["Bakery", "Bookshop", "Laundromat", "Florist"], 2, "The family runs a laundromat."], ["What are the four elements in Avatar: The Last Airbender?", ["Earth, water, fire, air", "Metal, wood, ice, light", "Fire, ice, shadow, light", "Earth, space, time, air"], 0, "The four bending disciplines are earth, water, fire, and air."], ["Who is the young musician in Coco?", ["Miguel", "Héctor", "Ernesto", "Dante"], 0, "Miguel’s love of music takes him on a journey through his family’s past."], ["In Death Note, what object gives Light his power?", ["A mask", "A notebook", "A ring", "A camera"], 1, "The Death Note is a notebook with supernatural powers."], ["In Interstellar, what do the explorers travel through near Saturn?", ["A wormhole", "A nebula", "A solar flare", "An asteroid mine"], 0, "They travel through a wormhole to reach distant worlds."], ["Which city is the setting of Amélie?", ["Lyon", "Paris", "Marseille", "Nice"], 1, "Amélie lives and works in Paris."], ["Which character is a spy in Spy x Family?", ["Loid", "Anya", "Yor", "Bond"], 0, "Loid Forger is a spy who builds a pretend family for a mission."], ["What is the name of the hobbit entrusted with the Ring?", ["Samwise", "Pippin", "Frodo", "Merry"], 2, "Frodo Baggins becomes the Ring-bearer."], ["In The Bear, what is Carmy’s profession?", ["Chef", "Musician", "Lawyer", "Architect"], 0, "Carmy is a chef who returns to run his family’s sandwich shop."], ["In Severance, what is separated by the procedure?", ["Dreams and sleep", "Work and personal memories", "Hearing and sight", "Speech and thought"], 1, "Severance divides a person’s work memories from their personal memories."]];
if (typeof module !== "undefined") module.exports = { CATALOG, TRIVIA };
