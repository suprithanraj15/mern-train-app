import {useState} from "react"
import axios from "axios"

function AddTrainer(){

const [name,setName] = useState("")
const [skills,setSkills] = useState("")

const saveTrainer = async()=>{

await axios.post("http://localhost:5000/trainer",{
name,
skills
})

alert("Trainer Added")

setName("")
setSkills("")
}

return(

<div>

<h3>Add Trainer</h3>

<input
className="form-control mb-2"
placeholder="Trainer Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
className="form-control mb-2"
placeholder="Skills"
value={skills}
onChange={(e)=>setSkills(e.target.value)}
/>

<button
className="btn btn-primary"
onClick={saveTrainer}
>
Save
</button>

</div>

)

}

export default AddTrainer