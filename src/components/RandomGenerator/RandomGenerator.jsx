import { useState, useEffect } from "react";
import "./RandomGenerator.css";
import sticky from "../../assets/sticky.png";

const RandomGenerator = () => {
  const url = "http://api.icndb.com/jokes/random";
  const [isLoading, setIsLoading] = useState(true);
  const [joke, setJoke] = useState({});

  async function getJoke() {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setJoke(data);
    setIsLoading(false);
  }

  useEffect(() => {
    setTimeout(() => {
      getJoke();
    }, 3000);
  }, []);

  return (
    <section className="random-section" id="random">
      <div className="random-container">
      <img src={sticky} alt="sticky" className="sticky" />
        <h2>Text Generator</h2> 
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <p className="text">{joke.value.joke}</p>
        )}
        <button onClick={getJoke} className="btn">
        New...
        </button>
      </div>
    </section>
  );
};

export default RandomGenerator;
