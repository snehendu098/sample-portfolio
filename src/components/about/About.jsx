import "./about.css";
import { AiOutlineTwitter, AiFillGithub, AiOutlineRead } from "react-icons/ai";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am a student as well as a developer. I can do cross platform app
          development with React Native, backend developement with Node.js,
          Express and MongoDB, frontend web developement with React Js. I tweet
          and write blogs about web 3 technologies, programming and
          productivity.
        </p>
        <div className="social-blocks">
          <a
            className="social-block"
            href="https://twitter.com/snehendu_roy_"
            target={"_blank"}
          >
            <AiOutlineTwitter
              style={{
                fontSize: "1.5rem",
                color: "#fff",
                marginRight: "0.5rem",
              }}
            />
            Twitter
          </a>
          <a
            className="social-block"
            style={{ backgroundColor: "#171515" }}
            href="https://github.com/snehendu098"
            target={"_blank"}
          >
            <AiFillGithub
              style={{
                fontSize: "1.5rem",
                color: "#fff",
                marginRight: "0.5rem",
              }}
            />
            GitHub
          </a>
          <a
            className="social-block"
            style={{ backgroundColor: "#e0a941" }}
            href=""
            target={"_blank"}
          >
            <AiOutlineRead
              style={{
                fontSize: "1.5rem",
                color: "#fff",
                marginRight: "0.5rem",
              }}
            />
            Blogs
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
