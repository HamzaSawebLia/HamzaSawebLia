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

import { FiEdit, FiSave, FiHome, FiPlus, FiEye, FiTrash2 } from "react-icons/fi";

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
export default class Categories extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet title="Services" />

                <Card >
                    <CardContent>
                        <Breadcrumbs aria-label="Breadcrumb" mt={2}>
                            <Link component={NavLink} exact to="/">
                                <FiHome size={15} />     Dashboard
                   </Link>
                            <Typography>Catégories</Typography>
                        </Breadcrumbs>
                        <Link component={NavLink} exact to="/Catalogues/Add_categorie"><Button style={{ float: "right", marginTop: "-28px" }} variant="contained" color="secondary" m={1}> <FiPlus style={{ marginRight: "10px" }} /> <span> </span>Ajouter  </Button> </Link>
                    </CardContent>
                </Card>

                <br />

                <Card mb={6}>
                    <CardContent pb={1}>

                    </CardContent>
                    <Paper>
                        <Table>
                            <TableHead>

                                <TableRow>
                                    <TableCell align="left"> Libelle </TableCell>
                                    <TableCell align="left"> Description </TableCell>
                                    <TableCell align="left">  </TableCell>

                                </TableRow>

                            </TableHead>
                            <TableBody>



                                <TableRow >
                                    <TableCell align="left" style={{ width: "30%" }}>Libelle Service</TableCell>
                                    <TableCell align="left">Description Service</TableCell>
                                    <TableCell align="left" ><Link component={NavLink} style={{ marginRight: "10px" }} exact to="/Catalogues/Categorie_Edit"> <FiEdit size={17} /></Link> <Link component={NavLink} exact to="/Catalogues/Display_Categorie"> <FiEye size={17} /></Link></TableCell>
                                </TableRow>



                                <TablePagination
                                    style={{ width: "200%" }}
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

            </React.Fragment>
        )
    }
}
