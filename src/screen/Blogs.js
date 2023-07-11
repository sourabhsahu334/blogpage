import React, { useEffect, useState } from "react";
import BlogContainer from "./SingleBlog";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Switch from "@mui/material/Switch";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const BlogPage = () => {
  const [darkmode, setmode] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [category,setcatogory]=useState('cricket');

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "0 20px",
    color: darkmode ? "white" : "black",
    backgroundColor: darkmode ? "black" : "white",
  };

  const leftBoxStyle = {
    width: "100%",
    height: "200px",
    margin: "5px",
    backgroundColor: darkmode ? "rgba(255,255,255,.3)" : "rgba(0, 0, 0, 0.2)",
  };

  const midBoxStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "5px",
    padding: "10px",
    backgroundColor: darkmode ? "rgba(255,255,255,.5)" : "rgba(0, 0, 0, 0.5)",
    overflow: "hidder",
    alignItem: "center",
    borderRadius: 10,
  };

  const rightBoxStyle = {
    width: "100%",
    height: "200px",
    margin: "5px",
    backgroundColor: darkmode ? "rgba(255,255,255,.3)" : "rgba(0, 0, 0, 0.2)",
  };

  if (screenWidth >= 600) {
    containerStyle.flexDirection = "row";
    leftBoxStyle.width = "420px";
    leftBoxStyle.height = "500px";
    leftBoxStyle.borderRadius = "10px";

    rightBoxStyle.width = "420px";
    rightBoxStyle.height = "500px";
    rightBoxStyle.borderRadius = "10px";
  }

  return (
    <div style={containerStyle}>
      <div style={leftBoxStyle}>
        <Switch
          checked={darkmode}
          onChange={() => setmode(!darkmode)}
          inputProps={{ "aria-label": "controlled" }}
        />
        <h2 style={{marginLeft:10}}>category</h2>
        <button onClick={()=>setcatogory("all")} style={{backgroundColor:category==="all"&&"rgba(201,242,155)",borderRadius:5,padding:3,margin:5}}>All</button>
      <button onClick={()=>setcatogory("cricket")} style={{backgroundColor:category==="cricket"&&"rgba(201,242,155)",borderRadius:5,padding:3,margin:5}}>Cricket</button>
      <button onClick={()=>setcatogory("news")} style={{backgroundColor:category==="news"&&"rgba(201,242,155)",borderRadius:5,padding:3,margin:5}}>News</button>
      <button onClick={()=>setcatogory("Enterntainment")} style={{backgroundColor:category==="Enterntainment"&&"rgba(201,242,155)",borderRadius:5,padding:3,margin:5}}>Enterntainment</button>
      <button onClick={()=>setcatogory("Football")} style={{backgroundColor:category==="Football"&&"rgba(201,242,155)",borderRadius:5,padding:3,margin:5}}>Football</button>
      <button onClick={()=>setcatogory("AI")} style={{backgroundColor:category==="AI"&&"rgba(201,242,155)",borderRadius:5,padding:3,margin:5}}>Artifical Intelligence</button>
      </div>
      
      <div style={midBoxStyle}>
        <BlogContainer darkmode={darkmode} />
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Skeleton height={350} />
          <p>
            <Skeleton height={50} count={2} />
          </p>
        </SkeletonTheme>
      </div>
      <div style={rightBoxStyle}><h3 style={{margin:20}}>Recently uploaded Blogs by You</h3>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Skeleton  style={{marginLeft:3}} width={"97%"} height={200} />
          <p>
            <Skeleton style={{marginLeft:3}} width={"97%"} height={20} count={2} />
          </p>
        </SkeletonTheme> </div>
    </div>
  );
};

export default BlogPage;
