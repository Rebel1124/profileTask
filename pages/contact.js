//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'

export default () => (
  <Layout>
    <br />
    <h1 id ="Contact" style={{color: "midnightblue"}}>Contact Details</h1>   
      <p><b style={{color: "darkred"}}>Address:</b> 3 Santa Barbara, 63 Blaauwberg Road, Table View, Cape Town, 7441 (ZA)</p>
      <p><b style={{color: "darkred"}}>Email:</b> desiganr@gmail.com</p>
      <p><b style={{color: "darkred"}}>Cell:</b> 082 3305 237</p>
      <p><b style={{color: "darkred"}}>LinkedIn:</b>
        <a target="_blank" href="https://www.linkedin.com/in/desigan-reddy-97753364/">  https://www.linkedin.com/in/desigan-reddy-97753364/</a></p>

  </Layout>
)