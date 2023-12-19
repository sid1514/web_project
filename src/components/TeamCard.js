const TeamCard=({pic,name,position,email,phone})=>{
 return(
    <>
    <div className="card_team">
     <img src={pic} width={150} height={230}/>
         <h1>{name}</h1>
        <h3>{position}</h3>
        
          <h3>{email}</h3>  
          <h3>{phone}</h3>
        
    </div>
    </>
 )
}

export default TeamCard;