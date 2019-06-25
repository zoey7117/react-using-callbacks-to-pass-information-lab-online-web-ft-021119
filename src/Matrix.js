import React, {Component} from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      pickColor: ""
    }
  }

  hexColor = (str) => {
    this.setState({pickColor: str})
  }

  cellColor = () => {
    return this.state.pickColor

  }



  genRow = (vals) => (vals.map((val, idx) => <Cell key={idx} cellColor={this.cellColor}/>))

  genMatrix = () => (this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>))

  render() {
    return (<div id="app">
      <ColorSelector hexColor={this.hexColor}/>
      <div id="matrix">
        {this.genMatrix()}
      </div>
    </div>)
  }

}
Matrix.defaultProps = {
  values: chromeBoi.slice(0, 10)
}
