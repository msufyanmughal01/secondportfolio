import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Herosection(){
    return (
        <section>
            {/* main div */}
            <div >
                {/* second div*/}
                <div className="grid grid-cols-2 md:grid-cols-1">
                    {/* two section div */}
                    <div className="flex justify-center items-center bg-black h-[555px] w-[50%] lg: fixed top-24 z-40">
                        <div>
                            <div className=" bg-white h-[500px] w-[350px] rounded-3xl">
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
                                    <div className="flex justify-center items-center mt-10 gap-4">
                                        <button className=" flex bg-black text-white px-4 py-2 rounded-3xl hover:bg-blue-800">
                                            <Link href="https://www.linkedin.com/in/sufyan-mughal-674632299/"><Linkedin /></Link>
                                        </button>
                                        <button className=" flex bg-black text-white px-4 py-2 rounded-3xl hover:bg-red-800"><Link href="mskhalid703@gmail.com"><Mail /></Link></button>
                                        <button className=" flex bg-black text-white px-4 py-2 rounded-3xl hover:bg-gray-800"><Link href="https://github.com/msufyanmughal01"><Github /></Link></button>
                                    </div>
                            </div>
                        </div>
                    </div>
                    {/* yellow div */}
                    <div className="bg-yellow-600 rounded-3xl h-[555px] w-[50%] ml-[50%]">
                        <div>
                            <div className="p-2">
                                <div className=" h-[250px] w-full">
                                    <h1 className="font-bold text-8xl font-Alegreya font-serif p-2 mt-4 underline-offset-1">
                                        NextJs <span className="text-8xl"> Web </span>
                                        <span className="text-8xl font-Alegreya font-serif mt-1 underline-offset-1">Developer</span>
                                    </h1>
                                    <p className="text-2xl font-Alegreya font-serif mt-4 p-2 underline-offset-1 w-[520px]">Building Scalable & Dynamic Web Solutions to Elevate User Experience and Performance.</p>
                                    <div>
                                        <div className="mt-10 p-4">
                                            <div className="flex justify-between w-[520px]">
                                            <h1 className="text-8xl font-Alegreya font-serif mt-1 underline-offset-1">
                                                1+
                                            </h1>
                                            <h1 className="text-8xl font-Alegreya font-serif mt-1 underline-offset-1">
                                                10+
                                            </h1>
                                            <h1 className="text-8xl font-Alegreya font-serif mt-1 underline-offset-1">
                                                3+
                                            </h1>
                                            </div>
                                            <div className="flex justify-between w-[520px] gap-4">
                                            <p className="text-2xl font-Alegreya font-serif mt-2  underline-offset-1 w-[520px]">Years of Experience</p>
                                            <p className="text-2xl font-Alegreya font-serif mt-2  underline-offset-1 w-[520px]">Dynamic Web Projects</p>
                                            <p className="text-2xl font-Alegreya font-serif mt-2  underline-offset-1 w-[520px]">Satisfied Client</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}