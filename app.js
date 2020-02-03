import React,{Component} from 'react';
import axios from 'axios'

export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            cards:[],
            
            
        }

    }
   
    componentDidMount(){

        axios("https://randomuser.me/api/?results=50")
        .then(response=>response.data)
        .then(data=>{

           let profiles=data.results.map((item)=>
            {
                return(
               <div key={item.results} className="card">
                 <img src={item.picture.medium} alt="img"/>
                 <div className="card-body">
                <h4>{item.name.title}. {item.name.first}</h4>
                 <h5>AGE:{item.dob.age}</h5>
                 </div>
               </div>
                
                )
            }
        )

          this.setState({cards:profiles})

       })
       
    }
            
    render(){
       console.log(this.state.cards)
       return(
         <div class="col">
             <div class="row">
             {this.state.cards}
             </div>
         </div>
       )

    }
}

