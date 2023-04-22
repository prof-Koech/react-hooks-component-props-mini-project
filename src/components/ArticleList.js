import React from "react";
import Article from "./Article";


// function ArticleList(props){

//     const post1= blogData.posts;

//     const postData = post1.map((post)=>{
//         return <div key={post.id}>{post}</div>
//     });

//     return (
//         <main>
//             {postData}
//         </main>
//     )

// }
function ArticleList(props) {
    const { posts } = props;
  
    return (
      <main>
        {posts.map((post) => (
          <Article key={post.id} post={post} />
        ))}
      </main>
    );
  }
export default ArticleList