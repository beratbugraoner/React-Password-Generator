import './App.css';

function App() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="card mt-3">
              <div className="card-body">
                <div className="card-title text-center">
                  <h2 className="text-info">Password Generator</h2>
                  <p>Create secure passwords with Simple Password Generator</p>
                </div>

                <div className="mt-2">
                  <label className="form-label">
                    Password Lenght <span className="badge bg-success">22</span>
                  </label>
                    <input className="form-range"
                     type="range"
                     min={6}
                     max={40}
                     step={1}
                    
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
