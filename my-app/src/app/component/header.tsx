"use client"

import { FolderOpenDot, Home,Info, Server } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function Header(){
const pathname = usePathname()
const linkss =[ 
    {
        name:<Home/>,
        href:"#home"
    },
    {
        name : <Info />,
        href:"#about"
    },
    {
        name :<Server />,
        href :"#service"
    },
    {
        name :<FolderOpenDot />,
        href:"#projects"
    }
]
    return (
        <nav className="sticky top-0 z-50">
            <div className="flex justify-center items-center h-24 w-full bg-black" >
                <div className="flex justify-center items-center bg-yellow-600 h-12 w-64 rounded-full">
                    <div className="flex gap-4">
                        {linkss.map((linksss,idk)=>(
                            <div key={idk}>
                                {pathname === linksss.href ? (
                                <Link className="text-black" href={linksss.href}>{linksss.name}</Link>
                                ):(<Link className="text" href={linksss.href}>{linksss.name}</Link>)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </nav>
    )
}