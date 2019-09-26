class SearchBar extends React.Component{
    state={
        text:''
    }
    handleChange=(e)=>{
        this.setState({text:e.target.value});
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.grab_user_input(this.state.text);
        this.setState({text:''})
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input 
                        onChange={this.handleChange} 
                        value={this.state.text}
                        placeholder=' Search'
                    />
                </form>
            </div>
        )
    }
}