import React, { Component } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';

class CommonComponents extends Component {
    render() {
        return (
            <div className="flex-row d-inline-flex justify-content-between">
                <div className="p-2">
                    <Button type="primary" shape="circle" onClick={this.props.previousStep}  >
                        <ArrowLeftOutlined className="anticon" />
                    </Button>
                </div>
                <div className="p-2">
                    <h4>{this.props.currentStep}/{this.props.totalSteps}</h4>
                </div>
            </div>
        );
    }
}

export default CommonComponents;

export class Heading extends Component {
    render() {
        return (
            <div className="flex-row d-inline-flex justify-content-center">
                <div className="p-2">
                    <h2>{this.props.heading}</h2>
                </div> 
            </div>
        );
    }
}