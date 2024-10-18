import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ViewReviews = () => {
    const [reviews, setReviews] = useState([])
    const [success, setSuccess] = useState("")
    const [delError, setDelError] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:4000/reviews")
            .then((result) => {
                setReviews(result.data)
            })
            .catch(() => {
                setDelError("Error while fetching reviews. Please try again later.")
            })
    }, [reviews])
    return (
        <div>

            <h3>All Reviews</h3>
            {success ? <div>{success}</div> : null}
            {delError ? <div>{delError}</div> : null}
            {reviews.length > 0 ?
                <>
                    {
                        reviews.map((review) => {
                            return (<div className='reviews'>
                                <h3>{review.name}</h3>
                                <span>
                                    {review.review}<br />
                                </span>
                            </div>)
                        })
                    }
                </>
                : <div>No reviews available</div>
            }
            <button onClick={() => { navigate("/review") }}>Add review</button>
            

        </div>
    )
}

export default ViewReviews
