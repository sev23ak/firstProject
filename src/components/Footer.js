import React,{Component}from 'react';
class Footer extends Component{
    constructor(){
        super();
        this.state={
            value:''
        };
        this.func =this.func.bind(this);
        this.funcTw=this.funcTw.bind(this);

    }
    func(event){
        event.preventDefault();
        this.setState({value:''});

    }
    funcTw(event){
        this.setState({value:event.target.value});
    }

    render(){
        return(
            <div className='footer'>

                <p className='news ss'>
                    Newsletter
                </p>
                <p className='ss'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus?
                </p>

                <form className='logg' onSubmit={this.func} name='but' >
                    <input type='email' value = {this.state.value} onChange={this.funcTw}/>
                    <button name='but'>Sing in</button>
                </form>

            </div>

        );
    }



}
export default Footer;