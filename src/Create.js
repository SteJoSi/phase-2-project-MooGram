import React from "react";

//(create) form with photo upload, caption, date
function Create() {
    return (
        <div>
            <div>
                <h1 id="formTitle">Upload here!</h1>
            </div>
            <form id="create">
                <div>
                    <p>Username</p>
                    <input type="text" name="username" />
                </div>
                <div>
                    <p>Image</p>
                    <input type="url" name="image" />
                </div>
                <div>
                    <p>Location</p>
                    <input type="text" name="location" />
                </div>
                <div>
                    <p>Date</p>
                    <input type="text" name="date" />
                </div>
                <div>
                    <p>Caption</p>
                    <input type="caption" name="caption" />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default Create;