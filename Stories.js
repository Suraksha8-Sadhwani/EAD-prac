import React, { useEffect, useState } from 'react'

function Stories() {
    const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='
    const [stories, setStories] = useState([])
    const [searchItem, setSearchItem] = useState('react')
    useEffect(()=>{
        
        fetchData()
    },[])
    async function fetchData(){
        const response = await fetch(`${API_ENDPOINT}${searchItem}`)
        const data = await response.json()
        console.log(data.hits)
        setStories(data.hits)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        fetchData()
    }

    const handleDismiss = (objId) => {
        const updatedStories = stories.filter((story)=>story.objectID!==objId)
        setStories(updatedStories)
    }

    return (
    <>
        <h1>History</h1>
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="search">Search: </label>
                <input type="text" id='search' onChange={(e)=>setSearchItem(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
        <hr />
        <div>
        {stories.map((story) => (
            <div key={story.objectID}>
            <div>
                <a href="">{story.title}</a>
                {` ${story.author}, ${story.num_comments}, ${story.points} `}
                <button onClick={()=>handleDismiss(story.objectID)}>Dismiss</button></div>
            
            </div>
        ))}
        </div>
        
    </>
    )
}

export default Stories