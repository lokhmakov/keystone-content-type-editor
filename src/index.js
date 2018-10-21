import React, { Component } from 'react'
import ReactDOM             from 'react-dom'
import Highlight            from 'react-highlight'
import { print }            from 'recast'


import query                from 'core/entity/api/local/query'
import generateModel        from 'core/entity/api/generate/model'


class App extends Component {
  state = {
    code: ``,
  }

  componentDidMount = async () => {
    const [entity] = await query()

    const ast = generateModel({
      name: entity.name,
      fields: entity.fields,
    })


    const code = print(
      ast,
      { tabWidth: 2, }
    ).code

    this.setState({ code })
  }

  render() {
    return (
      <Highlight language="javascript">
        { this.state.code }
      </Highlight>      
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
