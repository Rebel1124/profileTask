//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'

export default () => (
  <Layout>
    <br />
    <h1 style={{color: "midnightblue"}}>Professional Resume</h1>
    <br />

      <h2 id ="Emp_Hist" style={{color: "orangered"}}>Employment History</h2>

      <h3 style={{color: "darkred", fontSize: "25px", textAlign: "left", paddingTop:"15px"}}>Fixed Income Dealer - Futuregrowth Asset Management. Cape Town, Western Cape</h3>
      <h4 style={{color: "darkslateblue", fontSize: "20px", textAlign: "left"}}><em>May 2015 - Present</em></h4>
      <ul>

        <li>Trade execution on behalf of Portfolio Managers.</li>
        <li>Trading across multiple asset classes and instruments.</li>
        <li>Identify potential trade opportunities in the market.</li>
        <li>Provide input for investment presentations and decisions.</li>
        <li>Assisting with Quantitative research and analysis.</li>
        <li>Assisting with client report backs, including presenting to clients.</li>
        <li>Assist Money Market Managers in the managing of funds.</li>
        <li>Assist in the Cash Management of funds across the group.</li>
        <li>Enhancing Trading System processes and procedures using VBA and Python.</li>
      </ul>


      <h3 style={{color: "darkred", fontSize: "25px", textAlign: "left"}}>Risk Analyst - Old Mutual Specialised Finance. Cape Town, Western Cape</h3>
      <h4 style={{color: "darkslateblue", fontSize: "20px", textAlign: "left"}}><em>Apr 2014 - Apr 2015</em></h4>
      <ul>

        <li>Support quarterly client and mandate reporting activities.</li>
        <li>Undertake projects to enhance risk management methodologies.</li>
        <li>Model new and existing securities in Excel and Riskwatch.</li>
        <li>Analysis of interest rate dynamics a underlying OMFIN's ALM offering.</li>
        <li>Devise and simulate trading portfolio optimization strategies.</li>
        <li>Manage daily collateral margin calculations on swaps and repo's.</li>
      </ul>


      <h3 style={{color: "darkred", fontSize: "25px", textAlign: "left"}}>Market Risk Analyst - Nedbank Capital. Johannesburg, Western Cape</h3>
      <h4 style={{color: "darkslateblue", fontSize: "20px", textAlign: "left"}}><em>Feb 2007 - Feb 2013</em></h4>
      <ul>

        <li>Produced risk reports relating to the VaR utilization and risk limit exposures (Stress and Scenario limits).</li>
        <li>Worked on building and maintaining various financial models to evaluate different financial instruments
          (FRN's, Fixed Rate Bonds, FRA's, Swaps, Options, etc...) on both Excel and VBA.</li>
        <li>Involved in validating, monitoring and updating various illiquid single name credit default spreads.</li>
        <li>Assist in monitoring the bank's liquidity position.</li>
        <li>Produce various month end and quarter end reports on the performance of the trading desks as well as other ad-hoc reporting.</li>
      </ul>

      <br />

      <h2 id ="Edu" style={{color: "orangered"}}>Education</h2>

      <ul>
      <li style={{color: "darkred"}}><b>Masters in Commerce, Specialising in Finance and Risk Management</b></li>
      <p style={{color: "darkslateblue"}}><em>University of Cape Town. Cape Town, Westen Cape. 2016 - 2018</em></p>


      <li style={{color: "darkred"}}><b>Bachelor of Science Honours, Specialising in Financial Mathematics</b></li>
      <p style={{color: "darkslateblue"}}><em>University of Kwa-Zulu Natal. Durban, Kwa-Zulu Natal. 2006 - 2006</em></p>

      <li style={{color: "darkred"}}><b>Bachelor of Science Degree, Specialising in Actuarial Science and Statistics</b></li>
      <p style={{color: "darkslateblue"}}><em>University of Kwa-Zulu Natal. Durban, Kwa-Zulu Natal. 2003 - 2005</em></p>

      <li style={{color: "darkred"}}><b>Senior Certificate, Matric</b></li>
      <p style={{color: "darkslateblue"}}><em>Port Shepstone Secondary. Port Shepstone, Kwa-Zulu Natal. 1999 - 2002</em></p>
      </ul> 

      <br />

      <h2 id ="Cert" style={{color: "orangered"}}>Certifications</h2>
      <ul style={{color: "black", fontFamily: "'Times New Roman', serif"}}>

        <li>Certified Financial Analyst (CFA) Chartholder - CFA Institute</li>
        <li>Financial Risk Manager (FRM) - GARP</li>
        <li>Certified Treasury Professional (CTP) - AFP</li>
        <li>ACI Dealing Certificate - ACI Financial Markets Association</li>
        <li>Executive Professional in Aglo Trading (EPAT) - Quantinsti</li>
        <li>Junior Data Scientist - Hyperion Dev</li>
      </ul>

      <br />

      <h2 id ="Pub" style={{color: "orangered"}}>Publications</h2>
      <ul>
        <li style={{color: "darkred"}}><b>Quant Insti - EPAT Project</b></li>
        <a target="_blank" href="https://blog.quantinsti.com/predicting-stock-trends-technical-analysis-random-forests/">
          https://blog.quantinsti.com/predicting-stock-trends-technical-analysis-random-forests/</a>

      <br></br>
      <br></br>

      <li style={{color: "darkred"}}><b>Futuregrowth - Money Market Investing Article</b></li>
      <a target="_blank" href="https://www.futuregrowth.co.za/newsroom/shedding-light-on-money-market-fallacies/">
        https://www.futuregrowth.co.za/newsroom/shedding-light-on-money-market-fallacies/</a>
      </ul>

      </Layout>
)