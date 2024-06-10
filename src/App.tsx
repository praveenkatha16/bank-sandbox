import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <h3> Bank Sandbox </h3>

        <form>
          <label>Account Number</label>
          <input name="accountNo" type="number" />

          <label>Password</label>
          <input name="password" type="password" />

          <div>
            <button type="submit">Authorise</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
