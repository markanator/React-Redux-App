import React, {useState} from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavbarText,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

// acions as: actions.getData()
import * as actions from '../actions';

import {useSelector,useDispatch} from 'react-redux';

export default function Header() {
    const dispatch = useDispatch();
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const flavor = useSelector(state=>state.flavor);

    console.log(flavor);

    const setFlavor = (flavor) => {
        if (flavor === "character"){
            return dispatch(actions.getData());
        } else if ( flavor === "location"){
            return dispatch(actions.getLocations())
        } else {
            return dispatch(actions.getEpisodes());
        }
    }

    const handleChange = e =>{
        dispatch(actions.setFlav(e.target.value));
        setFlavor(e.target.value);
    }
    return (
        <header className='header-nav'>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                    <b>Async-Redux: </b>
                    Rick and Morty</NavbarBrand>
                <NavbarToggler onClick={toggle}/>

                <Collapse isOpen={isOpen} navbar>

                    <Nav className="mr-auto" navbar>
                        <Form>
                            <FormGroup>
                                <Label for="exampleSelect"></Label>
                                <Input 
                                type="select"
                                name="select" 
                                value={flavor}
                                onChange={(e)=>{
                                    handleChange(e);
                                }}
                                >
                                    <option value="character" >Characters</option>
                                    <option value="location" >Locations</option>
                                    <option value="episode" >Episodes</option>
                                </Input>
                            </FormGroup>
                        </Form>
                    </Nav>
                    <NavbarText>&copy; 2020 Mark Ambrocio</NavbarText>
                </Collapse>
            </Navbar>
        </header>
    );
}