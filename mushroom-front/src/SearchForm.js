import React from 'react'
import { Form } from 'semantic-ui-react'

const SearchForm = props => {
  return (
    <Form>
      <Form.Field>
        <label>Search products</label>
        <input placeholder="Products" onChange={props.getSearchTerm} />
      </Form.Field>
    </Form>
  )
}

export default SearchForm
