import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import Navbar from "../Navbar/Navbar";

const HighScores = () => {
  const [scores, setScores] = useState(null);
  const navigate = useNavigate();
  useEffect(async () => {
    await axios.get("/api/scores").then((res) => {
      setScores(res.data);
    });
  }, []);
  if (scores !== null) {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <section className='hero is-large'>
            <div className='hero-body'>
              <p className='title'>High Scores</p>
              {scores.map((score, index) => {
                return (
                  <div className='columns' key={index}>
                    <div className='column'>
                      <p className='subtitle'>{score.name}</p>
                    </div>
                    <div className='column'>
                      <p className='subtitle'>{score.score}</p>
                    </div>
                  </div>
                );
              })}
              <div
                className='button is-info is-centered'
                onClick={() => navigate("/quiz")}
              >
                PlayGame
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default HighScores;
