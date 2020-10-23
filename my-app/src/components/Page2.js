import React from "react";
import { withRouter } from "react-router";

class Page2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        groups:[]
    }
  }
  
  componentDidMount(){
    const auth_token = "Token "+'1e3c77263bd0e1793403c23dccb3f33955370062'
    const myHeaders = new Headers();
    const url = 'https://test.erp.ssiaeration.com/api/items/categories/group/'
    myHeaders.append('Authorization', auth_token);
    const myRequest = new Request(url, {
       method: 'GET',
       headers: myHeaders,
     });
   fetch(myRequest)
     .then((response) => response.json())
     .then((data) => {
        this.setState({
            groups:data
        })
     });
  }
  render() {
    const group_elements = this.state.groups.map((group, index) =>{
        return  <div className="category-group" onClick={this.formSubmit}>
            <img src={group.thumbnail} name-slug={group.name_slug} />
            <a className="category-group-name">{group.name}</a>
            <form  action="/items/" method='post' className="d-none">
                <input type="hidden"  name="category_group_name" value={group.name_slug} />
            </form>
        </div>
    })     
    return (
        <div className="col-lg-12 product-category-group">        
        <div className="category-groups-row">
            <div className="row" id="div_category_groups">
                <h4 className="inline-block categories-header">Categories</h4>
                <div className="category-groups" id="category_groups">
                    {group_elements}
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default withRouter(Page2);
