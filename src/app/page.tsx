import Image from "next/image";
import { Header } from "@/components/Header";
import Hero from "../assets/hero.jpeg"
import ProfilePhoto from "../assets/profile-photo.jpg"
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { technologies } from "@/services/database";
import { TechCard } from "@/components/TechCard";
import styles from "./style.module.scss";
import AnimatedText from "@/components/AnimatedText";


const HomePage = () => {
  return (
      <div className="bg-brand-dark h-full w-screen">
        <Header/>
        <main className="flex relative min-h-screen overflow-hidden">
          <div className="absolute right-0 z-0 h-full">
            <Image src={Hero} height={800} width={800} alt="Hero" className={styles.hero}/>
          </div>
          <div className={`w-full mt-16 pb-10 padding-x flex flex-col justify-evenly text-white z-10 fade-zoom`}>
            <div className="flex items-center gap-6 mb-4">
              <div className="rounded-full object-cover overflow-hidden w-28 h-28">
                <Image src={ProfilePhoto} width={130} height={130} alt="Gustavo Faccio Lazarin"></Image>
              </div>
              <h3>Bem vindo(a).</h3>
            </div>
            <div className="flex flex-col gap-8">
              <h1 className="title-1 light font-semibold max-w-screen-md">Sou o Gustavo Faccio Lazarin, desenvolvedor web 
                <AnimatedText/>
              </h1>
              <p>Apaixonado por solucionar problemas de forma criativa e eficaz, sempre buscando aprimorar minhas habilidades.</p>
              <div className="flex gap-5">
                <Link href="/projects"><button className="button primary">Ver projetos</button></Link>
                <Link href="https://github.com/GustavoLazarin/" target="_blank"><button className="ball-btn brightness bg-white"><FaGithub color="black"/></button></Link>
              </div>
              <div className={`${styles.scroll} flex gap-8`}>
                <ul className={`${styles.techList} flex gap-8 pt-12 px-1`}>
                  {technologies.map((tech, index) => <TechCard key={index} tech={tech}/>)}
                </ul>
                <ul className={`${styles.techList} flex gap-8 pt-12 px-1`}>
                  {technologies.map((tech, index) => <TechCard key={index} tech={tech}/>)}
                </ul>
              </div>
            </div>
          </div>
        </main>
    </div>
  );
};

export default HomePage;