import { RxCross2 } from "react-icons/rx";
import { MdContentCopy } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { ChangeEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import DivWrapper from "@/_components/DivWrapper";

export default function HomePage() {
  const [numOfStrings, setNumOfStrings] = useState<number>(1);
  const [numOfCharacters, setNumOfCharacters] = useState<number>(8);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeSpecialCharacters, setIncludeSpecialCharacters] = useState<boolean>(false);
  const [includeAlphabets, setIncludeAlphabets] = useState<boolean>(true); // Default to true
  const [generatedStrings, setGeneratedStrings] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [copyStatus, setCopyStatus] = useState<boolean>(false); // New state for copy status

  const generateRandomStrings = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!$%^&*_-";

    let allCharacters = "";

    if (includeAlphabets) {
      allCharacters += characters;
    }

    if (includeNumbers) {
      allCharacters += numbers;
    }

    if (includeSpecialCharacters) {
      allCharacters += specialCharacters;
    }

    if (allCharacters === "") {
      allCharacters = characters;
    }

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
    setIsModalOpen(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedStrings.join("\n")).then(
      () => {
        setCopyStatus(true); // Set copy status to true
        setTimeout(() => {
          setCopyStatus(false)
          setIsModalOpen(false)

        }, 1000); // Revert to default icon after 1 second

      },
      (err) => alert("Failed to copy text: " + err)
    );
  };

  const isGenerateButtonDisabled = !includeAlphabets && !includeNumbers && !includeSpecialCharacters;

  return (
    <>
      {isModalOpen && (
        <div className="fixed top-0 left-0 h-screen w-full bg-background backdrop-blur-lg">
          <h1 className="sm:text-4xl text-xl  w-fit mx-auto font-bold my-3">Generated String</h1>
          <DivWrapper onClick={() => setIsModalOpen(false)} className="h-[50px] w-[50px] bg-foreground/5 m-2 absolute top-4 right-5 ">
            <RxCross2 size={35} />
          </DivWrapper>
          <div className="my-3 absolute top-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="   absolute top-[-35px] right-2 cursor-pointer w-full">
              <DivWrapper
                onClick={copyToClipboard}
                className="absolute top-0 right-5 h-[35px] w-[35px]"
              >
                {copyStatus ? <IoMdCheckmark size={20} /> : <MdContentCopy size={20} />}
              </DivWrapper>
            </div>

            <Textarea
              id="generated_strings"
              defaultValue={generatedStrings.join("\n").trim()}
              readOnly
              className="mt-1 mx-4 bg-background border-none shadow-xl py-10 shadow-foreground/30 resize-none w-[320px] sm:w-[600px] md:w-[700px] h-[300px]"
            />
          </div>
        </div>
      )}
      <h1 className="text-3xl font-bold text-center my-2">
        Generate Random Strings of Your Desire
      </h1>
      <div className="max-w-2xl mx-auto my-8 p-7 flex flex-col justify-around border rounded-lg shadow-lg">
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
              onChange={(e: ChangeEvent<HTMLInputElement>) => setNumOfCharacters(Math.min(Number(e.target.value), 10000))}
              min={1}
              max={10000}
              className="mt-1"
            />
          </div>

          <div className="my-3 flex items-center space-x-2">
            <label
              htmlFor="alphabets"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Include alphabets?
            </label>
            <Checkbox
              id="alphabets"
              checked={includeAlphabets}
              onCheckedChange={() => setIncludeAlphabets(prev => !prev)}
            />
          </div>

          <div className="my-3 flex items-center space-x-2">
            <label
              htmlFor="nums"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Include numbers?
            </label>
            <Checkbox
              id="nums"
              checked={includeNumbers}
              onCheckedChange={() => setIncludeNumbers(prev => !prev)}
            />
          </div>

          <div className="my-3 flex items-center space-x-2">
            <label
              htmlFor="specialCharacters"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Include special characters?
            </label>
            <Checkbox
              id="specialCharacters"
              checked={includeSpecialCharacters}
              onCheckedChange={() => setIncludeSpecialCharacters(prev => !prev)}
            />
          </div>

          <div className="my-3">
            <Button
              onClick={generateRandomStrings}
              className="w-full"
              disabled={isGenerateButtonDisabled}
            >
              Generate Strings
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
