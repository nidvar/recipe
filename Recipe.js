class Recipe extends React.Component{
    render(){
        return(
            <div className='Recipe'>
                <a href={this.props.link} target="_blank"><img src={this.props.image} /></a>
                <br />
                <br />
                <p><b>{this.props.title}</b></p>
                <p>{`calories: ${this.props.calories.toFixed(0)}`}</p>
            </div>
        )
    }
}