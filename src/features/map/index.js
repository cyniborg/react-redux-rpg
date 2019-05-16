import React from 'react';
import { SPRITE_SIZE } from '../../config/constants';
import './styles.css';
import { connect } from 'react-redux'; 

function getTileSprite(type) {
    switch(type) {
        case 0:
        return 'grass'
        case 3:
        return 'tree'
        case 4:
        return 'chest'
        case 5:
        return 'rock'
        case 6:
        return 'tree'
        default:
        return 'grass'
    }
}

function MapTile(props) {
    return <div
    className = {`tile ${getTileSprite(props.tile)}`}
    style = {{
            height: SPRITE_SIZE,
            width: SPRITE_SIZE
        }}
    />
}

function MapRow(props) {
    return (
        <div className="row">
            {props.tiles.map( (tile,i) => <MapTile key={i} tile = {tile} />)}
        </div> 
    )
}


function Map(props) {
    return (
        <div 
            style = {{
                position: 'relative',
                width: '800px',
                height: '480px',
                top: '0px',
                left:'0px',
                border: '4px solid white',
                margin: '10px auto'
            }}
        >
           {props.tiles.map((row, i) => <MapRow key={i} tiles = {row} />)} 
        </div>
    )
}

function mapStateToProps(state){
    return {
        tiles: state.map.tiles
    }
}

export default connect(mapStateToProps)(Map);