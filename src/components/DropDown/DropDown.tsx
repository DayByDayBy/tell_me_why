import Dropdown from 'react-bootstrap/Dropdown';

function DropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      ⌄ try a different model ⌄
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/llama2">lamma2</Dropdown.Item>
        <Dropdown.Item href="#/gemma">gemma</Dropdown.Item>
        <Dropdown.Item href="#/mistral">mistral</Dropdown.Item>
        <Dropdown.Item href="#/mixtral">mixtral</Dropdown.Item>
        <Dropdown.Item href="#/vicuna">vicuna</Dropdown.Item>
        <Dropdown.Item href="#/openchat">openchat</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;