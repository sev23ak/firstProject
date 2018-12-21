import React, { Component } from 'react';
class Search extends Component {

    constructor() {
        super();
        this.state={
            inputKey:false,
            serchValue:'',
            icone:'fas fa-search search1'
        };
        this.openInput=this.openInput.bind(this);
        this.valueSearch=this.valueSearch.bind(this);

    }
    openInput(event){
        event.preventDefault();
        this.setState({
            inputKey:!this.state.inputKey,
            serchValue:'',
            icone:'fas fa-search search1'
        });
        if(this.state.inputKey){
            this.setState({icone:'fas fa-search search1'});

        }else{
            this.setState({icone:'fas fa-times-circle search1'});
        }

    }
    valueSearch(event){
        this.setState({serchValue:event.target.value});
    }


    render() {

        return (

            <div className='search'>
                <form action="">
                    <input type="text" className={this.state.inputKey?'input1':'input2'} placeholder='Search...' value={this.state.serchValue} onChange={this.valueSearch}/>
                    <button className='button' onClick={this.openInput}>
                        <i className={this.state.icone}></i>
                    </button>
                </form>
            </div>
        );
    }
}
export default Search;