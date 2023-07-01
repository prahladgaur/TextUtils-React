import React , {useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState("");

  //function for Uppercase
  const handleUpclick = ()=>{
    //console.log("Upper case is fired");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "Success");
  }
  //function for Lowercase
  const handleLoclick = ()=>{
    //console.log("Upper case is fired");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "Success");
  }

  //clear text
  const handleclearclick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Text Box Cleared!", "Success");
  }
  const handleonChange = (event)=>{
   //console.log("On Change Event");
    setText(event.target.value);
  }
// Speak text
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Listen!", "Success");
  }
  //copy text
  const handleCopy = ()=>{
    var text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "Success");
  }
  ///remove extra space
  const RemoveSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Space Removed!", "Success");
  }
  //logic to count words properly
  var words=0;
    // Remove leading/trailing spaces
  const trimmedInput = text.trim();
    // Split the input string into an array of words
  words = trimmedInput.split(/\s+/).filter(word => word !== '');
  

  return (
    <div>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
         <h1>Hi Buddy, How are you?</h1>
        <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="MyBox" rows="9"></textarea>
            </div>
              <button className='btn btn-primary my-3 mx-2' onClick={handleUpclick}>convert to Uppercase</button>
              <button className='btn btn-primary my-3 mx-2' onClick={handleLoclick}>convert to Lowercase</button>
              <button className='btn btn-primary my-3 mx-2' onClick={handleclearclick}>Clear Text</button>
              <button className='btn btn-primary my-3 mx-2' onClick={speak}>Text to speak</button>
              <button className='btn btn-primary my-3 mx-2' onClick={handleCopy}>Copy text</button>
              <button className='btn btn-primary my-3 mx-2' onClick={RemoveSpace}>Remove Extra Spaces</button>
       
          </div>
        
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2> 
          <h2>Your Text Summary</h2>
          <p>word:{words.length} and character:{text.length}</p>
          <p>{0.008*text.split(" ").length}Minutes read</p>
          <h3>Preview</h3>
          <p>{text.length>0?text:"enter some text to preview"}</p>
        </div>      
        </div>
  )
}
