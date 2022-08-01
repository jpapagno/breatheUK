import { useRef } from "react";

const AboutUs = () => {

    const esriRef = useRef(null);
    const deviceRef = useRef(null);
    const databaseRef = useRef(null);
    const platformsRef = useRef(null);


    return ( 

        <div>
        <div className="team">
      <h2 ref={esriRef}>Meet the Esri Team </h2>

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
    <div className="team">
      <h2 ref={databaseRef}>Meet the Database Team </h2>

      <div className="people">
        <div className="person">
          <div className="portraits" id="savvas"></div>
          <h2>Savvas Nikopoulos</h2>
        </div>

        <div className="person">
          <div className="portraits" id="ant"></div>
          <h2>Antoine Assaf</h2>
        </div>

        <div className="person">
          <div className="portraits" id="jenny"></div>
          <h2>Trang Do</h2>
        </div>

        <div className="person">
          <div className="portraits" id="jess"></div>
          <h2>Jessica Fedor</h2>
        </div>

        <div className="person">
          <div className="portraits" id="ahnaf"></div>
          <h2>Ahnaf Inkiad</h2>
        </div>

        <div className="person">
          <div className="portraits" id="is"></div>
          <h2>Isabelle Papa</h2>
        </div>
      </div>

      <div>
        <h2 className="team">Database blog here!</h2>
        <p>blog blog blog</p>
      </div>

      <div className="team">
      <h2 ref={deviceRef}>Meet the Device Team </h2>

      <div className="people">
        <div className="person">
          <div className="portraits" id="benoni"></div>
          <h2>Ben-Oni Vainqueur</h2>
        </div>

        <div className="person">
          <div className="portraits" id="dec"></div>
          <h2>Declan Lowney</h2>
        </div>

        <div className="person">
          <div className="portraits" id="meghna"></div>
          <h2>Meghna Gite</h2>
        </div>

        <div className="person">
          <div className="portraits" id="yuhong"></div>
          <h2>Yuhong Zhou</h2>
        </div>
      </div>

      <div>
        <p className="aboutusText">
          The devices team was responsible for setting up the devices such that they could make readings, 
          putting these readings in a proper format, and sending these readings to the back end. 
          The first day was spent familiarizing with and programming the Arduino sensors. 
          This was initially obstructed by the fact that this involved the universally hated programming language of C, 
          but once done proved to be a huge confidence boost. 
          Some major changes we made were bypassing the 12 hour waiting period required to use the gas sensor and logging all of the 
          sensor readings. We started out the day with a partially-working machine we had never seen before, 
          and ended with a full understanding of a device capable of picking up eight different environmental readings 
          and portraying them on an LCD screen. 
        </p>
        <p className="aboutusText">
        The next immediate step was to begin thinking outside of the realm of the Arduino itself. 
        We dropped a mini bag on a Raspberry Pi, which connects to the Arduino to store its sensor readings. 
        Once we set up the operating system and established an internet connection, 
        we started developing a python script that allowed the Arduino to communicate with the Raspberry Pi via serial - 
        This was a tough hurdle to get over because we quickly realized that writing over serial is hard. 
        When this was finished, it was satisfying to know that we were gradually pushing outwards the scope of what our sensors could do.
        It was as if the seed we planted was starting to sprout leaves. 
        </p>
        <p className="aboutusText">
        Once we had the Arduino - Raspberry Pi connection, we could turn our focus towards the data itself. 
        We started implementing aggregation functionality that would take a series of 40 quick readings from the gas and PM sensors 
        and form one average reading with a timestamp. After an annoyingly large amount of communication with the database team, 
        it was determined that we were actually going to send our data to the backend, not directly to the database, in JSON. 
        We converted the text file into a JSON formatted file, posted each most recent reading to the backend URL using HTTP, 
        and at this point we were in the home stretch. 
        </p>
        <p className="aboutusText">
        The final stage was to get the sensors in full connection with the backend.
         There were some problems regarding the types of the sensor readings in the JSON file, 
         but this was fixed by creating a deep copy that ensured that the sensor readings were integers rather than strings.
          After this was resolved we could successfully post our JSON readings through Postman to the backend. 
          The final step was to implement some ease-of-use functionality, 
          most notably portraying the serial number and alternating readings on the LCD screen. 
        </p>
      </div>
    </div>

    </div>

    <div className="team">
      <h2 ref={platformsRef}>Meet the Platforms Team </h2>

      <div className="people">
        <div className="person">
          <div className="portraits" id="connie"></div>
          <h2>Connie Tang</h2>
        </div>

        <div className="person">
          <div className="portraits" id="john"></div>
          <h2>John Curanaj</h2>
        </div>

        <div className="person">
          <div className="portraits" id="sam"></div>
          <h2>Samuel Randall</h2>
        </div>

        <div className="person">
          <div className="portraits" id="gina"></div>
          <h2>Gina Le</h2>
        </div>

        <div className="person">
          <div className="portraits" id="carla"></div>
          <h2>Carla Delgado</h2>
        </div>

        <div className="person">
          <div className="portraits" id="joey"></div>
          <h2>Joseph Papagno</h2>
        </div>
      </div>

      <div>
        <h2 className="team">Platforms blog here!</h2>
        <p>blog blog blog</p>
      </div>
    </div>


    </div>

    
        

     );
}
 
export default AboutUs;