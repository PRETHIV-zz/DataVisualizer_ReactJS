import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData,
      chartType:props.chartType,
      datum:null,
      delimiter:null,
      ydata:null
    };
    
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  changeGraph=(event)=>{
      console.log(event.target.selectedIndex,"SELECTVAL");
      var i=event.target.selectedIndex;
      var i1=parseInt(i);
      if(i==0){
        this.setState({chartType:"bar"});
        console.log("CHarttype in state is"+this.state.chartType);
      }
      else if(i==1){
        this.setState({chartType:"line"});
        console.log("CHarttype in state is "+this.state.chartType);
      }
      else{
        this.setState({chartType:"pie"});
        console.log("Chartype in state is "+this.state.chartType);
      }
  }

  datacollect=(event)=>{
        var data=event.target.value;
        console.log(data+"in data collector");
        this.setState({datum:data});
  }

  updatedelim=(event)=>{
      var delims=event.target.value;
      console.log(delims+" in update delimiter");
      this.setState({delimiter:delims});
  }

  ydatacollect=(event)=>{
      var data=event.target.value;
      console.log("Ydata collect "+data);
      this.setState({ydata:data});
  }

  visualize=(event)=>{
    var data=this.state.datum;
    var deli=this.state.delimiter;
    var dataarr=data.split(deli);
    console.log("Data arr inside visualize X labels"+dataarr);
    console.log(dataarr[0]);
    data=this.state.ydata;
    var yarr=data.split(deli);
    console.log("Y axis data "+yarr);
    var dummy=this.state.chartData;
    dummy.datasets[0].data=yarr;
    dummy.labels=dataarr;
    this.setState({chartData:dummy});
  }

  render(){

    if(this.state.chartType==="bar"){
        
        return( 
          <div className="chart">
        <select className="form-control" onChange={this.changeGraph}>
          <option value="1">Bar</option>
          <option value="2">Line</option>
          <option value="3">Pie</option>
        </select>
        <h2>Paste your Data here to visualize</h2>
        <h3>X-Axis Label</h3>
        <input type="text" onChange={this.datacollect} />
        <h3>Y-Axis Label</h3>
        <input type="text" onChange={this.ydatacollect} />
        <h2>ENter the delimiter of your data(default is pipe)</h2>
        <input type="text" onChange={this.updatedelim} />
        <button onClick={this.visualize}>Click me to Visualize</button>
        <Bar
        data={this.state.chartData}
        options={{
          title:{
            display:this.props.displayTitle,
            text:'See your Data',
            fontSize:25
          },
          legend:{
            display:this.props.displayLegend,
            position:this.props.legendPosition
          }
        }}
      /></div>);
    }
    else if(this.state.chartType==="line"){
      
     return( <div className="chart">
        <select className="form-control" onChange={this.changeGraph}>
          <option value="1">Bar</option>
          <option value="2">Line</option>
          <option value="3">Pie</option>
        </select>
        <h2>Paste your Data here to visualize</h2>
        <h3>X-Axis Label</h3>
        <input type="text" onChange={this.datacollect} />
        <h3>Y-Axis Label</h3>
        <input type="text" onChange={this.ydatacollect} />
        <h2>ENter the delimiter of your data(default is pipe)</h2>
        <input type="text" onChange={this.updatedelim} />
        <button onClick={this.visualize}>Click me to Visualize</button>
        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'See your Data',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>);
    }
    else{
    return (
      <div className="chart">
        <select className="form-control" onChange={this.changeGraph}>
          <option value="1">Bar</option>
          <option value="2">Line</option>
          <option value="3">Pie</option>
        </select>
        <h2>Paste your Data here to visualize</h2>
        <h3>X-Axis Label</h3>
        <input type="text" onChange={this.datacollect} />
        <h3>Y-Axis Label</h3>
        <input type="text" onChange={this.ydatacollect} />
        <h2>ENter the delimiter of your data(default is pipe)</h2>
        <input type="text" onChange={this.updatedelim} />
        <button onClick={this.visualize}>Click me to Visualize</button>
        <Pie
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'See your Data',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

}


export default Chart;