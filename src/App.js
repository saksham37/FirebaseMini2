import "./styles.css";
import db from "./firebase";
import React from "react";
import User from "./User";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      Users: [],
      loading: true
    };
  }
  componentDidMount() {
    console.log("Component Did Mount");
    db.collection("Users").onSnapshot((snapshot) => {
      const Users = snapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
      console.log(Users);
      this.setState({
        Users: Users,
        loading: false
      });
    });
  }
  render() {
    const { Users, loading } = this.state;
    return (
      <>
        {loading && <div>Loading Users..</div>}
        {Users.map((item) => {
          return <User user={item} />;
        })}
      </>
    );
  }
}

export default App;
