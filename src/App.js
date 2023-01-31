import { useEffect, useState } from "react";
import "./App.css";
import BlogPage from "./pages/BlogPage";
import Home from "./pages/Home";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import AddBlogs from "./pages/AddBlogs";
import NewAddedBlogs from "./components/NewAddedBlogs";

function App() {
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <div className="App">
      {/* {users.map((user) =>{
        return <div className=" text-white">{user.title}</div>
      })} */}
      <AddBlogs/>
      <NewAddedBlogs/>
    </div>
  );
}

export default App;
