import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Create({ addCow }) {
    const [username, setUsername] = useState("")
    const [imageUrl, setImage] = useState("")
    const [location, setLocation] = useState("")
    const [date, setDate] = useState("")
    const [caption, setCaption] = useState("")

    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        const formData = {
            username: username,
            picture: imageUrl,
            location: location,
            date: date,
            caption: caption
        }
        fetch("http://localhost:3001/cows", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((r) => r.json())
            .then((newCow) => {
                // console.log('post', newCow)
                addCow(newCow)
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
                    />
                </div>
                <div>
                    <p>Image</p>
                    <input
                        type="url"
                        name="image"
                        value={imageUrl}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div>
                    <p>Location</p>
                    <input
                        type="text"
                        name="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div>
                    <p>Date</p>
                    <input
                        type="text"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div>
                    <p>Caption</p>
                    <input
                        type="caption"
                        name="caption"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
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