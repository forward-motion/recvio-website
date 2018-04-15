import React, {Component} from 'react';
import VirtualizedSelect from 'react-virtualized-select';
import PopularArticles from './PopularArticles';
import EmailSubscribe from './EmailSubscribe';
import SocialMediaLinks from './SocialMediaLinks';
import Link from 'gatsby-link';

import '../../../styles/blog/sections/SideBar.scss';

class SideBar extends Component {

  render(){
    return(
      <div className="component-side-bar col-md-4">
        <div className="search">
          <VirtualizedSelect />
        </div>
          <PopularArticles articles={this.props.blogData}/>
          <SocialMediaLinks />
          <EmailSubscribe />
        </div>
    );
  }
}
export default SideBar;
SideBar.defaultProps = {
  blogData:[
    {
      id:1,
      title: "title article 1",
      subtitle: "subtitle",
      date: "2017_01_01",
      image: "http://via.placeholder.com/350x150",
      article:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },{
      id:2,
      title: "title article 2",
      subtitle: "subtitle",
      date: "2017_01_02",
      image: "http://via.placeholder.com/350x150",
      article:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    }]
}