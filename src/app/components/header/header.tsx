import DivWrapper from "@/_components/DivWrapper";
import { ModeToggle } from "@/components/mode-toggle";
import { IoLogoGithub } from "react-icons/io";
export default function Header() {
  return (
    <header className="h-[80px] w-full">
      <nav className="h-full flex items-center justify-between bg-background backdrop-blur-md">
        <h1>zlaam</h1>
        <div className="flex items-center ">
          <ModeToggle />
          <DivWrapper>
            <a href="https://github.com/mr-zlaam/random-station" target="_blank" >

              <IoLogoGithub size={30} className="cursor-pointer" />
            </a>
          </DivWrapper>
        </div>

      </nav>
    </header>
  )
}

