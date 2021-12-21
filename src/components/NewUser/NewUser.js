import React from "react";
import "./NewUser.css";

export const NewUser = () => {
  return (
    <>
      <div className="newUserbox">
        <div className="topHeader">Create Account</div>
        <div className="userInputbasic">
          <div>Email</div>
          <input className="long"></input>
        </div>
        <div className="userInputbasic">
          <div>Password</div>
          <input className="long"></input>
        </div>
        <div className="userInputbasic">
          <div>Name</div>
          <input className="long"></input>
        </div>
        <div className="userInputbasic">
          <div>Rank</div>
          <input className="long"></input>
        </div>
        <div className="userInputshort">
          <div>ETS</div>
          <input type="date" className="short"></input>
        </div>
        <div className="userInputshort">
          <div>Leave</div>
          <input type="date" className="short"></input>
        </div>
        <button className="signinButton">Sign-Up</button>
        <div>
          <div>
            Have a account already? <a href="https://trello.com/b/BinBwRl5/blue-ocean-trello">Login</a>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
