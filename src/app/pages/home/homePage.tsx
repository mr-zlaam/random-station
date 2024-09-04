import { Input } from "@/components/ui/input";

import { Checkbox } from "@/components/ui/checkbox"

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-2">Generate Random String of your desire</h1>
      <div>
        <div>
          <label htmlFor="num_of_string">How many strings you want to generate?
          </label>
          <span className="text-xs text-foreground/70 mx-4">
            (max-1000)
          </span>
          <Input type="number" id="num_of_string" defaultValue={0} />
        </div>

        <div className="my-3">
          <label htmlFor="num_of_charcter">How many Character you want in string?</label>
          <Input type="number" id="num_of_charcter" />
        </div>
        <div className="my-3 flex items-center space-x-2">
          <label
            htmlFor="nums"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Do You Want Numbers
          </label>
          <Checkbox id="nums" />
        </div>
      </div>
    </div>
  )
}

