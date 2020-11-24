import React, {useEffect, useState} from 'react'
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {useDispatch, useSelector} from "react-redux";

import {DateRange} from 'react-date-range';
import * as locales from 'react-date-range/dist/locale';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {getDialisysServiceProviders, filterChange} from "../../actions/actions";
import moment from 'moment'

const Filter = () => {

    const dispatch = useDispatch()
    const filter = useSelector(state => state.filterReducer)
    const providers = useSelector(state => state.dialisysServiceProvidersReducer)

    useEffect(() => {
        dispatch(getDialisysServiceProviders())
    }, [])

    const handleComboBoxChange = (event, newInputValue) => {
        let newFilter = {...filter}
        newFilter.serviceProviderId = newInputValue ? newInputValue.id : ""
        newFilter.currentPage = 1
        dispatch(filterChange(newFilter))
    }

    const [state, setState] = useState([
        {
            startDate: new Date(filter.seanceStartDate),
            endDate: new Date(filter.seanceEndDate),
            key: 'selection'
        }
    ])

    const handleDateRangeChange = (item) => {
        setState([item.selection])
        let newFilter = {...filter}
        newFilter.seanceStartDate = moment(item.selection.startDate).format("YYYY-MM-DD")
        newFilter.seanceEndDate = moment(item.selection.endDate).format("YYYY-MM-DD")
        console.log('newFilter',newFilter)
        dispatch(filterChange(newFilter))
    }

    return (
        <Container maxWidth={false}>
            <Paper style={{padding: "20px"}}>
                <Grid container>
                    <Grid item md={3}>
                        <DateRange
                            editableDateInputs={true}
                            onChange={handleDateRangeChange}
                            moveRangeOnFirstSelection={false}
                            ranges={state}
                            locale={locales['ka']}
                        />
                    </Grid>
                    <Grid item md={9}>
                        <Autocomplete
                            id="providers-combo-box"
                            options={providers.dialisysServiceProviders? providers.dialisysServiceProviders : []}
                            getOptionLabel={option => option.name}
                            style={{width: '100%'}}
                            renderInput={(params) => <TextField {...params} label="პროვაიდერი კლინიკები" variant="outlined"/>}
                            onChange={handleComboBoxChange}
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default Filter