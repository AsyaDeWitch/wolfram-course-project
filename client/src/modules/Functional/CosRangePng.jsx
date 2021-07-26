import React from 'react';
import { Card, Form, Col, Button, Badge } from 'react-bootstrap';
import { useState } from 'react';
import functionService from './functions/functionService';

export default function CosRangePng() {
    const [data, setData] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [a, setA] = useState('');
    const [b, setB] = useState('');

    const wcFunction = 'cos-range-png';

    const fetchData = async () => {
        setIsError(false)
        setIsLoading(true)
        if (a && b) {
            try {
                const result = await functionService.getImageUrl(wcFunction, { a, b });
                setData(result);
            } catch (error) {
                console.log('>>>-cos-range-png-fetchData-error->', error);
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
            <Card.Header>Cosinus By Range</Card.Header>
            <Card.Body>
                <Card.Title>Cosinus Function By [A; B]</Card.Title>
                <Card.Text>
                    Enter integers to establish the min and max of the sampling range, a
                    and b. Click to resample.
                </Card.Text>
                <p>
                    {a && b
                        ? ` `
                        : ' Enter 2 integers. Any order.'
                    }
                </p>
                <hr />
                <Form onSubmit={handleSubmit}>
                    <Form.Row>
                        <Col xs='auto'>
                            <p>From</p>
                        </Col>
                        <Col sm={{ span: 2, offset: 0 }}>
                            <Form.Control
                                className='input'
                                type='text'
                                placeholder='min'
                                name='a'
                                size='sm'
                                value={a}
                                onChange={event => setA(event.target.value)}
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
                                name='b'
                                size='sm'
                                value={b}
                                onChange={event => setB(event.target.value)}
                            />
                        </Col>
                        <Col sm={{ span: 4, offset: 0 }}>
                            <Button type='submit' disabled={isLoading}>
                                {isLoading ? '...calling WC...' : 'Get Result'}
                            </Button>
                        </Col>
                        <Col sm={{ span: 2, offset: 0 }}>
                            {isError && !a && !b && <p>Enter Values...</p>}
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
