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
import {UserPlus , User , Edit} from  "react-feather";
import { spacing } from "@material-ui/system";

export default class Comptes extends Component {
    constructor(props){
        super(props);
        this.state = {
                tableHead : [],
                rowsdata : [],
                type: 1,
                clickedType: 1,
            }
  
        }
 
    componentDidMount() {
      axios.get("http://127.0.0.1:8000/api/client/clients")
        .then((ResData) => {
            this.setState({
                tableHead : ["Nom","Telephone","Email","Activer" ,"Actions"],
                rowsdata: ResData.data,
            });
        });
    }

    getClientAcount() {
        this.setState({
            type: 1,
            clickedType : 1,
            tableHead : ["Nom","Telephone","Email","Activer" ,"Actions"],
        });
        axios.get("http://127.0.0.1:8000/api/client/clients")
        .then((ResData) => {
            this.setState({
                rowsdata: ResData.data
            });
        });
    }

    getArtisanAcount() {
        this.setState({
          type: 2,
          clickedType : 2,
            tableHead : ["Nom", "Telephone" , "CIN"  , "Email"  , "Activer" , "Ville" , "Langue" , "Solde d'Artisan" , "Solde Saweblia" ,"Actions"]
        });
        axios.get("http://127.0.0.1:8000/api/artisan/artisans")
        .then((ResData) => {
            this.setState({
                rowsdata: ResData.data
            });
        });
    }

    getCoordinateurAcount() {
             
        this.setState({
          type: 3,
          clickedType : 3,
            tableHead : ["Nom", "Telephone" , "CIN"  , "Email"  , "Activer" , "Ville" ,"Actions"]
        });
        axios.get("http://127.0.0.1:8000/api/coordinateur/coordinateurs")
        .then((ResData) => {
            this.setState({
                rowsdata: ResData.data
            });
        });
    }

    getFournisseurAcount() {
        this.setState({
            type : 4 ,
            clickedType : 4,  
            tableHead : ["Nom fournisseur", "Nom contact"   , "Telephone" , "Email"  , "Adresse" , "Ville"  ,"Actions"]
        });
     axios.get("http://127.0.0.1:8000/api/fournisseur/fournisseurs")
        .then((ResData) => {
            this.setState({
                rowsdata : ResData.data,
             });
                 });
    }
    
