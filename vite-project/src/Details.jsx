export default function Containr(){
  const cardStyle = {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    minWidth: '300px', 
    lineHeight: '1.6',
  };
  const timeStyle = {
    fontWeight: 'bold',
    color: 'red' 
  };

  return (
    <div id="border" style={{ display: 'flex', gap: '2rem', padding: '2rem', backgroundColor: 'beige' }}>
      <div style={cardStyle}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
           Pick up & Meeting
        </h2>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li>• Your Hotel or Residence Adresse.</li>
        </ul>

        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
           Return time to hotel
        </h2>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li style={timeStyle}>• From 10 AM to 1 PM</li>
          <li style={timeStyle}>• From 3 PM to 6 PM</li>
        </ul>
        <h2 style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
            Price Includes
        </h2>
        <ul>
        <li>Hotel Pick-up and Drop-off</li>
        <li> visits according to the program</li>
        <li>Guided tour with experienced driver/guide</li>
        <li> English & French Speaking driver & Guid</li>
        </ul>
        <h2>Tour Highlights</h2>
        <ul>
            <li>Oufla Kasbah(old fortress of agadir)</li>
            <li>Big Mosque of Agadir</li>
            <li>Argan Oil Factory</li>
            <li>Free Time In The Souk ( Market)</li>
        </ul>

      </div>



      <div style={cardStyle}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
           Duration
        </h2>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li>• 3 Hours Guided City Tour</li>
        </ul>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
           Pick up time from hotel
        </h2>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li style={timeStyle}>• 08:30 AM</li>
          <li style={timeStyle}>• 14:00 AM</li>
        </ul>
        <h2 style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>Price does not Include</h2>
        <ul>
            <li>Food & Drinks</li>
            <li>​Entry fees</li>
            <li>Visits According to Program </li>
        </ul>
        <h2 style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem'}}>Availability</h2>
        <li>Everyday </li>
      </div>

    </div>
  );
}
