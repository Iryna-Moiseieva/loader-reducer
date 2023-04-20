import { useSelector, useDispatch } from 'react-redux';
import { getLoaderStatus } from './redux/selectors';
import { setIsLoading } from './redux/loaderSlice';
import Loader from './components/Loader';

function App() {
  const isLoading = useSelector(getLoaderStatus);
  const dispatch = useDispatch();

  const handleChange = value => dispatch(setIsLoading(value));

  return (
    <div>
      <button type="button" onClick={() => handleChange(false)}>
        We receive result of our request
      </button>
      <button type="button" onClick={() => handleChange(true)}>
        Is loading
      </button>

      {isLoading
        ? <Loader />
        : <h1>Loader Test</h1>
      }
    </div>
  );
}

export default App;
