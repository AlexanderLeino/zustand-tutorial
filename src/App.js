import logo from './logo.svg';
import './App.css';
import { useSettingStore } from './store';
import { Input } from './components/Input';
import { People } from './components/People';
function App() {

  let theme = useSettingStore(state => state.darkMode)
  let toggleTheme = useSettingStore(state => state.toggleTheme)
  return (
    <div className={theme ? "darkMode" : "lightMode"}>
      <p>People</p>
      <People />
      <Input />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
