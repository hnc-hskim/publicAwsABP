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
                original: 'https://github.com/hnc-hskim/publicAwsABP/blob/512187804aa3954c5ba5d0d2e8030987db665adf/resources/slide1.JPG',
                thumbnail: 'https://github.com/hnc-hskim/publicAwsABP/blob/512187804aa3954c5ba5d0d2e8030987db665adf/resources/slide1.JPG',
            }, 
            {
                original: 'https://github.com/hnc-hskim/publicAwsABP/blob/512187804aa3954c5ba5d0d2e8030987db665adf/resources/slide2.JPG',
                thumbnail: 'https://github.com/hnc-hskim/publicAwsABP/blob/512187804aa3954c5ba5d0d2e8030987db665adf/resources/slide2.JPG',
            },
            {
                original: 'https://github.com/hnc-hskim/publicAwsABP/blob/512187804aa3954c5ba5d0d2e8030987db665adf/resources/slide3.JPG',
                thumbnail: 'https://github.com/hnc-hskim/publicAwsABP/blob/512187804aa3954c5ba5d0d2e8030987db665adf/resources/slide3.JPG',
            },
            {
                original: 'https://github.com/hnc-hskim/publicAwsABP/blob/512187804aa3954c5ba5d0d2e8030987db665adf/resources/slide4.JPG',
                thumbnail: 'https://github.com/hnc-hskim/publicAwsABP/blob/512187804aa3954c5ba5d0d2e8030987db665adf/resources/slide4.JPG',
            },
            {
                original: 'https://github.com/hnc-hskim/publicAwsABP/blob/512187804aa3954c5ba5d0d2e8030987db665adf/resources/slide5.JPG',
                thumbnail: 'https://github.com/hnc-hskim/publicAwsABP/blob/512187804aa3954c5ba5d0d2e8030987db665adf/resources/slide5.JPG',
            },
            {
                original: 'https://github.com/hnc-hskim/publicAwsABP/blob/512187804aa3954c5ba5d0d2e8030987db665adf/resources/slide6.JPG',
                thumbnail: 'https://github.com/hnc-hskim/publicAwsABP/blob/512187804aa3954c5ba5d0d2e8030987db665adf/resources/slide6.JPG',
            },
            {
                original: 'https://github.com/hnc-hskim/publicAwsABP/blob/512187804aa3954c5ba5d0d2e8030987db665adf/resources/slide7.JPG',
                thumbnail: 'https://github.com/hnc-hskim/publicAwsABP/blob/512187804aa3954c5ba5d0d2e8030987db665adf/resources/slide7.JPG',
            },
            {
                original: 'https://github.com/hnc-hskim/publicAwsABP/blob/512187804aa3954c5ba5d0d2e8030987db665adf/resources/slide8.JPG',
                thumbnail: 'https://github.com/hnc-hskim/publicAwsABP/blob/512187804aa3954c5ba5d0d2e8030987db665adf/resources/slide8.JPG',
            },
            {
                original: 'https://github.com/hnc-hskim/publicAwsABP/blob/512187804aa3954c5ba5d0d2e8030987db665adf/resources/slide9.JPG',
                thumbnail: 'https://github.com/hnc-hskim/publicAwsABP/blob/512187804aa3954c5ba5d0d2e8030987db665adf/resources/slide9.JPG',
            },
            {
                original: 'https://github.com/hnc-hskim/publicAwsABP/blob/512187804aa3954c5ba5d0d2e8030987db665adf/resources/slide10.JPG',
                thumbnail: 'https://github.com/hnc-hskim/publicAwsABP/blob/512187804aa3954c5ba5d0d2e8030987db665adf/resources/slide10.JPG',
            },
            {
                original: 'https://github.com/hnc-hskim/publicAwsABP/blob/512187804aa3954c5ba5d0d2e8030987db665adf/resources/slide11.JPG',
                thumbnail: 'https://github.com/hnc-hskim/publicAwsABP/blob/512187804aa3954c5ba5d0d2e8030987db665adf/resources/slide11.JPG',
            },
            {
                original: 'https://github.com/hnc-hskim/publicAwsABP/blob/512187804aa3954c5ba5d0d2e8030987db665adf/resources/slide12.JPG',
                thumbnail: 'https://github.com/hnc-hskim/publicAwsABP/blob/512187804aa3954c5ba5d0d2e8030987db665adf/resources/slide12.JPG',
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
  