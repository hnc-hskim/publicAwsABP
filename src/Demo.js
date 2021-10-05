import styles from './App.css';
import axios from 'axios';
import React from "react"; 
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Myprogress from './progress'
import ImageGallery from 'react-image-gallery'; 
import {UserContext, servers} from './UserContext'; 

export default class demo extends React.Component { 

    constructor(props) {
        super(props);
    
        this.state = {
           thumbnailImages: [ 
            {
                original: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/demo/slide1.JPG',
                thumbnail: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/demo/slide1.JPG',
            }, 
            {
                original: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/demo/slide2.JPG',
                thumbnail: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/demo/slide2.JPG',
            },
            {
                original: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/demo/slide3.JPG',
                thumbnail: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/demo/slide3.JPG',
            },
            {
                original: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/demo/slide4.JPG',
                thumbnail: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/demo/slide4.JPG',
            },
            {
                original: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/demo/slide5.JPG',
                thumbnail: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/demo/slide5.JPG',
            },
            {
                original: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/demo/slide6.JPG',
                thumbnail: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/demo/slide6.JPG',
            },
            {
                original: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/demo/slide7.JPG',
                thumbnail: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/demo/slide7.JPG',
            },
            {
                original: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/demo/slide8.JPG',
                thumbnail: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/demo/slide8.JPG',
            },
            {
                original: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/demo/slide9.JPG',
                thumbnail: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/demo/slide9.JPG',
            },
            {
                original: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/demo/slide10.JPG',
                thumbnail: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/demo/slide10.JPG',
            },
            {
                original: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/demo/slide11.JPG',
                thumbnail: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/demo/slide11.JPG',
            },
            {
                original: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/demo/slide12.JPG',
                thumbnail: 'https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/demo/slide12.JPG',
            },        
          ]
        };
    }

    render() {
    const { thumbnailImages } = this.state;

    return (
        <div> 
            <ImageGallery items={thumbnailImages} additionalClass={styles.img} />      
        </div> 
      );
    }
  }
  