// App.js
import {Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/login';

function App() {
  return (
   <Route>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to="/login">Go to Login</Link> {/* Link 컴포넌트를 사용하여 /login으로 이동하는 링크를 생성 */}
        </header>

        <Route path="/login" component={LoginPage} /> {/* /login 경로에서 LoginPage 컴포넌트를 렌더링 */}
      </div>
      </Route>
  );
}

export default App;
