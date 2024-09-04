import { ChangeEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function HomePage() {
  const [numOfStrings, setNumOfStrings] = useState<number>(1);
  const [numOfCharacters, setNumOfCharacters] = useState<number>(8);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [generatedStrings, setGeneratedStrings] = useState<string[]>([]);

  const generateRandomStrings = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const allCharacters = includeNumbers ? characters + numbers : characters;

    const randomStrings = [];

    for (let i = 0; i < numOfStrings; i++) {
      let randomString = "";
      for (let j = 0; j < numOfCharacters; j++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        randomString += allCharacters[randomIndex];
      }
      randomStrings.push(randomString);
    }

    setGeneratedStrings(randomStrings);
  };

  return (
    <div className="max-w-xl mx-auto my-8 p-4 border border-gray-200 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center my-2">
        Generate Random String of Your Desire
      </h1>
      <div>
        <div className="my-3">
          <label htmlFor="num_of_string" className="block text-sm font-medium">
            How many strings do you want to generate?
          </label>
          <span className="text-xs text-foreground/70 mx-4">(max-1000)</span>
          <Input
            type="number"
            id="num_of_string"
            value={numOfStrings}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNumOfStrings(Math.min(Number(e.target.value), 1000))
            }
            min={1}
            max={1000}
            className="mt-1"
          />
        </div>

        <div className="my-3">
          <label htmlFor="num_of_character" className="block text-sm font-medium">
            How many characters do you want in each string?
          </label>
          <Input
            type="number"
            id="num_of_character"
            value={numOfCharacters}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNumOfCharacters(Number(e.target.value))}
            min={1}
            className="mt-1"
          />
        </div>

        <div className="my-3 flex items-center space-x-2">
          <label
            htmlFor="nums"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Do you want numbers included?
          </label>
          <Checkbox
            id="nums"
            checked={includeNumbers}
            onCheckedChange={() => setIncludeNumbers(prev => !prev)}
          />
        </div>

        <div className="my-3">
          <Button onClick={generateRandomStrings} className="w-full">
            Generate Strings
          </Button>
        </div>

        <div className="my-3">
          <label htmlFor="generated_strings" className="block text-sm font-medium">
            Generated Strings:
          </label>
          <Textarea
            id="generated_strings"
            value={generatedStrings.join("\n")}
            readOnly
            rows={10}
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );
}
