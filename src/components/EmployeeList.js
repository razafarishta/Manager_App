import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {FlatList} from 'react-native';
import {employeesFetch} from '../actions'
import ListItem from './ListItem'

class EmployeeList extends Component{
    componentWillMount(){
        this.props.employeesFetch()

    //    this.createDataSource(this.props)

    }

    // componentWillReceiveProps(nextProps){
    //     this.createDataSource(nextProps)
    // }

    // createDataSource({employees}){
    //     const ds= new ListView.DataSource({
    //         rowHasChanged:(r1, r2)=> r1 !== r2
    //     })
    //     this.dataSource = ds.cloneWithRows(employees)
    // }
    renderRow(employee){
        return <ListItem employee={employee}/>
    }


    render(){
        console.log('data', this.props.employees)
        return(
           <FlatList
            
            data={this.props.employees}
            renderItem={({item:employee}) => this.renderRow(employee)}
           />
        )
    }
}

const mapStateToProps = state =>{
    const employees =_.map(state.employees, (val, uid)=>{
        return{...val, uid}
    }
    
    )

    return {employees}
 }
export default connect(mapStateToProps,{employeesFetch})(EmployeeList);