// import React from 'react';
// import { StaticQuery, graphql } from 'gatsby'
// import Layout from "../components/layout/layout"

// const Profile = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         mongodb: allMongodbProfileStudentData {
//           edges {
//             node {
//               name
//               experience
//               designation
//             }
//           }
//         }
//       }
      
//       `}

//     render={data => (
//       <Layout>
//         <div className="container py-sm-4">
//         {data.mongodb.edges.map(({ node }, i) => (
//           <div className="card mb-5">
//             {/* <img class="card-img-top" src="img_avatar1.png" alt="Card image" style="width:100%"></img> */}
//             <div className="card-body">
//               <h4 className="card-title">{node.name}</h4>
//               <p className="card-text">{node.designation}</p>
//               <p className="card-text">{node.experience}</p>
//             </div>
//           </div>
//         ))
//         }
//         </div>
//       </Layout>
//     )}
//   />
// )

// export default Profile