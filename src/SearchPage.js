import React, { Component, useRef, useState, setState, useContext } from 'react';
import styles from './App.css'; 
import axios from 'axios'; 
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Myprogress from './progress'

import ImageGallery from 'react-image-gallery';
//import styles from '@react-image-gallery/styles/css/image-gallery.css';  
import {UserContext, servers} from './UserContext';

export default class SearchPage extends React.Component 
{   
  static context = UserContext; 

  constructor(props) {
    super(props); 

    this.state = {
      ServerUrl: 'http://localhost:62557/', 
      selectedFile: null,
      oldPreview: null,
      isOpen: true,       
      isRun: false,
      selectKeywordType: '',
      thumbnailImages: [ 
        {
            original: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/ready.jpg',
            thumbnail: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/ready.jpg',
          }           
      ],
      searchthumbnailImages: [ 
        {
            original: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/ready.jpg',
            thumbnail: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/ready.jpg',
          }           
      ],
      recognitionResults: [ 
      ],
      keywordOptions: ['none', 'Combination'],
      searchOptions : [],
      curSearchTemplate: "",
    }  
  } 
  
  // On file select (from the pop up)
  onFileChange = event => {    
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });  
    
    // var fil = document.getElementById("myFile");

    // const copy = [];

    // copy.push({ 
    //     original: fil.value, 
    //     thumbnail : fil.value  });

    // this.setState({ thumbnailImages: copy }); 
    // this.setState({ isOpen: true })

    const { oldPreview } = this.state;

    var preview = document.getElementById("preview");
    if(oldPreview != null)
      preview.removeChild(oldPreview);

    for (let i = 0; i < event.target.files.length; i++) {
      const file = event.target.files[i];
  
      if (!file.type.startsWith('image/')){ continue }       
  
      // const img = document.createElement("img", {id : 'previewimg'}, this.props.paragraph);
      const img = document.createElement("img", {className: 'photo'}, 'styled');
       
      img.classList.add("photo");
      img.file = file;
      preview.appendChild(img); // "preview"가 결과를 보여줄 div 출력이라 가정.

      this.setState({ oldPreview: img });  
  
      const reader = new FileReader();
      reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
      reader.readAsDataURL(file);
    }

  };
  
  // On file upload (click the upload button)
  onFileUpload = async e => {    
    e.preventDefault();  

    // Create an object of formData
    const formData = new FormData();
  
    // Update the formData object
    formData.append(
      "recognition",
      this.state.selectedFile,
      this.state.selectedFile.name
    ); 

    formData.append("Recognition", "true");
    formData.append("userId", "hskim"); 
  
    // Details of the uploaded file
    console.log(this.state.selectedFile);

    var axiosConfig = {
      headers: {
          'Content-Type': 'multipart/form-data',
          "Access-Control-Allow-Origin": "*",
          'Accept': '*',
      }
    };

    this.setState({ isOpen: false })  
    this.setState({ isRun: true })   

    const { ServerUrl } = this.state;

    await axios.post(ServerUrl + 'api/Search', formData, axiosConfig)      
    .then( response => { 
        console.log('response : ', response) ;

        this.setState({ isOpen: false });
        
        const copy = [];
        copy.push({ 
            original: response.data.target, 
            thumbnail : response.data.target  });

        copy.push({ 
            original: response.data.targetBox, 
            thumbnail : response.data.targetBox  });

        this.setState({ thumbnailImages: copy });         

        const copyKeyword = [];
        var index = 0;
        const newlabels = [];
        response.data.labels.map((item) => {    
            newlabels.push({ 
                id: index,
                label: item.name, 
                confidence : item.confidence  }); 

            copyKeyword.push(item.name);

            index += 1;
        });  

        this.setState({ keywordOptions: copyKeyword })
        this.setState({ recognitionResults: newlabels });
        this.setState({ isOpen: true })
        this.setState({ isRun: false })
    })
    .catch( error => { 
      console.log('failed', error)
      this.setState({ isRun: false }) 
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

  UpdateServer = (server) => {
    const {ServerUrl} = this.state;

    if(ServerUrl != server.url)
      this.setState({ServerUrl: server.url})
  }
   
  // 키워드로 템플릿 조회
  onKeywordOptions = async (event, value) => {  
      
    //this.setState({ isOpen: false });

    // Create an object of formData
    const formData = new FormData();
  
    // Update the formData object
    formData.append("UserTemplateList", value);

    var axiosConfig = {
      headers: {
          'Content-Type': 'multipart/form-data',
          "Access-Control-Allow-Origin": "*",
          'Accept': '*',
      }
    };    

    await axios.post(this.state.ServerUrl + 'api/Information', formData, axiosConfig)      
    .then( response => { 
      console.log('response : ', response) ;     

      const newList = []; 

      response.data.templates.map((item) => {         
        newList.push(item.template) 
      }); 

      this.setState({ searchOptions: newList }); 

    })
    .catch( error => { 
      console.log('failed', error) 
    })
  };
 
  // 검색 템플릿 선택 변경
  onSearchTemplateChange = async (event, value) => {  
      
    // Create an object of formData
    const formData = new FormData();
  
    // Update the formData object
    formData.append("GetUserTemplate", value);    
  
    var axiosConfig = {
      headers: {
          'Content-Type': 'multipart/form-data',
          "Access-Control-Allow-Origin": "*",
          'Accept': '*',
      }
    };

    this.setState({ curSearchTemplate: value});

    axios.post(this.state.ServerUrl + 'api/Information', formData, axiosConfig)      
    .then( response => { 
      console.log('response : ', response) ;

      this.setState({ isOpen: false });

      const copy = [];

      response.data.thumbnails.map((item) => {    
        copy.push({ 
            original: item.thumb, 
            thumbnail : item.thumb  })
      });

      this.setState({ searchthumbnailImages: copy }); 
      this.setState({ isOpen: true })
    })
    .catch( error => { 
      console.log('failed', error) 
    })
    };

  render() {      
    const { isOpen, isRun, thumbnailImages, searchthumbnailImages, recognitionResults, keywordOptions, searchOptions } = this.state; 

    return (
      <div>
        <div>
          { <UserContext.Consumer> 
            {({server}) => this.UpdateServer(server)}
          </UserContext.Consumer>  }  

          <div className="combination-block-body">
              <input id="myFile" className="smallclick"  type="file" onChange={this.onFileChange} style={{background: 'gray', width: 400}} />
              <button className="smallclick"  onClick={this.onFileUpload}> Upload! </button>
              {isRun && (
                <Myprogress />
            )}             
          </div>  
          </div>       
          <div className="block-file-body">      
            <div id="preview" className="previewimg" />              
            <div className="search-fileinfo" >
              {this.fileData()} 
            </div>       
          </div>
        <div>
        <div className="searchcontainer" >           
          
                <ImageGallery items={thumbnailImages} style={styles.image} />            
          
           
          <div className="column-box">
            <Autocomplete
                options={keywordOptions}
                defaultValue={ keywordOptions[0] }
                style={{ width: 300 }}
                renderInput={(params) =>
                <TextField {...params} label="Select Keyword" variant="outlined" />}
                onChange={this.onKeywordOptions}
            />    
            <div className="recognitionResult">          
              {recognitionResults.map(item => (
                <Item item={item} key={item.id} />
              ))}        
            </div>
          </div>         
             
          <div className="column-box">
            <Autocomplete
                    options={searchOptions}
                    renderInput={(params) =>
                    <TextField {...params} label="Results" variant="outlined" />}
                    onChange={ this.onSearchTemplateChange }
            />               

            <div>
              <ImageGallery items={searchthumbnailImages} style={styles.img} showThumbnails={false} showPlayButton={false} showFullscreenButton={false}  />
            </div>
            <button className="smallclick" > Downlaod! </button>
          </div>
      </div>
      </div>
    </div>
    );
  }
} 

  function Item({ item }) {
    return (
      <div>
        <b>{item.label}</b> <span>({item.confidence})</span>
      </div>
    );
  } 