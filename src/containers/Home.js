import React from "react";
import Button from "../elements/Button";
import fire from "../configs/firebase";

function signOut() {
  fire.auth().signOut();
}

const Home = props => {
  return (
    <section>
      <h1>Home</h1>
      <Button color="primary" onClick={signOut}>
        Sign out
      </Button>
    </section>
  );
};

export default Home;
