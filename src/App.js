//import Backdrop from './components/Backdrop';
// import Modal from './components/Modal';
 import Todo from './components/Todo';

function App() {
  return (
    <div >
      <h1>My Todos</h1>
      <Todo text="React"/>
      <br></br>
      <Todo text="Angular"/>
      <br></br>
      <Todo text="Vue"/>
{/* 
      <Modal/>
      <Backdrop/> */}
    </div>
  );
}

export default App;
