const Esri = () => {
  return (
    <div className="team">
      <h2>Meet the Esri Team </h2>

      <div className="people">
        <div className="person">
          <div className="portraits" id="morgan"></div>
          <h2>Morgan McCarty</h2>
        </div>

        <div className="person">
          <div className="portraits" id="luke"></div>
          <h2>Luke Albinger</h2>
        </div>

        <div className="person">
          <div className="portraits" id="jane"></div>
          <h2>Yuting Zheng</h2>
        </div>

        <div className="person">
          <div className="portraits" id="ben"></div>
          <h2>Benjamin Pomeroy</h2>
        </div>
      </div>

      <div>
        <h2 className="team">Esri blog here!</h2>
        <p>blog blog blog</p>
      </div>
    </div>
  );
};

export default Esri;
