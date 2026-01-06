import background from "./assets/image.avif"; 
import Containr from "./Details";

function Page() {
  const buttonStyle = {
    backgroundColor: 'orange', 
    color: 'white',
    padding: '1rem 1.5rem',     
    borderRadius: '4px',        
    textDecoration: 'none',     
    fontWeight: 'bold',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', 
    cursor: 'pointer'
  };

  return (
    <> {/*h1 et image hna safi */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "50vh", 
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <h1 style={{
          color: "white", 
          fontSize: "3rem", 
          textShadow: "2px 2px 4px rgba(3, 3, 3, 0.7)",
        }}>
          Agadir City Tour
        </h1>
      </div>

      {/*  ButtoNAATTTT  */}
      <div style={{
        backgroundColor: 'white', 
        padding: '2rem 1rem',       
        display: 'flex',            
        justifyContent: 'center',   
        gap: '5rem',
        width: '100%',
        boxSizing: 'border-box'     
      }}>
          <a href="#details" style={buttonStyle}>Details</a>
          <a href="#book now" style={buttonStyle}>Book Now</a>
          <a href="#description" style={buttonStyle}>Description</a>
          <a href="#gallery" style={buttonStyle}>Gallery</a>
      </div>
      <Containr/>
    </>
  );
}

export default Page;