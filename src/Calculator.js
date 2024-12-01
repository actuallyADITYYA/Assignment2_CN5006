import App from "./App";
import './App.css'
import './Calculator.css'
import React from "react";
import Button from "./Button.js";
import {useState} from "react";
import MyImage from './ima.jpeg'; 


function Calculator(props){
    const [text1, setText ] = useState("")
    const [showImage, setShowImage] = useState(false);


    const ClickHandle = (e) => {
        const value = e.target.value;
      
        if (value === "C") {
          setText("");
        } else if (value === "=") {
          try {
            setText(eval(text1));
          } catch {
            setText("Error");
          }
        } else if (value === "square") {
          const number = parseFloat(text1);
          if (!isNaN(number)) {
            setText(number * number);
          } else {
            setText("Error");
          }
        } else if (value === "show me") {
          setShowImage(true);
        } else {
          setText(text1 + value);
        }
      };
    
   
        return (
            <div className="Calculator">
                <div className="screen-row">
                <input type="text" readOnly value= {text1} />
                </div>
                
               
               <div >
                <Button label="(" ClickHandle={ClickHandle} />
                <Button label="CE" ClickHandle={ClickHandle} />
                <Button label=")" ClickHandle={ClickHandle}/>
                <Button label="C" ClickHandle={ClickHandle}/> 
                </div>

                <div >
                <Button label="1"  ClickHandle={ClickHandle}/>
                <Button label="2" ClickHandle={ClickHandle}/>
                <Button label="3" ClickHandle={ClickHandle}/>
                <Button label="+" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="4" ClickHandle={ClickHandle}/>
                <Button label="5" ClickHandle={ClickHandle}/>
                <Button label="6" ClickHandle={ClickHandle}/>
                <Button label="-" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="7" ClickHandle={ClickHandle}/>
                <Button label="8" ClickHandle={ClickHandle}/>
                <Button label="9" ClickHandle={ClickHandle}/>
                <Button label="*" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="." ClickHandle={ClickHandle}/>
                <Button label="0" ClickHandle={ClickHandle}/>
                <Button label="=" ClickHandle={ClickHandle}/>
                <Button label="/" ClickHandle={ClickHandle}/>
                </div>
                <div>
                    <Button label="square" ClickHandle={ClickHandle} />
                </div>
                
                <div>
                    <Button label="show me" ClickHandle={ClickHandle} />
                </div>

                {showImage && (
                    <div className="image-container">
                        <img src={MyImage} alt="Image" className="user-image" />
                    </div>
                )}
            </div>
        );
    
}
export default Calculator;

