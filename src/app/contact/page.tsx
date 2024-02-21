import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";
import { SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";

const ContactPage = () => {
   return (
    <div className="bg-brand-dark w-screen h-screen">
      <Header />
      <main className="w-full h-full flex">
         <section className="padding-x flex flex-col items-center text-white my-auto gap-20 md:flex-row md:h-full">
            <div className="h-1/2 w-full flex flex-col gap-12">
               <h2 className="text-3xl font-semibold">Vamos nos <span className="text-secondary">conectar</span>!</h2>
               <p className="text-balance">Ficarei feliz em ouvir suas propostas, vamos conversar sobre como podemos &nbsp;
               <span className="text-secondary">trabalhar juntos</span>, tornar suas ideias em realidade e construir algo incrível juntos! Aguardo seu contato com &nbsp;
               <span className="text-secondary">entusiasmo</span>! </p>
            </div>
            <div className="h-1/2 w-full text-5xl flex justify-center gap-9 md:flex-col items-center">
               <Link href={"/contact"} className="p-2 rounded-lg hover:bg-gray-1 hover:scale-125 duration-500"><SiWhatsapp /></Link>
               <Link href={"/contact"} className="p-2 rounded-lg hover:bg-gray-1 hover:scale-125 duration-500"><SiGmail /></Link>
               <Link href={"/contact"} className="p-2 rounded-lg hover:bg-gray-1 hover:scale-125 duration-500"><SiLinkedin /></Link>
               
               
               
            </div>
         </section>
      </main>
      <Footer />
    </div>
   )
};

export default ContactPage;