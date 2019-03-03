import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import swal from 'sweetalert';
import * as actions from '../actions';



const Sidebar = (props) => {
  let data = props.data

  return (<div className="sidbar-nav">
    
    <ul>
    {
        props.newdata ? props.newdata.map((data, Key) => {
          return <li key={Key}><a>{data.title}</a><button className="del-icon-btn" onClick={()=>props.deleteData()}> <i class="fa fa-trash" aria-hidden="true"></i></button> </li>
        }):null
    }
    
    </ul>
  
    <ul>

      {
        data.items ? data.items.map((data, Key) => {
          return <li key={Key}><a>{data.link}</a></li>
        }) : null
      }

    </ul>
  </div>)
}

// const Sidebar = (props) => {
//   let data = props.data

//   return (<div className="sidbar-nav">
//     <ul>

//       {
//         data.items ? data.items.map((data, Key) => {
//           return <li key={Key}><a>{data.link}</a></li>
//         }) : null
//       }

//     </ul>
//   </div>)
// }



const HeaderPart=(props)=>{
let data=props.data
return(
  <header className="header-sec">
  <div className="container-fluid">
    <nav className="top_navbar">
      <div className="left-nav-sec">
        <a className="btn btn-small light-wht-bg cat_btn">{data.feed !== undefined ? data.feed.title : data}</a>
      </div>

    </nav>
  </div>
</header>
)
}

const Card = (props) => {
  let data = props.data
  return (
    <div id="main" className="main_sec">
    <HeaderPart data={data}/>
    


      <div className="main_wrapper">
        <div className="search_input_mob">
          <div className="container">
            <div className="choosebox-search sidebar-srch">
              <input className="form-control ch_box_search mobile_search" type="input" placeholder="submit the url"  />
            </div>
          </div>
        </div>
       
     <section className="popular-pick-sec">
          <div className="container-fluid">
            <div className="popular_pick_root">

              {
                console.log("props",props.newdata)
              }

             {
              props.newdata?props.newdata.map((a, Key) => {
                  return <div className="populr_pick_box" key={Key}>
                    <div className="populr_bx_row" >
                      <div className="populr_pic_desc">
                        <div className="populr_title">
                          <h4>{a.pubDate}</h4>
                          <h4>{a.title}</h4>
                        </div>
                        <div className="populr_desc">
                          <p>{a.description} </p>
                        </div>
                      </div>

                    </div>
                    <hr />
                  </div>
                }) :null
              } 

              {
                data.items !== undefined ? data.items.map((a, Key) => {
                  return <div className="populr_pick_box" key={Key}>
                    <div className="populr_bx_row" >
                      <div className="populr_pic_desc">
                        <div className="populr_title">
                          <h4>{a.pubDate}</h4>
                          <h4>{a.title}</h4>
                        </div>
                        <div className="populr_desc">
                          <p>{a.description} </p>
                        </div>
                      </div>

                    </div>
                    <hr />
                  </div>
                }) : null
              }

            </div>
          </div>
        </section>

      </div>

    </div>

  )
}

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      field1:"",
      newdata:[]
    };
 
  }


  async  componentDidMount() {
    await this.props.getData(response => {
      console.log("ClearCart", response.data.feed)
      this.setState({ data: response.data })
    })

  }

  submitData(){
  let items=[{"title":this.state.field1,"pubDate":"23-jan","description":this.state.field1}]
  
  console.log("1",items)
  this.setState({newdata:items})
    
  
  }
  

  




  render() {

    console.log("reduxdata",this.props.reduxdata)
    let { data } = this.state
    console.log(data.feed !== undefined ? data.items : data)
    return (
      <div>
        <div className="wrapper">
          <div id="mySidenav" className="sidenav">
            <div className="choosebox-search sidebar-srch">
              <input className="form-control ch_box_search" type="search" placeholder="enter the URL" aria-label="Search"  onChange={(event)=>{this.setState({field1:event.target.value})}}/>
              <button className="submitbutton" type="submit" onClick={()=>this.submitData()}>Submit</button>
            </div>
            <Sidebar data={this.props.reduxdata} newdata={this.state.newdata}  deleteData={()=>this.setState({newdata:null})}/>
          </div>
          {/*/1. Left Sidebar section end here */}
          {/* Main Middle Section Start Here */}
          <Card data={data} newdata={this.state.newdata} />
        </div>
      </div>

    );
  }
}


const mapStateToProps = state => ({
  reduxdata:state.admin.data
})


export default withRouter(connect(mapStateToProps, actions)(Header));
