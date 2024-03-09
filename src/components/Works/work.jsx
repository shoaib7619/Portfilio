import "./works.css"
// import {workData} from "./works"
import Portfolio from "../../assets/website.jpg"
function Works() {
  return (
    <section id="works">

        <h2 className="workstitle">My Portfolio</h2>
        <span className="worksDesc">My project Description</span>
        <div className="workImgs">
        {/* {workData.map((work, index) => (
          <img src={work.project}  key={index} />*/}
            <img src={Portfolio} alt="" className="worksImg"/>
             <img src={Portfolio} alt="" className="worksImg"/> 
             <img src={Portfolio} alt="" className="worksImg"/> 
             <img src={Portfolio} alt="" className="worksImg"/> 
             <img src={Portfolio} alt="" className="worksImg"/> 
             <img src={Portfolio} alt="" className="worksImg"/> 
        {/* ))}  */}

 
        </div>
        <button className="workBtn">See more</button>

        
    </section>
  )
}

export default Works
