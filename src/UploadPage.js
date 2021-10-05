import styles from './App.css';
import axios from 'axios';
import React from "react"; 
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Myprogress from './progress'
import ImageGallery from 'react-image-gallery';
//import styles from '@react-image-gallery/styles/css/image-gallery.css'; 
import {UserContext, servers} from './UserContext';

const templateTypeOptions = ['Background', 'Layout', 'Foreground'];
const categoryOptions = ['Default', 'Simple', 'Human', 'Car', 'Cat'];

// http://localhost:62557/
// http://ec2-3-35-207-83.ap-northeast-2.compute.amazonaws.com/

export default class UploadPage extends React.Component 
{   
  constructor(props) {
    super(props);

    this.state = {
      ServerUrl: "http://ec2-3-35-207-83.ap-northeast-2.compute.amazonaws.com/", 
      selectedFile: null,
      photoIndex: 0,
      isOpen: true,
      isRun: false,
      defaultUpload: false,
      selectTemplateType: 'Background',
      selectCategory: 'Simple',
      thumbnailImages: [ 
        {
            original: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/ready.jpg',
            thumbnail: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/ready.jpg',
          }           
      ]
    };
  }
  
  // On file select (from the pop up)
  onFileChange = event => {    
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });    
  };
  
  // On file upload (click the upload button)
  onFileUpload = async e => {    
    e.preventDefault();

    // Create an object of formData
    const formData = new FormData();
  
    // Update the formData object
    formData.append(
      "hskim",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    var templateType = this.state.selectTemplateType;
    formData.append("selectTemplateType", templateType);
    formData.append("category", "test");

    if(this.state.defaultUpload)
    {
      formData.append("isDefaultTemplate", "true");
    }
  
    // Details of the uploaded file
    console.log(this.state.selectedFile);

    var axiosConfig = {
      headers: {
          'Content-Type': 'multipart/form-data',
          "Access-Control-Allow-Origin": "*",
          'Accept': '*',
      }
    };

    this.setState({ isOpen: false });   
    this.setState({ isRun: true });

    await axios.post(this.state.ServerUrl + 'api/LayoutDesigner', formData, axiosConfig)      
    .then( response => { 
      console.log('response : ', response) ;

      this.setState({ isOpen: false });

      const copy = [];

      response.data.thumbnails.map((item) => {    
        copy.push({ 
            original: item.thumb, 
            thumbnail : item.thumb  })
      });

      this.setState({ thumbnailImages: copy }); 
      this.setState({ isOpen: true })
      this.setState({ isRun: false });
    })
    .catch( error => { 
      console.log('failed', error) 
      this.setState({ isRun: false });
    })

  };
  
  // File content to be displayed after
  // file upload is complete
  fileData = () => {  
    if (this.state.selectedFile) {
        
      return (
        <div>
          <h2>File Details:</h2>             
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>

        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  }; 

  onTemplateTypeChange = (event, value) => {  
    // Update the state
    this.setState({ selectTemplateType: value });    

    //var templateType = this.state.selectTemplateType;
    //console.debug(templateType);
  };

  onCateforyChange = value => {    
    // Update the state
    this.setState({ selectCategory: value });    
  };

  onDefaultUploadChange = value => {
    const { defaultUpload } = this.state;

    this.setState({ defaultUpload: !defaultUpload });
  };

  UpdateServer = (server) => {
    const {ServerUrl} = this.state;

    if(ServerUrl != server.url)
      this.setState({ServerUrl: server.url})
  }

  render() {      
    const { isOpen, isRun, defaultUpload, ServerUrl, thumbnailImages } = this.state;

    return (
      <div>
        <div>
          { <UserContext.Consumer> 
            {({server}) => this.UpdateServer(server)}
          </UserContext.Consumer>  } 

          <div className="white-block-body">                    
               <Autocomplete
                          options={templateTypeOptions}
                          defaultValue={ templateTypeOptions[0] }
                          style={{ width: 300 }}
                          renderInput={(params) =>
                          <TextField {...params} label="Template Type" variant="outlined" />}
                          onChange={this.onTemplateTypeChange}
                      />     
              <Autocomplete
                          options={categoryOptions}
                          defaultValue={ categoryOptions[0] }
                          style={{ width: 200 }}
                          renderInput={(params) =>
                          <TextField {...params} label="Category" variant="outlined" />}
                          onChange={this.onCateforyChange}
                      />    

            {isRun && (
                <Myprogress />
            )}

              <input className="smallclick"  type="file" onChange={this.onFileChange} />
              <button className="smallclick"  onClick={this.onFileUpload}> Upload! </button>
              <label class="react-select--inline" style={{alignSelf: 'center'}}>
                <input type="checkbox" 
                checked={defaultUpload}
                onChange={this.onDefaultUploadChange}/>
                기본템플릿
              </label>                
          </div>  
          </div>      

          
            <div className="fileinfo" >
              {this.fileData()} 
            </div>       
          
          <div>
          <div className="previewcontainer" >
            <div style={{width: 300}}>
              {isOpen && (
                  <ImageGallery items={thumbnailImages} additionalClass={styles.img} />            
              )} 
            </div>
          </div> 
        <div>
        </div>        
      </div>
    </div>
    );
  }
}