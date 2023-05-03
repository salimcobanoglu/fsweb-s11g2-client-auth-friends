import { useState, useEffect } from "react";
import axios from "axios";

/*
- axiosta tokenı kullanmak -done
- gizli bilgilere erişmek (https://wit-courses-api2.onrender.com/pr/entries) -done
*/

export const myAxios = () => {
  const token = localStorage.getItem("friends");

  return axios.create({
    headers: {
      Authorization: token,
    },
  });
};

export default function FriendList() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    myAxios()
      .get("http://localhost:9000/api/friends")
      .then((res) => {
        if (res.status === 200) {
          setContent(res.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold p-2">ALL FRIENDS</h2>

      <div className="py-6">
        {content.map((item) => (
          <div className="p-4 bg-white shadow mb-4" key={item.id}>
            <div className="p-4 text-left">
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
