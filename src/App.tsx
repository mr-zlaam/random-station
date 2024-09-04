import PageWrapper from "./_components/pageWrapper";
import Header from "./app/components/header/header";
import HomePage from "./app/pages/home/homePage";

export default function App() {
  return (
    <PageWrapper className="max-w-[1000px]">
      <Header />
      <HomePage />
    </PageWrapper>)
}

