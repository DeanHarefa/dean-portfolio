import React, { useEffect, useState } from 'react'
import { projectsData } from './Data'
import { projectsNav } from './Data'
import WorkItems from './WorkItems'

const Works = () => {
    const [item, setItem] = useState({name:"all"});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    // useEffect(()=>{
    //     if(item.name === "all"){
    //         setProjects(projectsData);
    //     }else{
    //         const newProjects = projectsData.filter((project) =>{
    //             return project.category.toLowerCase() === item.name
                
    //         })
    //         setProjects(newProjects);
    //     }
    // }, [item]);

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                if (Array.isArray(project.category)) {
                    // Jika category adalah array, cek apakah item.name termasuk di dalamnya
                    return project.category.some(kategori => kategori.toLowerCase() === item.name.toLowerCase());
                } else if (typeof project.category === 'string') {
                    // Jika category adalah string, lakukan pembandingan langsung
                    return project.category.toLowerCase().includes(item.name.toLowerCase());
                }
                return false; // Jika category tidak terdefinisi atau tidak valid, kembalikan false
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({name: e.target.textContent.toLowerCase()})
        setActive(index);
    }

    return (
        <div>
            <div className="work__filters">
                {projectsNav.map((item, index) => {
                    return (
                        <span onClick={(e) =>{handleClick(e, index);}} className={`${active === index ? "active-work" : ""} work__item`} key={index}>{item.name}</span>
                    )
                })}
            </div>

            <div className="work__container container grid">
                {projects.map((item)=>{
                    return <WorkItems item={item} key={item.id}/>
                })}
            </div>
        </div>

    )
}

export default Works