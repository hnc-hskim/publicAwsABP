import styles from './App.css';
import axios from 'axios';
import React from "react"; 
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Myprogress from './progress'
import ImageGallery from 'react-image-gallery'; 
import {UserContext, servers} from './UserContext'; 

import slide1 from './resources/slide1.JPG'
import slide2 from './resources/slide2.JPG'
import slide3 from './resources/slide3.JPG'
import slide4 from './resources/slide4.JPG'
import slide5 from './resources/slide5.JPG'
import slide6 from './resources/slide6.JPG'
import slide7 from './resources/slide7.JPG'
import slide8 from './resources/slide8.JPG'
import slide9 from './resources/slide9.JPG'
import slide10 from './resources/slide10.JPG'
import slide11 from './resources/slide11.JPG'
import slide12 from './resources/slide12.JPG'

export default class demo extends React.Component { 

    constructor(props) {
        super(props);
    
        this.state = {
           thumbnailImages: [ 
            {
                original: slide1,
                thumbnail: slide1
            },
            {
                original: slide2,
                thumbnail: slide2
            },
            {
                original: slide3,
                thumbnail: slide3
            },
            {
                original: slide4,
                thumbnail: slide4
            },
            {
                original: slide5,
                thumbnail: slide5
            },
            {
                original: slide6,
                thumbnail: slide6
            },
            {
                original: slide7,
                thumbnail: slide7
            },
            {
                original: slide8,
                thumbnail: slide8
            },
            {
                original: slide9,
                thumbnail: slide9
            },
            {
                original: slide10,
                thumbnail: slide10
            },
            {
                original: slide11,
                thumbnail: slide11
            },
            {
                original: slide12,
                thumbnail: slide12
            },
          ]
        };
    }

    render() {
    const { thumbnailImages } = this.state;

    return (
        <div> 
            <ImageGallery items={thumbnailImages} additionalClass={styles.img}/>      
        </div> 
      );
    }
  }
  