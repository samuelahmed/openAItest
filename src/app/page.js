import Embedding from "./components/embedding";
import Completion from "./components/completion";
import HomeClientWrapper from "./components/homeClientWrapper";

export default function Home() {



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeClientWrapper /> 
    </main>
  );
}
