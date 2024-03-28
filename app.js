function getDetails(){
    document.getElementById('output').style.display="block";
    var username=document.getElementById('username').value;
   
    fetch(`https://api.github.com/users/${username}`)
    .then(response=>response.json().then(data=>{
        console.log(data)
        document.getElementById('username').innerHTML=data.username;
        document.getElementById('bio').innerHTML=data.bio;
        document.getElementById('followers').innerHTML=data.followers +" Followers";
        document.getElementById('following').innerHTML=data.following + " Following";
        document.getElementById('profile').innerHTML=`
        <a href=" https://www.github.com/${username}"> <img src="${data.avatar_url}" /> </a>
        `
    }))
    
}