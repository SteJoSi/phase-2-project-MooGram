import React from "react";
import PostContainer from "./PostContainer";
import Header from "./Header";

function Home({cows}) {

    return (
        <div>
            <Header />
            <div className="cowDiv">
            {cows.map((cows) => (
                <PostContainer
                    key={cows.id}
                    cows={cows}
                />
            )
            )}
            </div>
        </div>
    );
}

export default Home;