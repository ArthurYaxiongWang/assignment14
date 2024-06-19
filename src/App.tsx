import Alert from "./components/Alert";
import Button from "./components/Button";
import Buttontry from "./components/Buttontry";
//import ListGroup from "./components/ListGroup";
import MyButton from "./components/Button/MyButton";

function App() {
  // let items = ["New Work", "San Francisco", "Tokyo", "London", "Manila"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading="Cities"
  //       onSelectItem={handleSelectItem}
  //     />
  //   </div>
  // );
  // return (
  //   <div>
  //     <Alert>
  //       Hello <span>World</span>
  //     </Alert>
  //     <Button onClick={() => console.log("Clicked")}> My Button </Button>
  //     <Buttontry></Buttontry>
  //   </div>
  // );

  return (
    <>
      <h1>Welcome to my app</h1>
      <MyButton label="huh"></MyButton>
    </>
  );
}

export default App;
