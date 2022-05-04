

function App() {

  const api = {
    key: "41d99c6b20c1c612be72e055ec8f6e94",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
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
        <div className="location-box">
          <h1 className="location">Lagos, Nigeria</h1>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            15ºc
          </div>
          <div className="weather">
            Sunny
          </div>
        </div>
      </main>
      
    </div>
  );
}

export default App;
