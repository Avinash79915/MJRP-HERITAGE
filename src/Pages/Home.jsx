import Logo from "../Assets/Images/DARK.svg";

const Home=() =>{

    return(
        <>      
                <div class="bgimg">
                <div class="topleft">
                 </div>
                 <div className="middle">
                 <img src={Logo} alt="Logo" />
                <h1>MJRP HERITAGE WILL BE LIVE <span className="soon">SOON... </span></h1>
                 </div>
                 <div className="bottomleft">
                    <span className="bottom">This site is under production..</span>
                 </div>

                </div>
        </>


    );
}
export default Home;