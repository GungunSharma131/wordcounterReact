import React, {useState, useEffect} from "react";

function WordCounter(){
    const [Text, setText] = useState ('');
   
    const handleUpclick=()=>{
        console.log("Button was Clickable");
        let newText = Text.toUpperCase();
        setText(newText);
    }
    const handleDownclick=()=>{
        console.log("Button was Clickable");
        let newText = Text.toLowerCase();
        setText(newText);
    }
    const erase=()=>{
        console.log("Button was Clickable");
        // let newText = Text.innerHTML = '';
        setText('');
    }
    const btnonchange = (Event) => {
        console.log('onchange');
        setText (Event.target.value);
    }
    const handleCopy=()=>{
        console.log('text copied');
        let Text = document.getElementById("floatingTextarea2");
        Text.select();
        navigator.clipboard.writeText(Text.value);
    }
    const handleExtraSpace =()=>{
        console.log('Extra Space');
        let newText= Text.split(/[ ]+/);
        setText(newText.join(" "));

        }
        

    return( 
        <>
         <div className="container word-count1 " > 
         <div className="row">
            <div className="col-12">
                <h1 className="head">Word </h1>
                <div className="form-floating mt-5">
                <textarea  value = {Text} className="form-control w-50 text-para" placeholder="Leave a comment here" id="floatingTextarea2"  onChange={btnonchange}></textarea>
                <label className="text-para1">Write Here....</label>
                <p className="para">{Text.split(" ").length} Words and {Text.length} Characters</p>
                <p className="para">{0.05* Text.split(" ").length} sec time to read</p>
               
            </div>
        </div>
        </div>
        <div className="row  word-count">
                
                <div className="col">
                    <button type="button" className="btn btn-danger box-btn  mt-5 btn1" onClick={handleUpclick}> UpperCase</button>
                </div>

                <div className="col">
                    <button type="button" className="btn btn-danger box-btn mt-5  btn1 "  onClick={handleDownclick}>LowerCase</button>
                    
                </div>
               <div className="col">
                   
                   <button type="button" className="btn btn-danger box-btn mt-5  btn1 "  onClick={handleCopy}>Copy Text</button>
               </div>
                
             <div className="col">
    
                    <button type="button" className="btn btn-danger box-btn mt-5  btn1"  onClick={erase}>Clear</button>
    
            </div>
            <div className="col">
    
                    <button type="button" className="btn btn-danger box-btn mt-5  btn1 w-100 p-2"  onClick={handleExtraSpace}>Remove Space</button>
    
            </div>
           
            </div>


         </div>
        
        </>
    )
}

export default WordCounter;
