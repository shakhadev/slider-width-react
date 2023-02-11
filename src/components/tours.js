import React from "react";
// import Reviews from "./data";
import "./index.css";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import Reviews from "./data";
import { useState } from "react";

const Person = () => {
  const [index, setIndex] = useState(0);
  const { image, name, job, text } = Reviews[index];
  return (
    <section className="container">
      <article className="review">
        <div className="img-container">
          <img src={image} className="person-img" />
          <span className="quote-icon"></span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button
            className="prev-btn"
            onClick={() => {
              if (index === 0) {
                setIndex(Reviews.length-1)
              }else{
                setIndex(index- 1)
              }
            }}
          >
            <FcPrevious />
          </button>
          <button
            className="next-btn"
            onClick={() => {
              if (index === Reviews.length - 1) {
                setIndex(0);
              } else {
                setIndex(index + 1);
              }
            }}
          >
            <FcNext />
          </button>
        </div>
        <button className="random-btn" onClick={()=>{
            setIndex(Math.floor(Math.random() * Reviews.length))
        }}> Surprise Me</button>
      </article>
    </section>
  );
};

export default Person;
