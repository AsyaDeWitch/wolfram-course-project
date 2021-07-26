import React, { useState } from 'react';
import { Card, Form, Col, Button, Table } from 'react-bootstrap';
import functionService from './functions/functionService';

export default function RandomArray1() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [x, setX] = useState('');
    const [y, setY] = useState('');
    const [z, setZ] = useState('');

    const wcFunction = 'random-array-1';

    const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
        if (x && y && z) {
            try {
                const result = await functionService.requestValue(wcFunction, { x, y, z });
                setData(result);
            } catch (error) {
                console.log('>>>-RandomArray-fetchData-error->', error);
                setIsError(true);
            }
        } else {
            setIsError(true);
            setIsLoading(false);
            return;
        }
        setIsLoading(false);
    }

    const handleSubmit = event => {
        event.preventDefault();
        fetchData();
    }

    return (
        <Card>
            <Card.Header>
                An array of reals - a JS Object
      </Card.Header>
            <Card.Body>
                <Card.Title>Array of Random Numbers</Card.Title>
                <Card.Text>
                    Enter numbers to establish the min and max of the sampling range, x
                    and y. Enter an integer to establish the length, z, of the array.
                    Click to resample.
        </Card.Text>
                <Card.Text>
                    Walk through three cases: 1) unformated 2) unindexed 3) indexed.
        </Card.Text>
                <p>
                    {x && y
                        ? ``
                        : 'Enter 2 numbers. Any order.'}
                </p>
                <hr />
                <Form onSubmit={handleSubmit}>
                    <Form.Row>
                        <Col sm='auto'>
                            <p>From</p>
                        </Col>
                        <Col sm={{ span: 2, offset: 0 }}>
                            <Form.Control
                                className='input'
                                type='text'
                                placeholder='min'
                                name='x'
                                size='sm'
                                value={x}
                                onChange={event => setX(event.target.value)}
                            />
                        </Col>
                        <Col sm={{ span: 0, offset: 0 }}>
                            <p> to </p>
                        </Col>
                        <Col sm={{ span: 2, offset: 0 }}>
                            <Form.Control
                                className='input'
                                type='text'
                                placeholder='max'
                                name='y'
                                size='sm'
                                value={y}
                                onChange={event => setY(event.target.value)}
                            />
                        </Col>
                        <Col sm={{ span: 0, offset: 0 }}>
                            <p> sample size </p>
                        </Col>
                        <Col sm={{ span: 2, offset: 0 }}>
                            <Form.Control
                                className='input'
                                type='text'
                                placeholder='samples'
                                name='z'
                                size='sm'
                                value={z}
                                onChange={event => setZ(event.target.value)}
                            />
                        </Col>
                        <Col sm={{ span: 4, offset: 0 }}>
                            <Button type='submit' disabled={isLoading}>
                                {isLoading ? '...calling WC...' : 'Get Random Array'}
                            </Button>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col sm={{ span: 4, offset: 0 }}>
                            {isError && !x && !y && !z ? (
                                <p>Enter Values...</p>
                            ) : (
                                <Table striped bordered hover size='sm'>
                                    <thead>
                                        <tr>
                                            <th>index</th>
                                            <th>value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(row => (
                                            <tr key={row.index}>
                                                <td>{row.index}</td>
                                                <td>{row.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            )}
                        </Col>
                    </Form.Row>
                </Form>
            </Card.Body>
        </Card>
    )
}

