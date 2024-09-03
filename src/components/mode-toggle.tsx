import { useTheme } from "@/components/theme-provider"

import { LuMoon } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      {

        theme === "dark" ? <MdOutlineWbSunny size={25} onClick={() => setTheme("light")} />
          :
          <LuMoon size={25} onClick={() => setTheme("dark")} />
      }


    </>
  )
}

