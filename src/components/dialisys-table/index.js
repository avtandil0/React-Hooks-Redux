import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import {useDispatch, useSelector} from "react-redux";
import {getDialisysReport, pageChange, changeItemsPerPage} from "../../actions/actions";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";


const columns = [
    {id: 'personId', label: 'personId', minWidth: 170},
    {
        id: 'firstName',
        label: 'firstName',
        //minWidth: 170,
        //align: 'right',
        //format: (value) => value.toFixed(2),
    },
    {
        id: 'lastName',
        label: 'lastName',
        //minWidth: 170,
        //align: 'right',
        //format: (value) => value.toFixed(2),
    },
    {
        id: 'gender',
        label: 'gender',
        //minWidth: 170,
        //align: 'right',
        //format: (value) => value.toFixed(2),
    },
    {id: 'programCode', label: 'programCode', minWidth: 100},
    {
        id: 'caseRegistrationCode',
        label: 'caseRegistrationCode',
        //minWidth: 170,
        //align: 'right',
        //format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'programCodeName',
        label: 'programCodeName',
        //minWidth: 170,
        //align: 'right',
        //format: (value) => value.toLocaleString('en-US'),
    },
]

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        height: 370,
    },
})

export default function DialisysTable() {
    const classes = useStyles()
    const dispatch = useDispatch()

    const {dialisysReport, totalItems, loading} = useSelector(state => state.dialisysReportReducer)
    const filter = useSelector(state => state.filterReducer)
    console.log('filter',filter)

    const handleChangePage = (event, newPage) => {
        if (newPage > 0) {
            dispatch(pageChange(newPage))
        }
    }

    const handleChangeRowsPerPage = (event) => {
        dispatch(changeItemsPerPage(event.target.value))
    }

    useEffect(() => {
        dispatch(getDialisysReport(filter))
    }, [filter])

    return (
        <Container maxWidth={false}>
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    {!loading ? <TableBody>
                        {dialisysReport && dialisysReport.map((row, index) => (
                            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                {columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                        <TableCell key={column.id} align={column.align}>
                                            {column.format && typeof value === 'number' ? column.format(value) : value}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableBody> : <TableBody >
                        <TableRow>
                            <TableCell colSpan={7} height={310}>
                                <CircularProgress color="secondary" style={{position:"absolute", width:"50px", height:"50px", marginTop:"-50px",  left:"50%", marginRight:"50px"}}/>
                            </TableCell>
                            </TableRow>
                    </TableBody>
                        }
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 30, 50, 100]}
                component="div"
                count={Number(totalItems) || -1}
                page={filter.currentPage}
                rowsPerPage={filter.itemsPerPage}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
        </Container>
    )
}