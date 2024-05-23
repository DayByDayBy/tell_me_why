import gitSVG from "../../assets/git.svg";
import liSVG from "../../assets/linkedIn.svg";
import { Links } from "./Contact.styles";

const Contact = () => {
  return (
    <Links>


      <div>
        <a href="https://github.com/DayByDayBy" >
          <img src={gitSVG} alt="github, DayByDayBy" />
        </a>
        </div>
        <p>
        an Ollama-based LLM-botherer, thrown together by{" "}
        <a href="http://boag.dev" target="_blank" rel="noopener noreferrer">
          Бог
        </a>
      </p>

        <div>
        <a href="https://www.linkedin.com/in/james-boag/">
          <img src={liSVG} alt="linkedIn, James Boag" />
        </a>
      </div>
    </Links>
  );
};

export default Contact;
