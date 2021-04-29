import React, { Component } from 'react';
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import axios from "axios";

import {
  Avatar,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard,
  CardContent,
  Divider as MuiDivider,
  FormControl as MuiFormControl,
  Grid,
  Link,
  Input,
  Paper as MuiPaper,
  InputLabel,
  CircularProgress as MuiCircularProgress,
  MenuItem,
  Select as MuiSelect,
  TextField as MuiTextField,
  Typography,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { Map, Home, Save } from "react-feather";
import { Alert as MuiAlert, AlertTitle } from "@material-ui/lab";

import { FiPlus, FiSave, FiHome, FiMap, FiChevronsLeft } from "react-icons/fi";

import { CloudUpload as MuiCloudUpload } from "@material-ui/icons";

import { spacing } from "@material-ui/system";

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const FormControl = styled(MuiFormControl)(spacing);

const TextField = styled(MuiTextField)(spacing);

const Select = styled(MuiSelect)(spacing);

const CircularProgress = styled(MuiCircularProgress)(spacing);

const Button = styled(MuiButton)(spacing);

const CloudUpload = styled(MuiCloudUpload)(spacing);

const Paper = styled(MuiPaper)(spacing);

const CenteredContent = styled.div`
  text-align: center;
`;

const Alert = styled(MuiAlert)(spacing);


export default class EditClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table_adresse: 0,
      Card_adresse: 0,
      loading: 0,
      adresse_pass: 0,
      pass: 0,
      error: 0,
      test_props: "",
      client_id: "",
      client_name: "",
      client_email: "",
      client_telephone: "",
      client_access_channel: "",
      client_type: "",
      client_commantaire: "",
      client_activer: "",
      client_libelle: "",
      client_rue: "",
      client_ville: "",
      client_quartier: "",
      client_bureau: "",
      client_surface: "",
      client_localisation: "",

      Adresse: [],
    }
  }

  onchange_client_name = (e) => { this.setState({ client_name: e.target.value, }) }
  onchange_client_activer = (e) => { this.setState({ client_activer: e.target.value, }) }
  onchange_client_email = (e) => { this.setState({ client_email: e.target.value, }) }
  onchange_client_telephone = (e) => { this.setState({ client_telephone: e.target.value, }) }
  onchange_client_access_channel = (e) => { this.setState({ client_access_channel: e.target.value, }) }
  onchange_client_commantaire = (e) => { this.setState({ client_commantaire: e.target.value, }) }
  onchange_client_libelle = (e) => { this.setState({ client_libelle: e.target.value }) }
  onchange_client_type = (e) => { this.setState({ client_type: e.target.value }) }
  onchange_client_rue = (e) => { this.setState({ client_rue: e.target.value }) }
  onchange_client_ville = (e) => { this.setState({ client_ville: e.target.value }) }
  onchange_client_quartier = (e) => { this.setState({ client_quartier: e.target.value }) }
  onchange_client_bureau = (e) => { this.setState({ client_bureau: e.target.value }) }
  onchange_client_surface = (e) => { this.setState({ client_surface: e.target.value }) }
  onchange_client_localisation = (e) => { this.setState({ client_localisation: e.target.value }) }


  componentworks = () => {

    axios.get(`http://127.0.0.1:8000/api/client/client_id/${this.props.history.location.state.IdClient}`)
      .then((ResData) => {
        console.log("ResData : ", ResData.data);
        this.setState({
          client_id: ResData.data.id,
          client_name: ResData.data.nom,
          client_email: ResData.data.email,
          client_telephone: ResData.data.telephone,
          client_access_channel: ResData.data.access_channel,
          client_type: ResData.data.type,
          client_commantaire: ResData.data.commentaire,
          client_activer: ResData.data.Activer,

        })
      })
      .then(() => {
        axios.get(`http://127.0.0.1:8000/api/adresse/adresses_idclient/${this.state.client_id}`)
          .then((ResData1) => { this.setState({ Adresse: ResData1.data }) })
      })
      .catch((error) => {

        this.setState({ error: 1, loading: 0 });
        console.log(error);

      });
  }

  onclick_updateClient = () => {
    this.setState({ loading: 1 })
    let fd = new FormData();
    fd.append('nom', this.state.client_name);
    fd.append('email', this.state.client_email);
    fd.append('telephone', this.state.client_telephone);
    fd.append('access_channel', this.state.client_access_channel);
    fd.append('commentaire', this.state.client_commantaire);
    fd.append('type', this.state.client_type);
    axios.post(`http://127.0.0.1:8000/api/client/editer_client/${this.state.client_id}`, fd)
      .then((ResData) => {
        if (ResData.data == "success") {
          this.setState({
            pass: 1,
            loading: 0,
          })
        }
      })
      .catch((error) => {

        this.setState({ error: 1, loading: 0 });
        console.log(error);

      });
  }

  onclick_adresse = () => {
    this.setState({ loading: 1 })
    let fd = new FormData();
    fd.append('libelle', this.state.client_libelle);
    fd.append('quartier', this.state.client_quartier);
    fd.append('rue', this.state.client_rue);
    fd.append('ville', this.state.client_ville);
    fd.append('numero_bureau', this.state.client_bureau);
    fd.append('surface_bureau', this.state.client_surface);
    fd.append('localisation', this.state.client_client_localisation);
    fd.append('clientId', this.props.history.location.state.IdClient);
    axios.post(`http://127.0.0.1:8000/api/adresse/creer_adresse`, fd)
      .then((ResData) => {
        if (ResData.data == "success") {
          this.setState({
            client_libelle: "",
            client_rue: "",
            client_ville: "",
            client_quartier: "",
            client_bureau: "",
            client_surface: "",
            client_localisation: "",
            loading: 0,
            adresse_pass: 1,
          })
        }
      })
      .then(() => {
        axios.get(`http://127.0.0.1:8000/api/adresse/adresses_idclient/${this.state.client_id}`)
          .then((ResData1) => { this.setState({ Adresse: ResData1.data }) })
      })
      .catch((error) => {

        this.setState({ error: 1, loading: 0 });
        console.log(error);

      });

  }
  render() {
    return (
      <div>
        {this.state.error == 1 ? (<Alert mb={4} severity="error">
          Something went wrong contact the support
        </Alert>) : null}
        {this.state.pass == 1 ? (<Alert mb={4} severity="success">
          votre Modification est passé avec succée
        </Alert>) : null}
        <Card >
          <CardContent>
            <Breadcrumbs style={{ marginTop: "10px" }} aria-label="Breadcrumb" mt={2}>
              <Link component={NavLink} exact to="/">
                <FiHome size={15} /> Dashboard
                     </Link>
              <Link component={NavLink} exact to="/Comptes/comptes">Comptes </Link>
              <Typography>Modifier client</Typography>
            </Breadcrumbs>



            {this.state.loading == 1 ? (<div style={{ float: "right", marginBottom: "10px" }}> <CircularProgress m={2} color="secondary" /></div>) : (
              <Button variant="contained" color="primary" style={{ float: "right", marginTop: "-30px" }} onClick={() => { this.onclick_updateClient() }}>
                <FiSave style={{ marginRight: "10px" }} /> Enregistrer
              </Button>
            )}
            <Link component={NavLink} exact to="/Comptes/comptes">
              <Button variant="contained" style={{ float: "right", marginRight: "10px", marginTop: "-30px" }} >
                <FiChevronsLeft size={24} style={{ marginRight: "10px" }} />
              </Button>
            </Link>

          </CardContent>
        </Card>
        <Card mb={6} style={{ marginTop: "50px" }}>
          <CardContent>

            <Grid container spacing={6}>
              <Grid item md={12}>
                <form noValidate autoComplete="off">
                  <TextField
                    onChange={this.onchange_client_name}
                    value={this.state.client_name}
                    required
                    style={{ width: "40%" }}
                    id="standard-required"
                    label="Nom"
                    variant="outlined"
                    m={4}
                  />

                  <TextField
                    onChange={this.onchange_client_email}
                    value={this.state.client_email}
                    style={{ width: "40%" }}
                    id="standard-required"
                    label="Email"
                    variant="outlined"
                    m={4}
                  />

                  <TextField
                    onChange={this.onchange_client_telephone}
                    value={this.state.client_telephone}
                    required
                    style={{ width: "40%" }}
                    id="standard-required"
                    label="Téléphone"
                    variant="outlined"
                    m={4}
                  />



                </form>
              </Grid>

            </Grid>
          </CardContent>
        </Card>


        <Card mb={6}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Informations détaillées
        </Typography>

            <Grid container spacing={6} >
              <Grid item md={8}>
                <Paper mt={3}>
                  <FormControl m={2} style={{ width: "40%" }}>
                    <InputLabel >Canal d'acquisition</InputLabel>
                    <Select
                      value={this.state.client_access_channel}
                      onChange={this.onchange_client_access_channel}

                    >
                      <MenuItem value={"facebook/instagram"}>FaceBook / Instagram</MenuItem>
                      <MenuItem value={"web"}>Web Site</MenuItem>
                      <MenuItem value={"application"}>Application mobile</MenuItem>
                      <MenuItem value={"google"}>Google</MenuItem>

                    </Select>
                  </FormControl>
                  <FormControl m={2} style={{ width: "40%", marginLeft: "20px" }}>
                    <InputLabel >Catégorie</InputLabel>
                    <Select
                      value={this.state.client_type}
                      onChange={this.onchange_client_type}

                    >
                      <MenuItem value={"1"}>Entreprise</MenuItem>
                      <MenuItem value={"2"}>Personnelle</MenuItem>
                      <MenuItem value={"3"}>3</MenuItem>
                      <MenuItem value={"4"}>4</MenuItem>

                    </Select>
                  </FormControl>
                </Paper>
                <FormControl fullWidth my={2} variant="outlined">
                  <TextField
                    style={{ marginTop: "20px" }}
                    onChange={this.onchange_client_commantaire}
                    value={this.state.client_commantaire}
                    label="Observations"
                    id="biography"
                    multiline={true}
                    rows={3}
                    rowsMax={4}
                    variant="outlined"
                    defaultValue="Lucy is a Freelance Writer and Social Media Manager who helps finance professionals and Fin-tech startups build an audience and get more paying clients online."
                  />
                </FormControl>
              </Grid>

            </Grid>



          </CardContent>
        </Card>

        {this.state.adresse_pass == 1 ? (<Alert mb={4} severity="success">
          votre Insértion d'adresse est passé avec succée
        </Alert>) : null}
        {this.state.table_adresse == 0 ? (<Card mb={6} style={{ marginTop: "40px" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Lieux d'intervention
              </Typography>
            <Button variant="contained" color="primary" style={{ float: "right", marginTop: "-26px" }} onClick={() => { this.setState({ Card_adresse: 1, table_adresse: 1 }) }}>
              <FiPlus style={{ marginRight: "10px" }} /> Ajouter
                </Button>
            <Table style={{ marginTop: "40px" }}>
              <TableHead>

                <TableRow>
                  <TableCell align="left" >Libelle</TableCell>
                  <TableCell align="left" >Ville</TableCell>
                  <TableCell align="left" >Quartier</TableCell>
                  <TableCell align="left" >Rue</TableCell>
                  <TableCell align="left" > </TableCell>


                </TableRow>

              </TableHead>
              <TableBody>



                <TableRow >
                  <TableCell style={{ width: "10%" }} align="left">libelle test</TableCell>
                  <TableCell align="left">Ville test</TableCell>
                  <TableCell align="left">Quartier test</TableCell>
                  <TableCell align="left">Rue Test</TableCell>
                  <TableCell><FiMap size={20} /></TableCell>
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
          </CardContent>
        </Card>) : null}

        {this.state.Card_adresse == 1 ? (<Card mb={6} style={{ marginTop: "40px" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Lieux d'intervention
        </Typography>

            <Button variant="contained" color="primary" style={{ float: "right", marginTop: "-26px" }} onClick={() => { this.setState({ Card_adresse: 0, table_adresse: 0 }) }}>
              <FiSave style={{ marginRight: "10px" }} /> Enregistrer
                </Button>

            <Grid container spacing={6} >
              <Grid item md={12}>
                <form noValidate autoComplete="off">
                  <TextField
                    value={this.state.client_libelle}
                    onChange={this.onchange_client_libelle}
                    required
                    style={{ width: "40%" }}
                    id="standard-required"
                    label="Libelle"
                    variant="outlined"
                    m={4}
                  />

                  <TextField
                    value={this.state.client_rue}
                    onChange={this.onchange_client_rue}
                    style={{ width: "40%" }}
                    id="standard-required"
                    label="Rue"
                    variant="outlined"
                    m={4}
                  />
                </form>
                <Paper mt={3}>
                  <FormControl m={2} style={{ width: "40%", marginLeft: "20px", marginTop: "20px" }}>
                    <InputLabel >Ville</InputLabel>
                    <Select
                      value={this.state.client_ville}
                      onChange={this.onchange_client_ville}

                    >
                      <MenuItem value={"casablnaca"}>CasaBlanca</MenuItem>
                      <MenuItem value={"rabat"}>Rabat</MenuItem>
                      <MenuItem value={"mohammedia"}>Mohemmadia</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    value={this.state.client_quartier}
                    onChange={this.onchange_client_quartier}
                    style={{ width: "40%" }}
                    id="standard-required"
                    label="Quartier"
                    variant="outlined"
                    m={4}
                  />
                </Paper>


                <TextField
                  value={this.state.client_localisation}
                  onChange={this.onchange_client_localisation}
                  style={{ width: "40%" }}
                  id="standard-required"
                  label="Localisation"
                  variant="outlined"
                  m={4}
                />
              </Grid>
            </Grid>



          </CardContent>
        </Card>) : null}

      </div>
    )
  }
}
