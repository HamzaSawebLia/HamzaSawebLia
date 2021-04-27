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
import {Map , Home , Save} from  "react-feather";
import { Alert as MuiAlert, AlertTitle } from "@material-ui/lab";

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

const BigAvatar = styled(Avatar)`
  width: 300px;
  height: 200px;
  border-radius: 8px;
  margin-top : 20px;

`;
export default class CoordinateurEdit extends Component {
     constructor(props){
        super(props);
          this.state = {
            error : 0 ,
            pass : 0 ,
            loading : 0 ,   
            type: 2,
            cin_img_artisan: "/static/img/avatars/avatar-1.jpg",
            cin_artisan: null,
            cin_coordinateur:null,


            coordinateur_name : "",
            coordinateur_email: "",
            coordinateur_telephone: "",
            coordinateur_password: "",
            coordinateur_cin: "",
            coordinateur_ville: "",
            coordinateur_disponible : "",
           
            }
  
        }
    onchange_coordinateur_name = (e) => { this.setState({ coordinateur_name: e.target.value, })}
    onchange_coordinateur_email = (e) => { this.setState({ coordinateur_email: e.target.value, }) }
    onchange_coordinateur_telephone = (e) => { this.setState({ coordinateur_telephone: e.target.value, })}
    onchange_coordinateur_cin = (e) => { this.setState({  coordinateur_cin: e.target.value, })}
    onchange_coordinateur_ville= (e) => { this.setState({ coordinateur_ville: e.target.value, })}
    onchange_cin_coordinateur_image = (e) => { this.setState({cin_img_artisan : URL.createObjectURL(e.target.files[0]) , cin_coordinateur : e.target.files[0]})}
    onchange_coordinateur_disponible = (e)=> { this.setState({coordinateur_disponible : e.target.value})}

    componentDidMount = () => {
        axios.get(`http://127.0.0.1:8000/api/coordinateur/coordinateur/${this.props.history.location.state.IdCoordinateur}`)
        .then((ResData)=>{
            this.setState({  
            coordinateur_name : ResData.data.nom,
            coordinateur_email: ResData.data.email,
            coordinateur_telephone: ResData.data.telephone,
            coordinateur_cin: ResData.data.cin,
            coordinateur_ville: ResData.data.ville,
            coordinateur_disponible : ResData.data.disponible
            })
        })
        .catch((error) => {

        this.setState({ error: 1 });
        console.log(error);
                    
                });
        
    }

