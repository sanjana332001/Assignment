import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./componates/header.js";
import FormComponent from "./componates/contact";
import CreateContact from "./componates/home";
import Sidebar from "./componates/sidebar";
import Chart from "./componates/chart";
import ContactList from "./componates/contact_list";
import ChartComponent from "./componates/chart";
import Map from "./componates/map";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload];
    case "SET_CONTACT":
      return action.payload;
    case "DELETE_CONTACT":
      return state.filter((item) => item.id != action.payload.id);
    default:
      return state;
  }
};
// const rootReducer = combineReducers({
//   reducer,
// });

const store = createStore(reducer);
function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<CreateContact />}></Route>
          <Route path="/contact-page" element={<FormComponent />}></Route>
          <Route path="/chart" element={<ChartComponent />}></Route>
          <Route path="/contact-list" element={<ContactList />}></Route>
          <Route path="/map" element={<Map />}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