    render() {
        
        return (
            <div>
            <Card >
                    <CardContent>
             <div className="row">
                            <div className="column">
                                <Link component={NavLink} exact to="/"><Home style={{marginTop:"3px"}} mt={2}/> DashBoard </Link>
 
                 
                          
                              
                              <Link component={NavLink} exact to ="/Comptes/creer_compte"><Button  style={{float : "right"}} variant="contained" color="secondary" m={1}> <UserPlus style={{marginRight:"10px"}} /> <span> </span>Ajouter  </Button> </Link>
                         
                            </div>
                        </div>
                        
                </CardContent>
            </Card>
                
                <br />
           
            
                <Card mb={6}>
                
      <CardContent pb={1}>
        <Typography variant="h6" gutterBottom>
        Comptes
        </Typography>
        <Typography variant="body2" gutterBottom>
          <div className="row" style={{marginTop : "20px"}}>
                            <div className="column">
                         {this.state.clickedType == 1 ? (<Button  variant="contained" color="primary" style={{marginLeft :"8px"}} m={1} >
                            <User style={{marginRight:"10px"}} /> Clients
                          </Button>):(<Button  variant="outlined" color="primary" style={{marginLeft :"8px"}} m={1} onClick={()=>{this.getClientAcount()}}>
                            <User style={{marginRight:"10px"}} />  Clients
                          </Button>)}
                          {this.state.clickedType == 2 ? (<Button  variant="contained" color="primary" style={{marginLeft :"8px"}} m={1} >
                            <User style={{marginRight:"10px"}} />   Artisans
                          </Button> ): (<Button  variant="outlined" color="primary" style={{marginLeft :"8px"}} m={1} onClick={()=>{this.getArtisanAcount()}}>
                            <User style={{marginRight:"10px"}} />   Artisans
                          </Button>)}
                          {this.state.clickedType == 3 ? (<Button  variant="contained" color="primary" style={{marginLeft :"8px"}} m={1} >
                           <User style={{marginRight:"10px"}} />   Coordinateurs
                          </Button>) : (<Button  variant="outlined" color="primary" style={{marginLeft :"8px"}} m={1} onClick={()=>{this.getCoordinateurAcount()}}>
                            <User style={{marginRight:"10px"}} />  Coordinateurs
                          </Button>)}
                           {this.state.clickedType == 4 ? (<Button variant="contained" color="primary" style={{ marginLeft: "8px" }} m={1} >
                             <User style={{marginRight:"10px"}} />  Fournisseurs
                          </Button> ) : ( <Button variant="outlined" color="primary" style={{ marginLeft: "8px" }} m={1} onClick={() => { this.getFournisseurAcount() }}>
                             <User style={{marginRight:"10px"}} />    Fournisseurs
                          </Button> )}
                                   
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
              
            
             {this.state.type ==  1 ? (this.state.rowsdata.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="left">
                  {row.nom}
                </TableCell>
                <TableCell align="left">{row.telephone}</TableCell>
                 {row.email == null ? (<TableCell align="left">Vide</TableCell>) : (<TableCell align="left">{row.email}</TableCell>)}
                 {row.Activer == 1 ? (<TableCell align="left">Activer</TableCell>) : (<TableCell align="left">No Activer</TableCell>)}
                 <TableCell align="left"><Link component={NavLink} exact to ={{pathname:"/Comptes/Edit_client" , state: {IdClient : row.id} }}> <Button><Edit/></Button></Link></TableCell>
              </TableRow>
            ))):null 
            }
             {this.state.type ==  2 ? (this.state.rowsdata.map((row) => (
              <TableRow key={row.id}>
         
                <TableCell align="left">{row.nom}</TableCell>
                <TableCell align="left">{row.telephone}</TableCell>
                <TableCell align="left">{row.cin}</TableCell>
                 {row.email == null ? (<TableCell align="left">Vide</TableCell>) : (<TableCell align="left">{row.email}</TableCell>)}
                {row.Activer == 1 ? (<TableCell align="left">Activer</TableCell>):(<TableCell align="left">No Activer</TableCell>)}
                <TableCell align="left">{row.ville}</TableCell>
                <TableCell align="left">{row.langue}</TableCell>
                <TableCell align="left">{row.solde_artisan}</TableCell>
                 <TableCell align="left">{row.solde_saweblia}</TableCell>
              <TableCell align="left"><Link component={NavLink} exact to ={{pathname:"/Comptes/Edit_artisan" , state: {IdArtisan : row.id} }}> <Button><Edit/></Button></Link></TableCell>



                 </TableRow>
            ))):null 
             }

             {this.state.type ==  3 ? (this.state.rowsdata.map((row) => (
              <TableRow key={row.id}>
                
                <TableCell align="left">{row.nom}</TableCell>
                <TableCell align="left">{row.telephone}</TableCell>
                <TableCell align="left">{row.cin}</TableCell>
                 {row.email == null ? (<TableCell align="left">Vide</TableCell>) : (<TableCell align="left">{row.email}</TableCell>)}
                {row.Activer == 1 ? (<TableCell align="left">Activer</TableCell>):(<TableCell align="left">No Activer</TableCell>)}
                <TableCell align="left">{row.ville}</TableCell>
                <TableCell align="left"><Link component={NavLink} exact to ={{pathname:"/Comptes/Edit_coordinateur" , state: {IdCoordinateur : row.id} }}> <Button><Edit/></Button></Link></TableCell>

               </TableRow>
            ))):null 
             }
                           {this.state.type ==  4 ? (this.state.rowsdata.map((row) => (
              <TableRow key={row.id}>
    
                <TableCell align="left">{row.nom_fournisseur}</TableCell>
                <TableCell align="left">{row.nom_contact}</TableCell>
                <TableCell align="left">{row.telephone}</TableCell>
                 {row.email == null ? (<TableCell align="left">Vide</TableCell>) : (<TableCell align="left">{row.email}</TableCell>)}
                <TableCell align="left">{row.adresse}</TableCell>
                <TableCell align="left">{row.ville}</TableCell>
                <TableCell align="left"><Link component={NavLink} exact to ={{pathname:"/Comptes/Edit_Fournisseur" , state: {IdFournisseur : row.id} }}> <Button><Edit/></Button></Link></TableCell>

                 
               </TableRow>
            ))):null 
             }
             
             
             
          
          <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={10}
          rowsPerPage={5}
          page={5}
          onChangePage={()=>{}}
          onChangeRowsPerPage={()=>{}}
        />
        </TableBody>
        </Table>
      </Paper>
    </Card>
            </div>
        )
    }
}
