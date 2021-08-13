import React, { Component,useState } from 'react';
const Eventhandler = () => {
const data = [{category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Electronics", price: "$49.99", stocked: false, name: "Iphone 11"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Car", price: "$199.99", stocked: true, name: "Nexus 7"},
    {category: "Car", price: "$199.99", stocked: false, name: "Farari"},
    {category: "Car", price: "$199.99", stocked: true, name: "Tata Sumo"}
];
const arr=[];
data.map((item)=>{
    if(arr.indexOf(item.category)===-1){
        arr.push(item.category)          
    }
})
// arr.map((cat)=>{
//     // console.log("**********",cat);
//     data.map((item)=>{
//         if(cat==item.category){
//             // console.log(item.name)
//         }
//     })

// })
const [Flag ,setFlag] =useState(false); //for checkout is clicked or not
const [Show ,setShow] =useState(true); //for change the checkout test 
const [Search, setSearch]=useState(false);
const [Key ,setKey] =useState("");

const handelclick=()=>{
    setFlag(!Flag) 
    setShow(!Show) 
}
const search=()=>{
    setSearch(true)
    let searchKey=document.getElementById('searchKey').value
    if(searchKey==""){
        setSearch(false)
    }
    setKey(searchKey)
}

// if(Search){
//     console.log("when search")
// }else{
//     console.log("when not search")
// }

    return(
        <div>
            <input type="search" onKeyUp={search}  id="searchKey"/><br/>
            {/* <Catlist data={data}/> */}
            <input type="checkbox" onClick={handelclick}></input><samp>{Show ?"Show Stocked Item":"Show all Item"}</samp>
            {  
                Search?
                    arr.map((cat)=>{
                        return(
                            <div>
                            <ul>{cat}</ul>
                            {
                                data.map((items)=>{
                                    if(cat==items.category){
                                        let str=items.name.toUpperCase()
                                        if(str.search(Key.toUpperCase())>-1 && Search){
                                            return(
                                            <div style={{marginLeft:"100px"}}>
                                                {
                                                        items.stocked==false?
                                                        <p style={{color:"red"}}>{items.category==cat? items.name:""}</p>
                                                        :
                                                        <p>{items.category==cat ?items.name:""}</p>
                                                }
                                            </div>
                                            )
                                        }
                                    }
                                })
                            }
                            </div>
                        )
                    })
                :
                //this code run when not search
                    arr.map((cat)=>{
                        return(
                            <div>
                                <ul>{cat}</ul>
                                {
                                    data.map((item)=>{
                                        if(cat==item.category){
                                            return ( 
                                                <div> 
                                                    {    
                                                    <div style={{marginLeft:"100px"}}>
                                                        {
                                                             //show item when checkout
                                                                item.stocked==false ?
                                                                    Flag==false&&
                                                                    <p style={{color:"red"}}>{item.name} {item.price} </p>
                                                                :
                                                                <p>{item.name} {item.price} </p>
                                                        }
                                                    </div>
                                                    }
                                                </div>
                                            ) 
                                        }
                                    })
                                }
                            </div>
                        )
                    })
                
            }
        </div>
    )

}
export default Eventhandler;



    // return ( 
    //         <div>
    //             <input type="search" onKeyUp={search}  id="searchKey"/><br/>
    //            {/* <Catlist data={data}/> */}
    //             <input type="checkbox" onClick={handelclick}></input><samp>{Show ?"Show Stocked Item":"Show all Item"}</samp>
    //             {
    //                 Search?
    //                 <div>
    //                     <h3>Electronics</h3>
    //                     <ul>
    //                         {
    //                             data.map((items,index)=>{
    //                                 let str =items.name
    //                                 if(str.search(Key)>-1 && Search){
    //                                     return(
    //                                         items.stocked==false?
    //                                         <p style={{color:"red"}}>{items.category=="Electronics"? items.name:""}</p>
    //                                         :
    //                                         <p>{items.category=="Electronics" ?items.name:""}</p>
    //                                     )
    //                                 }
    //                             })
    //                         }
    //                     </ul>
    //                     <h3>Sporting Goods</h3>
    //                     <ul>
    //                         {
    //                             data.map((items,index)=>{
    //                                 let str =items.name
    //                                 if(str.search(Key)>-1 && Search){
    //                                     // console.log(items.name,index,str.search(Key));
    //                                     return(
    //                                         items.stocked==false ?
    //                                         <p style={{color:"red"}}>{items.category=="Sporting Goods"? items.name:""}</p>
    //                                         :
    //                                         <p>{items.category=="Sporting Goods"? items.name:""}</p>
    //                                     )
    //                                 }
    //                             })
    //                             // Search?<p>Search work start </p>:<p>Search not working</p>
    //                         }
    //                     </ul>
    //                 </div>
    //                 :
    //                 //it run when Search not active
    //                 <div>
    //                     <h3>Electronics</h3>
    //                     <ul>
    //                         {
    //                             Flag==false?
    //                                 data.map((item)=>{
    //                                     if(item.category=="Electronics") {
    //                                         return ( 
    //                                             <div> 
    //                                                 {    
    //                                                     item.stocked==false ?
    //                                                         <p style={{color:"red"}}>{item.name} {item.price} </p>
    //                                                     :
    //                                                         <p>{item.name} {item.price} </p>
    //                                                 }
    //                                             </div>
    //                                         )                              
    //                                     }
    //                                 })
    //                             :
    //                                 data.map((item)=>{
    //                                     if(item.category=="Electronics") {
    //                                         return ( 
    //                                             <div>
    //                                                 {    
    //                                                     item.stocked==true ?<p >{item.name} {item.price} </p>:<p></p>
    //                                                 }
    //                                             </div>
    //                                         )   
    //                                     }
    //                                 })   
    //                         }                    
    //                     </ul>
    //                     <h3>Sporting Goods</h3>
    //                     <ul>
    //                         {
    //                             Flag==false?
    //                                 data.map((item)=>{
    //                                     if(item.category=="Sporting Goods") {
    //                                         return ( 
    //                                             <div> 
    //                                                 {    
    //                                                     item.stocked==false ?
    //                                                         <p style={{color:"red"}}>{item.name} {item.price} </p>
    //                                                     :
    //                                                         <p>{item.name} {item.price} </p>
    //                                                 }
    //                                             </div>
    //                                         )                              
    //                                     }
    //                                 })
    //                             :
    //                                 data.map((item)=>{
    //                                     if(item.category=="Sporting Goods") {
    //                                         return ( 
    //                                             <div>
    //                                                 {    
    //                                                     item.stocked==true ?<p >{item.name} {item.price} </p>:<p></p>
    //                                                 }
    //                                             </div>
    //                                         )   
    //                                     }
    //                                 })   
                                    
    //                         }                    
    //                     </ul>                
    //                 </div>
    //             }
    //         </div>
    // )