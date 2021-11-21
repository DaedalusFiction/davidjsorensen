import logo from './logo.svg';
import './App.css';

import daedalusLogo from './images/logo.png'
function App() {
  return (
    <div className="flex justify-between text-right text-4xl mx-auto p-3 max-w-screen-xl text-gray-800 font-bold ">
    <a href="#"><img className="" src={daedalusLogo} alt="Nautilus shell" /></a>
      <div className="">David J Sorensen</div>
    </div>
  );
}

export default App;
