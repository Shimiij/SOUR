import "./main.css"

function Main() {
  return (
        <>

        <div className ="banner">
            <button type="button" className="BannerButton"> University </button>
            <button type="button" className="BannerButton"> Home </button>
        </div>


        <div className = "MainText">
            <h2>Searching <br/> for RSO?</h2>
        </div>


        <div className="RSOSearchBox">
            <input type="text" className="TextBoxA" name="myText" placeholder="Search RSO's"/>
        </div>
        <div className="CATSearchBox">
            <input type="text" className="TextBoxA" name="myText" placeholder="Search by Category"/>
        </div>
        <div className="FACSearchBox">
            <input type="text" className="TextBoxA" name="myText" placeholder="Search by Faculty"/>
        </div>


        <div className="BelowSearch">
            <div className="buttonContainer"> <button className="Search-Button"></button> </div>
            <button type="button" className="RegButton"> Register a <br/> club? </button>
        </div>
        </>
    );
}

export default Main;