
// mobile menu 
const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    })


// All teacher information 
const teacherAllData =()=>{
    fetch("https://localhost:7014/api/Teacher")
    .then(res=>res.json())
    .then(data=>teacherSingleData(data.result))
}

// delete student information 
const handleDelete=(id)=>{
    fetch(`https://localhost:7014/api/Teacher/${id}`,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
        alert("delete successfully")

        
    })
}

// post teacher information 
const teacherPost=(e)=>{
    const post = document.getElementById("post");
    post.style.display ="block";
    e.preventDefault()
    const name = e.target.name.value;
    const department = e.target.department.value;
    const designation = e.target.designation.value;
    const addPost ={
        name:name,
        department:department,
        designation:designation
    }
    console.log(addPost)
    fetch("https://localhost:7014/api/Teacher",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(addPost)
    })
    .then(res=>res.json())
    .then(data=>{
        alert("teacher information is successfully added")
    })
    


}

// teacher update information 

const teacherEdit=(nil)=>{
    const edit = document.getElementById("edit");
    edit.style.display ="block";
    nil.preventDefault()
    const id = nil.target.id.value;
    const name = nil.target.name.value;
    const department = nil.target.department.value;
    const designation = nil.target.designation.value;
    const addUpdate = {
        id:id,
        name:name,
        department:department,
        designation:designation
    }
    fetch('https://localhost:7014/api/Teacher',{
        method:"PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(addUpdate)
    })
    .then(res=>res.json())
    .then(data=>{
        alert("update teacher information is successfully")
    })
}


const teacherSingleData =(infromations)=>{
    infromations.forEach(information => {
        const tableBody = document.getElementById("tableBody");
        const row = document.createElement("tr");
        row.innerHTML=`
        <td class="border-2 border-black">${information.id}</td>
        <td class="border-2 border-black">${information.name}</td>
        <td class="border-2 border-black">${information.department}</td>
        <td class="border-2 border-black">${information.designation}</td>
        <td class="border-b-2 border-r-2 border-black flex justify-around">
            <button onClick="teacherPost()" class = "bg-blue-600 text-white py-1 px-5 rounded-md my-1"> Post </button>
            <button onClick ="teacherEdit()" class = "bg-orange-600 text-white py-1 px-5 rounded-md my-1"> Update </button>
            <button onClick="handleDelete(${information.id})" class="bg-red-600 py-1 px-5 text-white rounded-md my-1">Delete</button>
        </td>
        `
        tableBody.appendChild(row)
    });
}

teacherAllData()