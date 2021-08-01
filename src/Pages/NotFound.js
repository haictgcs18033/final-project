import React from 'react'
import { Result, Button } from 'antd';
import { NavLink } from 'react-router-dom';
export default function NotFound() {
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary"><NavLink to="/">Back Home</NavLink></Button>}
            />
        </div>
    )
}
