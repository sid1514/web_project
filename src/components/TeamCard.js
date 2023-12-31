const TeamCard=({pic,name,position,email,phone})=>{
 return(
    <>
    <div >
     <img src={pic} width={200} height={230}/>
         <h1>{name}</h1>
        <h3>{position}</h3>
        
          <h3>{email}</h3>  
          <h3>{phone}</h3>
        
    </div>
    </>
 )
}

export default TeamCard;