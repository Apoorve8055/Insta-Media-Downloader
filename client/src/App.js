import { useState } from "react";
import styled from "styled-components";
import Loader from 'react-loader-spinner';

function App() {
  const [WriteUrl, SetWriteUrl]= useState("");
  const [loaderPop, setLoaderPop] = useState(false);

  const downloadInstagramAnyVideo = (e) => {
  e.preventDefault();
    if(WriteUrl){
        setLoaderPop(true);
  const req = { 
    url:WriteUrl
  };

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req)
  };

  fetch('/api', requestOptions)
  .then(response => response.json())
  .then(json => {
    if(json.type === "Video"){
      window.open(json.file, "_blank");
    }
    if(json.type === "Image"){
      window.open(json.file, "_blank");
    }
    setLoaderPop(false);
  });
    }
};

const handleKeypress = e => {

  if (e.code === "Enter") {
    downloadInstagramAnyVideo(e);
  }
};



  return (<Container >

    <Section>

    <Title>Insta Media Downloader</Title>
    {loaderPop?
      
      <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />:    <Actionwidget>
    
    <Input
    placeholder="Enter the Insta Video Url"
    onChange={e=>SetWriteUrl(e.target.value)}
    onKeyPress={handleKeypress}
    />

    <Button 
    onClick={downloadInstagramAnyVideo} 
    
    >Download Now</Button>

  </Actionwidget>}
    </Section>

    </Container>);
}

export default App;

const Container = styled.div`
background-color:#0d1117;
width:100%;
height:100vh;
display:grid;
place-items:center;



`;

const Section = styled.div`
display:flex;
flex-direction: column;
padding:10px;
text-align:center;
`;

const Actionwidget = styled.div`
display:flex;
padding:10px;
background-color:#161b22;
border-radius:5px;
box-shadow:0 1px 3px gray;
text-align:center;

`;

const Input = styled.input`
display:flex;
    flex-grow: 1;
    height:40px;
    border-radius:1px;
    overflow:hidden;
    margin-left:4px;
    background-color:#0d1117;
    :focus-within{
        box-shadow: 0 0 0 2px #0d1117;
    }
    color:#c9d1d9;
    // outline: none;
    // border-radius: 10px;
    // border-color: violet;
    border-style: solid;

    /* Portrait and Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    height:33px;
    font-size:10px;
}
 
`;

const Button = styled.button`
background-color: #f24822;  
display:flex;
justify-content:center;
align-items:center;

border: 2px solid #0d1117;
padding:4px 25px;
margin-left:10px;
cursor:pointer;
color:#ffffffa1;
font-weight:bold;
font-family: 'Roboto', cursive;

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    height:40px;
    font-size:10px;
}
`;

const Title = styled.h1`

font-family: 'Press Start 2P', cursive;
color: #f24822;
display:flex;
font-size:50px;


/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    font-size:25px;
    text-align: justify;
    text-justify: inter-word;
    text-align:center;
}


`;