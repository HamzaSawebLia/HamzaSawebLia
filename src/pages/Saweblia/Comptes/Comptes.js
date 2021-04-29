import React, { Component } from 'react'
import AdvancedTable from "../../tables/AdvancedTable";
import axios from "axios";
import {
  CardContent,
  Grid,
  Link,
  Paper,
  Breadcrumbs as MuiBreadcrumbs,
  Button as Button,
  Card as Card,
  Divider as MuiDivider,
  Fab as Fab,
  IconButton as MuiIconButton,
  Typography,
  Tooltip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  FormControlLabel,
  Switch,
  Breadcrumbs,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import CreerCompte from "../Comptes/CreerCompte";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Home,
  Delete as DeleteIcon,
  CloudUpload as CloudUploadIcon,
  KeyboardVoice as KeyboardVoiceIcon,
  Navigation as NavigationIcon,
  Save as SaveIcon,
} from "@material-ui/icons";
import { UserPlus, User, Edit } from "react-feather";
import { spacing } from "@material-ui/system";
import { FiHome, FiUserPlus, FiUser, FiEdit, FiEye } from 'react-icons/fi';

export default class Comptes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [],
      rowsdata: [],
      type: 1,
      clickedType: 1,
    }

  }

  componentDidMount() {

    this.setState({
      tableHead: ["Nom", "Tél", "Email", "Type", "Statut", ""],
    });
  }

  getClientAcount() {
    this.setState({
      type: 1,
      clickedType: 1,
      tableHead: ["Nom", "Tél", "Email", "Statut", "Type", ""],
    });

  }

  getArtisanAcount() {
    this.setState({
      type: 2,
      clickedType: 2,
      tableHead: ["Nom", "Tél", "CIN", "Ville", "Solde d'Artisan", " "]
    });
  }

  getCoordinateurAcount() {

    this.setState({
      type: 3,
      clickedType: 3,
      tableHead: ["Nom", "Tél", "CIN", "Ville", ""]
    });

  }

  getFournisseurAcount() {
    this.setState({
      type: 4,
      clickedType: 4,
      tableHead: ["Nom ", " Contact", "Tél", "Ville", "Adresse", " "]
    });

  }

  render() {

    return (
      <div>
        <Card >
          <CardContent>

            <Breadcrumbs style={{ marginTop: "10px" }} aria-label="Breadcrumb" mt={2}>
              <Link component={NavLink} exact to="/">
                <FiHome size={15} /> Dashboard
                     </Link>
              <Typography>Comptes</Typography>
            </Breadcrumbs>



            <Link component={NavLink} exact to="/Comptes/creer_compte"><Button style={{ float: "right", marginTop: "-30px" }} variant="contained" color="secondary" m={1}> <FiUserPlus style={{ marginRight: "10px" }} /> <span> </span>Ajouter  </Button> </Link>

          </CardContent>
        </Card>

        <br />


        <Card mb={6}>

          <CardContent pb={1}>
            <Typography variant="h6" gutterBottom>
              Comptes
        </Typography>
            <Typography variant="body2" gutterBottom>
              <div className="row" style={{ marginTop: "20px" }}>
                <div className="column">
                  {this.state.clickedType == 1 ? (<Button variant="contained" color="primary" style={{ marginLeft: "8px" }} m={1} >
                    <FiUser style={{ marginRight: "10px" }} /> Clients
                  </Button>) : (<Button variant="outlined" color="primary" style={{ marginLeft: "8px" }} m={1} onClick={() => { this.getClientAcount() }}>
                    <FiUser style={{ marginRight: "10px" }} />  Clients
                  </Button>)}
                  {this.state.clickedType == 2 ? (<Button variant="contained" color="primary" style={{ marginLeft: "8px" }} m={1} >
                    <FiUser style={{ marginRight: "10px" }} />   Artisans
                  </Button>) : (<Button variant="outlined" color="primary" style={{ marginLeft: "8px" }} m={1} onClick={() => { this.getArtisanAcount() }}>
                    <FiUser style={{ marginRight: "10px" }} />   Artisans
                  </Button>)}
                  {this.state.clickedType == 3 ? (<Button variant="contained" color="primary" style={{ marginLeft: "8px" }} m={1} >
                    <FiUser style={{ marginRight: "10px" }} />   Coordinateurs
                  </Button>) : (<Button variant="outlined" color="primary" style={{ marginLeft: "8px" }} m={1} onClick={() => { this.getCoordinateurAcount() }}>
                    <FiUser style={{ marginRight: "10px" }} />  Coordinateurs
                  </Button>)}
                  {this.state.clickedType == 4 ? (<Button variant="contained" color="primary" style={{ marginLeft: "8px" }} m={1} >
                    <FiUser style={{ marginRight: "10px" }} />  Fournisseurs
                  </Button>) : (<Button variant="outlined" color="primary" style={{ marginLeft: "8px" }} m={1} onClick={() => { this.getFournisseurAcount() }}>
                    <FiUser style={{ marginRight: "10px" }} />    Fournisseurs
                  </Button>)}

                </div>
              </div>
            </Typography>
          </CardContent>
          <Paper>
            <Table>
              <TableHead>

                <TableRow>
                  {this.state.tableHead.map((rowhead) => (
                    <TableCell align="left" key={rowhead} >{rowhead}</TableCell>
                  ))}

                </TableRow>

              </TableHead>
              <TableBody>


                {this.state.type == 1 ? (
                  <TableRow >
                    <TableCell style={{ width: "1%" }} align="left"> Client nom</TableCell>
                    <TableCell align="left">Client Tél</TableCell>
                    <TableCell align="left">Client Email</TableCell>
                    <TableCell align="left">Client type</TableCell>
                    <TableCell align="left"><FormControlLabel
                      control={
                        <Switch
                          checked={true}
                        />
                      }
                    /></TableCell>
                    <TableCell align="left"><Link component={NavLink} exact to={{ pathname: "/Comptes/Edit_client", state: { IdClient: "1" } }}> <Button><FiEdit size={20} /></Button></Link> <Link component={NavLink} exact to={{ pathname: "/Comptes/ClientDisplay", state: { IdFournisseur: "1" } }}> <Button style={{ marginLeft: "-30px" }}><FiEye size={20} /></Button></Link></TableCell>
                  </TableRow>
                ) : null
                }
                {this.state.type == 2 ? (
                  <TableRow >

                    <TableCell style={{ width: "10%" }} align="left">Artisan nom</TableCell>
                    <TableCell align="left">Artisan Tél</TableCell>
                    <TableCell align="left">Artisan CIN</TableCell>
                    <TableCell align="left">Solde vilel</TableCell>
                    <TableCell align="left">Solde artisan</TableCell>
                    <TableCell align="left"><Link component={NavLink} exact to={{ pathname: "/Comptes/Edit_artisan", state: { IdArtisan: "1" } }}> <Button><FiEdit size={20} /></Button></Link> <Link component={NavLink} exact to={{ pathname: "/Comptes/ArtisanDisplay", state: { IdFournisseur: "1" } }}> <Button style={{ marginLeft: "-30px" }}><FiEye size={20} /></Button></Link></TableCell>
                    <TableCell style={{ width: "10%" }} align="left"></TableCell>



                  </TableRow>
                ) : null
                }

                {this.state.type == 3 ? (
                  <TableRow>

                    <TableCell style={{ width: "10%" }} align="left">Coordi Nom</TableCell>
                    <TableCell align="left">Coordi Tél</TableCell>
                    <TableCell align="left">Coordi CIN</TableCell>
                    <TableCell align="left">Coordi ville</TableCell>
                    <TableCell align="left"><Link component={NavLink} exact to={{ pathname: "/Comptes/Edit_coordinateur", state: { IdClient: "1" } }}> <Button><FiEdit size={20} /></Button></Link> <Link component={NavLink} exact to={{ pathname: "/Comptes/Edit_Fournisseur", state: { IdFournisseur: "1" } }}> <Button style={{ marginLeft: "-30px" }}><FiEye size={20} /></Button></Link></TableCell>

                  </TableRow>
                ) : null
                }
                {this.state.type == 4 ? (
                  <TableRow >

                    <TableCell style={{ width: "10%" }} align="left">Nom fr</TableCell>
                    <TableCell align="left">Contact fr</TableCell>
                    <TableCell align="left">Tél fr</TableCell>
                    <TableCell align="left">Ville fr</TableCell>
                    <TableCell align="left">Adresse fr</TableCell>
                    <TableCell align="left"><Link component={NavLink} exact to={{ pathname: "/Comptes/Edit_Fournisseur", state: { IdFournisseur: "1" } }}> <Button><FiEdit size={20} /></Button></Link> <Link component={NavLink} exact to={{ pathname: "/Comptes/Edit_Fournisseur", state: { IdFournisseur: "1" } }}> <Button style={{ marginLeft: "-30px" }}><FiEye size={20} /></Button></Link></TableCell>


                  </TableRow>
                ) : null
                }




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
      </div>
    )
  }
}
