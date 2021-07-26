import React from 'react';
import { Card, Form, Col, Button, Badge } from 'react-bootstrap';
import { useState } from 'react';
import functionService from './functions/functionService';

export default function QuadraticEquationPng() {
    const [data, setData] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');

    const wcFunction = 'solve-quadratic-equation';

    const fetchData = async () => {
        setIsError(false)
        setIsLoading(true)
        if (a && b && c) {
            try {
                const result = await functionService.getImageUrl(wcFunction, { a, b, c });
                setData(result);
            } catch (error) {
                console.log('>>>-solve-quadratic-equation-fetchData-error->', error);
                setIsError(true);
            }
        } else {
            setIsError(false);
            setIsLoading(false);
            return
        }
        setIsLoading(false);
    }

    const handleSubmit = event => {
        event.preventDefault();
        fetchData();
    }

    return (
        <Card>
            <Card.Header>Quadratic Equation By 3 parameters</Card.Header>
            <Card.Body>
                <Card.Title>Quadratic Equation By 3 parameters</Card.Title>
                <Card.Text>
                    Enter 3 equation parameters. Click to resample.
                </Card.Text>
                <p>
                    {a && b
                        ? ` `
                        : ' Enter 3 integers. Any order.'
                    }
                </p>
                <hr />
                <Form onSubmit={handleSubmit}>
                    <Form.Row>
                        <Col sm={{ span: 2, offset: 0 }}>
                            <Form.Control
                                className='input'
                                type='text'
                                placeholder='A'
                                name='a'
                                size='sm'
                                value={a}
                                onChange={event => setA(event.target.value)}
                            />
                        </Col>
                        <Col sm={{ span: 2, offset: 0 }}>
                            <Form.Control
                                className='input'
                                type='text'
                                placeholder='B'
                                name='b'
                                size='sm'
                                value={b}
                                onChange={event => setB(event.target.value)}
                            />
                        </Col>
                        <Col sm={{ span: 2, offset: 0 }}>
                            <Form.Control
                                className='input'
                                type='text'
                                placeholder='C'
                                name='c'
                                size='sm'
                                value={c}
                                onChange={event => setC(event.target.value)}
                            />
                        </Col>
                        <Col sm={{ span: 4, offset: 0 }}>
                            <Button type='submit' disabled={isLoading}>
                                {isLoading ? '...calling WC...' : 'Get Result'}
                            </Button>
                        </Col>
                        <Col sm={{ span: 2, offset: 0 }}>
                            {isError && !a && !b && !c && <p>Enter Values...</p>}
                        </Col>
                        <div style={{ margin: 'auto' }}>
                            <img src={data} />
                        </div>
                    </Form.Row>
                </Form>
            </Card.Body>
        </Card>
    )
}
