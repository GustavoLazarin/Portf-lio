import { IProject } from "@/services/database";
import Link from "next/link";
import { FaCss3, FaGithub, FaHtml5, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";
import { SiJavascript, SiTypescript, SiNextdotjs, SiSass, SiPrisma, SiPostgresql, SiExpress, SiNestjs, SiDjango, SiZod, SiStyledcomponents, SiAxios } from "react-icons/si";

interface IProjectCardProps {
    project: IProject
}

const ProjectCard = ({project}:IProjectCardProps) => {

    const icon = (projectName: string) => {
        switch(projectName.toLowerCase()) {
        case "javascript":
            return <SiJavascript />;
        case "typescript":
            return <SiTypescript />;
        case "react":
            return <FaReact />;
        case "nodejs":
            return <FaNodeJs />;
        case "nextjs":
            return <SiNextdotjs />;
        case "sass":
            return <SiSass />;
        case "styled-components":
            return <SiStyledcomponents />
        case "axios":
            return <SiAxios />;
        case "prisma":
            return <SiPrisma />;
        case "postgresql":
            return <SiPostgresql />;
        case "express":
            return <SiExpress />;
        case "nestjs":
            return <SiNestjs />;
        case "python":
            return <FaPython />;
        case "django":
            return <SiDjango />;
        case "zod":
            return <SiZod />;
        }
    }

    return (
        <li className="flex flex-col justify-between h-fit gap-6">
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="text-gray-300 text-balance">{project.description}</p>
            <div className="flex gap-2 items-center flex-wrap">
                <h3 className="text-gray-300">Tecnologias:</h3>
                <ul className="flex gap-2 flex-wrap">
                    {project.techs.map((tech, index) => <li key={index} className="bg-white text-gray-0 p-1 text-xl rounded-md hover:scale-150 duration-500" title={tech}>{icon(tech)}</li>)}
                </ul>
            </div>
            <div className="flex gap-6">
                <Link href={project.repository} className="flex gap-2 items-center brightness" target="_blank"><FaGithub /> Repositório</Link>
                <Link href={project.deploy} className="flex gap-2 items-center brightness" target="_blank"><MdRocketLaunch /> Aplicação</Link>
            </div>
        </li>
    )
};

export default ProjectCard;