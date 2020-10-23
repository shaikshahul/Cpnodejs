import React from "react";
import { withRouter } from "react-router";

class Page1 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items:[]
    }
  }
  
  componentDidMount(){
    const auth_token = "Token "+'1e3c77263bd0e1793403c23dccb3f33955370062'
    const myHeaders = new Headers();
    const url = 'https://test.erp.ssiaeration.com/api/suggested/item/images/'
    myHeaders.append('Authorization', auth_token);
    const myRequest = new Request(url, {
       method: 'GET',
       headers: myHeaders,
     });
   fetch(myRequest)
     .then((response) => response.json())
     .then((data) => {
        this.setState({
          items:data.item_images
        })
     });
  }
  render() {
    const { history } = this.props;
    const tr_elements = this.state.items.map((item, index) =>{
      return  <div className="col-md-2 center-child-items suggested-image" title={item.item_number}>
              {item.image_signed_url == null?<span>-</span>:
                <img className="thumbnail_image" src={item.image_signed_url == null ?"javascript:void(0);":item.image_signed_url[0]} alt="No Image Available"/>
              }
             <div className="suggested-image-title">{item.item_number}</div>
        </div>
  })
    return (

        <div className="row">
          <div className="card col-lg-12 suggested-item"> 
            <h4 className="card-title inline-block">Featured Products </h4>
            <div className="" id="suggested_items">
              <div className="row">
                {tr_elements}
              </div>              
            </div>
          </div>
        </div>
    );
  }
}

export default withRouter(Page1);
