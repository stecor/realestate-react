import React, { Component} from 'react'


export default class Listings extends Component {
  constructor () {
    super()
    this.state = {

    }
    this.loopListings= this.loopListings.bind(this)
  }

  clickedBtn = () => {
    console.log('swag')
  }



  loopListings(){

    var {listingsData} = this.props

    if(listingsData === undefined || listingsData.length === 0){
      return "Sorry your filter did not match any listing"
    }

    return listingsData.map((listing, index) => {

      var formatedPrice = listing.price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

      if(this.props.globalState.view === 'box'){

      //this is the box view
      return (
    <div className="col-md-3" key={index} >
      <div className="listing" >
        <div className="listing-img" style={{  background: `url("${listing.image}") no-repeat center center`}}>
          <span className="address">{listing.address}</span>
          <div className="details">
          <div className="col-md-3">
            <img className="user-img-box" src={listing.userImg} alt="" />
          </div>
          <div className="col-md-9">
            <div className="user-details">
              <span className="user-name">{listing.user}</span>
            </div>
          <div className="listing-details">
            <div className="floor-space">
              <i className="fa fa-square-o"></i>
              <span>{listing.floorSpace} ft&sup2;</span>
            </div>
            <div className="bedrooms">
              <i className="fa fa-bed"></i>
              <span>{listing.rooms} bedr.</span>
              </div>
            </div>
            <div className="view-btn">
              Details
            </div>
            <span className="post-date">Posted: {listing.postDate}</span>
            </div>
          </div>
        </div>
        <div className="bottom-info">
         <span className="price">${formatedPrice}</span>
         <span className="location"> <i className="fa fa-map-marker"></i> {listing.city} , {listing.state}</span>
        </div>
      </div>
      </div>
     )
   }else {

     // this is long view
     return (
   <div className="col-md-12 col-lg-6" key={index} >
     <div className="listing" >
       <div className="listing-img" style={{  background: `url("${listing.image}") no-repeat center center`}}>
         <span className="address">{listing.address}</span>
         <div className="details">
         <div className="col-md-3">
           <img className="user-img-long" src={listing.userImg} alt="" />
         </div>
         <div className="col-md-9">
           <div className="user-details">
             <span className="user-name">{listing.user}</span>
           </div>
         <div className="listing-details">
           <div className="floor-space">
             <i className="fa fa-square-o"></i>
             <span>{listing.floorSpace} ft&sup2;</span>
           </div>
           <div className="bedrooms">
             <i className="fa fa-bed"></i>
             <span>{listing.rooms} bedr.</span>
             </div>
           </div>
           <div className="view-btn">
             Details
           </div>
           <span className="post-date">Posted on: {listing.postDate}</span>
           </div>
         </div>
       </div>
       <div className="bottom-info">
        <span className="price">${formatedPrice}</span>
        <span className="location"> <i className="fa fa-map-marker"></i> {listing.city} , {listing.state}</span>
       </div>
     </div>
     </div>
    )
   }
    })
  }

  render () {
    return (
      <section id="listings">

        <section className="search-area">
          <input type="text" name="search" onChange={this.props.change}/>
        </section>

        <section className="sortby-area">
          <div className="results">{this.props.globalState.filterData.length} results found</div>
          <div className="sort-options">
            <select name="sortby"  className="sortby" onChange={this.props.change}>
              <option value="price-asc">Lowest Price</option>
              <option value="price-dsc">Highest Price</option>
            </select>
            <div className="view">
              <i className="fa fa-th-list" aria-hidden="true" onClick={this.props.changeView.bind(null, "long")}></i>
              <i className="fa fa-th" aria-hidden="true" onClick={this.props.changeView.bind(null, "box")}></i>
            </div>
          </div>
        </section>

        <section className="listings-results">
        <div className="row">
          {this.loopListings()}
        </div>
        </section>

        <section id="pagination">
        <div className="row">
          <ul className="pages">
            <li>Prev</li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>next</li>
          </ul>
          </div>

        </section>
      </section>
    )
  }
}
