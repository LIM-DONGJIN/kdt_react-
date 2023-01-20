function App() {

  const fruits = ['apple', 'mango', 'banana', 'melon'];

  return (
    <>
    {
      fruits.map((fruit, index) => (
        <h3 key={index}>{fruit}</h3>
      ))
    }
    </>
  );
}

export default App;
