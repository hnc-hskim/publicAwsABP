import React, { Component, useRef, useState, setState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './App.css';
import axios from 'axios';
import ImageGallery from 'react-image-gallery';
import styles from "react-image-gallery/styles/css/image-gallery.css";
import Myprogress from './progress'
import {UserContext, servers} from './UserContext';

// http://ec2-3-35-207-83.ap-northeast-2.compute.amazonaws.com/
// http://localhost:62557/

export function Toast({ msg = "메세지 없음" }) {

  return (
    <>
      <div className="toast">{msg}</div>
    </>
  );
}

export default class CombinationPage extends Component 
{
  constructor(props) {
    super(props);

    this.state = {
      ServerUrl: "http://ec2-3-35-207-83.ap-northeast-2.compute.amazonaws.com/",
      RefBackgroundImg: React.createRef(),
      RefLayoutImg: React.createRef(),
      RefForegroundImg: React.createRef(),       
      curBackgroundTemplate: "",
      curLayoutTemplate: "",
      curForegroundTemplate: "",
      isOpen: false,
      isRun: false,
      enableDownload: true,
      isLayoutOpen: false,
      isForegroundOpen: false,
      isResult: false,
      savePPTX: false,
      isError: false,
      errMsg: "",
      combinationname: "",
      backgroundOptions : ['default'],
      layoutOptions: ['default'],
      foregroundOptions: ['default'],
      resultThumbnailImages : [ 
        {
            original: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/ready.jpg',
            thumbnail: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/ready.jpg',
          }           
      ],
      backgroundThumbnailImages: [ 
        {
            original: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/ready.jpg',
            thumbnail: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/ready.jpg',
          }           
      ],
      layoutThumbnailImages: [ 
        {
            original: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/ready.jpg',
            thumbnail: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/ready.jpg',
          }           
      ],
      foregroundThumbnailImages: [ 
        {
            original: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/ready.jpg',
            thumbnail: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/ready.jpg',
          }           
      ]
    };
  }  

  onChange = (event) => {
      this.setState({ isOpen: true });
  }; 

  // 템플릿 조합
  onCombination = async e => {
    const { isRun, savePPTX, RefBackgroundImg, RefLayoutImg, RefForegroundImg, curBackgroundTemplate, curLayoutTemplate, curForegroundTemplate } = this.state;
    
    this.setState({ isError: false });

    if( curBackgroundTemplate === "")
    {       
      this.setState({ isError: true });
      this.setState({ errMsg: "배경 템플릿을 선택하세요." });
      return;
    }
    
    if( curLayoutTemplate === "")
    {       
      this.setState({ isError: true });
      this.setState({ errMsg: "레이아웃 템플릿을 선택하세요." });
      return;
    }
    
    if( curForegroundTemplate === "")
    {       
      this.setState({ isError: true });
      this.setState({ errMsg: "전경 템플릿을 선택하세요." });
    }

    var backgroundIndex = RefBackgroundImg.current.getCurrentIndex();
    var layoutIndex = RefLayoutImg.current.getCurrentIndex();
    var foregroundIndex = RefForegroundImg.current.getCurrentIndex();


    // Create an object of formData
    const formData = new FormData();
  
    // Update the formData object
    formData.append("UserId", "hskim");
    formData.append("SavePPTX", savePPTX);
    formData.append("BackgroundTemplate", curBackgroundTemplate);    
    formData.append("LayoutTemplate", curLayoutTemplate);
    formData.append("ForegroundTemplate", curForegroundTemplate);

    formData.append("BackgroundTemplateIndex", backgroundIndex);
    formData.append("LayoutTemplateIndex", layoutIndex);    
    formData.append("ForegroundTemplateIndex", foregroundIndex);

    var axiosConfig = {
      headers: {
          'Content-Type': 'multipart/form-data',
          "Access-Control-Allow-Origin": "*",
          'Accept': '*',
      }
    };    

    this.setState({ isRun: true })
    this.setState({ isResult: false });

    await axios.post(this.state.ServerUrl + 'api/Combination', formData, axiosConfig)      
    .then( response => { 
      console.log('response : ', response) ;      

      const copy = [];

      var combinationfilename = response.data.Name;
      this.setState({ combinationname: response.data.Name});

      response.data.thumbnails.map((item) => {    
        copy.push({ 
            original: item.thumb, 
            thumbnail : item.thumb  })
      });

      this.setState({ resultThumbnailImages: copy }); 
      this.setState({ isResult: true })
      this.setState({ isRun: false })
      this.setState({ enableDownload: false })      
    })
    .catch( error => { 
      console.log('failed', error) 
      this.setState({ isRun: false })
    }) 
  }

  // 템플릿 다운로드
  onDownload = async e => {
    const { combinationname } = this.state;
    
    axios({
      url: this.state.ServerUrl + 'api/Combination',
      method: 'GET',
      responseType: 'blob', // important
      params: {
        filename: combinationname
      }
    }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        if(this.state.savePPTX)
          link.setAttribute('download', 'test.pptx'); //or any other extension
        else
          link.setAttribute('download', 'test.tlx'); //or any other extension
        document.body.appendChild(link);
        link.click();
    });
    
  }

  // 템플릿 목록 업데이트
  onLoadTemplateList = async e => { 

    this.setState({ isOpen: false });

    // Create an object of formData
    const formData = new FormData();
  
    // Update the formData object
    formData.append("TemplateList", "All");

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

      const newbg = [];
      const newlayout = [];
      const newforeground = [];

      response.data.templates.map((item) => {    
        if(item.type === "Background")
          newbg.push(item.template)
        else if(item.type === "Layout")
          newlayout.push(item.template)
        else if(item.type === "Foreground")
          newforeground.push(item.template)
      }); 

      this.setState({ backgroundOptions: newbg }); 
      this.setState({ layoutOptions: newlayout }); 
      this.setState({ foregroundOptions: newforeground }); 

    })
    .catch( error => { 
      console.log('failed', error) 
    })
  };    

  // onUpdateControl = async e => {    
  //     e.preventDefault();
  
  //     // Create an object of formData
  //     const formData = new FormData();
    
  //     // Update the formData object
  //     formData.append("GetBackgroundList", "1");
    
  //     // Details of the uploaded file
  //     console.log(this.state.selectedFile);
  
  //     var axiosConfig = {
  //       headers: {
  //           'Content-Type': 'multipart/form-data',
  //           "Access-Control-Allow-Origin": "*",
  //           'Accept': '*',
  //       }
  //     };
  
  //     this.setState({ isOpen: false }) 

  //     await axios.post(this.state.ServerUrl + 'api/LayoutDesigner', formData, axiosConfig)      
  //     .then( response => { 
  //       console.log('response : ', response) ;

  //       images = response.data.thumbnail;
  
  //       this.setState({ isOpen: true })
  //     })
  //     .catch( error => { 
  //       console.log('failed', error) 
  //     })
  
  //   };    


  // 배경 템플릿 선택 변경
  onBackgroundTemplateChange = (event, value) => {  
      
    // Create an object of formData
    const formData = new FormData();
  
    // Update the formData object
    formData.append("GetBackgroundThumbnailList", value);    
  
    var axiosConfig = {
      headers: {
          'Content-Type': 'multipart/form-data',
          "Access-Control-Allow-Origin": "*",
          'Accept': '*',
      }
    };

    this.setState({ curBackgroundTemplate: value});

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

      this.setState({ backgroundThumbnailImages: copy }); 
      this.setState({ isOpen: true })
    })
    .catch( error => { 
      console.log('failed', error) 
    })
    };

    // 레이아웃 템플릿 선택 변경
    onLayoutTemplateChange = (event, value) => {  
      
      // Create an object of formData
      const formData = new FormData();
    
      // Update the formData object
      formData.append("GetLayoutThumbnailList", value);    
    
      var axiosConfig = {
        headers: {
            'Content-Type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*",
            'Accept': '*',
        }
      };
  
      this.setState({ curLayoutTemplate: value}); 
  
      axios.post(this.state.ServerUrl + 'api/Information', formData, axiosConfig)      
      .then( response => { 
        console.log('response : ', response) ;
  
        this.setState({ isLayoutOpen: false });
  
        const copy = [];
  
        response.data.thumbnails.map((item) => {    
          copy.push({ 
              original: item.thumb, 
              thumbnail : item.thumb  })
        });
  
        this.setState({ layoutThumbnailImages: copy }); 
        this.setState({ isLayoutOpen: true })
      })
      .catch( error => { 
        console.log('failed', error) 
      })
      };

      // 전경 템플릿 선택 변경
      onForegroundTemplateChange = (event, value) => {  
      
        // Create an object of formData
        const formData = new FormData();
      
        // Update the formData object
        formData.append("GetForegroundThumbnailList", value);    
      
        var axiosConfig = {
          headers: {
              'Content-Type': 'multipart/form-data',
              "Access-Control-Allow-Origin": "*",
              'Accept': '*',
          }
        };
    
        this.setState({ curForegroundTemplate: value}); 
    
        axios.post(this.state.ServerUrl + 'api/Information', formData, axiosConfig)      
        .then( response => { 
          console.log('response : ', response) ;
    
          this.setState({ isForegroundOpen: false });
    
          const copy = [];
    
          response.data.thumbnails.map((item) => {    
            copy.push({ 
                original: item.thumb, 
                thumbnail : item.thumb  })
          });
    
          this.setState({ foregroundThumbnailImages: copy }); 
          this.setState({ isForegroundOpen: true })
        })
        .catch( error => { 
          console.log('failed', error) 
        })
    };

    // PPTX로 저장 체크박스 
    onsavePPTXChange = value => {
      const { savePPTX } = this.state;
      this.setState({ savePPTX: !savePPTX });
    };

    UpdateServer = (server) => {
      const {ServerUrl} = this.state;
  
      if(ServerUrl != server.url)
        this.setState({ServerUrl: server.url})
    }

    render() {
      const btnStyle = {
        color: "teal",
        background: "white",
        padding: ".775rem .75rem",
        border: "1px solid teal",
        borderRadius: ".25rem",
        fontSize: "1rem",
        lineHeight: 1.5,        
      };

      const { RefBackgroundImg, RefLayoutImg, RefForegroundImg, isOpen, isError, errMsg, enableDownload, isLayoutOpen, isRun, isForegroundOpen, isResult, savePPTX, backgroundOptions, layoutOptions, foregroundOptions, resultThumbnailImages, backgroundThumbnailImages, layoutThumbnailImages, foregroundThumbnailImages } = this.state;

      return (
        <div>
          <div className="row">
            <h3>Combination Template</h3>
            {isRun && (
                <Myprogress />
            )}
          </div>
        
        <br/> 

        { isError && (
             <Toast msg = {errMsg} />
        )}       

        { <UserContext.Consumer> 
            {({server}) => this.UpdateServer(server)}
          </UserContext.Consumer>  } 
        
        <div className="combination-block-body">        
          <button className="click" onClick={this.onLoadTemplateList}> Load </button>
          <button className="click" onClick={this.onCombination}> Combination </button>
          <button className="click" onClick={this.onDownload} disabled={enableDownload} > Download </button>
          <label class="react-select--inline">
              <input type="checkbox" 
              checked={savePPTX}
              onChange={this.onsavePPTXChange}/>
              PPTX로 변환
            </label>
        </div>

        <div class="combination-list-body">            
          <Autocomplete
              options={backgroundOptions}
              style={{ width: 300 }}
              renderInput={(params) =>
              <TextField {...params} label="Background" variant="outlined" />}
              onChange={ this.onBackgroundTemplateChange }
          />        
          <Autocomplete
          options={layoutOptions}
          style={{ width: 300 }}
          renderInput={(params) =>
          <TextField {...params} label="Layout" variant="outlined" />}
          onChange={ this.onLayoutTemplateChange }
          />       
          <Autocomplete
                options={foregroundOptions}
                style={{ width: 300 }}
                renderInput={(params) =>
                <TextField {...params} label="Foreground" variant="outlined" />}
                onChange={ this.onForegroundTemplateChange }
            />   
          </div>
          <div>           
        </div>
        <div class="searchcontainer">
          <div style={{width: 300}}>
          {isOpen && (
                    <ImageGallery items={backgroundThumbnailImages} 
                    additionalClass={styles.image} 
                    ref={RefBackgroundImg} 
                    />
                )}
          </div>
          <div style={{width: 300}}>
          {isLayoutOpen && (
              <ImageGallery items={layoutThumbnailImages} 
              additionalClass={styles.image}
              ref={RefLayoutImg} />
          )} 
          </div>
          <div style={{width: 300}}>
          {isForegroundOpen && (
                      <ImageGallery items={foregroundThumbnailImages} 
                      additionalClass={styles.image}
                      ref={RefForegroundImg} />
                  )}  
          </div>
        </div>
        <br /> 

        {isResult && (
          <div className="previewcontainer" >
            <div style={{width: 300}}>            
              <ImageGallery items={resultThumbnailImages} />            
            </div>
          </div>
        )}
        
        </div>        
      );
    }
  } 

  function Test(thumbnailImages) {
    const [inputs, setInputs] = useState({
        original: '',
        thumbnail: ''
      });

      const { original, thumbnail } = inputs;
      const onChange = e => {
        const { name, value } = e.target;
        setInputs({
          ...inputs,
          [name]: value
        });         
      };

      const [images, setImages] = useState([
        {
            id: 1,
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
          },
          {
            id: 2,
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
          },
          {
            id: 3,
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
          },
      ]);
    
      const nextId = useRef(4);
      const onCreate = () => {
        const item = { 
          original,
          thumbnail
        };
        setImages([...images, item]);
    
        setInputs({
            original: '',
            thumbnail: ''
        });
        nextId.current += 1;
        
        thumbnailImages = [...images]; 
      };
      return (
        <>
          <CreateItem
            original={original}
            thumbnail={thumbnail}
            onChange={onChange}
            onCreate={onCreate}
          />
          <ImageList images={images} />
        </>
      );
  }

  function CreateItem({ original, thumbnail, onChange, onCreate }) {
    return (
      <div>
        <input
          name="original"
          placeholder="원본이미지"
          onChange={onChange}
          value={original}
        />
        <input
          name="thumbnail"
          placeholder="썸네일이미지"
          onChange={onChange}
          value={thumbnail}
        />
        <button onClick={onCreate}>등록</button>
      </div>
    );
  }

  function Item({ item }) {
    return (
      <div>
        <b>{item.original}</b> <span>({item.thumbnail})</span>
      </div>
    );
  }
  
  function ImageList({ images }) {
    return (
      <div>
        {images.map(item => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    );
  }
  

