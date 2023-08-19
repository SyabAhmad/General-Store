import Greeting from "./Components/Greeting";
import SaleGraph from "./Components/SaleGraph";
export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-evenly items-center gap-10">
        <Greeting />
        <SaleGraph />
      </div>
    </main>
  );
}
