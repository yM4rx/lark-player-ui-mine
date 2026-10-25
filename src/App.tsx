import Gender from "./components/Gender";

function App() {
  return (
    <main>
      <section className="flex gap-5 bg-red-500">
        <Gender gender="male" />
        <Gender gender="female" />
      </section>
    </main>
  );
}

export default App;
