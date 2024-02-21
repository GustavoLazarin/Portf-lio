import { Header } from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/services/database";

const ProjectPage = () => {
    return (
        <div className="bg-gray-0 h-full lg:h-screen w-screen">
            <Header/>
            <main className="w-full h-full pt-20 pb-10 padding-x flex flex-col justify-evenly gap-y-14 lg:gap-y-0 text-white">
                <div>
                    <h1 className="title-1 font-bold">Projetos</h1>
                    <p className="text-gray-300">Lista dos meus principais projetos:</p>
                </div>
                <section className="flex h-2/3">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-10">
                        {projects.map((project, index) => <ProjectCard key={index} project={project}/>)}
                    </ul>
                </section>
            </main>
        </div>
    )
};

export default ProjectPage;