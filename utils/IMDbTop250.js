/*global require, module */
/*jslint unparam: true, sloppy: true, vars: true */

module.exports = function () {

    var titles = [
        "The Shawshank Redemption",
        "The Godfather",
        "The Godfather: Part II",
        "The Dark Knight",
        "Pulp Fiction",
        "12 Angry Men",
        "The Good, the Bad and the Ugly",
        "Schindler's List",
        "The Lord of the Rings: The Return of the King",
        "Fight Club",
        "The Lord of the Rings: The Fellowship of the Ring",
        "Star Wars: Episode V - The Empire Strikes Back",
        "Forrest Gump",
        "Inception",
        "One Flew Over the Cuckoo's Nest",
        "The Lord of the Rings: The Two Towers",
        "Goodfellas",
        "The Matrix",
        "Star Wars",
        "Interstellar",
        "Shichinin no samurai",
        "Cidade de Deus",
        "Se7en",
        "The Usual Suspects",
        "The Silence of the Lambs",
        "It's a Wonderful Life",
        "Once Upon a Time in the West",
        "Lèon",
        "Life Is Beautiful",
        "Casablanca",
        "Raiders of the Lost Ark",
        "American History X",
        "Saving Private Ryan",
        "City Lights",
        "Psycho",
        "Spirited Away",
        "Rear Window",
        "Whiplash",
        "Intouchables",
        "Modern Times",
        "Terminator 2: Judgment Day",
        "Memento",
        "The Green Mile",
        "The Pianist",
        "The Departed",
        "Sunset Blvd.",
        "Apocalypse Now",
        "Gladiator",
        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        "Back to the Future",
        "Alien",
        "The Prestige",
        "The Great Dictator",
        "Das Leben der Anderen",
        "The Lion King",
        "Django Unchained",
        "Nuovo Cinema Paradiso",
        "The Dark Knight Rises",
        "The Shining",
        "Paths of Glory",
        "American Beauty",
        "WALL-E",
        "North by Northwest",
        "Aliens",
        "Citizen Kane",
        "Vertigo",
        "Amélie",
        "M",
        "Grave of the Fireflies",
        "Das Boot",
        "Oldboy",
        "Toy Story 3",
        "Princess Mononoke",
        "Star Wars: Episode VI - Return of the Jedi",
        "Once Upon a Time in America",
        "A Clockwork Orange",
        "Reservoir Dogs",
        "Taxi Driver",
        "Braveheart",
        "Double Indemnity",
        "Requiem for a Dream",
        "To Kill a Mockingbird",
        "Lawrence of Arabia",
        "Witness for the Prosecution",
        "Eternal Sunshine of the Spotless Mind",
        "Full Metal Jacket",
        "Singin' in the Rain",
        "The Sting",
        "Bicycle Thieves",
        "Amadeus",
        "Monty Python and the Holy Grail",
        "Snatch.",
        "Rashômon",
        "2001: A Space Odyssey",
        "For a Few Dollars More",
        "L.A. Confidential",
        "The Kid",
        "All About Eve",
        "The Apartment",
        "Inglourious Basterds",
        "Some Like It Hot",
        "The Treasure of the Sierra Madre",
        "Indiana Jones and the Last Crusade",
        "Toy Story",
        "The Third Man",
        "A Separation",
        "Yojimbo",
        "Batman Begins",
        "Like Stars on Earth",
        "Metropolis",
        "Unforgiven",
        "Scarface",
        "Raging Bull",
        "Up",
        "3 Idiots",
        "Chinatown",
        "Der Untergang",
        "The Great Escape",
        "Die Hard",
        "On the Waterfront",
        "Jagten",
        "Pan's Labyrinth",
        "Mr. Smith Goes to Washington",
        "Heat",
        "The Bridge on the River Kwai",
        "Good Will Hunting",
        "Gone Girl",
        "My Neighbor Totoro",
        "Eskiya",
        "The Seventh Seal",
        "Birdman",
        "The Gold Rush",
        "Ikiru",
        "The Elephant Man",
        "Boyhood",
        "Ran",
        "Wild Strawberries",
        "The Wolf of Wall Street",
        "Blade Runner",
        "The General",
        "Lock, Stock and Two Smoking Barrels",
        "The Secret in Their Eyes",
        "Casino",
        "Gran Torino",
        "Warrior",
        "The Big Lebowski",
        "V for Vendetta",
        "Hauru no ugoku shiro",
        "Rebecca",
        "Rang De Basanti",
        "The Deer Hunter",
        "How to Train Your Dragon",
        "Cool Hand Luke",
        "It Happened One Night",
        "Judgment at Nuremberg",
        "Fargo",
        "Trainspotting",
        "Gone with the Wind",
        "Into the Wild",
        "Rush",
        "A Beautiful Mind",
        "The Maltese Falcon",
        "Dial M for Murder",
        "The Sixth Sense",
        "The Wages of Fear",
        "Hotel Rwanda",
        "The Thing",
        "Finding Nemo",
        "No Country for Old Men",
        "Mary and Max",
        "Butch Cassidy and the Sundance Kid",
        "Kill Bill: Vol. 1",
        "Incendies",
        "Platoon",
        "Life of Brian",
        "12 Years a Slave",
        "Network",
        "Touch of Evil",
        "Dil Chahta Hai",
        "Diabolique",
        "Guardians of the Galaxy",
        "Annie Hall",
        "There Will Be Blood",
        "The Princess Bride",
        "Stand by Me",
        "The Grand Budapest Hotel",
        "Sin City",
        "Ben-Hur",
        "The 400 Blows",
        "In the Name of the Father",
        "Amores perros",
        "Million Dollar Baby",
        "The Grapes of Wrath",
        "Hachi: A Dog's Tale",
        "The Wizard of Oz",
        "Persona",
        "The Best Years of Our Lives",
        "The Imitation Game",
        "The Avengers",
        "Kaze no tani no Naushika",
        "Gandhi",
        "The Bourne Ultimatum",
        "Donnie Darko",
        "8Ω",
        "Strangers on a Train",
        "Gangs of Wasseypur",
        "Shutter Island",
        "Mou gaan dou",
        "Twelve Monkeys",
        "Lagaan: Once Upon a Time in India",
        "Jaws",
        "Stalker",
        "High Noon",
        "X-Men: Days of Future Past",
        "Before Sunrise",
        "The Terminator",
        "Notorious",
        "The King's Speech",
        "Groundhog Day",
        "Harry Potter and the Deathly Hallows: Part 2",
        "Ip Man",
        "Fanny och Alexander",
        "Rocky",
        "The Battle of Algiers",
        "The Night of the Hunter",
        "Monsters, Inc.",
        "Dog Day Afternoon",
        "La haine",
        "Memories of Murder",
        "Pirates of the Caribbean: The Curse of the Black Pearl",
        "Barry Lyndon",
        "Who's Afraid of Virginia Woolf?",
        "A Fistful of Dollars",
        "La strada",
        "Castle in the Sky",
        "The Truman Show",
        "The Big Sleep",
        "The Help",
        "Jurassic Park",
        "Roman Holiday",
        "The Graduate",
        "Papillon",
        "The Hustler",
        "Beauty and the Beast",
        "Prisoners",
        "In The Mood for Love",
        "Festen",
        "PK",
        "Rope",
        "Before Sunset"
    ];

    var getRandomTitle = function () {
        return titles[Math.floor(Math.random() * titles.length)];
    };

    return {
        getRandomTitle: getRandomTitle
    };
};
