import React, {Component} from "react";

interface State{
    name:string;
    email:string;
    age:number;
}

export default class Ex5 extends Component<object, State>{
    render() {
        const buttonInput:React.CSSProperties={
            padding:5,
            width:"70%"
        }
        return (
            <div style={{
                textAlign:"center",
                margin:"auto",
                width:"30%"
            }}>
                <form style={{
                    textAlign:"center",
                    border:"3px solid black",
                    marginTop:50
                }}>
                    <h2>Nhập thông tin người dùng</h2>
                    <input
                        style={buttonInput}
                        
                    />
                    <p></p>
                    <input style={buttonInput}/>
                    <p></p>
                    <input style={buttonInput}/>
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                        <button style={{background:"blue",marginTop:15,padding:10,}}>Gửi</button>
                        <button style={{background:"blue",marginTop:15,padding:10}}>Xoá tất cả</button>
                    </div>
                </form>
            </div>
        )
    }
}