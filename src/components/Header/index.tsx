import Image from "next/image";
import Logo from "../../assets/gustavo-logo.png"
import Link from "next/link";

export const Header = () => {
    return (
        <header className="fixed z-10 padding-x py-3 flex w-screen backdrop-blur-sm items-center justify-between">
            <div className="bg-white rounded-full h-max">
                <Image src={Logo} height={50} width={50} alt="logo"/>
            </div>
            <nav className="flex gap-sm">
                <Link href="/" className="text-white brightness">Início</Link>
                <Link href="/projects" className="text-white brightness">Projetos</Link>
                <Link href="/contact" className="text-white brightness">Contato</Link>
            </nav>
        </header>
    );
};