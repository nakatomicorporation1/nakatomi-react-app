import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to Nakatomi Corporation</h1>
      </header>
      <main>
        <h2>Upload CSV files here</h2>
        <form action="/action_page.php">
          <input type="file" id="myFile" name="filename" />
          <input type="submit" />
        </form>
      </main>
    </div>
  );
}

export default App;
