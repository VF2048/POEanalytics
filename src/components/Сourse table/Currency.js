import React, {PureComponent} from 'react'

class Currency extends PureComponent {
    render() {
        const{typecurrency} = this.props
        return (
            <tr >
                <td>
                    {typecurrency.name}
                </td>
                <td>
                    {typecurrency.buy}
                </td>
                <td>
                    {typecurrency.sell}
                </td>
                <td>
                    {typecurrency.relation}
                </td>
            </tr>
        )
    }
}

export default Currency