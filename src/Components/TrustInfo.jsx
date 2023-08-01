import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';

function TrustInfo() {
  const imageurl1 ="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9vciUyMGNoaWxkfGVufDB8fDB8fHww&w=1000&q=80";
  const imageurl2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk_l4_T4byHJatL1ARYSDiMTjCRXdPYV26Ns8sPFxvaLUiyLuT2IWGv334T5bAQYM6HoM&usqp=CAU"
  const imageurl3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMtw9U1hSiDILGIZ8Gz_Es1E5XtDz7QLDWuogmbnlICuwlMvkcDW6wNKihRu2xc0csVw&usqp=CAU"
  const imageurl4="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnjW_PQSZMpGRxtT-Howsp6KGXhzjcltttLIKgZu5yBLVepynBWf5yrR3rOY80ArzXoTE&usqp=CAU"
  const imageurl5="https://c8.alamy.com/comp/BYF8RC/happy-young-poor-lower-caste-indian-street-children-smiling-andhra-BYF8RC.jpg"
  const imageurl6="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlZsD9LTyoNA0SA1A-rF41IC2ox3zTIgpyL0pay846BA6L7j_Rp7w_xuKB-VbJv-tmaT4&usqp=CAU"
  const imageurl7="https://i.pinimg.com/1200x/3d/43/21/3d4321adf7b22ac83eeff9375c84b6f3.jpg"
  const imageurl8="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqbHHD6V-QTyfyQOGYqUWSW45PB1SgAZJPw1Ts4vUZK_lpTldOXtN1CKW25I7zHWgRlkk&usqp=CAU"
  const imageurl9="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLbtwbaUMl45hfTFCpmaPztazAvJ5l1wbr5tXXsV-jfUGggFBLPFnrJ1s7ohTQfYl_N8w&usqp=CAU"



  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item>
            <div className="d-flex row ">
              <div className="col-4 ">
                <img
                  style={{ width: "400px", height: "350px ", marginLeft: "5%" }}
                  src={imageurl1}
                  alt="First slide"
                />
                <p className="text-center fw-bold"> ₹6,40,643 raised out of  ₹7,57,000</p>
              </div>

              <div className="col-4 ml-3 ">
                <img
                  style={{ width: "400px", height: "350px ",  }}
                  src={imageurl2}
                  alt="First slide"
                />
                <p className="text-center fw-bold"> ₹92,05,432 raised out of  ₹94,00,000</p>
              </div>

              <div className="col-4 ml-3 ">
                <img
                  style={{ width: "400px", height: "350px ",  }}
                  src={imageurl3}
                  alt="First slide"
                />
                <p className="text-center fw-bold"> ₹3,45,000 raised out of  ₹7,00,000</p>
              </div>
            </div>
          </Carousel.Item>
          
        </Carousel>
      </div>

      <div style={{ marginTop: "3%" }}>
        <Carousel>
          
        <Carousel.Item>
            <div className="d-flex row ">
              <div className="col-4 ">
                <img
                  style={{ width: "400px", height: "350px ", marginLeft: "5%" }}
                  src={imageurl4}
                  alt="First slide"
                />
                <p className="text-center fw-bold"> ₹3,45,000 raised out of  ₹7,00,000</p>
              </div>

              <div className="col-4 ml-3 ">
                <img
                  style={{ width: "400px", height: "350px ",  }}
                  src={imageurl5}
                  alt="First slide"
                />
                  <p className="text-center fw-bold"> ₹92,05,432 raised out of  ₹94,00,000</p>
              </div>

              <div className="col-4 ml-3 ">
                <img
                  style={{ width: "400px", height: "350px ",  }}
                  src={imageurl6}
                  alt="First slide"
                />
                 <p className="text-center fw-bold"> ₹6,40,643 raised out of  ₹7,57,000</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="d-flex" style={{marginTop:"4%"}}>

        <div className="col-5 ml-4">
            <img
                style={{ width: "400px", height: "350px ", marginLeft:"4%"  }}
                src={imageurl4}
                alt="First slide"
                />
        </div>

        <div className="ml-4">

            <h3 className="fw-light">What's Better Than Saving 1 Child ?</h3>

            <div style={{marginTop:"4%"}}>
            
                <h1 className="fw-bold">Saving 12 More!!!</h1>

            </div>

            <div style={{marginTop:"4%"}}>
            <Button variant="warning" className='mr-3' style={{width:"275px"}}>Start Fundraiser</Button>
            </div>

        </div> 

      </div>
      <div className="d-flex row" style={{marginTop:"3%"}}>
            <p className="fs-3 text-center">Confused About How To Start Fundraise?</p>
            <div className="text-center" >
            <Button variant="warning" className='mr-3' style={{width:"275px"}}>Talk to Us!</Button>
            </div>
        </div>

      <div style={{ marginTop: "3%" }}>
        <Carousel>
          
        <Carousel.Item>
            <div className="d-flex row ">
              <div className="col-4 ">
                <img
                  style={{ width: "400px", height: "350px ", marginLeft: "5%" }}
                  src={imageurl7}
                  alt="First slide"
                />
                <p className="text-center fw-bold"> ₹92,05,432 raised out of  ₹94,00,000</p>
              </div>

              <div className="col-4 ml-3 ">
                <img
                  style={{ width: "400px", height: "350px ",  }}
                  src={imageurl8}
                  alt="First slide"
                />
                 <p className="text-center fw-bold"> ₹6,40,643 raised out of  ₹7,57,000</p>
              </div>

              <div className="col-4 ml-3 ">
                <img
                  style={{ width: "400px", height: "350px ",  }}
                  src={imageurl9}
                  alt="First slide"
                />
                <p className="text-center fw-bold"> ₹3,45,000 raised out of  ₹7,00,000</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="text-center" style={{ marginTop: "3%" }}>
            <Button variant="warning" className='mr-3'>Load More...</Button>
            </div>
    </div>
  );
}

export default TrustInfo;
