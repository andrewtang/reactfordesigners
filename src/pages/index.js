import React from 'react'
import Link from 'gatsby-link'
import Wave from '../components/wave'
// import staticdata from '../../staticdata.json'

const IndexPage = () => (
  <div>

      <div className="Hero">
          <div className="HeroGroup">
            <h1>Andrew learns how to code Reactjs</h1>
            <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
            <Link to="/video">Watch the video</Link>

            <div className="Logos">
              <img src={require('../images/logo-sketch.png')} width="50" />
              <img src={require('../images/logo-figma.png')} width="50" />
              <img src={require('../images/logo-studio.png')} width="50" />
              <img src={require('../images/logo-framer.png')} width="50" />
              <img src={require('../images/logo-react.png')} width="50" />
              <img src={require('../images/logo-swift.png')} width="50" />
            </div>

           <Wave />

          </div>
      </div>

  <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
      <Cell title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>

  </div>
  
)

export default IndexPage