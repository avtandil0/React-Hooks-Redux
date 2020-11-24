import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getDialisysReport} from '../../actions/actions'


class Main extends Component {
    state = {
        expand: true,
        activeKey: null
    }

    handleToggle = () => {
        this.setState({
            expand: !this.state.expand
        });
    }

    componentDidMount() {
        this.props.getDialisysReport(this.props.filter)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.filter!=this.props.filter){
            console.log('--',this.props.filter)
            this.props.getDialisysReport(this.props.filter)
        }
    }

    render() {
        const {dialisysReport, loading} = this.props
        return (
            <div style={{marginLeft: '300px'}}>


                            {!loading ? <div>
                                <table className="highlight">
                                    <tbody>
                                    {
                                        dialisysReport && dialisysReport.map((item, index) => <tr key={index}>
                                                <td>{item.personId}</td>
                                                <td>{item.programCode}</td>
                                                <td>{item.programCodeName}</td>
                                                <td>{item.caseRegistrationCode}</td>
                                                <td>{item.firstName}</td>
                                                <td>{item.lastName}</td>
                                                <td>{item.gender}</td>
                                            </tr>
                                        )
                                    }
                                    </tbody>
                                </table>
                                <Pagination/></div> : <h5>გთხოვთ დაელოდოთ ...</h5>
                            }

            </div>
        )
    }
}

function mapStateToProps({dialisysReportReducer, filterReducer}) {
    const {dialisysReport, loading} = dialisysReportReducer
    const filter = filterReducer
    return {dialisysReport, loading, filter}
}

export default connect(mapStateToProps, {getDialisysReport})(Main)