// import { render, screen } from '@testing-library/react';
// import App from './App';
import Navbar from './componentes/Navbar';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

const App = () => {
  return(
    <>
    <Navbar />
    </>
  )
};

export default App;
