import React from 'react';
import './Home.css'
import { connect } from 'react-redux';
import { relative } from 'path';
const URL = 'wss://echo.websocket.org'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sendbuttonActive: false,
            chatData: this.props.chatData


        }
    }
    ws = new WebSocket(URL)
    componentDidMount = () => {
      console.log(this.props.location.state.user)
      this.setState({user:this.props.location.state.user})
        this.ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected')
        }

        this.ws.onmessage = evt => {
            // on receiving a message, add it to the list of messages
            const message = JSON.parse(evt.data)
            message.id = "1"
            var Rd = new Date();
            var Rh = Rd.getHours() < 10 ? "0" + Rd.getHours() : Rd.getHours();
            var Rm = Rd.getMinutes() < 10 ? "0" + Rd.getMinutes() : Rd.getMinutes()
            message.time = Rh + ":" + Rm
            this.setState({
                chatData: [message, ...this.state.chatData]
            }, () => {
                this.props.dispatch({ type: "CHAT_DATA", payload: message })
                /// this.message.innerHTML = " "

            })
            console.log(message)
            //this.addMessage(message)
        }

        this.ws.onclose = () => {
            console.log('disconnected')
            // automatically try to reconnect on connection loss
            this.setState({
                ws: new WebSocket(URL),
            })
        }

    }
    textValidate = () => {
        //    alert(32)
        //     this.message.addEventListener('keyup', (e) => {
        //         alert(23)
        //         // and here is how to detect the enter key
        //         if (13 === e.keyCode) {
        //             alert("this should appear");
        //         }        
        //     });

        //    if(this.message.innerHTML !==null && this.message.innerHTML !==undefined){
        //        alert(23)
        //     this.setState({sendbuttonActive:true})
        //    }
        //    else if(this.message.innerHTML===""){
        //     this.setState({sendbuttonActive:false})
        //    }
    }

    home=(e)=>{
        e.preventDefault()
        this.props.history.push({
            pathname: '/'
   
         })
    }

    sendData = (e) => {
        // console.log(this.message.innerHTML)
        e.preventDefault()

        if (this.message.innerHTML !== null && this.message.innerHTML !== '' && this.message.innerHTML !== undefined) {

            var d = new Date();
            var h = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
            var m = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
            let msg = { "id": "0", "message": this.message.innerHTML, time: h + ":" + m }

            this.setState({
                chatData: [msg, ...this.state.chatData]
            }, () => {
                this.message.innerHTML = " "
                this.props.dispatch({ type: "CHAT_DATA", payload: msg })
            })

            this.ws.send(JSON.stringify(msg))
        }
    }

    render() {
        const sendbuttonState = {
            active: {
                transform: 'rotate(90deg)',
                transition: 'transform 0.8s ease-in-out'
            },
            inActive: {
                transform: 'rotate(-90deg)',
                transition: 'transform 0.8s ease-in-out'
            }

        }

        return (
            <div>
                <div className="navBar">
                    <div className="user" >
                        <div className="avaterDivUser">
                            <div className="chatlistAvaterUser"></div>
                        </div>
                        <div className="chatListmeasageUser">
                            <h5>{this.state.user}</h5>
                            <p>12:32 PM</p>
                        </div>
                        <div onClick={this.home.bind(this)} style={{margin:'auto',right:'20px',top:'0',bottom:'0', position:'absolute'}}>
                            <p>Log Out</p>
                            </div>
                    </div>

                </div>
                <div className="homeDiv">


                    <div className="leftside">

                        <div className="chatlist" >
                            <div className="avaterDiv">
                                <div className="chatlistAvater"></div>
                            </div>
                            <div className="chatListmeasage">
                                <h5>Abhimanyu</h5>
                                <p>Hi</p>
                            </div>
                        </div>

                        <div className="chatlist" >
                            <div className="avaterDiv">
                                <div className="chatlistAvater"></div>
                            </div>
                            <div className="chatListmeasage">
                                <h5>Abhimanyu</h5>
                                <p>Hi</p>
                            </div>

                        </div>
                        <div className="chatlist" >
                            <div className="avaterDiv">
                                <div className="chatlistAvater"></div>
                            </div>
                            <div className="chatListmeasage">
                                <h5>Abhimanyu</h5>
                                <p>Hi</p>
                            </div>
                        </div>

                    </div>
                    <div className="rightside">


                        <div className="chatDiv">
                            {
                                this.state.chatData.map((obj, index) => {
                                    if (obj.id === '0') {
                                        return (
                                            <div key={index} style={{ display: 'flex', flexDirection: 'row' }}>
                                                <div className="userLeft"></div>
                                                <div className="leftChatbul"> {obj.message}
                                                </div>
                                                <p className="time"> {obj.time}</p>

                                            </div>
                                        )
                                    }
                                    else if (obj.id === '1') {
                                        return (

                                            <div key={index} style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                                                <div className="userRight"></div>
                                                <div style={{ direction: "rtl" }} className="rightChatbul">{obj.message}</div>
                                                <p className="time">{obj.time}</p>
                                            </div>
                                        )
                                    }

                                })

                            }










                        </div>
                        <div className="msgBox">
                            <div className="textBox" >
                                <div className="noOutline" ref={message => this.message = message} data-ph="Type here .." contentEditable='true' ></div>

                            </div>
                            <div onMouseDown={this.sendData.bind(this)} className="btnSend">
                                <img alt="send button " style={this.state.sendbuttonActive === true ? sendbuttonState.active : sendbuttonState.inActive} className="sendIcon" src="buttons/send.svg" />
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        )
    }




}
const mapStateToProps = (state) => (
    {
        chatData: state.chatData
    }
);

export default connect(mapStateToProps)(Home)