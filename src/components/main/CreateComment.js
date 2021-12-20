import '../css/RestaurantProfile.css'
import '../css/RestaurantProfile.css'

const CreateComment = (props) => {


    const inputComment = (e) => {
        props.setComment({
            body: e.target.value,
            user: props.user._id
        })
    }


    return (
        <div className='addAComment'>
        <form action="">
            <label className='commentLabel' htmlFor="">Make a comment:</label>
            <br />

            <input type="text" value={props.commentInput.body} onChange={inputComment} />
            <br />
            <button onClick={props.comment}>Submit</button>
        </form>
        </div>
    )
}

export default CreateComment