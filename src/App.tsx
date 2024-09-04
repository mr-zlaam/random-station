import PageWrapper from "./_components/pageWrapper";
import Header from "./app/components/header/header";
import HomePage from "./app/pages/home/homePage";

export default function App() {
  return (
    <PageWrapper className="max-w-[1000px]">
      <div className="sticky top-0 left-0 w-full border-b mb-2">
        <Header />
      </div>
      <HomePage />
    </PageWrapper>)
}

