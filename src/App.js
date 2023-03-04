import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import "./App.css";

const App = () => {
  const [cardData, setCardData] = useState([]);
  const [visible, setVisible] = useState(3);

  const allCardData = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=35");
    setCardData(response.data.results);
  };

  const loadMore = () => {
    setVisible(visible + 3);
  };

  useEffect(() => {
    allCardData();
  }, []);

  const renderCard = (person, index) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={person.picture.medium} />
        <Card.Body>
          <Card.Title>
            {person.name.first} {person.name.last}
          </Card.Title>
          <Card.Text>
            <ul>
              <li>{person.email}</li>
              <li>{person.cell}</li>
              <li>{person.gender}</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="cards">
          {cardData.slice(0, visible).map(renderCard)}
        </div>
      </div>
      {visible < cardData.length && (
        <button onClick={loadMore}>Load 3 More</button>
      )}
    </div>
  );
};

export default App;

// // import logo from "./logo.svg";
// import React, { useEffect, useState } from "react";
// import { Button, Card } from "react-bootstrap";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [cardData, setCardData] = useState([]);
//   const [visible, setVisible] = useState(5);

//   const allCardData = async () => {
//     const response = await axios.get("https://randomuser.me/api/'");
//     setCardData(response.data.results);
//   };

//   const loadMore = () => {
//     setVisible(visible + 5);
//   };

//   useEffect(() => {
//     allCardData();
//   }, []);

//   const renderCard = (person, index) => {
//     return (
//       <Card style={{ width: "18rem" }}>
//         <Card.Img variant="top" src={person.picture.large} alt="..." />
//         <Card.body>
//           <Card.title>
//             {person.name.first}
//             {person.name.last}
//           </Card.title>
//           <Card.text>
//             <ul>
//               <li>{person.email}</li>
//               <li>{person.cell}</li>
//               <li>{person.gender}</li>
//             </ul>
//           </Card.text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.body>
//       </Card>
//     );
//   };
//   return (
//     <div className="App">
//       {cardData.slice(0, visible).map(renderCard)}
//       {visible < cardData.length && (
//         <button onClick={loadMore}>Load 5 More</button>
//       )}
//     </div>
//   );
// }

// export default App;
