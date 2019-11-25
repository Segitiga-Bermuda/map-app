import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class SignOut extends Component {
    constructor(props) {
        super(props)

        this.props = props
    }
    render() {
        localStorage.setItem('isVerified', JSON.stringify(false))
        this.props.history.replace('/sign-in')

        return (
            <div>
                Anda akan dialihkan ke halaman Sign In
            </div>
        )
    }
}

export default withRouter(SignOut)