import React, { Component,useState } from 'react';
const Eventhandler = () => {
const data = [{category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Electronics", price: "$49.99", stocked: false, name: "Iphone 11"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
const [Flag ,setFlag] =useState(false); //for checkout is clicked or not
const [Show ,setShow] =useState(true); //for change the checkout test 
const [Search, setSearch]=useState(false);
const [Key ,setKey] =useState("");
const handelclick=()=>{
    setFlag(!Flag) 
    setShow(!Show) 
    // console.log("button clicked");

    // data.map((item,index)=>{
    //     if(item.category=="Electronics"){
    //         console.log(item,index);
    //     }
    // })
}
const search=()=>{
    setSearch(true)
    let searchKey=document.getElementById('searchKey').value
    if(searchKey==""){
        setSearch(false)
    }
    setKey(searchKey)
    // let ourdata = document.getElementsByTagName('p').outerText
    // console.log('search button active and Your searched',searchKey)

}

// if(Search){
//     console.log("when search")
// }else{
//     console.log("when not search")
// }
    
    return ( 
            <div>
                <input type="search" onKeyUp={search}  id="searchKey"/><br/>
                 {/* Search data show  */}
                 {/* {
                    data.map((items,index)=>{
                        let str =items.name
                        if(str.search(Key)>-1 && Search){
                            console.log(items.name,index,str.search(Key));
                            return(
                                <p>{items.name}</p>
                            )
                        }
                    })
                    // Search?<p>Search work start </p>:<p>Search not working</p>
                } */}
                <input type="checkbox" onClick={handelclick}></input><samp>{Show ?"Show Stocked Item":"Show all Item"}</samp>
                {/* <button onClick={handelclick}>Click me</button> */}
                {
                    Search?
                    <div>
                        <h3>Electronics</h3>
                        <ul>
                            {
                                data.map((items,index)=>{
                                    let str =items.name
                                    if(str.search(Key)>-1 && Search){
                                        // console.log(items.name,index,str.search(Key));
                                        return(
                                            items.stocked==false?
                                            <p style={{color:"red"}}>{items.category=="Electronics"? items.name:""}</p>
                                            :
                                            <p>{items.category=="Electronics" ?items.name:""}</p>
                                        )
                                    }
                                })
                                // Search?<p>Search work start </p>:<p>Search not working</p>
                            }
                        </ul>
                        <h3>Sporting Goods</h3>
                        <ul>
                            {
                                data.map((items,index)=>{
                                    let str =items.name
                                    if(str.search(Key)>-1 && Search){
                                        // console.log(items.name,index,str.search(Key));
                                        return(
                                            items.stocked==false ?
                                            <p style={{color:"red"}}>{items.category=="Sporting Goods"? items.name:""}</p>
                                            :
                                            <p>{items.category=="Sporting Goods"? items.name:""}</p>
                                        )
                                    }
                                })
                                // Search?<p>Search work start </p>:<p>Search not working</p>
                            }
                        </ul>
                    </div>
                    :
                    //it run when Search not active
                    <div>
                        <h3>Electronics</h3>
                        <ul>
                            {
                                Flag==false?
                                    data.map((item)=>{
                                        if(item.category=="Electronics") {
                                            return ( 
                                                <div> 
                                                    {    
                                                        item.stocked==false ?
                                                            <p style={{color:"red"}}>{item.name} {item.price} </p>
                                                        :
                                                            <p>{item.name} {item.price} </p>
                                                    }
                                                </div>
                                            )                              
                                        }
                                    })
                                :
                                    data.map((item)=>{
                                        if(item.category=="Electronics") {
                                            return ( 
                                                <div>
                                                    {    
                                                        item.stocked==true ?<p >{item.name} {item.price} </p>:<p></p>
                                                    }
                                                </div>
                                            )   
                                        }
                                    })   
                            }                    
                        </ul>
                        <h3>Sporting Goods</h3>
                        <ul>
                            {
                                Flag==false?
                                    data.map((item)=>{
                                        if(item.category=="Sporting Goods") {
                                            return ( 
                                                <div> 
                                                    {    
                                                        item.stocked==false ?
                                                            <p style={{color:"red"}}>{item.name} {item.price} </p>
                                                        :
                                                            <p>{item.name} {item.price} </p>
                                                    }
                                                </div>
                                            )                              
                                        }
                                    })
                                :
                                    data.map((item)=>{
                                        if(item.category=="Sporting Goods") {
                                            return ( 
                                                <div>
                                                    {    
                                                        item.stocked==true ?<p >{item.name} {item.price} </p>:<p></p>
                                                    }
                                                </div>
                                            )   
                                        }
                                    })   
                                    
                            }                    
                        </ul>                
                    </div>
                }
            </div>
    )
}
export default Eventhandler;