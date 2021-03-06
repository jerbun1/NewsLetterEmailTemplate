import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <table className="outer-Table">
        <tr>
          <td>
          <table className="inner-Table">
            {/* First Row */}
            <tr>
              <td className="First-Row">
                <h4>samson and sons</h4>
                <h1>newsletter issue no. 15</h1>
                <h3>July 15-21, 2021</h3>
              </td>
            </tr>
            {/* Second Row */}
            <tr>
              <td className="Second-Row">
                <h2>thoughts from the ceo</h2>
                {/* Enter image with dotted line below */}
                <div className="info">
                  Edgar Samson<br/>
                  At Samson and Sons, we value leadershp that produces results, but also retains our talented staff and kepps them motivated to do their absolute best.
                  The question of what makes a good leader then comes down to how does a leader ensure sustainable productivity? 
                  We have looked at leader from a number or largely successful companies, along with very mature startups,
                  and found that there are 6 key traits all food leaders possess. For this weeks newsletter,
                  we have decided to share them with you.
                </div>
              </td>
            </tr>
            {/* Third Row */}
            <tr>
              <td className="Third-Row">
                <h1>6 signs of a strong leader</h1>
                {/* Enter image with dotted line below */}
                <div className='container1'>
                  <div className="pic1">
                    <img src="https://i.ibb.co/5jZ9SZQ/test-Photo.png" alt="test-Photo" border="0" width="150px" height="150px"/>                
                  </div>
                  <div className="sign-1">
                    <h3>Leaders Dont Crave Credit</h3>
                    <p>A good leader does not mind receiving credit. But Their desire to get credit is nonexistent.
                      Instead, a leader is more concerned with the work at hand and completing it to the best of their ability.
                    </p>
                  </div>
                </div>
              </td>
            </tr>
            {/* Fourth Row */}
            <tr>
              <td className="Fourth-Row">
                {/* Enter image with dotted line below */}
                <div className='container2'>
                  <div className="sign-2">
                    <h3>More Coach, Less Player</h3>
                    <p>
                      The leaders work is important, but the quality of work from the team is more important. 
                      Good leaders care considerably more about fostering an environment that brings out the best from the team.
                    </p>
                  </div>
                  <div className="pic2">
                    <img src="https://i.ibb.co/7KDTc6g/test-Photo2.jpg" alt="test-Photo2" border="0" width="220px" height="220px"/>                  
                  </div>
                </div>
              </td>
            </tr>
            {/* Fifth Row */}
            <tr>
              <td className="Fifth-Row">
                {/* Enter image with dotted line below */}
                <div className='container3'>
                  <div className="pic3">
                    <img src="https://i.ibb.co/pw5hv0v/test-Photo3.jpg" alt="test-Photo3" border="0" width="260px" height="260px"/>                  
                  </div>
                  <div className="sign-3">
                    <h3>Emotional Intelligence</h3>
                    <p>Good leaders understand how they can make people feel in their presence. 
                      With that understanding a leader engages his.her team in a way that fosters a healthy, working relationship.
                    </p>
                  </div>
                  
                </div>
              </td>
            </tr>
            {/* Sixth Row */}
            <tr>
              <td className="Sixth-Row">
                {/* Enter image with dotted line below */}
                <div className='container4'>
                  <div className="sign-4">
                    <h3>Driven By Curiosity</h3>
                    <p>Good leaders give people the benefit of the doubt, they do not feel inclined to make negative assumptions about others.
                      Instead, they like to learn more about the team.
                    </p>
                  </div>
                  <div className="pic4">
                    <img src="https://i.ibb.co/HD1nh7G/test-Photo4.png" alt="test-Photo4" border="0" width="260px" height="260px"/>                  
                  </div>
                </div>
              </td>
            </tr>
            {/* Seventh Row */}
            <tr>
              <td className="Seventh-Row">
                {/* Enter image with dotted line below */}
                <div className='container5'>
                <div className="pic5">
                    <img src="https://i.ibb.co/61fycZS/test-Photo5.jpg" alt="test-Photo5" border="0" width="260px" height="260px"/>                  
                  </div>
                  <div className="sign-5">
                    <h3>Considers The Long-Term</h3>
                    <p>Good leaders care about being productive today and getting things done before the end of the week.
                      But they also care about the overall timescale,  the impact of their present actions on the furture.
                    </p>
                  </div>    
                </div>
              </td>
            </tr>
            {/* Eigth Row */}
            <tr>
              <td className="Eigth-Row">
                {/* Enter image with dotted line below */}
                <div className='container6'>
                  <div className="sign-6">
                    <h3>Conviction</h3>
                    <p>Good leaders are strong-willed and resolute. 
                      When they act on their values, even when they are unpopular or not sound business strategy, 
                      they demonstrate character and resolve.
                    </p>
                  </div>
                  <div className="pic6">
                    <img src="https://i.ibb.co/ch1bLcF/test-Photo6.png" alt="test-Photo6" border="0" width="260px" height="260px"/>                 
                  </div>
                </div>
              </td>
            </tr>
          </table>
          </td>
        </tr>
      </table>
        
      
    </div>
  )
}
