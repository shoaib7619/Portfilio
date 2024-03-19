import "./works.css"
import project from "./projects.json"

const imgSrc = `./assets/`;

function Works() {
  return (
    <section id="works">
        <h3 className="workstitle">My Portfolio</h3>
        <span className="worksDesc">You can view any project by clicking on it.</span>
        <div className="workImgs">
        {project.map((p) => (
           <a href={p.link}target="_blank" rel="noopener noreferrer" key={p.id}>
           <img src={imgSrc + p.img} className="worksImg" alt="Project" />
         </a>          
         ))} 

 
        </div>
        {/* <button className="workBtn">See more</button> */}

        
    </section>
  )
}

export default Works
