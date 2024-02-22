import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";
import { SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";

const ContactPage = () => {
   return (
    <div className="bg-brand-dark w-screen h-screen overflow-hidden">
      <Header />
      <main className="w-full h-full flex">
         <section className="padding-x flex flex-col items-center text-white my-auto gap-20 md:flex-row md:h-full fade-zoom">
            <div className="h-1/2 w-full flex flex-col gap-12">
               <h2 className="text-3xl font-semibold">Vamos nos <span className="text-secondary">conectar</span>!</h2>
               <p className="text-balance">Ficarei feliz em ouvir suas propostas, vamos conversar sobre como podemos &nbsp;
               <span className="text-secondary">trabalhar juntos</span>, tornar suas ideias em realidade e construir algo incrível juntos! Aguardo seu contato com &nbsp;
               <span className="text-secondary">entusiasmo</span>! </p>
            </div>
            <div className="h-1/2 w-full text-5xl flex justify-center gap-9 md:flex-col items-center">
               <Link href={"https://api.whatsapp.com/send?phone=5545999254587"} target="_blank" className="p-2 rounded-lg hover:bg-green-600 hover:scale-125 duration-500"><SiWhatsapp /></Link>
               <Link href={"https://mail.google.com/mail/?view=cm&to=gustavolazarin03@gmail.com&su=Saudações%2C%20vamos%20nos%20conectar!&body=Olá%21%20Vim%20através%20do%20seu%20portfólio%2C%20gostaria%20de%20iniciar%20uma%20conversa%20sobre%20possíveis%20oportunidades%20de%20colaboração.%20Vamos%20discutir%20como%20podemos%20trabalhar%20juntos%20para%20alcançar%20nossos%20objetivos%3F%20Ansioso%20para%20conversar%21"} target="_blank" className="p-2 rounded-lg hover:bg-orange-600 hover:scale-125 duration-500"><SiGmail /></Link>
               <Link href={"https://www.linkedin.com/in/gustavo-lazarin/"} target="_blank" className="p-2 rounded-lg hover:bg-brand hover:scale-125 duration-500"><SiLinkedin /></Link>
               
               
               
            </div>
         </section>
      </main>
      <Footer />
    </div>
   )
};

export default ContactPage;