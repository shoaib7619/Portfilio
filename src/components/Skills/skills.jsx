import {skillData} from './skill';
import './skill.css';
import SkillImg from "../../assets/developer.png"

function Skill() {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled and passionate web developer. I have a strong background in web development and I have a strong passion for learning new technologies.</span>
        <div className="skillBars">
        {skillData.map((skillData) => (
            <div className="skillBar" key={skillData.id}>
            {/* <img src={skillData.icon} alt={skillData.title} className="skillBarImg" /> */}
            <img src={SkillImg} alt={skillData.title} className="skillBarImg" />
            <div className="skillBarText">
              <h2>{skillData.title}</h2>
              <p>{skillData.description}</p>
            </div>
          </div>
              ))}
  
      </div>
    </section>

  )
}

export default Skill;
