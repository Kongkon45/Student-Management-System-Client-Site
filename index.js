
// mobile menu 
const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    })



// All student information 
const studentAllData =()=>{
    fetch("https://localhost:7014/Api/StudentInformation")
    .then(res=>res.json())
    .then(data=>studentSingleData(data.result))
}


// delete student information 
const handleDelete=(id)=>{
    fetch(`https://localhost:7014/Api/StudentInformation/id:int?id=${id}`,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
        alert("delete successfully")
    })
}

// post student information 
const studentPost=(e)=>{
    const post = document.getElementById("post");
    post.style.display ="block";
    e.preventDefault()
    const name = e.target.name.value;
    const roll = e.target.roll.value;
    const registration = e.target.registration.value;
    const semester = e.target.semester.value;
    const shift = e.target.shift.value;
    const addPost ={
        name:name,
        roll:roll,
        registrationNumber:registration,
        semester:semester,
        shift:shift
    }
    console.log(addPost)
    fetch("https://localhost:7014/Api/StudentInformation",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(addPost)
    })
    .then(res=>res.json())
    .then(data=>{
        alert("student information is successfully added")
    })
    


}

// student update information 

const studentEdit=(nil)=>{
    const edit = document.getElementById("edit");
    edit.style.display ="block";
    nil.preventDefault()
    const id = nil.target.id.value;
    const name = nil.target.name.value;
    const roll = nil.target.roll.value;
    const registration = nil.target.registration.value;
    const semester = nil.target.semester.value;
    const shift = nil.target.shift.value;
    const addUpdate ={
        studentId:id,
        name:name,
        roll:roll,
        registrationNumber:registration,
        semester:semester,
        shift:shift
    }
    console.log(addUpdate)
    fetch('https://localhost:7014/Api/StudentInformation',{
        method:"PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(addUpdate)
    })
    .then(res=>res.json())
    .then(data=>{
        alert("update student information is successfully")
    })
}


const studentSingleData =(infromations)=>{
    infromations.forEach(information => {
        const tableBody = document.getElementById("tableBody");
        const row = document.createElement("tr");
        row.innerHTML=`
        <td class="border-2 border-black">${information.studentId}</td>
        <td class="border-2 border-black">${information.name}</td>
        <td class="border-2 border-black">${information.roll}</td>
        <td class="border-2 border-black">${information.registrationNumber}</td>
        <td class="border-2 border-black">${information.semester}</td>
        <td class="border-2 border-black">${information.shift}</td>
        <td class="border-b-2 border-r-2 border-black flex justify-around">
            <button onClick="studentPost()" class = "bg-blue-600 text-white py-1 px-5 rounded-md my-1"> Post </button>
            <button onClick ="studentEdit()" class = "bg-orange-600 text-white py-1 px-5 rounded-md my-1"> Update </button>
            <button onClick="handleDelete(${information.studentId})" class="bg-red-600 py-1 px-5 text-white rounded-md my-1">Delete</button>
        </td>
        `
        tableBody.appendChild(row)
    });
}

studentAllData()



