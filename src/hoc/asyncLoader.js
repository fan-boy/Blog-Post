import React,{Component} from 'react';

const asyncLoader = (importComponent) =>{

    return class extends Component{
        state = {
            component : null
        }
        componentWillMount(){
            importComponent().then(cmp => {
                 this.setState({component: cmp.default});
            });
        }

        render(){
            debugger;
            const comp = this.state.component;
            return comp ? <comp  {...this.props}/>:null;
        }
    }
}
export default asyncLoader;