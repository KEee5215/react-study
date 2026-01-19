function App() {
  const arr = [
    {
      name: "UK",
      city: "London",
      weather: [
        { date: "1/5/2026", temperature: "20℃", type: "Sunny" },
        { date: "2/5/2026", temperature: "21℃", type: "Cloudy" },
        { date: "3/5/2026", temperature: "22℃", type: "Rainy" },
      ],
    },
    {
      name: "USA",
      city: "New York",
      weather: [
        { date: "1/5/2026", temperature: "20℃", type: "Sunny" },
        { date: "2/5/2026", temperature: "21℃", type: "Cloudy" },
        { date: "3/5/2026", temperature: "22℃", type: "Rainy" },
      ],
    },
    {
      name: "China",
      city: "Shanghai",
      weather: [],
    },
    {
      name: "Japan",
      city: "Tokyo",
    },
  ];

  const isWeatherEmpty = (weather) => weather && weather.length > 0;

  function renderWeather(weather) {
    return weather.map((item) => (
      <li key={item.date}>
        {item.date} temperature:{item.temperature}({item.type})
      </li>
    ));
  }

  const renderList = arr.map((item) => {
    return (
      <section key={item.name}>
        <h1>{item.name}</h1>
        <h2>{item.city}</h2>
        <ul>
          {isWeatherEmpty(item.weather) && renderWeather(item.weather)}
          {!isWeatherEmpty(item.weather) && <li>No weather data available.</li>}
        </ul>
      </section>
    );
  });

  return (
    <>
      {/* <section>
        <h1>UK</h1>
        <h2>London</h2>

        <ul>
          <li>1/5/2026 temperature:20℃(Sunny)</li>
          <li>2/5/2026 temperature:21℃(Cloudy)</li>
          <li>3/5/2026 temperature:22℃(Rainy)</li>
        </ul>
      </section> */}
      {renderList}
    </>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);
