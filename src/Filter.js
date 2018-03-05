import React, { Component} from 'react'


export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      
    }
    this.cities = this.cities.bind(this)
    this.homeTypes = this.homeTypes.bind(this)
    this.bedrooms = this.bedrooms.bind(this)
  }
  
  componentWillMount(){
    this.props.populateAction()
  }
  
  cities(){
    
    if(this.props.globalState.populateFormsData.cities !== undefined){
      var { cities } = this.props.globalState.populateFormsData
      console.log(cities);
      return cities.map((item) => {
        return(
          <option key={item} value={item} >{item}</option>
        )
      })
    } 
     
  }
  
  homeTypes(){
    
    if(this.props.globalState.populateFormsData.homeTypes !== undefined){
      var { homeTypes } = this.props.globalState.populateFormsData
      console.log(homeTypes);
      return homeTypes.map((item) => {
        return(
          <option key={item} value={item} >{item}</option>
        )
      })
    } 
    
  }
  
  bedrooms(){
    
    if(this.props.globalState.populateFormsData.bedrooms !== undefined){
      var { bedrooms } = this.props.globalState.populateFormsData
      console.log(bedrooms);
      return bedrooms.map((item) => {
        return(
          <option key={item} value={item} >{item}+ BR</option>
        )
      })
    } 
    
  }
  
  render () {
    return (
      <section id="filter">
       <div className="inside">
         <h4>Filter</h4>
         
         <select name= "city" className="filters city" onChange={this.props.change}>
          <option value="All" >All Cities</option>
          {this.cities()}
         </select>
         
         <select name= "homeType" className="filters homeType" onChange={this.props.change}>
           <option value="All" >All Home Types</option>
           {this.homeTypes()}
         </select>
         <label htmlFor="bedrooms"></label>
         <select name= "bedrooms" className="filters bedrooms" onChange={this.props.change}>
          <option value="0">All Bedrooms</option>
          {this.bedrooms()}
          
         </select>
         <div className="filters price">
            <span className="title price">Price</span>
            <label htmlFor="min_price">Min.</label>
            <input type="text" name ="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price}/>
            <label htmlFor="max_price">Min.</label>
            <input type="text" name ="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price}/>
         </div>
         
         <div className="filters floor-space">
            <span className="title floor-space">Floor Space</span>
            <label htmlFor="min_floor_space">Min.</label>
            <input type="text" name ="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space}/>
            <label htmlFor="max_floor_space">Max.</label>
            <input type="text" name ="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space}/>
         </div>
         
         <div className="filters extras">
          <span className="title">Extras</span>
          
          <label htmlFor="elevator">
            <span>Elevator</span> 
            <input type="checkbox" value="elevator" name="elevator" onChange={this.props.change}/>
          </label>
          <hr/>
          <label htmlFor="swimming_pool">
            <span>Swimming Pool</span> 
            <input type="checkbox" value="swimming-pool" name="swimming_pool" onChange={this.props.change}/>
          </label>
          <hr/>   
          <label htmlFor="basement">
            <span>Basement</span> 
            <input type="checkbox" value="basement" name="basement" onChange={this.props.change}/>
          </label>
          <hr/>
          <label htmlFor="gym">
            <span>Gym</span> 
            <input type="checkbox" value="gym" name="gym" onChange={this.props.change}/>
          </label>
          <hr/>
          <label htmlFor="storage">
            <span>Storage</span> 
            <input type="checkbox" value="storage" name="storage" onChange={this.props.change}/>
          </label>
          <hr/>
          <label htmlFor="parking">
            <span>Parking</span> 
            <input type="checkbox" value="parking" name="parking" onChange={this.props.change}/>
          </label>
          <hr/>
         </div>
       </div>
      </section>
    )
  }
}


