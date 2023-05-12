import React from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Logout() {
  let location = useLocation();
  //useLocation() hooku ile mevcut sayfaının url'sine erişiriz.
  useEffect(() => {}, [location]);
  //url end point değişince uygulama tekrar render edilir.
  const history = useHistory();

  let loggedInToken = localStorage.getItem("token");

  const handleLogout = (e) => {
    console.log("logout butonuna basıldı");
    localStorage.removeItem("token");
    history.push("/login");
  };
  return (
    <div>
      <span className="flex justify-center">
        {loggedInToken === null ? (
          ""
        ) : (
          <button
            onClick={handleLogout}
            className="bg-black text-white text-center m-9 max-w-xxl p-8"
          >
            LOGOUT
          </button>
        )}
      </span>
    </div>
  );
}
