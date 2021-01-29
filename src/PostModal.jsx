import React, {useEffect, useState} from 'react'
import { Modal, Spinner } from 'react-bootstrap'

export default functioin PostModal(props) {
    const {postID, show, closePostModal} = props
    const [post, setPost] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/${postID}')
            .then(response => response.json())
            .then(json => setPost(json))
    }, [setPost, postID])

    if(!post){
        return <Spinner animation="border" />
    }


    return(
        <Modal show = {show} onHide = {closePostModal}>
            <Modal.Header closeButton>
                <Modal.Title>{post.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{post.body}</Modal.Body>
        </Modal>
    )
}