    onclick_updateCoordi = () => {
         this.setState({loading : 1})
         let fd = new FormData
         fd.append('nom',this.state.coordinateur_name);
         fd.append('email',this.state.coordinateur_email);
         fd.append('password',this.state.coordinateur_password);
         fd.append('telephone',this.state.coordinateur_telephone); 
         fd.append('cin',this.state.coordinateur_cin);
         fd.append('ville',this.state.coordinateur_ville); 
         fd.append('disponible',this.state.coordinateur_disponible);
         axios.post(`http://127.0.0.1:8000/api/coordinateur/editer_coordinateur/${this.props.history.location.state.IdCoordinateur}`,fd)
         .then((Resdata) => {
          if(Resdata.data == "success"){
          this.setState({pass:1 , loading:0})
          }
        }) .catch((error) => {

        this.setState({ error: 1 ,loading: 0 });
        console.log(error);
                    
                });
    }
    render() {
        return (
            <div>
             {this.state.error == 1 ? ( <Alert mb={4} severity="error">
          Something went wrong contact the support
        </Alert>):null}  
        {this.state.pass == 1 ? ( <Alert mb={4} severity="success">
          votre Modification est passé avec succée
        </Alert>):null}    
                <Card >
         <CardContent>
             <div className="row">
                            <div className="column">
                                <Link component={NavLink} exact to="/"><Home style={{marginTop:"10px"}} mt={2}/> Home </Link>
                                <Link component={NavLink} exact to="/Comptes/comptes">/Comptes </Link>
                                 <Link component={NavLink} exact to="/Comptes/Edit_artisan">/Editer Coordinateur </Link>
                 
                          
                              {this.state.loading == 1 ? ( <div style={{float:"right" , marginBottom : "10px"}}> <CircularProgress m={2} color="secondary"  /></div>) : (
                                <Button variant="contained" color="primary" style={{float : "right" , marginTop:"5px"}} onClick={()=>{this.onclick_updateCoordi()}}>
                                  <Save style={{marginRight:"10px"}} /> Enregistrer 
                                </Button>)}
                             
                            </div>
                        </div>
                        
                </CardContent>
            </Card>
                      <Card mb={6} style={{marginTop:"40px"}}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                        Editer un compte
                        </Typography>
                 <Grid container spacing={6}>
          <Grid item md={12}>
           <form noValidate autoComplete="off">
            <TextField
              onChange={this.onchange_coordinateur_name}
              value={this.state.coordinateur_name}
              required
              style={{width:"40%"}}
              id="standard-required"
              label="Nom"
              variant="outlined"
              m={4}
            />
            
            <TextField
              value={this.state.coordinateur_email}
              onChange={this.onchange_coordinateur_email}
              style={{width:"40%"}}
              id="standard-required"
              label="Email"
              variant="outlined"
              m={4}
            />
            
            <TextField
              value={this.state.coordinateur_telephone}
              onChange={this.onchange_coordinateur_telephone}
              required
              style={{width:"40%"}}
              id="standard-required"
              label="Téléphone"
              variant="outlined"
              m={4}
            />
            
                                 <Paper mt={3} style={{float:"right" , marginBottom : "55px" , marginRight : "250px"}}>
                                      <FormControl component="fieldset">
                                        <FormLabel component="legend">Disponibilité de coordinateur</FormLabel>
                                        <RadioGroup
                                          aria-label="Activation du compte"
                                          name="gender1"
                                          value={this.state.coordinateur_disponible}
                                          onChange={this.onchange_coordinateur_disponible}
                                        >
                                            <Paper mt={3}>
                                          <FormControlLabel
                                            value="1"
                                            control={<Radio />}
                                            label="Disponible"
                                          />
                                          <FormControlLabel
                                            value="0"
                                            control={<Radio />}
                                            label="No Disponible"
                                          />
                                            </Paper>
                                        </RadioGroup>
                                      </FormControl>
                                    </Paper>
           
           </form>
          </Grid>
          
        </Grid>
        </CardContent>
                </Card>
                  <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Coordinateur info
        </Typography>


        <Grid container spacing={6}>
          <Grid item md={12}>
           <form noValidate autoComplete="off">
            <TextField
              value={this.state.coordinateur_cin}
              onChange={this.onchange_coordinateur_cin}
              required
              style={{width:"40%"}}
              id="standard-required"
              label="N° CIN"
              variant="outlined"
              m={4}
            />
            
            <TextField
              value={this.state.coordinateur_ville}
              onChange={this.onchange_coordinateur_ville}
              style={{width:"40%"}}
              id="standard-required"
              label="Ville"
              variant="outlined"
              m={4}
            />
            
    
           </form>
          </Grid>
          
        </Grid>
        
      </CardContent>
    </Card> 
    <Card mb={6} style={{ width : "50%"}}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Carte identité national
        </Typography>

        <Grid container spacing={6}>
          <Grid item md={8} style={{float:"left"}}> 
            <CenteredContent>
              <BigAvatar
                alt="Remy Sharp"
                src= {this.state.cin_img_artisan}
              />
              <input
                accept="image/*"
                style={{ display: "none" }}
                onChange={this.onchange_cin_atisan_image}
                id="raised-button-file"
                multiple
                type="file"
              />
              <label htmlFor="raised-button-file" style={{float:"left"}}>
                <Button variant="contained" color="primary" style={{marginTop :"20px"}} component="span">
                  <CloudUpload mr={2} /> Upload
                </Button>
              </label>
            </CenteredContent>
          </Grid>
        </Grid>

       
      </CardContent>
    </Card>  
            </div>
        )
    }
}
