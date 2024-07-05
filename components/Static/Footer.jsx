import Link from "next/link";
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Footer() {

    return (
        <>
            <footer className="py-10">
                <div className="pt-10 mx-auto">
                    <div className="lg:grid lg:grid-cols-6 gap-20">
                        <div className="col-span-3">
                            <div className="flex items-center space-x-5">
                                <p className="font-semibold text-xl text-white">GibraMusic</p>
                            </div>
                        
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Lien</p>
                            <div>
                                <a href="https://discord.gg/J6nJE7zgNa" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    Serveur support
                                </a>
                            </div>
                            <div>
                                <a href="https://discord.com/oauth2/authorize?client_id=1258410048615612566&permissions=8&integration_type=0&scope=bot+applications.commands" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    Inviter GibraMusic
                                </a>
                            </div>
                            <div>
                                <a href="https://gibrabot.vercel.app/" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    Gibrabot
                                </a>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Social</p>
                            <div>
                                <Link href="https://discord.gg/J6nJE7zgNa">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-discord`} /> Discord 
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Important</p>
                            <div>
                                <Link href="/tos">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        Conditions d'utilisation
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="/privacy">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        Politique de confidentialité
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        <p className="text-white text-center sm:text-left text-opacity-50">
                            {new Date().getFullYear()} &copy; GibraMusic
                        </p>
                        <div className="hidden md:flex items-center justify-center">
                                <p className={"text-xs text-green-400"}>
                                    Bot en ligne
                                </p>
                        </div>
                        <p className="text-white text-center sm:text-right text-opacity-50">
                            {"Powered by Shugen ❤️"}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};
