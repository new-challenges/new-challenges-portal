import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getListUserService } from './user.service'

export const User = () => {

    useEffect((): void => {
        getListUserService()
    }, [])

    return (
        <div>User</div>
    )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(User)