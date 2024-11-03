import Button from "./components/ui/Button";

const App = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Button fit onClick={() => console.log("Clicked")}>
        Click me
      </Button>
    </div>
  );
};

export default App;
