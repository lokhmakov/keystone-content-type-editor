import React, { Component } from 'react'
import ReactDOM             from 'react-dom'
import { print }            from 'recast'


import query                from 'core/entity/api/local/query'
import generateModel        from 'core/entity/api/generate/model'


class App extends Component {
  componentDidMount = async () => {
    const [entity] = await query()

    const ast = generateModel({
      name: entity.name,
      fields: entity.fields,
    })

    console.log(
      print(
        ast,
        { tabWidth: 2, }
      ).code
    )    
  }

  render() {
    return null
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
