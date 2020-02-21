import React, { Component } from 'react';
import SocialLinkItem from './SocialLinkItem';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            { resumeData.socialLinks && resumeData.socialLinks.map((item, index) => <SocialLinkItem key={index} item={item} />) }
          </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}