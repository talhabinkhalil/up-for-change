import { Form, InputGroup } from "react-bootstrap"


const InputGroups = () => {
  return (
    <InputGroup>
      <Form.Control type="email" placeholder="name@example.com" />
      <Form.Select aria-label="Default select example">
        <option>-CATEGORY-</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <Form.Select aria-label="Default select example">
        <option>-LOCATION-</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <button className="input-group-button">Search</button>
    </InputGroup>
  )
}

export default InputGroups
