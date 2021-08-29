import React from 'react';
import "./Home.css";
import Products from './Products';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
              <img className="home_image" src="https://pbs.twimg.com/media/Ez6mPGjVcAItyj4.jpg" alt="" />

              <div className="home_row">
                  <Products 
                  id="25295018"
                    title="the Lean Startup" 
                    price={400}
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    rating={5}
                 />
                  <Products 
                    id="92084592"
                    title="Echo Dot India with Alexa" 
                    price={2300}
                    image="https://www.reliancedigital.in/medias/Amazon-Echo-dot-3-0-BK-Computer-Speaker-491431035-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NjM2NHxpbWFnZS9qcGVnfGltYWdlcy9oYjUvaGY3LzkwNTk0NDcwNDYxNzQuanBnfGFlZjBlOTZkMzY4MmI0ZTBhMDMzZWRiMjM1MjE2OWYxYTFmZWMxMWJlNjY2YzI5Nzc4ODM0ZWU2MWNlYjY0ZjE"
                    rating={4}
                 />
                 <Products 
                    id="25472395"
                    title="New Apple iPhone 12 Pro" 
                    price={109990}
                    image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&.v=1567022175704"
                    rating={5}
                 />

              </div>
              <div className="home_row">
              <Products 
                    title="the Lean Startup" 
                    price={19.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    rating={5}
                 />
                 <Products 
                    title="the Lean Startup" 
                    price={19.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    rating={5}
                 />
                 <Products 
                    title="the Lean Startup" 
                    price={19.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    rating={1}
                 />
              </div>
              <div className="home_row">
                  {/* products */}
              </div>
              
            </div>
        </div>
    )
}

export default Home;
