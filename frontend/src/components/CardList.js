import React from "react";

import Card from "./Card";
import Modal from "./Modal";

const list = [
  {
    id: "fjwioejfoijwif",
    target: "imageModal1",
    imageSrc: "https://picsum.photos/id/237/200/300",
    title: "Test1",
  },
  {
    id: "fjoweijfiewof",
    target: "imageModal3",
    imageSrc:
      "https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY",
    title: "Test3",
  },
  {
    id: "jfiojewofiwf",
    target: "imageModal2",
    imageSrc: "/images/china.jpg",
    title: "Test2",
  },
  {
    id: "dasfs",
    target: "imageModal4",
    imageSrc:
      "https://images.unsplash.com/photo-1694980549496-8aff1f4d16c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NzE5NTM4Nw&ixlib=rb-4.0.3&q=80&w=1080",
    title: "Test4",
  },
  {
    id: "asfaew",
    target: "imageModal5",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1695787563812-5254a014fc50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NzE5NTU2NQ&ixlib=rb-4.0.3&q=80&w=1080",
    title: "Test5",
  },
  {
    id: "wefwf",
    target: "imageModal6",
    imageSrc:
      "https://images.unsplash.com/photo-1694875464333-09b59acac0da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NzE5OTA3OQ&ixlib=rb-4.0.3&q=80&w=1080",
    title: "Test6",
  },
];

const CardList = () => {
  return (
    <ul className="row gy-4 list-unstyled">
      {list.map((v) => (
        <li key={v.id} className="col-lg-4 col-md-6">
          <Card target={v.target} imageSrc={v.imageSrc} title={v.title} />
          <Modal id={v.target} imageSrc={v.imageSrc} />
        </li>
      ))}
    </ul>
  );
};

// const CardList = () => {
//   return (
//     <ul className="cardList">
//       <li className="col-lg-4 col-md-6">
//         <div className="card bg-dark">
//           <div className="image-container">
//             <img
//               src="https://picsum.photos/id/237/200/300"
//               alt=""
//               className="img-fluid"
//             />
//           </div>
//           <div className="card-body text-white">
//             <h5 className="card-title text-center">Test1</h5>
//           </div>
//         </div>

//         <div className="card bg-dark">
//           <div className="image-container">
//             <img
//               src="https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY"
//               alt=""
//               className="img-fluid"
//             />
//           </div>
//           <div className="card-body text-white">
//             <h5 className="card-title text-center">Test1</h5>
//           </div>
//         </div>

//         <div className="card bg-dark">
//           <div className="image-container">
//             <img src="/images/china.jpg" alt="" className="img-fluid" />
//           </div>
//           <div className="card-body text-white">
//             <h5 className="card-title text-center">Test1</h5>
//           </div>
//         </div>
//       </li>

//       <li className="col-lg-4 col-md-6">
//         <div className="card bg-dark">
//           <div className="image-container">
//             <img
//               src="https://images.unsplash.com/photo-1694980549496-8aff1f4d16c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NzE5NTM4Nw&ixlib=rb-4.0.3&q=80&w=1080"
//               alt=""
//               className="img-fluid"
//             />
//           </div>
//           <div className="card-body text-white">
//             <h5 className="card-title text-center">Test1</h5>
//           </div>
//         </div>

//         <div className="card bg-dark">
//           <div className="image-container">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1695787563812-5254a014fc50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NzE5NTU2NQ&ixlib=rb-4.0.3&q=80&w=1080"
//               alt=""
//               className="img-fluid"
//             />
//           </div>
//           <div className="card-body text-white">
//             <h5 className="card-title text-center">Test1</h5>
//           </div>
//         </div>

//         <div className="card bg-dark">
//           <div className="image-container">
//             <img
//               src="https://images.unsplash.com/photo-1694875464333-09b59acac0da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NzE5OTA3OQ&ixlib=rb-4.0.3&q=80&w=1080"
//               alt=""
//               className="img-fluid"
//             />
//           </div>
//           <div className="card-body text-white">
//             <h5 className="card-title text-center">Test1</h5>
//           </div>
//         </div>
//       </li>
//     </ul>
//   );
// };

export default CardList;
