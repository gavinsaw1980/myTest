'use client'

import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './style.css';

export default function Footer() {    
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e:any) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        setValidated(true);
    };

	return (  
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="validationCustomUsername">
                <InputGroup hasValidation>
                <Form.Control
                    className='py-3 ps-4 radius border-0'
                    type="text"
                    placeholder="E.g. networking"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    required
                />
                <Button type="submit" id="basic-addon2" className='radius px-4 bgcolor text-black'>Search jobs</Button>
                <Form.Control.Feedback type="invalid" className='error'>
                    Please insert text!
                </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
        </Form>
    )
}