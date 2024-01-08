import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';
import { Grid, IconButton, styled, useScrollTrigger } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsCarFilledRoundedIcon from '@mui/icons-material/DirectionsCarFilledRounded';
import HouseboatRoundedIcon from '@mui/icons-material/HouseboatRounded';
import Cabview from '../components/Cabview';
import Busview from '../components/Busview';
import HolidayView from '../components/Holidayview';


export default function DashboardCard() {
    const [cabShow, setCabShow] = React.useState(false)
    const [busShow, setBusShow] = React.useState(true)
    const [holidayShow, setHolidayShow] = React.useState(false)
    const onChangeBus = () => {
        setBusShow(true)
        setCabShow(false)
        setHolidayShow(false)
    }
    const onChangeCabs = () => {
        setCabShow(true)
        setBusShow(false)
        setHolidayShow(false)
    }
    const onChangeHoliday = () => {
        setCabShow(false)
        setHolidayShow(true)
        setBusShow(false)
    }

    return (
        <React.Fragment>
            {/* <CssBaseline /> */}
            <Container maxWidth="xl" sx={{ padding: 2, }}>
                <Grid container>
                    <Grid xs={12} padding={2}>
                        <Container maxWidth='md'>
                            <Card>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                            <IconButton onClick={onChangeBus}>
                                                <DirectionsBusIcon style={{ width: 40, height: 40 }} /><br />
                                                <Typography>Buses</Typography>
                                            </IconButton>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <IconButton onClick={onChangeCabs}>
                                                <DirectionsCarFilledRoundedIcon style={{ width: 40, height: 40 }} />
                                                <Typography>Cabs</Typography>
                                            </IconButton>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <IconButton onClick={onChangeHoliday}>
                                                <HouseboatRoundedIcon style={{ width: 40, height: 40 }} />
                                                <Typography>Holiday Packages</Typography>
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                            </Card>
                        </Container>
                    </Grid>
                    <Grid xs={12}>
                        <Container maxWidth='lg'>
                            <Card style={{ padding: 5 }}>
                                <CardContent>
                                    {cabShow === true ? (
                                        <Cabview />
                                    ) : ""}
                                    {busShow === true ? (
                                        <Busview />
                                    ) : ""}
                                    {holidayShow === true ? (
                                        <HolidayView />
                                    ) : ""}
                                </CardContent>
                            </Card>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}