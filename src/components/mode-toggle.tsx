import DivWrapper from "@/_components/DivWrapper";
import { useTheme } from "@/components/theme-provider"

import { LuMoon } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      {

        theme === "dark" ?
          <DivWrapper className="hover:bg-white/40" onClick={() => setTheme("light")} >
            <MdOutlineWbSunny size={25} />
          </DivWrapper>
          :
          <DivWrapper onClick={() => setTheme("dark")} >
            <LuMoon size={25} />
          </DivWrapper>
      }


    </>
  )
}

