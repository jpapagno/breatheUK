import { useRef } from "react";

const AboutUs = () => {
  const esriRef = useRef(null);
  const deviceRef = useRef(null);
  const databaseRef = useRef(null);
  const platformsRef = useRef(null);

  return (
    <div className="imgs background scrollable" id="view">
      <div className="team">
        <div className="whiteBoxAboutUs small" id="toppad">
          <h2 ref={platformsRef}>Meet the Platforms Team </h2>
        </div>

        <div className="people">
          <div className="person">
            <div className="portraits" id="connie"></div>
            <h2 className="whiteBoxAboutUs">
              Connie<br></br>Tang<br></br>
              <h5>Scrum Lead</h5>
            </h2>
          </div>

          <div className="person">
            <div className="portraits" id="john"></div>
            <h2 className="whiteBoxAboutUs">
              John<br></br>Curanaj
            </h2>
          </div>

          <div className="person">
            <div className="portraits" id="carla"></div>
            <h2 className="whiteBoxAboutUs">
              Carla<br></br>Delgado
            </h2>
          </div>

          <div className="person">
            <div className="portraits" id="gina"></div>
            <h2 className="whiteBoxAboutUs">
              Gina<br></br>Le
            </h2>
          </div>

          <div className="person">
            <div className="portraits" id="joey"></div>
            <h2 className="whiteBoxAboutUs">
              Joseph<br></br>Papagno
            </h2>
          </div>

          <div className="person">
            <div className="portraits" id="sam"></div>
            <h2 className="whiteBoxAboutUs">
              Samuel<br></br>Randall
            </h2>
          </div>
        </div>

        <div className="whiteBoxAboutUs medium" id="topbotmargin">
          <p className="aboutusText">
                The first few days of the project consisted of a lot of learning
            throughout our team. A majority of us had never worked in web
            development, so there was a steep learning curve. As a group, we
            spent time researching the best tech stack for our project and
            eventually decided on creating a Spring Boot web application with a
            front end built in React. As a group, we spent time learning how to
            separately build a Spring Boot and React application from scratch
            and eventually learn how to integrate the two together.
          </p>
            <br></br>
          <p className="aboutusText">
                From there, it was time to gather our requirements and start
            building our project. We gathered that we would need a dashboard
            page embedded with ESRI, a user registration page, a user-login
            page, and a sensor registration page to begin. The front-end team
            immediately began with designing the web application in react.
            Concurrently, the API team began building out API calls with Spring
            and used Postman to test that users would be able to send and
            receive JSON objects to those APIs. Within the first few days, we
            had successfully implemented a working front-end and API calls for
            the devices and database team to post data.
          </p>
            <br></br>
          <p className="aboutusText">
                Once we had everything set up, it was time to begin the integration
            between the front-end, API, database, and ESRI. There were some
            issues regarding the database integration, but we were able to
            eventually have a fully functioning web app that allowed data to be
            passed in through the API to be eventually stored in the database.
            The front-end team implemented axios calls on the react end to
            interact with our Spring application. Working with ESRI, the
            front-end team also was able to embed the ESRI dashboard onto our
            dashboard page that refreshed automatically. After everything was
            complete, the API team began to research ways to implement user
            sessions so we could differentiate between users and whether or not
            they are logged in. We eventually landed on implementing JWT, JSON
            Web Tokens. JWTs allow us to provision logins so we are able to host
            multiple user sessions.
          </p>
            <br></br>
          <p className="aboutusText">
               By the end of our project, the platforms team successfully built out
            a fully functioning web application.
          </p>
        </div>
      </div>

      <div className="team">
        <div className="whiteBoxAboutUs small" id="toppad">
          <h2 ref={esriRef}>Meet the Esri Team </h2>
        </div>
        <div className="people">
          <div className="person">
            <div className="portraits" id="morgan"></div>
            <h2 className="whiteBoxAboutUs">
              Morgan<br></br>McCarty<br></br>
              <h5>Scrum Lead</h5>
            </h2>
          </div>

          <div className="person">
            <div className="portraits" id="luke"></div>
            <h2 className="whiteBoxAboutUs">
              Luke<br></br>Albinger
            </h2>
          </div>

          <div className="person">
            <div className="portraits" id="ben"></div>
            <h2 className="whiteBoxAboutUs">
              Benjamin<br></br>Pomeroy
            </h2>
          </div>

          <div className="person">
            <div className="portraits" id="jane"></div>
            <h2 className="whiteBoxAboutUs">
              Yuting<br></br>Zheng
            </h2>
          </div>
        </div>

        <div>
          <div className="whiteBoxAboutUs medium" id="topmargin">
            <p className="aboutusText">
                 The Data/Esri team was responsible for data transformation, data
              generation, and creating an API to connect our data to
              Esri/ArcGIS. For the first few days, we primarily worked out the
              data generation. We did this in Python in an iterative method over
              a few days to generate our sample data for the databases team.
              First we got the longitude and latitude in as integers randomly
              placed about the world, along with getting the air pollution data
              in as random integers. Then, we localized the latitude and
              longitude data to the Greater London area. We next honed in on the
              generated data to ensure it was in the right format.
            </p>
            <br></br>
            <p className="aboutusText">
                  Our biggest issue has been obtaining various permissions from ESRI
              for the accounts we need to get ESRI more involved in the project.
              On this two week project, a significant portion of our time was
              spent in correspondence with our contacts at Northeastern and ESRI
              to attempt to escalate the privileges of our ESRI account.
            </p>
            <br></br>
            <p className="aboutusText">
                  After we obtained the requisite permissions, our team split up and
              worked on a few different things. During the past week we worked
              on converting data to various formats to ease things along with
              the Databases team along with getting to work on creating ESRI
              dashboards.
            </p>
            <br></br>
            <p className="aboutusText">
                  Unfortunately, not all of our efforts over the past couple weeks
              bore tangible fruit. We were tasked with developing an API that
              would automatically upload the sensor data to ESRI. This took a
              significant portion of our efforts and eventually had to be
              scrapped due to technical issues.
            </p>
          </div>
        </div>
      </div>

      <div className="team">
        <div className="whiteBoxAboutUs small" id="toppad">
          <h2 ref={deviceRef}>Meet the Device Team </h2>
        </div>

        <div className="people">
          <div className="person">
            <div className="portraits" id="benoni"></div>
            <h2 className="whiteBoxAboutUs">
              Ben-Oni<br></br>Vainqueur<br></br>
              <h5>Scrum Lead</h5>
            </h2>
          </div>

          <div className="person">
            <div className="portraits" id="meghna"></div>
            <h2 className="whiteBoxAboutUs">
              Meghna<br></br>Gite
            </h2>
          </div>

          <div className="person">
            <div className="portraits" id="dec"></div>
            <h2 className="whiteBoxAboutUs">
              Declan<br></br>Lowney
            </h2>
          </div>

          <div className="person">
            <div className="portraits" id="yuhong"></div>
            <h2 className="whiteBoxAboutUs">
              Yuhong<br></br>Zhao
            </h2>
          </div>
        </div>

        <div className="whiteBoxAboutUs medium" id="topbotmargin">
          <p className="aboutusText">
                The devices team was responsible for setting up the devices such
            that they could make readings, putting these readings in a proper
            format, and sending these readings to the back end. The first day
            was spent familiarizing with and programming the Arduino sensors.
            This was initially obstructed by the fact that this involved the
            universally hated programming language of C, but once done proved to
            be a huge confidence boost. Some major changes we made were
            bypassing the 12 hour waiting period required to use the gas sensor
            and logging all of the sensor readings. We started out the day with
            a partially-working machine we had never seen before, and ended with
            a full understanding of a device capable of picking up eight
            different environmental readings and portraying them on an LCD
            screen.
          </p>
            <br></br>
          <p className="aboutusText">
               The next immediate step was to begin thinking outside of the realm
            of the Arduino itself. We dropped a mini bag on a Raspberry Pi,
            which connects to the Arduino to store its sensor readings. Once we
            set up the operating system and established an internet connection,
            we started developing a python script that allowed the Arduino to
            communicate with the Raspberry Pi via serial - This was a tough
            hurdle to get over because we quickly realized that writing over
            serial is hard. When this was finished, it was satisfying to know
            that we were gradually pushing outwards the scope of what our
            sensors could do. It was as if the seed we planted was starting to
            sprout leaves.
          </p>
            <br></br>
          <p className="aboutusText">
                Once we had the Arduino - Raspberry Pi connection, we could turn our
            focus towards the data itself. We started implementing aggregation
            functionality that would take a series of 40 quick readings from the
            gas and PM sensors and form one average reading with a timestamp.
            After an annoyingly large amount of communication with the database
            team, it was determined that we were actually going to send our data
            to the backend, not directly to the database, in JSON. We converted
            the text file into a JSON formatted file, posted each most recent
            reading to the backend URL using HTTP, and at this point we were in
            the home stretch.
          </p>
            <br></br>
          <p className="aboutusText">
               The final stage was to get the sensors in full connection with the
            backend. There were some problems regarding the types of the sensor
            readings in the JSON file, but this was fixed by creating a deep
            copy that ensured that the sensor readings were integers rather than
            strings. After this was resolved we could successfully post our JSON
            readings through Postman to the backend. The final step was to
            implement some ease-of-use functionality, most notably portraying
            the serial number and alternating readings on the LCD screen.
          </p>
        </div>
      </div>

      <div className="team">
        <div className="whiteBoxAboutUs small" id="toppad">
          <h2 ref={databaseRef}>Meet the Database Team </h2>
        </div>

        <div className="people">
          <div className="person">
            <div className="portraits" id="savvas"></div>
            <h2 className="whiteBoxAboutUs">
              Savvas<br></br>Nikopoulos<br></br>
              <h5>Scrum Lead</h5>
            </h2>
          </div>

          <div className="person">
            <div className="portraits" id="ant"></div>
            <h2 className="whiteBoxAboutUs">
              Antoine<br></br>Assaf
            </h2>
          </div>

          <div className="person">
            <div className="portraits" id="jenny"></div>
            <h2 className="whiteBoxAboutUs">
              Trang<br></br>Do
            </h2>
          </div>

          <div className="person">
            <div className="portraits" id="jess"></div>
            <h2 className="whiteBoxAboutUs">
              Jessica<br></br>Fedor
            </h2>
          </div>

          <div className="person">
            <div className="portraits" id="ahnaf"></div>
            <h2 className="whiteBoxAboutUs">
              Ahnaf<br></br>Inkiad
            </h2>
          </div>

          <div className="person">
            <div className="portraits" id="is"></div>
            <h2 className="whiteBoxAboutUs">
              Isabelle<br></br>Papa
            </h2>
          </div>
        </div>

        <div>
          <div className="whiteBoxAboutUs medium" id="topbotmargin">
            <p className="aboutusText">
                 The database team was responsible for creating a location for
              sensor and user data to be stored behind the scenes. The database
              we utilize is MongoDB under an EC2 instance on an AWS cloud
              server. With this, we also had to program a Java layer
              abstraction, so that other teams could fetch and retrieve
              information from the database with ease. We had to work with the
              Platforms team to combine their API Spring Boot code with our
              abstraction layer.
            </p>
            <br></br>
            <p className="aboutusText">
                  Our first sprint was one of the toughest—to store any data, we
              first had to set up a secure MongoDB instance through the mongosh,
              a command-line shell. This task, however, required a substantial
              amount of research to set up the instances properly.
              Simultaneously, our team had to brainstorm ways for other teams to
              access our data. We decided on programming a Java abstraction
              layer from scratch to facilitate connections to the API via
              Tomcat, a servlet environment for our code to run. Additionally,
              we had to instantiate S3 buckets that contain CSV files to store
              historical data.
            </p>
            <br></br>
            <p className="aboutusText">
                  The intermediate sprints were primarily comprised of building the
              Java abstraction. The Java abstraction was split up into three
              parts: the model, the service, and the controller. These three
              components needed to be split for best programming practice, all
              with their documented Javadoc methods. The model contains
              interfaces that represent user registration, sensors, readings,
              and user info. The service contains the CRUD methods that can
              fetch and receive data from our MongoDB database. The
              controller—essential for utilizing our Java abstraction—receives
              calls from (mainly) the platforms team to create an API.
              Additionally, this layer contains queries that permit filtering of
              user and sensor information. For instance, if sensors located in a
              certain region would like to be retrieved, then our query
              interface would reference the latitude and longitude information
              of all sensors to complete the filtering.
            </p>
            <br></br>
            <p className="aboutusText">
              The final sprint included tidying up and connecting the programs
              across the teams together. Within this, merge conflict challenges
              emerged, mainly combining the code from the platforms team and the
              Java abstraction layer. Originally, the Spring Boot team code and
              the Database team code were filed under the same repository to
              communicate. However, we discovered that the code bases between
              the platform team and our own are incompatible to build due to a
              Mongo-related compatibility issue. Our solution was to isolate all
              MongoDB-related code into our repository and utilize Tomcat to
              facilitate communications with our controller to complete the
              functionality of our code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
