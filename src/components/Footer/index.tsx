import Image from "next/image";
import Logo from "../../assets/gustavo-logo.png"

const Footer = () => {
    return (
        <footer className="bg-gray-0 text-white h-28 -mt-28 padding-x flex items-center gap-5">
            <div className="bg-white rounded-full h-max">
                <Image src={Logo} height={50} width={50} alt="logo"/>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="font-semibold">Gustavo Faccio Lazarin</h3>
                <p className="text-gray-400">&reg; 2024 - Todos os direitos reservados.</p>
            </div>
        </footer>
    )
};

export default Footer;