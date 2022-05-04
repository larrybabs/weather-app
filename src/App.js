

function App() {

  const api = {
    key: "41d99c6b20c1c612be72e055ec8f6e94",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  return (
    <div className="app warm">
      <main>
        <div className="search-box">
          <input
          className="search-bar"
          type="text"
          placeholder="search"/>
        </div>
      </main>
      
    </div>
  );
}

export default App;
