//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'

/* Notice in the example below how we render static images with Next.js:
Create a folder called static in your project root directory. From your code you can then reference those files with /static/ URLs (see<img src={`/static/art/${props.data.image}.jpg`} alt=""/>) 
Note: Don't name the static directory anything else. The name is required and is the only directory that Next.js uses for serving static assets.*/
export default () => (
	<Layout>
		<br />

		<h1 style={{color: "midnightblue", textAlign:"center", marginRight:"250px"}}>Professional Summary</h1>

		<br />
    	<p>I have been working in the financial services industry for about 11 years now. I began my career in 2007 as a market risk analyst
        	at Nedbank Capital (Ned Cap) where I spent the better part of 6 years. I left Ned Cap in 2014 to take up a quantitative analyst position
        	at Absa Capital. In 2015, I joined OMSFIN (Old Mutual Specialized Finance) in Cape Town as a risk analyst before joining Futuregrowth in
        	2016 to take up my current role as a Fixed Income Dealer.</p>

    	<p>During my time time in the industry I have managed to obtain both my Chartered Financial Analyst (CFA) and 
      		Financial Risk Management (FRM) designations. In addition to this, I have also obtained my ACI Dealing 
      		Certificate and more recently I have completed my Masters Degree in Commerce (specializing in Finance 
      		and Risk Management) from the University of Cape Town.</p>

    	<p>I have also developed job specific skills relating to the financial markets, in particular risk management, 
      		fixed income dealing and software development. I am also very proficient in Microsoft Excel and VBA as well as 
      		Python. On a more personal note, I enjoy going to the gym and am an ardent football and rugby fan. 
      		I enjoy action/comedies and my favorite genre of music is rock/pop.</p>

  </Layout>
)
