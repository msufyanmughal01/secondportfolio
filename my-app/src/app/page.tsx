import Image from "next/image";
import Herosection from "./component/herosection";
import Projects from "./component/project";

export default function Home() {
  return (
    <div>
      <Herosection/>
      <Projects/>
    </div> 
  );
}
