import React from "react";
import { useState, useEffect } from "react";
import { axiosWithAuth } from "./AxiosAuth";

export default function FriendList() {
  const [friends, setFriends] = useState([]);
  //ilk başta friends listesi boş.Listeye ulaşma için /api/friends'e api call atarız.

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/friends`)
      .then((response) => {
        console.log(response.data); // api call'dan gelen data bir array, map ile dönerek bilgileri yazdırırız.
        setFriends(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div className="flex flex-col justify-center">
        <h1 className=" heading text-center">FRIENDS LIST</h1>
        <ul className="flex flex-col justify-center justify-items-center">
          {friends.map((person) => (
            <li key={person.id} className="flex justify-center">
              - {person.name.toUpperCase()} - {person.email.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
