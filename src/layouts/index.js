import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Card from '../components/cards'
import './index.css'
import Section from '../components/section'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
   <Header />
   {children()}

		<div className="CardGroup">
			<Card 
				title="DesignSystem"
				text="10 sections"
				image={require('../images/wallpaper.jpg')} />
			<Card 
				title="React for Designers"
				text="11 sections"
				image={require('../images/wallpaper2.jpg')} />
			<Card 
				title="Sound Design"
				text="5 sections"
				image={require('../images/wallpaper3.jpg')} />
			<Card 
				title="ARKit 2"
				text="10 sections"
				image={require('../images/wallpaper4.jpg')} />
			<Card 
				title="Augmented Reality"
				text="12 sections"
				image={require('../images/wallpaper.jpg')} />
		</div>

		<Section
			image={require('../images/wallpaper2.jpg')}
			logo={require('../images/logo-react.png')}
			title="React for Designers"
			text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify." />

</div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
