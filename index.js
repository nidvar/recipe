class App extends React.Component{
    state={
        data:[],
        start:false,
        status:true,
        loading:false,
        results:1
    }
    grab_user_input=(the_stuff)=>{
        this.setState({loading:true, results:1})
        const my_request = `https://api.edamam.com/search?q=${the_stuff}&app_id=${app_id}&app_key=${app_key}&from=0&to=20&calories=591-722&health=alcohol-free`;

        fetch(my_request).then(the_response=>{
            return the_response.json();
        }).then(the_data=>{
            this.setState({
                data:the_data,
                start:true,
                loading:false
            },()=>{
                if(this.state.data.hits.length===0){
                    this.setState({results:0},()=>{console.log(this.state.results)})
                }
            });
        }).catch(e=>{
            console.log(e);
            this.setState({status:false})
        });
    }
    display=()=>{
        if(this.state.results===0){
            return (
                <div className='App'>
                    <h1>Recipe Finder</h1>
                    <SearchBar grab_user_input={this.grab_user_input} />
                    <br />
                    <p>Try again</p>
                </div>
            )
        }
        if(this.state.loading===true){
            return (
                <div className='App'>
                    <h1>Recipe Finder</h1>
                    <SearchBar grab_user_input={this.grab_user_input} />
                    <br />
                    <p>Loading......</p>
                </div>
            )
        }
        if(this.state.status===false){
            return (
                <div className='App'>
                    <h1>Recipe Finder</h1>
                    <SearchBar grab_user_input={this.grab_user_input} />
                    <br />
                    <p>Error grabbing API. Try again later.</p>
                </div>
            )
        }
        if(this.state.start===false){
            return (
                <div className='App'>
                    <h1>Recipe Finder</h1>
                    <SearchBar grab_user_input={this.grab_user_input} />
                    <br />
                    <p>Using <b>Edamam's</b> API, this app delivers a list of Recipe webpages based on any keyword entered.</p>
                </div>
            )
        }else{
            return (
                <div className='App'>
                    <h1>Recipe Finder</h1>
                    <SearchBar grab_user_input={this.grab_user_input} />
                    <RecipeList pass_list={this.state.data.hits} />
                </div>
            )
        }
    }
    render(){  
        return(
            <div className='App'>
                {this.display()}
            </div>
            
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));