const Users=() =>{
    const user = [
        { name: 'Max', type: 'dog', bornOn: 2018 },
        { name: 'Angel', type: 'cat', bornOn: 2015 },
        { name: 'Jasper', type: 'dog', bornOn: 2016 }
      ]
    return (
        <div>
        {user.map( usr=>  <div>
        <h1> {usr.name}</h1>
        <p> {usr.type} </p>
        <p> {usr.bornOn} </p>
        </div> 
    )
}</div> 
    )
}
export default Users 