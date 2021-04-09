import React from "react";
import { Route } from "react-router-dom";
import { router } from "../routers";

function Home() {
  return <div>Home</div>;
}
function Aboud() {
  return <div>Aboud</div>;
}
function Contact() {
  return <div>Contact</div>;
}

export default function Content() {
  return (
    <>
      <Route exact path={router.Home} component={Home} />
      <Route path={router.Aboud} component={Aboud} />
      <Route path={router.Contact} component={Contact} />
    </>
  );
}
