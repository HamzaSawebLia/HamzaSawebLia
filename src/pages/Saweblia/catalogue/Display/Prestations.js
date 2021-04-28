import React, { Component } from 'react'
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import {
    Button,
    CardActions,
    CardContent,
    Grid,
    Paper,
    Link,
    Breadcrumbs as MuiBreadcrumbs,
    Card as MuiCard,
    CardHeader as MuiCardHeader,
    Divider as MuiDivider,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TablePagination,
} from "@material-ui/core";

import { FiEdit, FiPlus, FiTrash2, FiSave, FiHome, FiEye, FiUpload } from "react-icons/fi";

import { StarBorder as StarIcon } from "@material-ui/icons";

import { spacing } from "@material-ui/system";

const Card = styled(MuiCard)(spacing);

const CardHeader = styled(MuiCardHeader)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Price = styled.div`
  text-align: center;
  padding-bottom: ${(props) => props.theme.spacing(3)}px;
`;

const Header = styled.div`
  padding: ${(props) => props.theme.spacing(6)}px 0;
`;

export default class Prestations extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet title="Services" />
                <Typography variant="h3" gutterBottom display="inline">
                    Prestations
                </Typography>

                <Breadcrumbs aria-label="Breadcrumb" mt={2}>
                    <Link component={NavLink} exact to="/">
                        Dashboard
                   </Link>
                    <Typography>Prestations</Typography>
                </Breadcrumbs>
                <Link component={NavLink} exact to="/Catalogues/Add_prestation"><Button style={{ float: "right", marginTop: "-53px" }} variant="contained" color="secondary" m={1}> <FiPlus style={{ marginRight: "10px" }} /> <span> </span>Ajouter  </Button> </Link>

                <Divider my={6} />

                <Header>
                    <Typography variant="h3" gutterBottom align="center">
                        Tous les  Prestations de SawebLia
                  </Typography>

                </Header>

                <Grid container justify="center">
                    <Grid item xs={12} lg={10}>
                        <Grid container spacing={6} alignItems="flex-end">
                            <Card mb={6}>
                                <CardContent pb={1}>
                                    <Typography variant="h6" gutterBottom>
                                        Prestations
                                     </Typography>

                                </CardContent>
                                <Paper>
                                    <Table>
                                        <TableHead>

                                            <TableRow>
                                                <TableCell align="left"> Libelle </TableCell>
                                                <TableCell align="left"> Description </TableCell>
                                                <TableCell align="left"> Prix d'achat </TableCell>
                                                <TableCell align="left"> Prix de vente </TableCell>
                                                <TableCell align="left"> Coefficient remise </TableCell>
                                                <TableCell align="left"> Garantie </TableCell>
                                                <TableCell align="left"> Actions </TableCell>
                                            </TableRow>

                                        </TableHead>
                                        <TableBody>



                                            <TableRow >
                                                <TableCell align="left">Libelle Service</TableCell>
                                                <TableCell align="left">Description Service</TableCell>
                                                <TableCell align="left">Média Service</TableCell>
                                                <TableCell align="left"> Prix de vente </TableCell>
                                                <TableCell align="left"> Coefficient remise </TableCell>
                                                <TableCell align="left"> Garantie </TableCell>
                                                <TableCell align="left"><FiEdit size={17} style={{ marginLeft: "10px" }} /> <FiEye size={17} /> </TableCell>
                                            </TableRow>



                                            <TablePagination
                                                rowsPerPageOptions={[5, 10, 25]}
                                                component="div"
                                                count={10}
                                                rowsPerPage={5}
                                                page={5}
                                                onChangePage={() => { }}
                                                onChangeRowsPerPage={() => { }}
                                            />
                                        </TableBody>
                                    </Table>
                                </Paper>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}
