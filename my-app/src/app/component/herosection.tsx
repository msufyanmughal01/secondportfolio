import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Herosection(){
    return (
        <section>
            {/* main div */}
            <div>
                {/* second div*/}
                <div className="flex">
                    {/* two section div */}
                    <div className="flex justify-center items-center bg-black h-[555px] w-[50%]">
                        <div>
                            <div className=" bg-white h-[450px] w-[350px] rounded-3xl">
                                {/* image div */}
                                <div className="flex justify-center items-center">
                                <div className="mt-4 flex justify-center items-center bg-yellow-600 rounded-3xl w-[250px]">
                                    <Image src="/sufyan edit.png" alt="sufyan" width={250} height={450}/>
                                </div>
                                </div>
                                {/* name  */}
                                <div>
                                    <div className="flex justify-center items-center">
                                    <h1 className="font-bold text-3xl font-Alegreya font-serif mt-4 underline-offset-1 underline">Sufyan Mughal</h1>
                                    </div>
                                    {/* cachy line */}
                                    <div className="flex justify-center items-center">
                                    <h2 className="font-bold text-1xl text-gray-800 font-Alegreya font-serif mt-6">Turning Ideas into Interactive <br /> Web Experiences</h2>
                                    </div>
                                    </div>
                                    {/* button */}
                                    <div className="flex justify-center items-center mt-4 gap-4">
                                        <button className=" flex bg-black text-white px-4 py-2 rounded-3xl hover:bg-blue-800">
                                            <Link href="https://www.linkedin.com/in/sufyan-mughal-674632299/"><Linkedin /></Link>
                                        </button>
                                        <button className=" flex bg-black text-white px-4 py-2 rounded-3xl hover:bg-red-800"><Link href="mskhalid703@gmail.com"><Mail /></Link></button>
                                        <button className=" flex bg-black text-white px-4 py-2 rounded-3xl hover:bg-gray-800"><Link href="https://github.com/msufyanmughal01"><Github /></Link></button>
                                    </div>

                            </div>
                        </div>
                    </div>
                    <div className="bg-yellow-600 h-[555px] w-[50%]"></div>
                </div>
            </div>
        </section>
    )
}