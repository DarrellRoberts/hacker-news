import { useEffect, useState } from 'react'

export default function Search() {
    useEffect(()=>{
        fetch("https://hn.algolia.com/api/v1/search")
        .then(res=>res.json())
        .then(data=>
            {
                console.log(data);
                
                setFilterData(data);
            })
        .catch(err=>console.log(err));
    },[])
    const[data,setData]=useState([])
    const [filterData,setFilterData]=useState([]);

    const handlefilter=(value)=>{

        const result = filterData.hits.filter((post) =>post.title?.toLowerCase().includes(value) 
        || post.points.toString().toLowerCase().includes(value)
        || post.num_comments?.toString().toLowerCase().includes(value)
        
  );
       
        setData(result);
        if(value===""){
            setData([])
        }
    }
  return (
    <div className='search-top'>
    <div className="search-bar">
      <input type='text'  placeholder='Search here' onChange={e=>handlefilter(e.target.value)}></input>
    </div>
    <div className='search-result'>

        {data.map((post) => (
          <div key={post.id}>
            <ol>
              <a href={post.url} target="_blank" rel="noreferrer"><span>{post.story_text ? post.story_text : post.title} ({post.url})</span></a>
              <br/><span>{post.points} points by {post.author} hide {post.num_comments} comments </span>
            </ol>
        </div>))}
          
    </div>
 
    </div>
  )
}
