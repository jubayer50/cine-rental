import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <div className="container mx-auto grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
        </div>
      </main>
    </div>
  );
};

export default App;
