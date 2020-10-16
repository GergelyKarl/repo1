import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "../firebase";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Slash",
      age: 49,
      url:
        "https://pb2.jegy.hu/imgs/system-4/featured/000/000/003/474-279-139008.jpg",
    },
    {
      name: "Jimi Hendrix",
      age: 25,
      url:
        "https://ma7.sk/sites/www.ma7.sk/files/styles/normal_8_large/public/2020-07/jimi-hendrix-gitar-arveres.jpg?h=e6d74438",
    },
  ]);

  useEffect(() => {
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
