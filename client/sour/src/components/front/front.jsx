import "./front.css"

function Front1() {
  return (
    <>
        <div className ="banner">

            <div className ="SiteTitle">
                <h1>SOUR - The RSO Search Engine</h1>
            </div>

        </div>


        <div className = "MainText">
            <h2>Searching for an RSO?</h2>
        </div>



        <div className="RSOSearchBox">
            <input type="SearchBox" name="myText" placeholder="Search RSO's"/>
        </div>


        <div className="CATSearchBox">
            <input type="SearchBox" name="myText" placeholder="Search by Category"/>
        </div>

        <div className="FACSearchBox">
            <input type="SearchBox" name="myText" placeholder="Search by Faculty"/>
        </div>


        <div className="BelowSearch">
            <div className="buttonContainer"> <button className="Search-Button"></button> </div>
            <div className="RegRSO"> <p> Register <br/> an RSO? </p> </div>
        </div>


        <div className="HList">

        <div className="RSO">
            <div className="Logo">
            </div>

            <div className="Title">
                <h4>RSO 1</h4>
            </div>

            <div className="Description">
                <p>Description of RSO 1</p>
            </div>

        </div>

        <div className="RSO">
            <div className="Logo">
                
            </div>
            <div className="Title">
                <h4>RSO 2</h4>
            </div>
            <div className="Description">
                <p>Description of RSO 1</p>
            </div>
        </div>

        <div className="RSO">
            <div className="Logo">
                
            </div>
            <div className="Title">
                <h4>RSO 3</h4>
            </div>
            <div className="Description">
                <p>Description of RSO 1</p>
            </div>
        </div>
    </div>

    </>
  );
}

export default Front1;
