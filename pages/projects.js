//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'

export default () => (
  <Layout>
    <br />
      <h1 id ="Proj" style={{color: "midnightblue"}}>Projects</h1>
        <ul style={{paddingBottom: "45px"}}>
        <li style={{color: "darkred"}}><b>Capstone Project II - Shopping Cart</b></li>
        <a target="_blank" href="https://github.com/Rebel1124/Capstone_II">
          https://github.com/Rebel1124/Capstone_II</a>

        <br></br>
        <br></br>


        <li style={{color: "darkred"}}><b>Desi - Resume</b></li>
        <a target="_blank" href="https://github.com/Rebel1124/Desigan_Reddy_Resume">
          https://github.com/Rebel1124/Desigan_Reddy_Resume</a>

      </ul>
  </Layout>
)