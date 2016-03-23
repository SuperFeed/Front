import React from 'react'
import Login from './Login'

const styles = {
  masthead: {
    backgroundImage: 'url(http://www.nealjs.com/img/hero-bg-01.jpg)',
    backgroundSize: 'cover',
    height: '98vh',
    marginBottom: '3rem'
  },
  banner: { paddingTop: '10rem' },
  h1: { fontSize: '4rem' },
  h2: { fontSize: '1.5rem' },
  footer: { marginTop: '2rem' }
}

export default function Home () {
  return <div>
    <div className="ui inverted vertical masthead center aligned segment" style={styles.masthead}>
      <div className='ui text container' style={styles.banner}>
        <h1 className='ui inverted header' style={styles.h1}>SuperFeed</h1>
        <h2 style={styles.h2}>Community-focued hyperlocal social event feed</h2>
        <br />
        <Login />
      </div>
    </div>

    <div className='ui container'>
      <div className='ui vertical stripe segment'>
        <div className='ui equal width stackable grid'>
          <div className='center aligned row'>
            <div className='column'>
              <h2 className='ui center aligned icon header'>
                <i className='circular calendar icon'></i>
                Events
              </h2>
              <p>SuperFeed tracks events around you. Whether it's tracked on SuperFeed, or made on Facebook, SuperFeed will let you know what's going on.</p>
            </div>
            <div className='column'>
              <h2 className='ui center aligned icon header'>
                <i className='circular home icon'></i>
                Community
              </h2>
              <p>Connect with your community with SuperFeed!</p>
            </div>
            <div className='column'>
              <h2 className='ui center aligned icon header'>
                <i className='circular users icon'></i>
                Friends
              </h2>
              <p>See what's up with your friends!</p>
            </div>
          </div>
        </div>
      </div>

      <div className='ui vertical stripe center aligned segment'>
        <h2>SuperFeed</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>


    <div className='ui inverted vertical footer segment' style={styles.footer}>
      <div className='ui container'>
        <div className='ui stackable inverted divided equal height stackable grid'>
          <div className='three wide column'>
            <h4 className='ui inverted header'>About</h4>
            <div className='ui inverted link list'>
              <a href='https://github.com/SuperFeed/SuperFeed' className='item'>Source Code</a>
              <a href='http://rdel.io' className='item'>Ryan Delaney</a>
              <a href='#' className='item'>RPI</a>
            </div>
          </div>
          <div className='three wide column'>
            <h4 className='ui inverted header'>Services</h4>
            <div className='ui inverted link list'>
              <a href='#' className='item'>Apps</a>
              <a href='#' className='item'>Terms of Service</a>
              <a href='#' className='item'>Privacy Policy</a>
            </div>
          </div>
          <div className='seven wide column'>
            <h4 className='ui inverted header'>SuperFeed</h4>
            <p>All content on this page is licensed under the MIT license.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
}
