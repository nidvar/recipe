class RecipeList extends React.Component{
    display=()=>{
        if(this.props.pass_list!==undefined){
            console.log(this.props.pass_list)
            return this.props.pass_list.map(item=>{
                return <Recipe 
                    image={item.recipe.image} 
                    title={item.recipe.label} 
                    calories={item.recipe.calories} 
                    key={Math.random()} 
                    link={item.recipe.url}
                />
            })
        }
    }
    render(){
        return(
            <div className='RecipeList'>
                {this.display()}
            </div>
        )
    }
}