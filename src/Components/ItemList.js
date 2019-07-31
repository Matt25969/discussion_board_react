import React, { Component } from 'react';
import _ from 'lodash'
import {
    Table
} from 'reactstrap';

import '../App.css';

import Item from './Item'

function ItemList (props) {

    const {
        data
    } = props;

  return (
    <div>
        <Table striped bordered hover variant="dark">
            <tbody>   
                {_.reverse(data).map((item) => (
                <tr><td><Item passedFunction={props.passedFunction} username={item.username} content={item.content} _id={item._id}/></td></tr>
                ))}
            </tbody>
        </Table>
    </div>
  );
}

export default ItemList;
