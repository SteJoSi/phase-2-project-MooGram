import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//(create) form with photo upload, caption, date
function Create() {
    const [username, setUsername] = useState("")
    const [image, setImage] = useState("")
    const [location, setLocation] = useState("")
    const [date, setDate] = useState("")
    const [caption, setCaption] = useState("")

    // const [formData, setFormData] = useState({
    //     username: "",
    //     image: "",
    //     location: "",
    //     date: "",
    //     caption: ""
    // })

    const history = useHistory()


    //POST request here to add a new image  to Home
    //programmatic navigation lab

    // function handleChange(e) {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value,
    //     });
    // }

    function handleSubmit(e) {
        e.preventDefault()
        const formData = {
            username: username,
            image: image,
            location: location,
            date: date,
            caption: caption
        }
        //fetch POST
        fetch("http://localhost:3001/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((r) => r.json())
            .then((newPost) => {
                console.log('post', newPost)
                history.push("/");

            })
        console.log('form', formData)
    }

    return (
        <div>
            <div>
                <h1 className="formTitle">Upload here!</h1>
            </div>
            <form id="create" onSubmit={handleSubmit}>
                <div>
                    <p>Username</p>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        // onChange={handleChange}
                    />
                </div>
                <div>
                    <p>Image</p>
                    <input
                        type="url"
                        name="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        // onChange={handleChange}
                    />
                </div>
                <div>
                    <p>Location</p>
                    <input
                        type="text"
                        name="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        // onChange={handleChange}
                    />
                </div>
                <div>
                    <p>Date</p>
                    <input
                        type="text"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        // onChange={handleChange}
                    />
                </div>
                <div>
                    <p>Caption</p>
                    <input
                        type="caption"
                        name="caption"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        // onChange={handleChange}
                    />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default Create;