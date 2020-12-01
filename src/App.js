import { Provider } from 'react-redux';
import store from './store';
import CourseList from './components/CourseList';
import Medium from './components/Medium';

function App() {
  return (
    <Provider store={store}>
      <Medium />
    </ Provider>
  );
}

export default App;
