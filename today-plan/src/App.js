import React, { Component } from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Plan from './plan.js';
import axios from 'axios'
const url = axios.create({
  baseURL : 'http://127.0.0.1:8000/api'
})


class App extends Component {
  state = {
    items: [],
    plan_text: ""
  }
  handleChange = e => {
    this.setState({ plan_text: e.target.value })
  }
  handleAdd = e => {
    if (this.state.plan_text !== "") {
      const plan = { plan: this.state.plan_text }
      url.post('/create/', plan)
        .then((result) => {
          const newItem = { id: result.data.id, plan: result.data.plan }
          const items = [...this.state.items, newItem]
          this.setState({ items: items, plan_text: "" })
        })
    }
  }
  handleDelete = (id) => {
    url.delete(`/delete/${id}/`)
      .then((result) => {
        const items = this.state.items.filter((element) => {
          return element.id !== id;
        })
        this.setState({ items: items })
      })
  }
  showPlan = () => {
    url.get('/list/')
      .then((result) => {
        console.log("The result is ", result.data)
        this.setState({ items: result.data })
      })
  }
  componentDidMount() {
    this.showPlan()
  }
  render() {
    return (
      <div className='container-fluid my-5'>
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h1 className='text-center'> Today's plan </h1>
            <div className="row">
              <div className="col-9">
                <input type="text" className='form-control' placeholder='Write Plan Here' value={this.state.plan_text} onChange={this.handleChange} />
              </div>
              <div className="col-2">
                <button className='btn btn-warning px-5 fw-bold' onClick={this.handleAdd}>Add</button>
              </div>
              <div className="container-fluid">
                <ul className='list-unstyled row m-5'>

                  {/* {this.state.items.map((value, i) => {
                    return <Plan value={value} key={i} id={i}sendFunc ={this.handleDelete}/>
                  })}  */}

                  {<Plan values={this.state.items} sendFunc={this.handleDelete} />}

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
