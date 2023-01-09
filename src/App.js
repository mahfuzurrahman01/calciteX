import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Roter/Route';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div>
      <AnimatePresence initial={true} mode={"wait"}>
        <RouterProvider router={router}></RouterProvider>
      </AnimatePresence>

    </div>
  );
}

export default App;
