import React from 'react';
import './App.css';
// import ToolBar from "./components/ToolBar";
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Image from "./images/shenga.jpeg";
// import ShortFilmCard from "./components/ShortFilmCards";
// import FeatureFilmCard from "./components/FeatureFilmCard";

import AboutCard from "./components/AboutCard";
import Header from './components/Header';
import NewsLetter from "./components/NewsLetter";
import CategorySection from "./components/CategorySection";
import Contact from "./components/Contact";



// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     marginTop: 60
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
//   cardContainer: {
//     marginTop: 20
//   }
// }));


// Header banner data
const imageJson = [
  // {
  //     id: 5,
  //     type: "video",
  //     path: "https://os.alipayobjects.com/rmsportal/CoDFvoxaQpTnLOM.mp4",
  //     title: "Video",
  //     desc: ""
  // },
  {
    id: 11,
    type: "image",
    path: "./images/shenga.jpeg",
    title: "Lekin Tu toh Saale Hitchcock nikla",
    desc: ""
  }, {
    id: 1,
    type: "image",
    path: "./images/hitchcock.jpeg",
    title: "Lekin Tu toh Saale Hitchcock nikla",
    desc: ""
  }, {
    id: 2,
    type: "image",
    path: "./images/universal.jpeg",
    title: "Universal 'i'",
    desc: ""
  }, {
    id: 3,
    type: "image",
    path: "./images/madat.jpeg",
    title: "Madat",
    desc: ""
  }, {
    id: 4,
    type: "image",
    path: "./images/halfday.jpeg",
    title: "halfDay",
    desc: ""
  }
];

function App() {
  // const classes = useStyles();

  return (
    <div className="App">
      <Header data={{ data: imageJson }} />
      <NewsLetter />
      <AboutCard />
      <CategorySection />
      <Contact />
    </div>
  );
}

export default App;
