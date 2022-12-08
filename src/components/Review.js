import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Review.css";
// import { useEffect, useState } from "react";

function Review(){
    // const [posts, setPosts] = useState([])
    // useEffect(() => {
    //     fetch("https://paw-finder-production.up.railway.app/posts")
    //         .then((response) => response.json())
    //         .then((data) => setPosts(data))
    //         .catch(console.log);
    // }, [setPosts]);

    // console.log(posts[0].description)

    
    // function handleDelete(postId) {
    //     fetch(`https://paw-finder-production.up.railway.app/posts/${postId}`, {
    //         method: "DELETE",
    //     })
    //         .then((res) => res.json())
    //         .then((data) =>
    //             setPosts((prevState) =>
    //             prevState.filter((review) => review.id !== data.id)
    //             )
    //         )
    //         .catch((error) => console.log(error));
    //     }

    return (
        <div className="container">
        <div className="review">
            <div className="name-row">
            <img
                className="pic"
                src="https://picsum.photos/50/50?random=1"
                alt="user-pic"
            />
            <h4> PawFinder User </h4>
            {/* <h4> {posts.user_id} </h4> */}
            <div className="btn-container">
                <button 
                // onClick={() => handleDelete(posts.id)} 
                className=""
                >
                <FontAwesomeIcon icon={faTrash} className="btn-ic2" />
                </button>
            </div>
            </div>
            <p>
            <b> Post: </b>
            {/* <em>{posts.description}</em> */}
            <em>What a cute dog. Last saw him in Yemen outside the dog park last evening.</em>
            </p>
        </div>
        </div>
    );
}

export default Review;