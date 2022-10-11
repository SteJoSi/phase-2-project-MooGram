import React, { useState } from "react";

//(create) form with photo upload, caption, date
function Create() {
    const [username, setUsername] = useState("")
    const [image, setImage] = useState("")
    const [location, setLocation] = useState("")
    const [date, setDate] = useState("")
    const [caption, setCaption] = useState("")


    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target.username.value)
    }

    return (
        <div>
            <div>
                <h1 id="formTitle">Upload here!</h1>
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
                        value={image}
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