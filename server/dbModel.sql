DROP DATABASE migramix IF EXISTS

CREATE DATABASE migramix;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    userName VARCHAR(20) NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    dateOfBirth DATE NOT NULL,
    role VARCHAR(50) NOT NULL
);

CREATE TABLE organizer(
    id_user INT  NOT NULL ,
    biography VARCHAR(400) NOT NULL,
    main_link VARCHAR(200),
    picture VARCHAR(200),
    PRIMARY KEY(id_user),
    CONSTRAINT user_unique UNIQUE (id_user)
);

CREATE TABLE artists(
    id INT UNIQUE REFERENCES users(id),
    ArtistsProfilePicture  VARCHAR(250),
    ArtistBio VARCHAR(500) NOT NULL,
    ArtistMainLink VARCHAR(50),
    ArtistSecundaryLink VARCHAR(50),
    ArtistThirdLink VARCHAR(50),
    MusicGenre VARCHAR(50) NOT NULL,
    Performance VARCHAR(50) NOT NULL,
    Type_of_performance VARCHAR(50) NOT NULL,
    ContactNumber INT NOT NULL   
);

CREATE TABLE events (
    id serial unique PRIMARY KEY,
    organizer_id INT REFERENCES users(id), 
    eventTitle VARCHAR(100) NOT NULL,
    eventDescription VARCHAR(400) NOT NULL,
    urlEvent VARCHAR(100) NOT NULL,
    typeOfActivity VARCHAR(100) NOT NULL,
    artistEvent VARCHAR(100) NOT NULL,
    initialDate DATE NOT NULL,
    finalDate DATE,
    eventImage VARCHAR(250)
);

CREATE TABLE event_by_artist(
    event_id INT UNIQUE references events(id),
    event_by_artist_id INT  references users(id)
);



